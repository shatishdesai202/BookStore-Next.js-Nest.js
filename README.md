# BookStore App

## 📦 Tech Stack
 ### FrontEnd
   - Next.js 
   - Tailwind CSS
 ### BackEnd
 - Nest.js
 - typeORM
 - Swagger [ https://nestjs-bookstore.onrender.com/api-docs ]
 ### Database
 - PostgreSQL
 
## 🎯 Code Practices
 - Infinite Scrolling on 80% Scroll height
 - Next App Router
 - Fallback UI
 - Image Optimization With Next/Image
 - Anchor Optimization
 - Custom Hook 
 - Responsive Layout
 - Suitable Custom Scroll

## 👀 Screenshots 
![Screenshot_8](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/802a2629-747d-4e7b-a9d0-41b12cc310bb)
___
![Screenshot_1](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/646a5473-1291-4234-9ac1-40c8d2949649)
___
![Screenshot_2](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/94c66ccd-456d-4018-9521-dffc8ec9ffb9)
___
![Screenshot_3](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/82a0d997-8599-431b-8043-08b3794d1ec1)
___

## 🖧 Server 

Install with npm
```bash
    npm install
```

**Note** using Nodejs Version `18.12.0`

## Environment Variables
To config the environment variable of service, we need to edit the config.yaml at the root of server folder

```bash
NODE_ENV: 'development'     # Environment we run the application (e.g, "development" or "production")

SERVER:
  PORT: 3000                # The port the service run on
  JWT:
    SECRET: 'secret'        # The secret key of JWT
    EXPIRES_IN: 86400       # The time to live of token

DATABASE:
  POSTGRES:
    HOST: 'localhost'       # The host or ip of database
    PORT: 5432              # The port of database
    DATABASE: 'postgres'    # The name of database
    SCHEMA: 'bookstore'     # The schema of database that we use
    USERNAME: 'postgres'    # The username to authenticate
    PASSWORD: '123456'      # The password to authenticate
    SSL: false              # Something, to connect to database we need to turn on SSL
    SYNCHRONIZE: true       # Do we want to init database schema
```

## Run Locally

#### Step 1: Set Up Database
**Using Docker**
```bash
  docker pull postgres
  docker run --name my-postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=123456 postgres
```
**Not Using Docker**
Access the link and downkload postgresql version 15.2, then install it
(https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

#### Step 2: Start Application
Go to the project directory
```bash
  npm run start:dev
```
## Running Tests

To run tests, run the following command

```bash
  npm run lint
```

