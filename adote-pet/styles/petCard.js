import { StyleSheet } from 'react-native';
import { cores } from './tema';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.card,
    borderRadius: 16,
    padding: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: cores.destaque,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  foto: { width: 64, height: 64 },
  emoji: { fontSize: 32 },
  info: { flex: 1, marginLeft: 14 },
  nome: { fontSize: 18, fontWeight: '700', color: cores.tinta },
  detalhe: { fontSize: 14, color: cores.suave, marginTop: 2 },
  selo: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: cores.primaria,
  },
  seloAdotado: { backgroundColor: cores.fundo },
  seloTexto: { color: '#fff', fontWeight: '700', fontSize: 13 },
  seloTextoAdotado: { color: cores.suave },
});
