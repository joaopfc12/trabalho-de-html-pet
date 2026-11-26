# 🐾 Adote um Pet — Abrigos Municipais

Aplicativo mobile em **React Native com Expo** que conecta pessoas interessadas em adotar animais com abrigos e ONGs de proteção animal. Os animais ficam cadastrados no **Back4App** e aparecem no app com espécie, raça, porte, idade e histórico.

> Projeto 06 da disciplina **Programação Web e Mobile** — UNICAP, Ciência da Computação.
> Os abrigos e animais usados no app são **fictícios**, apenas para demonstração.

## 👥 Equipe

| Integrante | Parte |
|---|---|
| Rafa | Back4App (banco de dados) |
| Barroso | Estrutura das telas (JSX) |
| Lucas | Estilos (StyleSheet) |
| João Felipe | Lógica em JavaScript (dados, filtros, navegação, validação) |

## 📱 Telas

1. **Listagem de animais** — lista com filtros por espécie (cães, gatos, outros) e porte, e busca por nome ou raça.
2. **Detalhe do animal** — foto, informações completas, abrigo responsável e botão que abre o WhatsApp com uma mensagem pronta.
3. **Cadastrar animal (painel do abrigo)** — formulário protegido por senha que salva o animal no Back4App.
4. **Adoção responsável** — dicas sobre espaço, tempo e custos, e a lista de abrigos e ONGs.

---

## ▶️ Como rodar o projeto

### 1. O que você precisa instalar

| Programa | Para quê | Onde baixar |
|---|---|---|
| **Node.js 24 LTS** | Rodar o projeto | https://nodejs.org |
| **Git** | Baixar e enviar o código | https://git-scm.com |
| **VS Code** | Editar o código | https://code.visualstudio.com |
| **Expo Go** (no celular) | Abrir o app no celular | Play Store / App Store |

Para conferir se o Node e o Git estão instalados, abra um terminal e rode:

```bash
node -v
git --version
```

> ⚠️ Use o **Node 22, 24 ou 26**. Versões ímpares (como a 25) mostram vários avisos `EBADENGINE` e podem dar erros estranhos.

### 2. Baixar o projeto

```bash
git clone https://github.com/joaopfc12/trabalho-de-html-pet.git
cd trabalho-de-html-pet/adote-pet
```

No VS Code, use **Arquivo → Abrir Pasta** e escolha a pasta `adote-pet` (é ela que tem o `package.json`).

### 3. Criar o arquivo `.env`

O app precisa das chaves do Back4App para buscar os animais. Elas **não ficam no GitHub** por segurança.

1. Peça as chaves ao **Rafa**.
2. Dentro da pasta `adote-pet`, crie um arquivo chamado exatamente **`.env`** (com o ponto na frente e sem extensão).
3. Cole o conteúdo, preenchendo com as chaves:

```env
EXPO_PUBLIC_BACK4APP_APP_ID=coloque_o_app_id_aqui
EXPO_PUBLIC_BACK4APP_API_KEY=coloque_a_rest_api_key_aqui
EXPO_PUBLIC_BACK4APP_URL=https://parseapi.back4app.com
```

> 💡 Se o navegador baixar o arquivo com outro nome (como `env.download` ou `env.txt`), renomeie para `.env` e coloque dentro da pasta `adote-pet`.

### 4. Instalar as dependências

cd trabalho-de-html-pet-main\adote-pet

