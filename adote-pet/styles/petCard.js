// Estilos: cartão de cada pet na lista (PetCard)
import { StyleSheet } from 'react-native';
import { base, cores, fontes } from './tema';

export default StyleSheet.create({
  card: {
    ...base.cartao,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: cores.primariaClara,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  foto: { width: 90, height: 90 },
  emoji: { fontSize: 40 },
  info: { flex: 1, marginLeft: 12 },
  nome: { fontSize: fontes.tamanho.grande, fontWeight: fontes.peso.negrito, color: cores.tinta },
  detalhe: { fontSize: 14, color: cores.suave, marginTop: 2 },
  selo: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: cores.primariaClara,
  },
  seloAdotado: { backgroundColor: cores.fundo },
  seloTexto: { color: cores.primariaEscura, fontWeight: fontes.peso.medio, fontSize: 12 },
  seloTextoAdotado: { color: cores.suave },
});