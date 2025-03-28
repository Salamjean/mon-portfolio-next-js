## Description
Ce projet est un portfolio professionnel développé avec Next.js. Il présente mes compétences, mes projets réalisés et permet aux visiteurs de me contacter facilement. Le site est responsive, performant et moderne.

## Fonctionnalités
Pages statiques avec rendu côté serveur
Navigation fluide entre les différentes sections
Galerie de projets avec cartes cliquables
Formulaire de contact (à connecter avec un service backend)
Design responsive qui s'adapte à tous les appareils
Optimisation des images avec le composant Image de Next.js

## Technologies utilisées
Next.js - Framework React
React - Bibliothèque JavaScript
Tailwind CSS - Framework CSS
ESLint - Outil d'analyse de code

## Installation et exécution locale
1. Cloner le dépôt:
git clone https://github.com/Salamjean/Checkpoint-Next-JS
cd Checkpoint-Next-JS

2. Installer les dépendances:
npm install / yarn install

3. Lancer l'application en mode développement: 
npm run dev / yarn dev

## Structure du projet
src/
├── app/
│   ├── about/           # Page "À propos"
│   ├── projects/        # Page des projets
│   ├── contact/         # Page de contact
│   ├── layout.js        # Layout principal
│   └── page.js          # Page d'accueil
├── components/          # Composants réutilisables
├── public/              # Fichiers statiques
└── styles/              # Fichiers CSS globaux