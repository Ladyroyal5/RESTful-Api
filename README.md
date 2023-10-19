Employee Management RESTful API

AUTHORS:
Tugwa Chinenye Victor -chinenyevictor147@gmail.com
Github - https://github.com/Vickysnipe
Lilian Nyinyayo -ladyroyal.ellalily@gmail.com
Gitub - https://github.com/Ladyroyal5

Table of Contents
Prerequisites
Getting Started
Installation
Configuration
Database Setup
Usage
Endpoints
API Documentation
Contributing
License
Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js and npm installed.
PostgreSQL database installed and running.
Knowledge of RESTful API concepts.
Express.s is installed
Basic knowledge of Javscript

Getting Started
Installation
Clone the repository:
git clone https://github.com/Ladyroyal5/RESTful-Api.git
cd into the project directory.

Install dependencies:
npm i --save express
npm i pg

Configuration
Create a .env file in the project's root directory and set the following environment variables:

DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

Database Setup
Create a PostgreSQL database with the name you specified in the .env file.

Create a table for employees.
Update the database connection configuration in db.js to match your PostgreSQL database settings.

Usage
To start the API, run the following command:
npm start

Endpoints
GET /employees: Get a list of all employees.
GET /employees/:id: Get an employee by their ID.
POST /employees: Create a new employee.
PUT /employees/:id: Update an employee by their ID.
DELETE /employees/:id: Delete an employee by their ID.

Contributing
Contributions are welcome. Feel free to open issues and pull requests to enhance the functionality or documentation of this API.
