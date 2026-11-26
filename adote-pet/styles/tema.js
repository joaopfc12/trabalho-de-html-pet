import { StyleSheet } from 'react-native';

export const cores = {
  fundo: '#EEF4F1',
  tinta: '#14313A',
  suave: '#5E7A80',
  primaria: '#1F6F78',
  destaque: '#F2B544',
  card: '#FFFFFF',
  erro: '#B3261E',
  whatsapp: '#25D366',
};

export const chips = StyleSheet.create({
  linha: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: cores.primaria,
  },
  chipAtivo: { backgroundColor: cores.primaria },
  texto: { color: cores.primaria, fontWeight: '600' },
  textoAtivo: { color: '#fff' },
});

export const botoes = StyleSheet.create({
  primario: {
    backgroundColor: cores.primaria,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  primarioTexto: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secundario: {
    borderWidth: 1.5,
    borderColor: cores.primaria,
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },
  secundarioTexto: { color: cores.primaria, fontWeight: '700', fontSize: 15 },
  desativado: { opacity: 0.5 },
});
