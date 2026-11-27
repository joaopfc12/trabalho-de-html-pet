import { Dimensions, Platform, StyleSheet } from 'react-native';

// Cores
export const cores = {
  fundo: '#FFF8F2',
  tinta: '#2E2A27',
  suave: '#7A706A',
  primaria: '#F57C1F',
  destaque: '#FFE8D4',
  card: '#FFFFFF',
  erro: '#D93636',
  whatsapp: '#25D366',
  primariaEscura: '#D9620A',
  primariaClara: '#FFE8D4',
  sucesso: '#2E7D32',
  borda: '#EADFD6',
  branco: '#FFFFFF',
  sombra: '#000000',
};

// Tamanho da tela (substitui as media queries)
const { width: larguraTela } = Dimensions.get('window');

export const tela = {
  largura: larguraTela,
  pequena: larguraTela < 360,
  grande: larguraTela >= 768,
};

export function ajustar(tamanho) {
  if (tela.pequena) return Math.round(tamanho * 0.9);
  if (tela.grande) return Math.round(tamanho * 1.15);
  return tamanho;
}

// Fontes
export const fontes = {
  tamanho: {
    pequeno: ajustar(13),
    normal: ajustar(15),
    medio: ajustar(16),
    grande: ajustar(18),
    titulo: ajustar(22),
    tituloGrande: ajustar(28),
  },
  peso: {
    normal: '400',
    medio: '600',
    negrito: '700',
    extra: '800',
  },
  familia: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }),
};

// Espaçamentos
export const espacos = {
  xs: 4,
  p: 8,
  m: 12,
  g: 16,
  gg: 20,
  xg: 32,
};

// Bordas arredondadas
export const raios = {
  pequeno: 12,
  medio: 14,
  grande: 16,
  foto: 20,
  pilula: 999,
};

// Sombra
export const sombra = {
  shadowColor: cores.sombra,
  shadowOpacity: 0.06,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
};

// Largura máxima em tablets
const larguraMaxima = tela.grande ? { width: '100%', maxWidth: 640, alignSelf: 'center' } : {};

// Textos (títulos, parágrafos, links)
export const texto = StyleSheet.create({
  corpo: {
    fontFamily: fontes.familia,
    fontSize: fontes.tamanho.normal,
    color: cores.tinta,
    lineHeight: Math.round(fontes.tamanho.normal * 1.45),
  },
  titulo: {
    fontFamily: fontes.familia,
    fontSize: fontes.tamanho.tituloGrande,
    fontWeight: fontes.peso.extra,
    color: cores.tinta,
  },
  subtitulo: {
    fontSize: fontes.tamanho.normal,
    color: cores.suave,
    marginTop: espacos.xs,
  },
  secao: {
    fontSize: fontes.tamanho.grande,
    fontWeight: fontes.peso.negrito,
    color: cores.tinta,
    marginTop: espacos.gg,
  },
  rotulo: {
    fontSize: fontes.tamanho.normal,
    fontWeight: fontes.peso.medio,
    color: cores.tinta,
  },
  legenda: {
    fontSize: fontes.tamanho.pequeno,
    color: cores.suave,
  },
  link: {
    color: cores.primaria,
    fontWeight: fontes.peso.medio,
    textDecorationLine: 'underline',
  },
  erro: {
    fontSize: fontes.tamanho.pequeno,
    color: cores.erro,
  },
  sucesso: {
    fontSize: fontes.tamanho.pequeno,
    color: cores.sucesso,
  },
});

// Estruturas gerais (tela, cartão, campos)
export const base = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    padding: espacos.gg,
    paddingBottom: espacos.xg + espacos.p,
    ...larguraMaxima,
  },
  cartao: {
    backgroundColor: cores.card,
    borderRadius: raios.grande,
    padding: espacos.g,
    ...sombra,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espacos.p,
  },
  divisor: {
    height: 1,
    backgroundColor: cores.borda,
    marginVertical: espacos.m,
  },
  input: {
    backgroundColor: cores.card,
    borderRadius: raios.pequeno,
    borderWidth: 1,
    borderColor: cores.borda,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: fontes.tamanho.medio,
    color: cores.tinta,
  },
  inputFocado: { borderColor: cores.primaria },
  inputErro: { borderColor: cores.erro },
});

// Filtros (chips)
export const chips = StyleSheet.create({
  linha: { flexDirection: 'row', flexWrap: 'wrap', gap: espacos.p },
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.branco,
  },
  chipAtivo: { backgroundColor: cores.primaria, borderColor: cores.primaria },
  texto: { color: cores.tinta, fontSize: 14 },
  textoAtivo: { color: cores.branco, fontWeight: fontes.peso.negrito },
});

// Botões
export const botoes = StyleSheet.create({
  primario: {
    backgroundColor: cores.primaria,
    paddingVertical: 14,
    paddingHorizontal: espacos.gg,
    borderRadius: raios.medio,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primarioTexto: {
    color: cores.branco,
    fontWeight: fontes.peso.negrito,
    fontSize: fontes.tamanho.medio,
  },
  secundario: {
    borderWidth: 1.5,
    borderColor: cores.primaria,
    paddingVertical: 12,
    paddingHorizontal: espacos.gg,
    borderRadius: raios.medio,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  secundarioTexto: {
    color: cores.primariaEscura,
    fontWeight: fontes.peso.negrito,
    fontSize: fontes.tamanho.normal,
  },
  perigo: {
    backgroundColor: cores.erro,
    paddingVertical: 14,
    borderRadius: raios.medio,
    alignItems: 'center',
    minHeight: 48,
  },
  pressionado: { opacity: 0.85 },
  desativado: { opacity: 0.5 },
});