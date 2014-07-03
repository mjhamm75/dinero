/* global process, module */

var pg = require('pg').native;
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dinero';
var client = new pg.Client(connectionString);
client.connect();
module.exports = client;