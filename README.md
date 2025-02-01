# Humble Superhero App

# This is a full-stack web application where users can add and view superheroes along with their superpower and humility score. The project consists of:

Backend: NestJS (Node.js framework)
Frontend: React (Create React App)
Testing: Jest & Supertest for end-to-end (E2E) testing

# How the App Works

Users can add superheroes by entering:
    Name
    Superpower
    Humility Score (between 1-10)
The superhero list is displayed in descending order of humility score.
Form validation ensures that users enter valid data.
Tests check API functionality and validation.

# Installation & Setup
Clone the Repository

    git clone 
    cd Humble_Hero_Api

Start the Backend (NestJS)

Navigate to the backend folder:

        cd humble-superhero-api

        Install dependencies:

        npm install

        Start the backend server:

        npm start

The API will be running at http://localhost:3001.

(Optional) Run end-to-end tests:

    npm run test:e2e

This runs API tests inside the humble-superheroes-api folder.
 
# Start the Frontend (React)

Open a new terminal

Navigate to the frontend folder:

    cd humble-superhero-frontend

Install dependencies:

    yarn install

Start the React app:

    yarn start

The frontend will be available at http://localhost:3000.

# App Structure
Backend (NestJS)

Framework: NestJS (TypeScript)
Port: 3001
Routes:
    POST /superheroes -> Add a superhero.
    GET /superheroes -> Retrieve all superheroes (sorted by humility score).
Validation: Class-validator ensures the humility score is between 1-10.
Testing: Jest + Supertest for E2E testing.

Frontend (React)

Framework: React (Create React App)
Port: 3000
Features:
    Form validation: Prevents invalid humility scores.
    Dynamic list update: Superheroes appear immediately after submission.
    Error messages: Show up if the humility score is out of range.

Testing

To run end-to-end (E2E) tests on the backend:

cd backend
npm run test:e2e

These tests verify: 
    The API creates superheroes correctly.
    The API validates humility scores.
    The API returns all superheroes.

# Collaboration Approach

    GitHub branches for new features (feature/frontend, feature/backend).
    Code reviews before merging changes.
    Regular commits with clear messages (feat: added superhero validation).
    Open discussions for architectural improvements.

# If I Had More Time

Here’s what I’d improve:

    Database Integration -> Store superheroes in a real PostgreSQL/MongoDB/Firebase database.
    Superheros Delete/Edit -> Add a function to delete and edit superheros from the list.
    Superhero Picture -> Add a picture for each superhero.
    Filtering & Pagination -> Allow users to filter superheroes by name and paginate results.
    Better UI/UX -> Improve styling with Bootstrap or Material UI.
    Add a list of Ego Supervillans -> Create an option to add villans to a similar list but they will have ego points,
                                      then I would create an match button to match heroes and villan based on their points,
                                      we can create "fights" each fight will have a random way of deciding the winner, we can display at the final the winner team