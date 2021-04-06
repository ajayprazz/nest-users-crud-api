# Nestjs API for Users CRUD on CSV File

## Description

A REST API built on Nestjs that reads and writes users' data from a CSV file.

## Requirements

You need Node.js and node package manager, NPM installed to run this application.

## Installation

```
$ git clone https://github.com/ajayprazz/nest-users-crud-api
$ cd nest-users-crud-api
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API Endpoints

### `POST http:localhost:4000/users` - add user

### `GET http:localhost:4000/users?pageSize=1&pageNum=1` - get all users data

### `GET http:localhost:4000/users/:id` - get user by id

## Libraries Used

### [json@csv](https://www.npmjs.com/package/json2csv)

It is used to convert js object into csv with column titles and proper line endings.

### [neat-csv](https://www.npmjs.com/package/neat-csv)

It is used to convert csv data to js array.

### [nanoid](https://www.npmjs.com/package/nanoid)

It is used to generate unique ID
