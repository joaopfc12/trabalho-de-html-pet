import { StyleSheet } from 'react-native';
import { cores } from './tema';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 20, paddingBottom: 40, gap: 12 },
  intro: { fontSize: 16, color: cores.tinta, lineHeight: 23 },
  cartao: { backgroundColor: cores.card, borderRadius: 16, padding: 16, gap: 4 },
  cartaoTitulo: { fontSize: 17, fontWeight: '700', color: cores.tinta },
  cartaoTexto: { fontSize: 15, color: cores.suave, lineHeight: 21 },
  secao: { fontSize: 20, fontWeight: '800', color: cores.tinta, marginTop: 12 },
  abrigoTipo: { fontSize: 14, fontWeight: '600', color: cores.primaria },
  abrigoHorario: { fontSize: 14, color: cores.tinta, marginTop: 4 },
  aviso: { fontSize: 13, color: cores.suave, fontStyle: 'italic' },
});
