// Estilos: Tela 2 — Detalhe do animal (DetalheScreen)
import { StyleSheet } from 'react-native';
import { base, cores, espacos, fontes, raios, tela, texto } from './tema';

export default StyleSheet.create({
  container: base.tela,
  conteudo: { ...base.conteudo, paddingTop: 0 },
  foto: {
    height: tela.grande ? 400 : 320,
    marginHorizontal: -espacos.gg,
    backgroundColor: cores.primariaClara,
  },
  semFoto: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 96 },
  nome: { ...texto.titulo, marginTop: espacos.gg },
  adotado: { color: cores.suave, fontSize: fontes.tamanho.medio, marginTop: 2 },
  cartao: { ...base.cartao, borderRadius: raios.pequeno, marginTop: espacos.g, gap: 10 },
  linha: { flexDirection: 'row', justifyContent: 'space-between', gap: espacos.m },
  rotulo: { color: cores.suave, fontSize: 14 },
  valor: {
    color: cores.tinta,
    fontSize: 14,
    fontWeight: fontes.peso.medio,
    flexShrink: 1,
    textAlign: 'right',
  },
  secao: { ...texto.secao, fontSize: 17, marginTop: 18 },
  descricao: { ...texto.corpo, marginTop: 6 },
  botaoWhats: { marginTop: espacos.gg, backgroundColor: cores.whatsapp },
});