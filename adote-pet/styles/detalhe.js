import { StyleSheet } from 'react-native';
import { cores } from './tema';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 20, paddingBottom: 40 },
  foto: { width: '100%', height: 280, borderRadius: 20 },
  semFoto: {
    backgroundColor: cores.destaque,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 96 },
  nome: { fontSize: 30, fontWeight: '800', color: cores.tinta, marginTop: 16 },
  adotado: { color: cores.suave, marginTop: 4 },
  cartao: {
    backgroundColor: cores.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    gap: 10,
  },
  linha: { flexDirection: 'row', justifyContent: 'space-between' },
  rotulo: { color: cores.suave, fontSize: 15 },
  valor: { color: cores.tinta, fontSize: 15, fontWeight: '600', flexShrink: 1, textAlign: 'right' },
  secao: { fontSize: 18, fontWeight: '700', color: cores.tinta, marginTop: 20 },
  descricao: { fontSize: 15, color: cores.tinta, marginTop: 6, lineHeight: 22 },
  botaoWhats: { marginTop: 24, backgroundColor: cores.whatsapp },
});