No terminal do VS Code (**Ctrl + '**), dentro da pasta `adote-pet`:

```bash
npm install
```

Só precisa fazer isso na primeira vez, ou quando alguém adicionar uma biblioteca nova.

### 5. Iniciar o app

```bash
npx expo start
```

Vai aparecer um **QR code** no terminal.

- **Android:** abra o Expo Go e toque em *Scan QR code*.
- **iPhone:** aponte a câmera para o QR code.

O **celular e o computador precisam estar na mesma rede Wi-Fi**.

> ⚠️ **Deixe esse terminal aberto** enquanto usa o app. Se fechar ou apertar `Ctrl + C`, o app para de funcionar no celular. Para rodar outros comandos (como os do Git), abra um segundo terminal pelo **+**.

### Comandos úteis no terminal do Expo

| Tecla | O que faz |
|---|---|
| `r` | Recarrega o app |
| `Ctrl + C` | Para o servidor |

Ao salvar um arquivo (**Ctrl + S**), o app atualiza sozinho no celular.

### Senha do painel do abrigo

A tela de cadastro pede uma senha. A senha padrão é **`abrigo123`**. Para trocar, adicione esta linha no `.env`:

```env
EXPO_PUBLIC_SENHA_PAINEL=nova_senha
```

---

## 🛠️ Problemas comuns

| Problema | Solução |
|---|---|
| `Could not read package.json` / `ConfigError: package.json does not exist` | Você está na pasta errada. Rode `cd adote-pet` e tente de novo. |
| App mostra **"Erro: Network Error"** | O `.env` não foi encontrado. Confira se ele se chama exatamente `.env`, está dentro de `adote-pet`, e reinicie com `npx expo start -c`. |
| Mudei o `.env` e nada aconteceu | As variáveis são lidas só ao iniciar. Pare com `Ctrl + C` e rode `npx expo start -c` (o `-c` limpa o cache). |
| Celular não conecta ao QR code | Confira se estão no mesmo Wi-Fi. Se não resolver, use `npx expo start --tunnel`. |
| PowerShell: *"a execução de scripts foi desabilitada"* | Troque o terminal para **Command Prompt** (setinha ao lado do `+`) ou rode uma vez: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
| `git` não é reconhecido | Instale o Git e **feche e abra o VS Code** de novo. |
| Lista aparece com **0 pets** | Confira com o Rafa se a classe no Back4App se chama `Pet` e se tem animais cadastrados. |

---

## 📁 Estrutura do projeto

```
adote-pet/
├── App.js                 # Ponto de entrada: React Query + navegação
├── navigation/
│   └── AppNavigator.js    # Navegação Stack entre as 4 telas
├── screens/               # As telas do app
│   ├── ListaScreen.js     # Tela 1 — Listagem com filtros e busca
│   ├── DetalheScreen.js   # Tela 2 — Detalhe do animal + WhatsApp
│   ├── CadastroScreen.js  # Tela 3 — Cadastro com senha
│   └── AdocaoScreen.js    # Tela 4 — Adoção responsável
├── components/            # Peças reutilizáveis (PetCard, Chips)
├── services/
│   └── api.js             # Comunicação com o Back4App (buscar e cadastrar)
├── hooks/
│   └── usePets.js         # Liga as telas aos dados (React Query)
├── utils/
│   ├── filtros.js         # Opções de filtro, busca e emojis
│   ├── validacao.js       # Validação do formulário e senha do painel
│   └── whatsapp.js        # Abre o WhatsApp com mensagem pronta
├── styles/                # Estilos de cada tela + cores (tema.js)
└── scripts/
    └── ver-campos.mjs     # Mostra os campos cadastrados no Back4App
```

**Quem mexe onde:** telas e componentes em `screens/` e `components/` · estilos em `styles/` · lógica em `services/`, `hooks/`, `utils/` e `navigation/`.

---

## 🗄️ Banco de dados (Back4App)

Classe **`Pet`**:

| Campo | Tipo | Descrição |
|---|---|---|
| `nome` | String | Nome do animal |
| `especie` | String | `Cachorro`, `Gato` ou outra (ex: `Coelho`, `Calopsita`) |
| `raca` | String | Raça do animal |
| `porte` | String | `Pequeno`, `Médio` ou `Grande` |
| `idade` | String | Estimativa de idade (ex: `2 anos`) |
| `descricao` | String | Temperamento e histórico |
| `fotoURL` | String | URL da foto |
| `abrigo` | String | Nome do abrigo responsável |
| `contato` | String | WhatsApp com DDD |
| `adotado` | Boolean | Se o animal já foi adotado |

Para ver quais campos estão cadastrados de verdade no banco, rode dentro de `adote-pet`:

```bash
node --env-file=.env scripts/ver-campos.mjs
```

## 🧰 Tecnologias

- React Native + Expo (SDK 58)
- React Navigation (Native Stack)
- TanStack React Query
- Axios + Back4App (Parse REST API)
