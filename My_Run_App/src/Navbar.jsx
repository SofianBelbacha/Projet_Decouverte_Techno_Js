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
                    <a><Link to="/Home">Accueil</Link></a>
                </li>
                <li className="nav-item">
                    <a><Link to="/Runs">Courses</Link></a>
                </li>
                <li className="nav-item">
                    <a><Link to="/AddRun">Ajout</Link></a>
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
