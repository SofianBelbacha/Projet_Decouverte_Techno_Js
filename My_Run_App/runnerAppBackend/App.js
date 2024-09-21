// app.js

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:5173",
  };
  app.use(cors(corsOptions));
  

require('./db');
// Route de test pour vérifier que l'API fonctionne
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarrer le serveur

app.get('/home', (req, res) => {
    res.send("bienvenue sur l'espace courses");
});

const connection = require("./db"); // appel de la connexion à votre bdd
app.get('/api/runs', (req, res) => {
    connection.query("SELECT * from seance",
        function (err, results, fields) {
            res.json(results);
        });
});

app.get('/api/Profile', (req, res) => {
    connection.query("SELECT * from utilisateur",
        function (err, results, fields) {
            res.json(results);
        });
});

app.post('/api/add-run', (req, res) => {
    const { num_Seance, trajet, temps, distance, date, id_Utilisateur } = req.body;

    if (!num_Seance || !trajet || !temps || !distance || !date || !id_Utilisateur) {
        return res.status(400).json({ message: 'Tous les champs doivent être remplis !' });
    }

    // Log des données reçues pour vérification
    console.log('Got body:', req.body);

    let messageAjout = "Run added: ";

    // Insertion dans la base de données
    connection.execute(
        'INSERT INTO seance (num_Seance, trajet, temps, distance, date, id_Utilisateur) VALUES (?, ?, ?, ?, ?, ?)',
        [num_Seance, trajet, temps, distance, date, id_Utilisateur],
        (err, results) => {
            if (err) {
                console.error('Erreur lors de l\'insertion :', err);
                return res.status(500).json({ message: 'Erreur lors de l\'insertion dans la base de données.' });
            }
            console.log('ID inséré :', results.insertId);
            messageAjout += results.insertId;
            res.json({ message: messageAjout });
        }
    );
});

app.delete('/api/delete-run', (req, res) => {
    const { num_Seance } = req.body;

    if (!num_Seance) {
        return res.status(400).json({ message: 'Le numéro de séance est requis pour la suppression.' });
    }

    console.log('Got body:', req.body);

    let messageSuppression = `Run with session number ${num_Seance} deleted: `;

    connection.execute(
        'DELETE FROM seance WHERE num_Seance = ?',
        [num_Seance],
        (err, results) => {
            if (err) {
                console.error('Erreur lors de la suppression :', err);
                return res.status(500).json({ message: 'Erreur lors de la suppression de la course dans la base de données.' });
            }

            if (results.affectedRows > 0) {
                console.log('Deleted rows:', results.affectedRows);
                messageSuppression += `Rows affected: ${results.affectedRows}`;
                res.json({ message: messageSuppression });
            } else {
                return res.status(404).json({ message: 'Course non trouvée avec ce numéro de séance.' });
            }
        }
    );
});




app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));


