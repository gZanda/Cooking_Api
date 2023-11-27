const { Client } = require('pg');

// Configuration object for the database connection
const dbConfig = {
  user: 'zanda',
  host: 'localhost',
  database: 'sd_database',
  password: '123',
  port: 5432, 
};

// Create a client instance using the configuration
const client = new Client(dbConfig);

// Connect to the database
client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(error => console.error('Error connecting to the database', error));

// Export the client so it can be used in other files
module.exports = client;
