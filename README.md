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

## Creating directory for csv

Create the database directory before running the application.

```
$ mkdir src/database
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

## Libraries Used

### [json@csv](https://www.npmjs.com/package/json2csv)

It is used to convert js object into csv with column titles and proper line endings.

### [neat-csv](https://www.npmjs.com/package/neat-csv)

It is used to convert csv data to js array.

### [nanoid](https://www.npmjs.com/package/nanoid)

It is used to generate unique ID
