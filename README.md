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
![Screenshot_8](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/b3281884-d279-47fd-8de0-26261d772d76)
___
![Screenshot_1](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/ca8c0c4f-91ac-4688-94e1-85f79b875afb)
___
![Screenshot_2](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/53044e9a-a316-46f8-b1da-9af4654e6496)
___
![Screenshot_3](https://github.com/shatishdesai202/BookStore-Next.js-Nest.js/assets/66472172/bd10e93b-a5de-4b92-a2f2-deef019ca629)
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

