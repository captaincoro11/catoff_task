<h1 align="center" >
Catoff Task
</h1>

## Description
This is a basic CRUD backend made using Postgresql as database with help of Prisma ORM . Nestjs is used for receiving the request and sending the required responses.

## Installation
```bash
$ git clone https://github.com/captaincoro11/catoff_task.git
$ npm install
```
## Create a .env file
```bash
DATABASE_URL=""  //Your Postgresql database url here
```

## Prisma Setup
After creating a .env file 
```bash
$ npm install prisma --save-dev
$ npx prisma migrate dev
       or
$ prisma migrate dev
$ npx prisma generate  

```
## Running the App
```bash
# watch mode
$ npm run start:dev
# development
$ npm run start
```


