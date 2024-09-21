// AddRun.jsx
import React, { useState } from 'react';

function AddRun() {
    const [formData, setFormData] = useState({
        num_Seance: '',
        trajet: '',
        temps: '',
        distance: '',
        date: '',
        id_Utilisateur: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClickAddRun = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        try {
            //const response = await fetch('/api/add-run', options);
            const response = await fetch('http://localhost:3000/api/add-run', options); // Utilise le port 3000 pour le backend
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'ajout de la course.');
        }
    };

    return (
        <div>
            <h2>Ajouter une Course</h2>
            <form>
                <input type="number" name="num_Seance" placeholder="Numéro de Séance" onChange={handleChange} />
                <input type="text" name="trajet" placeholder="Trajet" onChange={handleChange} />
                <input type="text" name="temps" placeholder="Temps" onChange={handleChange} />
                <input type="text" name="distance" placeholder="Distance (en km)" onChange={handleChange} />
                <input type="datetime-local" name="date" placeholder="Date" onChange={handleChange} />
                <input type="number" name="id_Utilisateur" placeholder="ID Utilisateur" onChange={handleChange} />
                <button type="button" onClick={handleClickAddRun}>Enregistrer ma course</button>
            </form>
        </div>
    );
}

export default AddRun;
