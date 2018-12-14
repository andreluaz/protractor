# protractor
Usando o Protractor e Cucumber em sites não Angular.

## Pré-requisito

Para instalar o Node acesse o link:
https://nodejs.org/en/

Para instalar NPM acesse o link:
https://www.npmjs.com/get-npm

## Clonando o repositório

Para fazer uma cópia "clone" do repositório é necessário a instalação do git para isto basta seguir os passos deste link:
https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git

Após a instalação do git digite:
```
git clone https://github.com/andreluaz/protractor-specs.git
```
## Instalação das dependências:

Após a cópia "clonagem" do repositório digite:
```
npm install
```

Isto fará a instalação das dependências necessárias para a execução dos testes.

## Uso:

Para usar digite:

```
protractor protractor.conf.js
ou
npm test
```

## Troubleshooting:

Caso execute o comando:

```
npm test
```

E uma mensagem de erro ocorra como descrito abaixo:

```
[17:11:25] E/direct - Error code: 135
[17:11:25] E/direct - Error message: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
[17:11:25] E/direct - Error: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
```
Execute o comando abaixo:

```
webdriver-manager update
ou
node ./node_modules/protractor/bin/webdriver-manager update
```
