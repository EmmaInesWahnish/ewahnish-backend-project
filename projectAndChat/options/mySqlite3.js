const knexSqLite = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './DB/delivery.sqlite'
    },
    useNullAsDefault: true
  })
  
  module.exports = { knexSqLite };