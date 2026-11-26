import { Alert, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import styles from '../styles/adocao';

const DICAS = [
  {
    titulo: '🏠 Espaço',
    texto: 'Veja se a sua casa comporta o tamanho e a energia do animal, e se o condomínio permite pets.',
  },
  {
    titulo: '⏰ Tempo',
    texto: 'Pets precisam de companhia, passeios, brincadeiras e cuidados diários. Alguns vivem mais de 15 anos.',
  },
  {
    titulo: '💰 Custos',
    texto: 'Inclua no orçamento ração, vacinas, vermífugo, castração, veterinário e imprevistos.',
  },
  {
    titulo: '👨‍👩‍👧 Família',
    texto: 'Todos em casa precisam concordar com a adoção. Verifique também se alguém tem alergia.',
  },
];


const LINKS = [];

async function abrirLink(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert('Erro', 'Não foi possível abrir o link.');
  }
}

export default function AdocaoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <Text style={styles.intro}>
        Adotar é um compromisso para a vida toda do animal. Antes de decidir, pense nestes pontos:
      </Text>

      {DICAS.map((dica) => (
        <View key={dica.titulo} style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>{dica.titulo}</Text>
          <Text style={styles.cartaoTexto}>{dica.texto}</Text>
        </View>
      ))}

      <Text style={styles.secao}>Abrigos e ONGs</Text>
      {LINKS.length === 0 && <Text style={styles.cartaoTexto}>Lista em construção.</Text>}
      {LINKS.map((link) => (
        <Pressable key={link.url} style={styles.link} onPress={() => abrirLink(link.url)}>
          <Text style={styles.linkTexto}>{link.nome} ↗</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
