import { StyleSheet } from 'react-native';
import { cores } from './tema';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 20, paddingBottom: 48 },
  containerSenha: { flex: 1, backgroundColor: cores.fundo, padding: 20, paddingTop: 40 },
  titulo: { fontSize: 26, fontWeight: '800', color: cores.tinta },
  subtitulo: { fontSize: 15, color: cores.suave, marginTop: 4, marginBottom: 20 },
  campo: { marginBottom: 16, gap: 6 },
  rotulo: { fontSize: 15, fontWeight: '600', color: cores.tinta },
  input: {
    backgroundColor: cores.card,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'transparent',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: cores.tinta,
  },
  inputErro: { borderColor: cores.erro },
  erro: { color: cores.erro, fontSize: 13 },
});
