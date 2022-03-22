# TODO - BACKEND

## Pré-requisitos
- Mongodb
- Docker
- Node.js
- Gerenciador de pacotes npm ou yarn

## Observações
- O Mongodb será instalado via Imagem do DockerHub
- As configurações serão feitas todas via terminal

## Configuração

### Docker 

1. Baixe o Docker em seu computador
2. Abra o terminal e digite os seguintes comandos abaixo:
```
$ docker container run --name [nome-container] -p [porta-destino]:[porta-origem] [nome-imagem]

# [nome-container] => mongodb
# [porta-destino] => 27017
# [porta-origem] => 27017
# [nome-image] => mongo
```
3. Confira se o container mongodb existe e se ele se encontra em execução com o seguinte comando: 
```
$ docker container ps -a 
```
3.  1. Caso não esteja, execute o comando:
```
$ docker container start [nome-container]
```
3.  2. Caso queira acessar o terminal (bash) do container no qual o mongo está rodando para acessar os bancos via CLI, execute o comando: 
```
$ docker exec -it [nome-container] bash
```
### Node.js

1. Baixe o Node.js em seu computador (o gerenciador de pacotes npm virá junto com a instalação)

2. Para instalar as dependências do projeto basta digitar o comando:

```
# NPM

$ cd backend
$ npm install

# ou

# YARN

$ cd backend
$ yarn install
```

## Comandos

```
# NPM

# modo devenvolvimento
$ npm run dev

# modo produção
$ npm run production

# ou 

# YARN

# modo devenvolvimento
$ yarn run dev

# modo produção
$ yarn run production
```


