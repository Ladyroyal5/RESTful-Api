const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgress",
    host: "localhost",
    database: "employees",
    password: "victor",
    port: 5432,
});

module.exports = pool;
