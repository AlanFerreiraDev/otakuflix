# OtakuFlix

Bem-vindo ao repositório do OtakuFlix! Aqui você encontrará um incrível catálogo de animes para os amantes da cultura otaku.

## Características

- **Catálogo de Animes:** O OtakuFlix oferece um extenso catálogo de animes com uma variedade de gêneros.

- **Assistir a Traillers:** Os usuários podem assistir aos traillers dos animes diretamente na plataforma. O OtakuFlix oferece uma experiência de streaming suave.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js
- NPM (gerenciador de pacotes do Node.js)

## Como executar o projeto

1. Faça o clone deste repositório em sua máquina local:

git clone https://github.com/AlanFerreiraDev/otakuflix.git

2. Acesse o diretório do projeto:

cd otakuflix

3. Instale as dependências do projeto:

npm install

4. Execute o projeto localmente:

npm run dev

5. Abra o seu navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.

## Tecnologias utilizadas

O OtakuFlix foi construído utilizando as seguintes tecnologias:

- Reactjs
- Nextjs
- TS
- JavaScript
- AntDesign
- TailwindCSS
- Firebase
- Axios
- Lucide-React

## Contribuição

Se você quiser contribuir para o desenvolvimento do OtakuFlix, siga as etapas abaixo:

1. Faça o fork deste repositório.

2. Crie uma nova branch com a funcionalidade ou correção que deseja implementar.

3. Faça as alterações necessárias no código.

4. Teste as alterações para garantir que tudo esteja funcionando corretamente.

5. Envie um pull request descrevendo as alterações que foram feitas.

6. Aguarde a revisão do seu pull request. Após a revisão, suas alterações poderão ser mescladas ao repositório principal.

## Autor

O OtakuFlix foi desenvolvido por Alan Ferreira. Você pode encontrar mais informações sobre o autor [aqui](https://github.com/AlanFerreiraDev)

## Considerações de uso

O projeto em sua Home, tem um sistema de criação de conta e Login.
Para logar basta ir em criar conta, colocar um nome de usuário, um email e uma senha.
Aṕos isso vc fará login na aplicação que abrirá um poster com alguns animes, e em cada um, um botão 'More Info', nesse botão vc pode clicar e abrirá em outra tela um resumo do anime, com datas, sinopse, trailer e alguns dados.
O Header possui uma navbar que está ativa somente no botão de logout, para sair da aplicação, o resto é apenas ilustrativo.

## Considerações no desenvolvimento

- Esse projeto é uma alusão ao Netflix, com as cores e visual bem parecido.
- Utilizei o Firebase para fazer o sistema de login e cadastro e um conetxt em contextAPI para autenticação.
- Existe mais um contexto para a chamada a API de animes.
- O LESS ficou de fora devido a nova documentação do Next, que prioriza ferramentas mais robustas e performárticas.
- O AntDesign foi utilizado, asim como o Next em sua versão 13.
- Para o CSS utilizei o TailwindCSS, conforme docuemntação do Next em sua nova versão é a ferramenta padrão para estilização.
- A aplicação está responsiva e com seu SEO configurado.
- Utilizei de Clean Code, evitando condicionais na renderização do app, e realizando a componentização conforme necessário.
- O projeto está funcional, e pode receber mais dados de API na tipagem desenvolvida, os próximos passos seriam, favoritos, botão de procura, navegação na navBar com categorias, e paginação.
- Seria interessante também a aplicação de ReactQuery para cachear dados de streaming caso houvesse uma API com os capítulos dos animes.
- Existe uma parte errada, pois a chave do firebase está publica, e não em arquivo .env. ( Essa foi uma falha técnica, pois a versão do firebase deu conflito com o next e só consegui enviar assim).
