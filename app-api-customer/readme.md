# app-api

> Demo RestApi use Nodejs

# Mysql server
(https://www.db4free.net/phpMyAdmin)(landmark/Vietnam1)
$username = landmark; 
$password = mypw; 
$host = "db4free.net"; 
$dbname = landmark;

## About

This project uses [Feathers](http://feathersjs.com). An open source framework for building APIs and real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/app-api
    npm install
    ```

3. Start your app

    ```
    npm run compile # Compile TypeScript source
    npm run migrate # Run migrations to set up the database
    npm start
    ```

## Testing

Run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

This app comes with a powerful command line interface for Feathers. Here are a few things it can do:

```
$ npx feathers help                           # Show all commands
$ npx feathers generate service               # Generate a new Service
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

# Packages
@kalisio/feathers-distributed (https://github.com/kalisio/feathers-distributed)
feathers-swagger
ORM: feathers-prisma (https://www.prisma.io/docs/guides) (https://dev.to/prisma/set-up-a-free-postgresql-database-on-supabase-to-use-with-prisma-3pk6) ()

# Api Documentation
## Login https://feathersjs.com/guides/basics/login.html
## Register your user api using the `post` method
```bash
npm run migrate
http://localhost:3030/users
```
## Console register users with javascript https://jasonwatmore.com/post/2021/09/05/fetch-http-post-request-examples
```bash
(async () => {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'dtphi.khtn@gmail.com', password: '12345678' })
    };
    const response = await fetch('http://localhost:3030/users', requestOptions);
    const data = await response.json();
    console.log(data)
})();
```