export const FILTROS_ESPECIE = [
  { valor: '', rotulo: 'Todos' },
  { valor: 'Cachorro', rotulo: 'Cães' },
  { valor: 'Gato', rotulo: 'Gatos' },
  { valor: 'Outro', rotulo: 'Outros' },
];

export const FILTROS_PORTE = [
  { valor: '', rotulo: 'Qualquer porte' },
  { valor: 'Pequeno', rotulo: 'Pequeno' },
  { valor: 'Médio', rotulo: 'Médio' },
  { valor: 'Grande', rotulo: 'Grande' },
];

const EMOJIS = {
  Cachorro: '🐶',
  Gato: '🐱',
  Coelho: '🐰',
  Peixe: '🐟',
  Papagaio: '🦜',
  Hamster: '🐹',
  Calopsita: '🐦',
  Tartaruga: '🐢',
  Jabuti: '🐢',
  Cobra: '🐍',
};

export function emojiDaEspecie(especie) {
  return EMOJIS[especie] || '🐾';
}

export function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

export function filtrarPorBusca(pets, busca) {
  const termo = normalizar(busca);
  if (!termo) return pets;

  return pets.filter(
    (pet) => normalizar(pet.nome).includes(termo) || normalizar(pet.raca).includes(termo)
  );
}
