// Estilos: Tela 4 — Adoção responsável (AdocaoScreen)
import { StyleSheet } from 'react-native';
import { base, cores, espacos, fontes, texto } from './tema';

export default StyleSheet.create({
  container: base.tela,
  conteudo: { ...base.conteudo, padding: espacos.g, gap: espacos.p },
  intro: {
    backgroundColor: cores.primaria,
    color: cores.branco,
    fontSize: fontes.tamanho.normal,
    fontWeight: fontes.peso.medio,
    lineHeight: 21,
    borderRadius: 20,
    padding: espacos.gg,
    marginBottom: espacos.p,
    overflow: 'hidden',
  },
  cartao: {
    ...base.cartao,
    borderRadius: 14,
    padding: 14,
    gap: espacos.xs,
    borderLeftWidth: 4,
    borderLeftColor: cores.primaria,
  },
  cartaoTitulo: { fontSize: fontes.tamanho.normal, fontWeight: fontes.peso.negrito, color: cores.tinta },
  cartaoTexto: { fontSize: 14, color: cores.suave, lineHeight: 20 },
  secao: { ...texto.secao, marginTop: 22, marginBottom: 2 },
  abrigoTipo: { fontSize: 12, fontWeight: fontes.peso.medio, color: cores.primariaEscura },
  abrigoHorario: { fontSize: 14, color: cores.tinta, marginTop: espacos.xs },
  aviso: { ...texto.legenda, fontSize: 12, textAlign: 'center', marginTop: espacos.gg },
});