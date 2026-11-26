import { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Chips from '../components/Chips';
import PetCard from '../components/PetCard';
import { usePets } from '../hooks/usePets';
import { FILTROS_ESPECIE, FILTROS_PORTE } from '../utils/filtros';
import { cores } from '../styles/tema';
import styles from '../styles/lista';

export default function ListaScreen({ navigation }) {
  const [especie, setEspecie] = useState('');
  const [porte, setPorte] = useState('');
  const [busca, setBusca] = useState('');

  const { pets, isLoading, isError, error, refetch, isRefetching } = usePets({
    especie,
    porte,
    busca,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adote um pet</Text>
      <Text style={styles.subtitulo}>
        {pets ? `${pets.length} pet(s) encontrado(s)` : 'Buscando pets...'}
      </Text>

      <View style={styles.atalhos}>
        <Pressable style={styles.atalho} onPress={() => navigation.navigate('Adocao')}>
          <Text style={styles.atalhoTexto}>💡 Adoção responsável</Text>
        </Pressable>
        <Pressable style={styles.atalho} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.atalhoTexto}>➕ Cadastrar</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.busca}
        placeholder="Buscar por nome ou raça"
        placeholderTextColor={cores.suave}
        value={busca}
        onChangeText={setBusca}
        autoCorrect={false}
      />

      <View style={styles.filtros}>
        <Chips opcoes={FILTROS_ESPECIE} valor={especie} onChange={setEspecie} />
        <Chips opcoes={FILTROS_PORTE} valor={porte} onChange={setPorte} />
      </View>

      {isLoading && (
        <ActivityIndicator size="large" color={cores.primaria} style={{ marginTop: 40 }} />
      )}

      {isError && (
        <Text style={styles.erro}>
          Erro: {error.message}. Confira o arquivo .env e a internet.
        </Text>
      )}

      {pets && (
        <FlatList
          data={pets}
          keyExtractor={(pet) => pet.objectId}
          contentContainerStyle={styles.lista}
          refreshing={isRefetching}
          onRefresh={refetch}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <PetCard pet={item} onPress={() => navigation.navigate('Detalhe', { pet: item })} />
          )}
          ListEmptyComponent={<Text style={styles.vazio}>Nenhum pet encontrado.</Text>}
        />
      )}

      <StatusBar style="dark" />
    </View>
  );
}
