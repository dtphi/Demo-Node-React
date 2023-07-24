# Init default package.json for the project.

```bash
npm init -y
touch server.js
```

# Init the directory architecture for the project into the `src` directory.

## The models different to the controllers.

```bash
touch models
```

## The controllers for the project.

```bash
touch controllers
```

## The services for the project.

```bash
touch services
```

## The utils to container the functionality , class, features which are usually using for the project.

```bash
touch utils
```

## The configs directory for the project.

```bash
touch configs
```

## The .environment file for the project.

```bash
touch .env
```

# Curl terminal --include : view header request.

curl http://localhost:3055 --include

## result:

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 47
ETag: W/"2f-eFtAlN+rl9uKRfkCVQMjjommXHM"
Date: Mon, 24 Jul 2023 03:48:56 GMT
Connection: keep-alive
Keep-Alive: timeout=5

- X-Powered-By: Express // Bên ngoài sẽ biết đc server là Express , sẽ bị dể tấn công .nê cần sử dụng helmet để che lại.

# The package dev dependencies for the project.

1. morgan

2. helmet

3. compression
