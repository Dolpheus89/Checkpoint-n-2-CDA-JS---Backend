# Checkpoint n°2 CDA JS - Backend

## Instructions

1. **Initialisation du Projet**
    - Commencez par initialiser un nouveau dépôt Git pour rendre votre travail.
    - Créez un nouveau projet NodeJS avec TypeScript.
    - Configurez `ts-node-dev` pour un meilleur confort de développement.

2. **Objectif de l'exercice**
    
   Vous devez créer une API GraphQL avec les outils suivants :
   - **Apollo Server** pour gérer les requêtes GraphQL.
   - **Type-GraphQL** pour définir vos schémas et résolveurs GraphQL.
   - **SQLite** comme base de données.
   - **TypeORM** comme ORM pour interagir avec la base de données.

3. **Packages nécessaires**

   Voici les packages nécessaires et leurs versions :

   ```json
   "dependencies": {
       "@apollo/server": "^4.10.2",
       "reflect-metadata": "^0.2.2",
       "sqlite3": "^5.1.7",
       "ts-node-dev": "^2.0.0",
       "type-graphql": "^2.0.0-beta.6",
       "typeorm": "^0.3.20"
   }
   ```

## Fonctionnalités à Implémenter

1. **Mutation : Ajouter un pays**
    - Créez une mutation qui prend en paramètres :
        - `code` (exemple : FR, BE, AN, ...)
        - `nom` (exemple : France, Belgique, Andorre, ...)
        - `emoji` (exemple : 🇫🇷, 🇧🇪, 🇦🇩, ...)
        - `continent` (exemple : Europe, Afrique, Asie, ...)
    - Cette mutation doit enregistrer ces informations dans la base de données.

2. **Queries : Lire les pays**
    - **Query 1** : Renvoie la liste de tous les pays avec les attributs suivants :
        - `code`
        - `nom`
        - `emoji`
    - **Query 2** : Prend en paramètre le `code` d'un pays et retourne les informations correspondantes.
    
3. **Query : Pays par continent**
    - Créez une query supplémentaire qui prend en paramètre un `continent` et renvoie la liste de tous les pays appartenant à ce continent.

## Étapes de Réalisation

1. Configurez votre environnement TypeScript et Apollo Server.
2. Définissez vos entités avec TypeORM (par exemple, une entité `Country`).
3. Implémentez les résolveurs nécessaires pour gérer les mutations et queries GraphQL.
4. Testez votre API à l'aide d'un client GraphQL (comme Apollo Studio ou Postman).

## Remarque

- Assurez-vous que votre code est bien structuré et commenté.
- Veillez à gérer les erreurs (par exemple, si un pays avec un code spécifique n'existe pas).
- Fournissez un fichier README détaillant les étapes d'installation et de lancement de votre projet.

Bonne chance !
