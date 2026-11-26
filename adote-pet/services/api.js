import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACK4APP_URL,
  headers: {
    'X-Parse-Application-Id': process.env.EXPO_PUBLIC_BACK4APP_APP_ID,
    'X-Parse-REST-API-Key': process.env.EXPO_PUBLIC_BACK4APP_API_KEY,
    'Content-Type': 'application/json',
  },
});

const CLASSE = '/classes/Pet';

// Espécies que têm filtro próprio. Qualquer outra conta como "Outro".
export const ESPECIES_PRINCIPAIS = ['Cachorro', 'Gato'];

// Monta o "where" do Parse a partir dos filtros escolhidos na tela.
// especie: '' (todos) | 'Cachorro' | 'Gato' | 'Outro'
// porte:   '' (todos) | 'Pequeno' | 'Médio' | 'Grande'
export function montarWhere({ especie = '', porte = '' } = {}) {
  const where = {};

  if (especie === 'Outro') {
    where.especie = { $nin: ESPECIES_PRINCIPAIS };
  } else if (especie) {
    where.especie = especie;
  }

  if (porte) {
    where.porte = porte;
  }

  return where;
}

// Lista os pets aplicando os filtros de espécie e porte no próprio Back4App.
export async function buscarPets(filtros = {}) {
  const where = montarWhere(filtros);

  const resposta = await api.get(CLASSE, {
    params: {
      where: JSON.stringify(where),
      order: 'nome',
      limit: 1000,
    },
  });
  return resposta.data.results;
}

// Busca um pet pelo id (útil para recarregar o detalhe).
export async function buscarPetPorId(objectId) {
  const resposta = await api.get(`${CLASSE}/${objectId}`);
  return resposta.data;
}

// Salva um pet novo. Retorna { objectId, createdAt }.
export async function cadastrarPet(dados) {
  const resposta = await api.post(CLASSE, { ...dados, adotado: false });
  return resposta.data;
}
