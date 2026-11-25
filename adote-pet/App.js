

import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { buscarPets, buscarPorEspecie } from './services/api';



const queryClient = new QueryClient();


const FILTROS = [
  { valor: '', rotulo: 'Todos' },
  { valor: 'Cão', rotulo: 'Cães' },
  { valor: 'Gato', rotulo: 'Gatos' },
];

function PetCard({ pet }) {
  const emoji = pet.especie === 'Gato' ? '🐱' : '🐶';

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        {pet.foto ? (
          <Image source={{ uri: pet.foto }} style={styles.foto} />
        ) : (
          <Text style={styles.emoji}>{emoji}</Text>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.nome}>{pet.nome}</Text>
        <Text style={styles.detalhe}>
          {[pet.raca, pet.idade].filter(Boolean).join(', ')}
        </Text>
      </View>

      <View style={[styles.selo, pet.adotado && styles.seloAdotado]}>
        <Text style={[styles.seloTexto, pet.adotado && styles.seloTextoAdotado]}>
          {pet.adotado ? 'Adotado' : 'Disponível'}
        </Text>
      </View>
    </View>
  );
}

function Home() {
  const [especie, setEspecie] = useState('');

  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({
    queryKey: ['pets', especie],
    queryFn: () => (especie ? buscarPorEspecie(especie) : buscarPets()),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adote um pet</Text>
      <Text style={styles.subtitulo}>
        {data ? `${data.length} pet(s) encontrado(s)` : 'Buscando pets...'}
      </Text>

      <View style={styles.filtros}>
        {FILTROS.map((f) => (
          <Pressable
            key={f.rotulo}
            onPress={() => setEspecie(f.valor)}
            style={[styles.chip, especie === f.valor && styles.chipAtivo]}
          >
            <Text style={[styles.chipTexto, especie === f.valor && styles.chipTextoAtivo]}>
              {f.rotulo}
            </Text>
          </Pressable>
        ))}
      </View>

      {isLoading && (
        <ActivityIndicator size="large" color={cores.primaria} style={{ marginTop: 40 }} />
      )}

      {isError && (
        <Text style={styles.erro}>
          Erro: {error.message}. Confira o arquivo .env.local e a internet.
        </Text>
      )}

      {data && (
        <FlatList
          data={data}
          keyExtractor={(pet) => pet.objectId}
          contentContainerStyle={styles.lista}
          refreshing={isRefetching}
          onRefresh={refetch}
          renderItem={({ item }) => <PetCard pet={item} />}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhum pet por aqui ainda.</Text>}
        />
      )}

      <StatusBar style="dark" />
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

const cores = {
  fundo: '#EEF4F1',
  tinta: '#14313A',
  suave: '#5E7A80',
  primaria: '#1F6F78',
  destaque: '#F2B544',
  card: '#FFFFFF',
  erro: '#B3261E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    paddingTop: 56, // espaço para a barra de status do celular
    paddingHorizontal: 20,
  },
  titulo: { fontSize: 30, fontWeight: '800', color: cores.tinta },
  subtitulo: { fontSize: 15, color: cores.suave, marginTop: 4, marginBottom: 16 },
  filtros: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: cores.primaria,
  },
  chipAtivo: { backgroundColor: cores.primaria },
  chipTexto: { color: cores.primaria, fontWeight: '600' },
  chipTextoAtivo: { color: '#fff' },
  erro: { color: cores.erro, marginBottom: 12 },
  lista: { gap: 12, paddingBottom: 32 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.card,
    borderRadius: 16,
    padding: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: cores.destaque,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  foto: { width: 64, height: 64 },
  emoji: { fontSize: 32 },
  info: { flex: 1, marginLeft: 14 },
  nome: { fontSize: 18, fontWeight: '700', color: cores.tinta },
  detalhe: { fontSize: 14, color: cores.suave, marginTop: 2 },
  selo: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: cores.primaria,
  },
  seloAdotado: { backgroundColor: cores.fundo },
  seloTexto: { color: '#fff', fontWeight: '700', fontSize: 13 },
  seloTextoAdotado: { color: cores.suave },
  vazio: { textAlign: 'center', color: cores.suave, marginTop: 40 },
});