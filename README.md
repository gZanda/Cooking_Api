## 📜 Introdução

### 📌 Descrição:
O sistema foi desenvolvido utilizando Node.js e Express para criar um servidor web eficiente.  
A persistência de dados é gerenciada pela ORM Sequelize, facilitando operações com bancos de dados relacionais.  
A aplicação incorpora uma API do chat GPT da OpenAI para respostas contextuais e inteligentes.

### 📌 Arquitetura:

- Cliente Servidor
- MVC ( Model - View - Controller )

### 📌 Tecnologias:

- **Node**  -  v20.10.0
- **Npm**  -  v10.2.3
- **Express**  -  v4.18.2
- **PostgreSQL**  -  Latest Docker Image
- **Sequelize ORM**  -  v6.35.1
- **Cors Middleware**  -  v2.8.5
- **Open AI API**  -  v4.20.1
- **Axios**  -  v1.6.2
- **Dotenv**  -  v16.3.1

## 📜 Como executar a aplicação

### 📌 Certifique-se de ter instalado:

- node.js
- npm
```bash
node -v

npm -v
```

### 📌 Instale as dependências do projeto:

```bash
npm install
```

### 📌 Configure suas várias de Ambiente ".env" segundo o modelo:

```bash
PORT=<sua_porta>

DB_DIALECT=postgres
DB_HOST=localhost
DB_DATABASE=<sua_database>
DB_USERNAME=<seu_username>
DB_PASSWORD=<sua_senha>

OPEN_AI_KEY=<sua_open_ai_key>
```

### 📌 Banco de Dados no Docker:

- Build do Composer:
```bash
docker compose build --no-cache
```

- Execução:
```bash
docker compose up -d
```

### 📌 Rode a aplicação:

```bash
node server.js
```

### ⭐ Se necessário, instale localmente:

- express -> WebServer
- pg -> PostgreSQL Connection
- sequelize -> ORM
- Open AI -> API ChatGPT
- Axios -> Fetch Library
- Dotenv -> Ambiente Variables
- Cors -> Security Middleware
- Nodemon -> WebServer Autorefresh for Development

```bash
npm install express

npm install pg

npm install sequelize

npm install openai@^4.0.0

npm install axios

npm install dotenv

npm install cors

npm install nodemon
```


