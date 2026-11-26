import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { abrirWhatsApp } from '../utils/whatsapp';
import { emojiDaEspecie } from '../utils/filtros';
import { botoes } from '../styles/tema';
import styles from '../styles/detalhe';

function Linha({ rotulo, valor }) {
  return (
    <View style={styles.linha}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <Text style={styles.valor}>{valor || '—'}</Text>
    </View>
  );
}

export default function DetalheScreen({ route }) {
  const { pet } = route.params;
  const podeAdotar = !pet.adotado;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      {pet.fotoURL ? (
        <Image source={{ uri: pet.fotoURL }} style={styles.foto} />
      ) : (
        <View style={[styles.foto, styles.semFoto]}>
          <Text style={styles.emoji}>{emojiDaEspecie(pet.especie)}</Text>
        </View>
      )}

      <Text style={styles.nome}>{pet.nome}</Text>
      {pet.adotado && <Text style={styles.adotado}>Este pet já foi adotado 💚</Text>}

      <View style={styles.cartao}>
        <Linha rotulo="Espécie" valor={pet.especie} />
        <Linha rotulo="Raça" valor={pet.raca} />
        <Linha rotulo="Porte" valor={pet.porte} />
        <Linha rotulo="Idade" valor={pet.idade} />
        <Linha rotulo="Abrigo" valor={pet.abrigo} />
      </View>

      <Text style={styles.secao}>Temperamento e histórico</Text>
      <Text style={styles.descricao}>{pet.descricao || 'Sem descrição cadastrada.'}</Text>

      <Pressable
        style={[botoes.primario, styles.botaoWhats, !podeAdotar && botoes.desativado]}
        disabled={!podeAdotar}
        onPress={() => abrirWhatsApp(pet)}
      >
        <Text style={botoes.primarioTexto}>
          {podeAdotar ? 'Quero adotar (WhatsApp)' : 'Indisponível para adoção'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
