# Projet Découverte des Frameworks JavaScript : ReactJS & NodeJS (ExpressJS)

## Description

Ce projet est une application web de gestion des séances d'un runner/trailer. Il s'agit d'une webapp permettant de collecter, visualiser et gérer les séances d'entraînement, ainsi que de suivre des statistiques globales. Le projet inclut également une API REST pour accéder aux données des séances et du profil utilisateur via **NodeJS (ExpressJS)**.

## Fonctionnalités principales

### 1. Gestion des séances de course
- **Affichage des séances** : Afficher un listing des séances de course triées par date et heure.
- **Ajout de séances** : Permettre à l'utilisateur d'ajouter de nouvelles séances avec des informations comme la distance, le temps, le dénivelé, etc.
- **Suppression de séances** : Permettre à l'utilisateur de supprimer des séances enregistrées.

### 3. Gestion du profil utilisateur
- Une section dédiée à la gestion du profil de l'utilisateur où ses informations personnelles seront conservées.

### 4. API REST (via ExpressJS)
- **Lister les séances** : Accès aux séances via l'API REST, route `GET /api/Runs/`
- **Profil utilisateur** : Accès aux informations du profil via la route `GET /api/profile/`

## Structure du projet

### Front-End (ReactJS)
L'interface utilisateur est développée avec **ReactJS**, permettant un rendu dynamique et une gestion fluide des interactions avec l'utilisateur. Voici les principales sections de la webapp :
- **Home** : Affiche la liste des séances avec des options pour ajouter, éditer ou supprimer des séances.
- **Profil** : Gère les informations du profil utilisateur.
- **Runs** : Affiche les informations des courses

### Back-End (NodeJS avec ExpressJS)
Le serveur back-end est construit avec **NodeJS** et **ExpressJS**, qui expose des API pour la gestion des séances et du profil utilisateur.
- **API des séances** : Route `GET /api/Runs/` pour lister toutes les séances enregistrées.Route 
                        Route `POST /api/add-run/` pour enregistrer de nouvelles seances.
                        Route `DELETE /api/delete-run/` pour supprimer de nouvelles seances.
- **API du profil utilisateur** : Route `GET /api/profile/` pour obtenir les informations du profil utilisateur.

### Base de données
Les données collectées (séances et profil utilisateur) sont stockées dans une base de données (vous pouvez choisir entre **MongoDB**, **MySQL**, ou autre selon les besoins du projet). Pour alimenter la base, des séances fictives seront créées.

## Installation et exécution du projet

### Prérequis
- **Node.js** (version 14+ recommandée)
- **NPM** ou **Yarn**
- **Git**
