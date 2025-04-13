# Backend for Blog System

This is the backend service for the Blog System application. It is built using Node.js and Express.js.

## Features

- RESTful API for managing posts, comments, and contacts.
- MySQL database integration.
- Environment variable support using `dotenv`.
- Seeder scripts for populating the database with initial data.

## Project Structure
backend/ ├── .env # Environment variables ├── app.js # Main application entry point ├── db.js # Database connection setup ├── controllers/ # API controllers ├── models/ # Database models ├── routes/ # API routes ├── seeder/ # Database seeder scripts ├── package.json # Project configuration


## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```
2. install dependencies:
   ```sh
   npm install
   ```
3. Set env:
  - Create a .env file in the backend/ directory.
  - run ```sh 
        npm run seed:post 
        ``` 
        then 
        ```sh 
        npm run seed:comment 
        ```