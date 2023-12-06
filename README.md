## 📜 Como executar a 

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

### 📌 :pushpin: Banco de Dados no Docker:

- Build do Composer:
```bash
docker compose build --no-cache
```

- Execução:
```bash
docker compose up -d
```

### 📌 Execute a aplicação:

```bash
node server.js
```

### 📌 Se necessário, instale:

- express -> WebServer
- pg -> Postgre connection
- sequelize -> ORM

```bash
npm install express

npm install pg

npm install sequelize

npm install openai@^4.0.0

npm install axios

npm install dotenv

npm install nodemon

npm install cors
```


