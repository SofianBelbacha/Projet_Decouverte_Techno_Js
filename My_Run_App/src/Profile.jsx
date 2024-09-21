import { useEffect, useState } from 'react';

function Profile() {
  // Déclare le state runsDetails dans la fonction composant
  const [profileDetails, setProfileDetails] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/api/profile")
      .then((response) => response.json())
      .then((data) => setProfileDetails(data))
      .catch((error) => console.error("Erreur lors de la récupération des courses : ", error));
  }, []); 

  return (
    <div>
      <h2>Profil utilisateur</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nom</th>
            <th scope="col">prenom</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {profileDetails.map((user) => (
            <tr key={user.id_Utilisateur}>
              <td>{user.id_Utilisateur}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;

/*function Runs() {
  // Données statiques des coureurs
  const runsInit = [
    {
        "id" : 2,
        "date": "2024-09-02 11:00:00.000",
        "duree": "00:30:40",
        "distance": 9,
        "denivelle": 9,
        "lieu": "Montpellier",
        "fk_profil": 1
    },
    {
        "id" : 3,
        "date": "2024-09-09 18:13:00.000",
        "duree": "00:58:23",
        "distance": 8,
        "denivelle": 8,
        "lieu": "Montpellier",
        "fk_profil": 2
    }
];

  return (
    <div>
      <h2>Resultat de courses</h2>
      <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Duree</th>
              <th scope="col">Distance</th>
              <th scope="col">Lieu</th>
              <th scope="col">Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            {runsInit.map(runner => (
              <tr key={runner.id}>
                <td>{runner.id}</td>
                <td>{runner.date}</td>
                <td>{runner.duree}</td>
                <td>{runner.distance}</td>
                <td>{runner.lieu}</td>
                <td>{runner.fk_profil}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}

export default Runs;*/
