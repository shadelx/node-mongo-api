# Todo API

This is an REST API using Node.js and Mongo.db and authentication abilites with Passport module and JWT token

## Installation
For this project we use npm package manager

```bash
npm install

npm run dev
```

You also need to created .env file with the required enviorment variables

DATABASE_URL=  url from [Cloud](https://www.mongodb.com/cloud) Mongo DB

## Dependencies
* MongoDB
* Express
* Mongoose
* Passport
* Bcrypt
* JWT

## Server properties

routes
- /api/
- /api/todo (CRUD)
- /api/auth/signup
- /api/auth/login
- /api/auth/profile
- /api/user (CRUD)

default profile

```
body for /api/auth/login
{
  "email":"john@gmail.com",
  "password":"1234"
}

for GET request on profile need to send the JWT token with PARAM "secret_token" 
/api/auth/profile

```
