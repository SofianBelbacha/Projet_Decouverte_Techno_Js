import React, { useState } from 'react';

function DelRun() {
    const [numSeance, setNumSeance] = useState('');  // On utilise seulement num_Seance pour la suppression

    const handleChange = (e) => {
        setNumSeance(e.target.value);
    };

    const handleClickDelRun = async () => {
        const options = {
            method: 'DELETE',  // Utilisation de la méthode DELETE pour la suppression
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ num_Seance: numSeance })  // Envoie uniquement le numéro de séance pour la suppression
        };

        try {
            const response = await fetch('http://localhost:3000/api/delete-run', options);  // Utilise le port 3000 pour le backend
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la suppression de la course.');
        }
    };

    return (
        <div>
            <h2>Supprimer une Course</h2>
            <form>
                <input 
                    type="number" 
                    name="num_Seance" 
                    placeholder="Numéro de Séance" 
                    value={numSeance}
                    onChange={handleChange} 
                />
                <button type="button" onClick={handleClickDelRun}>Supprimer la course</button>
            </form>
        </div>
    );
}

export default DelRun;
