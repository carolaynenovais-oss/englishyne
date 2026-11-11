# Englishyne no Netlify

App para aprender inglês do A1 ao C2, com login e progresso salvo na conta.

## O que tem aqui
- `index.html`: o app inteiro.
- `netlify/functions/progress.mjs`: guarda o progresso de cada pessoa logada.
- `netlify.toml` e `package.json`: configuração para o Netlify.

## Como publicar
1. No GitHub, crie um repositório novo chamado `englishyne`.
2. Clique em **uploading an existing file** e arraste **todos os arquivos e a pasta `netlify`** desta pasta. Clique em **Commit changes**.
3. No Netlify, clique em **Add new project → Import an existing project → GitHub** e escolha `englishyne`. Deixe as configurações como vieram e clique em **Deploy**.
4. No projeto do Netlify, abra **Project configuration → Identity** e clique em **Enable Identity**.
5. Em **Identity → Registration**, escolha **Invite only** (só quem você convidar entra) e depois convide o seu e-mail em **Identity → Invite users**. Se preferir que qualquer pessoa possa criar conta, escolha **Open**.
6. Abra o site, clique em **Entrar** ou aceite o convite que chegou no seu e-mail e crie a sua senha.

## Para atualizar
Substitua o arquivo `index.html` no GitHub pelo novo. O Netlify publica sozinho.
