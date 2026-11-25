import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BACK4APP_URL,
  headers: {
    'X-Parse-Application-Id': process.env.EXPO_PUBLIC_BACK4APP_APP_ID,
    'X-Parse-REST-API-Key': process.env.EXPO_PUBLIC_BACK4APP_API_KEY,
  },
});

export async function buscarPets() {
  const resposta = await api.get('/classes/Pet', {
    params: { order: 'nome', limit: 1000 },
  });
  return resposta.data.results;
}

export async function buscarPorEspecie(especie) {
  const resposta = await api.get('/classes/Pet', {
    params: {
      where: JSON.stringify({ especie }),
      order: 'nome',
      limit: 1000,
    },
  });
  return resposta.data.results;
} 