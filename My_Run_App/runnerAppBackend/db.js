// BE - db.js
const mysql = require('mysql2');

const config = {
  db: {   
    host: "localhost",
    user: "root",
    password: "",
    database : "projet_bootcamp" 
  }
};

const connection = mysql.createConnection(config.db);

/*connection.connect(
    function(err) {   
        if (err) throw err;   
        console.log("Connecté à la base de données MySQL!");
        
    }
);*/

module.exports = connection
