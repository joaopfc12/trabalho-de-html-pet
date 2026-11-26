export const SENHA_PAINEL = process.env.EXPO_PUBLIC_SENHA_PAINEL || 'abrigo123';

export function senhaCorreta(senha) {
  return senha === SENHA_PAINEL;
}

export const PET_VAZIO = {
  nome: '',
  especie: '',
  raca: '',
  porte: '',
  idade: '',
  descricao: '',
  fotoURL: '',
  abrigo: '',
  contato: '',
};

const OBRIGATORIOS = {
  nome: 'Informe o nome',
  especie: 'Escolha a espécie',
  porte: 'Escolha o porte',
  idade: 'Informe a idade',
  abrigo: 'Informe o abrigo',
  contato: 'Informe o WhatsApp',
};

export function validarPet(dados) {
  const erros = {};

  Object.entries(OBRIGATORIOS).forEach(([campo, mensagem]) => {
    if (!String(dados[campo] || '').trim()) erros[campo] = mensagem;
  });

  const digitos = String(dados.contato || '').replace(/\D/g, '');
  if (dados.contato && (digitos.length < 10 || digitos.length > 13)) {
    erros.contato = 'Use DDD + número, ex: (81) 99999-1234';
  }

  if (dados.fotoURL && !/^https?:\/\//i.test(dados.fotoURL.trim())) {
    erros.fotoURL = 'A URL da foto deve começar com http:// ou https://';
  }

  return erros;
}

export function limparDados(dados) {
  const limpo = {};
  Object.keys(PET_VAZIO).forEach((campo) => {
    limpo[campo] = String(dados[campo] || '').trim();
  });
  return limpo;
}
