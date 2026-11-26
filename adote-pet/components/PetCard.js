import { Image, Pressable, Text, View } from 'react-native';
import { emojiDaEspecie } from '../utils/filtros';
import styles from '../styles/petCard';

export default function PetCard({ pet, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.avatar}>
        {pet.fotoURL ? (
          <Image source={{ uri: pet.fotoURL }} style={styles.foto} />
        ) : (
          <Text style={styles.emoji}>{emojiDaEspecie(pet.especie)}</Text>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{pet.nome}</Text>
        <Text style={styles.detalhe}>
          {[pet.raca, pet.idade, pet.porte].filter(Boolean).join(' · ')}
        </Text>
      </View>

      <View style={[styles.selo, pet.adotado && styles.seloAdotado]}>
        <Text style={[styles.seloTexto, pet.adotado && styles.seloTextoAdotado]}>
          {pet.adotado ? 'Adotado' : 'Disponível'}
        </Text>
      </View>
    </Pressable>
  );
}
