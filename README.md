<h1 align="center" >
Catoff Task
</h1>

## Description
This is a basic CRUD backend made using Postgresql as database with help of Prisma ORM . Nestjs is used for receiving the request and sending the required responses.

## Installation
```bash
$ git clone https://github.com/captaincoro11/catoff_task.git
$ cd catoff_task
$ npm install
```
## Create a .env file
```bash
DATABASE_URL=""  //Your Postgresql database url here
```

## Prisma Setup
After creating a .env file 
```bash
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
## Creating a user automatically creates a Wallet with amount initially zero.
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
 password:""   

}

```
![Screenshot 2024-06-01 033508](https://github.com/captaincoro11/catoff_task/assets/121259483/56407c6e-38c3-4fb3-93bf-b89d971bbecf)

# Get Me / Get one user data request
## This request will show your all data and also the all the wallets with their details.
```batch
$ http://localhost:3000/user/me
```
# Body Format
```batch
{
 email:"",
 password:""   

}


```
![Screenshot 2024-06-01 052850](https://github.com/captaincoro11/catoff_task/assets/121259483/e2f17496-e584-406b-a969-0881a7637fda)

# Create Wallet Request
## One User can have more than one wallet
```batch
$ http://localhost:3000/wallet/create
```
# Body Format
```batch
{
 email:"",
 password:"",
 amount:21  //any number of your choice    

}


```

![Screenshot 2024-06-01 053224](https://github.com/captaincoro11/catoff_task/assets/121259483/07c23894-410a-49ae-bc31-2080574cfff3)


# Update Amount in Wallet Request
## You have to provide the address in your url and Nestjs takes that address from there and updates amount which you will pass from body
```batch
$ http://localhost:3000/wallet/update/<Wallet Address Here>
```
# Body Format
```batch
{
amount:65  //any number of your choice    
}


```
![Screenshot 2024-06-01 053533](https://github.com/captaincoro11/catoff_task/assets/121259483/ca34c527-6e29-4ed9-8b09-401e55508e6d)


# Delete Wallet Request
## Similarly , here also you have to provide the address in your url and Nestjs takes that address from there and deletes the wallet
```batch
$ http://localhost:3000/wallet/delete/<Wallet Address Here>
```
# Body Format
```batch
{

}


```
![Screenshot 2024-06-01 054030](https://github.com/captaincoro11/catoff_task/assets/121259483/8877949e-7d02-498e-8670-07f601a979b4)

# Get All Wallets Request

```batch
$ http://localhost:3000/wallet/all
```
# Body Format
```batch
{

}


```

![Screenshot 2024-06-01 054154](https://github.com/captaincoro11/catoff_task/assets/121259483/8a0dbfb6-a98e-4845-bc1f-8fc27d95df37)








