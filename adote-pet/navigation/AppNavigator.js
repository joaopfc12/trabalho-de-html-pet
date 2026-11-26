// Navegação Stack entre as 4 telas (React Navigation).
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from '../screens/ListaScreen';
import DetalheScreen from '../screens/DetalheScreen';
import CadastroScreen from '../screens/CadastroScreen';
import AdocaoScreen from '../screens/AdocaoScreen';
import { cores } from '../styles/tema';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: cores.primaria,
        headerStyle: { backgroundColor: cores.fundo },
        headerShadowVisible: false,
        headerBackTitle: 'Voltar',
      }}
    >
      <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Detalhe"
        component={DetalheScreen}
        options={({ route }) => ({ title: route.params.pet.nome })}
      />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastrar animal' }} />
      <Stack.Screen name="Adocao" component={AdocaoScreen} options={{ title: 'Adoção responsável' }} />
    </Stack.Navigator>
  );
}
