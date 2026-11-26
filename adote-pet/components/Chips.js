
import { Pressable, Text, View } from 'react-native';
import { chips } from '../styles/tema';

export default function Chips({ opcoes, valor, onChange }) {
  return (
    <View style={chips.linha}>
      {opcoes.map((opcao) => {
        const ativo = opcao.valor === valor;
        return (
          <Pressable
            key={opcao.rotulo}
            onPress={() => onChange(opcao.valor)}
            style={[chips.chip, ativo && chips.chipAtivo]}
          >
            <Text style={[chips.texto, ativo && chips.textoAtivo]}>{opcao.rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
