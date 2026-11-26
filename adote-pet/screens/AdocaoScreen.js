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


const ABRIGOS = [
  {
    nome: 'Abrigo Municipal Patas Felizes',
    tipo: 'Abrigo municipal',
    bairro: 'Centro',
    horario: 'Seg a sáb, 9h às 16h',
    descricao: 'Recebe cães e gatos resgatados das ruas. Todos saem vacinados e castrados.',
  },
  {
    nome: 'ONG Amigos de Quatro Patas',
    tipo: 'ONG',
    bairro: 'Boa Vista',
    horario: 'Feiras de adoção aos sábados, 10h às 15h',
    descricao: 'Grupo de voluntários que resgata e cuida de animais até encontrarem um lar.',
  },
  {
    nome: 'Lar Temporário Cantinho Animal',
    tipo: 'Lar temporário',
    bairro: 'Casa Amarela',
    horario: 'Visitas com agendamento',
    descricao: 'Acolhe animais menores e exóticos: coelhos, aves, hamsters e répteis.',
  },
];

async function abrirLink(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert('Erro', 'Não foi possível abrir o link.');
  }
}

function CartaoAbrigo({ abrigo }) {
  const conteudo = (
    <>
      <Text style={styles.cartaoTitulo}>
        {abrigo.nome}
        {abrigo.url ? ' ↗' : ''}
      </Text>
      <Text style={styles.abrigoTipo}>
        {abrigo.tipo} · {abrigo.bairro}
      </Text>
      <Text style={styles.cartaoTexto}>{abrigo.descricao}</Text>
      <Text style={styles.abrigoHorario}>🕒 {abrigo.horario}</Text>
    </>
  );

  if (abrigo.url) {
    return (
      <Pressable style={styles.cartao} onPress={() => abrirLink(abrigo.url)}>
        {conteudo}
      </Pressable>
    );
  }
  return <View style={styles.cartao}>{conteudo}</View>;
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
      {ABRIGOS.map((abrigo) => (
        <CartaoAbrigo key={abrigo.nome} abrigo={abrigo} />
      ))}
      <Text style={styles.aviso}>* Abrigos fictícios, usados apenas para demonstração.</Text>
    </ScrollView>
  );
}
