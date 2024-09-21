import React from 'react';
import { Link } from 'react-router-dom';

function MyNavbar(props) {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                    <a class="navbar-brand"><Link to="/Home">Accueil</Link></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item navbar-brand"><Link to="/Runs">Afficher</Link></a></li>
                        <li><a class="dropdown-item navbar-brand"><Link to="/AddRun">Ajouter</Link></a></li>
                        <li><a class="dropdown-item navbar-brand"><Link to="/DelRun">Supprimer</Link></a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a class="navbar-brand"><Link to="/Profile">Utilisateur</Link></a>
                </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
    );
}

export default function My_Run_App() {
    return (
        <div>
            <MyNavbar />
        </div>
    );
}
