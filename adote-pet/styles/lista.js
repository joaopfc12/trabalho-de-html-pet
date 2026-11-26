import { StyleSheet } from 'react-native';
import { cores } from './tema';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    paddingTop: 56, 
    paddingHorizontal: 20,
  },
  titulo: { fontSize: 30, fontWeight: '800', color: cores.tinta },
  subtitulo: { fontSize: 15, color: cores.suave, marginTop: 4, marginBottom: 12 },
  atalhos: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  atalho: {
    flex: 1,
    backgroundColor: cores.card,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  atalhoTexto: { color: cores.tinta, fontWeight: '600' },
  busca: {
    backgroundColor: cores.card,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: cores.tinta,
    marginBottom: 12,
  },
  filtros: { gap: 8, marginBottom: 16 },
  erro: { color: cores.erro, marginBottom: 12 },
  lista: { gap: 12, paddingBottom: 32 },
  vazio: { textAlign: 'center', color: cores.suave, marginTop: 40 },
});
