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

## API EndPoints

# Create Request/ Signup Request
## As soon as you start the server it will start locally on localhost:3000 and first to create the user go to route
## Used bcrypt to hash the password
```batch
$ http://localhost:3000/auth/signup
```
# Body Format
```batch
{
 "email":"",
 "password":""
}

```
![Screenshot 2024-06-01 030946](https://github.com/captaincoro11/catoff_task/assets/121259483/3a473d8a-eb0d-452a-a45c-2eb446addadd)

# SignIn Request

## If You Enter Wrong Password or Email which is not registered then error will be shown

```batch
$ http://localhost:3000/auth/signin
```
# Body Format
```batch
{
 "email":"",
 "password":""
}

```

![Screenshot 2024-06-01 032631](https://github.com/captaincoro11/catoff_task/assets/121259483/533eea3a-240a-4460-86e5-c562a9c1be26)


# Get All Users Request

```batch
$ http://localhost:3000/user/all
```
# Body Format
```batch
{

}

```

![Screenshot 2024-06-01 033058](https://github.com/captaincoro11/catoff_task/assets/121259483/c86ba0d3-cc1f-4756-b546-a8936350ebef)

# Update Password Request

```batch
$ http://localhost:3000/user/update
```
# Body Format
```batch
{
 email:"",
 password:""   //new password 

}

```


![Screenshot 2024-06-01 033332](https://github.com/captaincoro11/catoff_task/assets/121259483/668142df-6060-4dff-9306-0b99467b52db)

# Delete User Request

```batch
$ http://localhost:3000/user/delete
```
# Body Format
```batch
{
 email:"",
 password:""   //new password 

}

```
![Screenshot 2024-06-01 033508](https://github.com/captaincoro11/catoff_task/assets/121259483/56407c6e-38c3-4fb3-93bf-b89d971bbecf)






