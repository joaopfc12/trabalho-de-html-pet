// Estilos: Tela 1 — Listagem de animais (ListaScreen)
import { StyleSheet } from 'react-native';
import { base, cores, espacos, fontes, raios, texto } from './tema';

export default StyleSheet.create({
  container: {
    ...base.tela,
    paddingTop: 56,
    paddingHorizontal: espacos.g,
  },
  titulo: { ...texto.titulo, fontSize: fontes.tamanho.titulo },
  subtitulo: { ...texto.subtitulo, fontSize: 14, marginBottom: espacos.m },
  atalhos: { flexDirection: 'row', gap: espacos.p, marginBottom: espacos.m },
  atalho: {
    flex: 1,
    backgroundColor: cores.primariaClara,
    borderRadius: raios.pequeno,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  atalhoTexto: { color: cores.primariaEscura, fontWeight: fontes.peso.medio, fontSize: 13 },
  busca: { ...base.input, fontSize: fontes.tamanho.normal, marginBottom: espacos.m },
  filtros: { gap: espacos.p, marginBottom: espacos.m },
  erro: { ...texto.erro, fontSize: 14, marginBottom: espacos.m },
  lista: { gap: espacos.m, paddingBottom: espacos.xg },
  vazio: { textAlign: 'center', color: cores.suave, fontSize: fontes.tamanho.normal, marginTop: 40 },
});