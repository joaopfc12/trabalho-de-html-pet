import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Chips from '../components/Chips';
import { useCadastrarPet } from '../hooks/usePets';
import { ESPECIES_PRINCIPAIS } from '../services/api';
import { FILTROS_PORTE } from '../utils/filtros';
import { PET_VAZIO, limparDados, senhaCorreta, validarPet } from '../utils/validacao';
import { botoes, cores } from '../styles/tema';
import styles from '../styles/cadastro';

const OPCOES_ESPECIE = [
  { valor: 'Cachorro', rotulo: 'Cachorro' },
  { valor: 'Gato', rotulo: 'Gato' },
  { valor: 'Outro', rotulo: 'Outro' },
];

const OPCOES_PORTE = FILTROS_PORTE.filter((opcao) => opcao.valor);

function Campo({ rotulo, erro, ...props }) {
  return (
    <View style={styles.campo}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        style={[styles.input, erro && styles.inputErro]}
        placeholderTextColor={cores.suave}
        {...props}
      />
      {erro && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
}

function TelaSenha({ onLiberar }) {
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    if (senhaCorreta(senha)) {
      onLiberar();
    } else {
      setErro('Senha incorreta');
    }
  }

  return (
    <View style={styles.containerSenha}>
      <Text style={styles.titulo}>Painel do abrigo</Text>
      <Text style={styles.subtitulo}>Digite a senha para cadastrar animais.</Text>
      <Campo
        rotulo="Senha"
        erro={erro}
        value={senha}
        onChangeText={(texto) => {
          setSenha(texto);
          setErro('');
        }}
        secureTextEntry
        onSubmitEditing={entrar}
      />
      <Pressable style={botoes.primario} onPress={entrar}>
        <Text style={botoes.primarioTexto}>Entrar</Text>
      </Pressable>
    </View>
  );
}

function Formulario({ navigation }) {
  const [dados, setDados] = useState(PET_VAZIO);
  const [outraEspecie, setOutraEspecie] = useState(false);
  const [erros, setErros] = useState({});
  const cadastro = useCadastrarPet();

  function alterar(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => ({ ...atual, [campo]: undefined }));
  }

  function escolherEspecie(valor) {
    if (valor === 'Outro') {
      setOutraEspecie(true);
      alterar('especie', '');
    } else {
      setOutraEspecie(false);
      alterar('especie', valor);
    }
  }

  const especieSelecionada = outraEspecie
    ? 'Outro'
    : ESPECIES_PRINCIPAIS.includes(dados.especie)
      ? dados.especie
      : '';

  function salvar() {
    const encontrados = validarPet(dados);
    if (Object.keys(encontrados).length > 0) {
      setErros(encontrados);
      Alert.alert('Confira o formulário', 'Preencha os campos obrigatórios marcados em vermelho.');
      return;
    }

    cadastro.mutate(limparDados(dados), {
      onSuccess: () => {
        Alert.alert('Pronto!', `${dados.nome} foi cadastrado(a) com sucesso.`);
        navigation.goBack();
      },
      onError: (erro) => {
        Alert.alert('Erro ao salvar', erro.message);
      },
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Campo
        rotulo="Nome *"
        erro={erros.nome}
        value={dados.nome}
        onChangeText={(t) => alterar('nome', t)}
      />

      <View style={styles.campo}>
        <Text style={styles.rotulo}>Espécie *</Text>
        <Chips opcoes={OPCOES_ESPECIE} valor={especieSelecionada} onChange={escolherEspecie} />
        {!outraEspecie && erros.especie && <Text style={styles.erro}>{erros.especie}</Text>}
      </View>

      {outraEspecie && (
        <Campo
          rotulo="Qual espécie? *"
          placeholder="Ex: Coelho, Hamster, Calopsita"
          erro={erros.especie}
          value={dados.especie}
          onChangeText={(t) => alterar('especie', t)}
        />
      )}

      <Campo
        rotulo="Raça"
        placeholder="Ex: SRD"
        value={dados.raca}
        onChangeText={(t) => alterar('raca', t)}
      />

      <View style={styles.campo}>
        <Text style={styles.rotulo}>Porte *</Text>
        <Chips opcoes={OPCOES_PORTE} valor={dados.porte} onChange={(v) => alterar('porte', v)} />
        {erros.porte && <Text style={styles.erro}>{erros.porte}</Text>}
      </View>

      <Campo
        rotulo="Idade *"
        placeholder="Ex: 2 anos"
        erro={erros.idade}
        value={dados.idade}
        onChangeText={(t) => alterar('idade', t)}
      />
      <Campo
        rotulo="Temperamento e histórico"
        multiline
        numberOfLines={4}
        value={dados.descricao}
        onChangeText={(t) => alterar('descricao', t)}
      />
      <Campo
        rotulo="URL da foto"
        placeholder="https://..."
        autoCapitalize="none"
        keyboardType="url"
        erro={erros.fotoURL}
        value={dados.fotoURL}
        onChangeText={(t) => alterar('fotoURL', t)}
      />
      <Campo
        rotulo="Abrigo *"
        erro={erros.abrigo}
        value={dados.abrigo}
        onChangeText={(t) => alterar('abrigo', t)}
      />
      <Campo
        rotulo="WhatsApp para contato *"
        placeholder="(81) 99999-1234"
        keyboardType="phone-pad"
        erro={erros.contato}
        value={dados.contato}
        onChangeText={(t) => alterar('contato', t)}
      />

      <Pressable
        style={[botoes.primario, cadastro.isPending && botoes.desativado]}
        disabled={cadastro.isPending}
        onPress={salvar}
      >
        <Text style={botoes.primarioTexto}>
          {cadastro.isPending ? 'Salvando...' : 'Cadastrar animal'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

export default function CadastroScreen({ navigation }) {
  const [liberado, setLiberado] = useState(false);

  if (!liberado) return <TelaSenha onLiberar={() => setLiberado(true)} />;
  return <Formulario navigation={navigation} />;
}
