// Estilos: Tela 3 — Cadastro de animal (CadastroScreen)
import { StyleSheet } from 'react-native';
import { base, cores, espacos, fontes, texto } from './tema';

export default StyleSheet.create({
  container: base.tela,
  conteudo: { ...base.conteudo, padding: espacos.g },
  containerSenha: { ...base.tela, padding: espacos.gg, justifyContent: 'center' },
  titulo: { ...texto.titulo, fontSize: fontes.tamanho.titulo, textAlign: 'center' },
  subtitulo: { ...texto.subtitulo, fontSize: 14, textAlign: 'center', marginVertical: espacos.m },
  campo: { marginBottom: espacos.m, gap: 6 },
  rotulo: { ...texto.rotulo, fontSize: 14 },
  input: { ...base.input, fontSize: fontes.tamanho.normal },
  inputErro: { borderColor: cores.erro },
  erro: { ...texto.erro, fontSize: 12 },
});