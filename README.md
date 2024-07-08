# Documentação da API

## Visão Geral

Esta API é construída usando Node.js, Express e TypeORM. A API permite a criação, leitura e listagem de usuários. Abaixo estão os detalhes das rotas e funcionalidades disponíveis.

## Índice

- [Instalação](#instalação)
- [Inicialização do Servidor](#inicialização-do-servidor)
- [Rotas da API](#rotas-da-api)
- [Entidade User](#entidade-user)
- [Controladores](#controladores)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Inicialização do Servidor

1. Configure o data source (TypeORM) no arquivo `data-source.ts` conforme sua configuração de banco de dados.
2. Inicie o servidor:
    ```bash
    npm start
    ```

O servidor estará rodando na porta 3000.

## Rotas da API

### `GET /users`

Retorna todos os usuários.

**Resposta:**

- **Status 200:** Lista de usuários.
- **Status 500:** Erro interno do servidor.

### `GET /users/:id`

Retorna um usuário específico pelo ID.

**Parâmetros:**

- `id` (number): ID do usuário.

**Resposta:**

- **Status 200:** Usuário encontrado.
- **Status 404:** Usuário não encontrado.
- **Status 500:** Erro interno do servidor.

### `POST /users`

Cria um novo usuário.

**Corpo da Requisição:**

```json
{
  "primeironome": "Nome",
  "idade": 30
}
