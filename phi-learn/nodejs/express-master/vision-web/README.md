vision-web
==========

vision-web is a web client for an example application created as part of the Packt Published; Advanced Express Web Application Development.

The application comes in 4 parts

- vision-core - a set of shared libs
- vision-web - a web client
- vision-api - a web API 
- vision-worker - a worker that populates redis

#prerequisites
You will require a running instance of the following:

- MongoDB
- Redis



#install vision

Run the following to install vision

**vision-web**

```
git clone https://github.com/AndrewKeig/vision-web
npm install
bower install
```

**vision-api**

```
git clone https://github.com/AndrewKeig/vision-api
cd vision-api
npm install
```

**vision-worker**

```
git clone https://github.com/AndrewKeig/vision-worker
cd vision-worker
npm install
```

#minify javascript

```
grunt uglify
```

#minify css
```
grunt cssmin
```

#compile handlebar templates
```
grunt handlebars
```


#install hipache

```
npm install hipache -g
```

#install stud

```
git clone http://github.com/bumptech/stud.git
cd stud
make
sudo make install
```


#create GitHub application
In order to acquire a GitHub token, log in to your GitHub account and go to the **Accounts** section of your Settings page, you will need to enter your password. 

Now click on **Create new token**, name the token if you prefer. Click on the **copy to clipboard button** in order to copy the token into the following login.

Now add the clientId and clientSecret to your config file

```
"auth": {
    "homepage": "https://web.vision.net:8443"
  , "callback": "https://web.vision.net:8443/auth/github/callback"
  , "clientId": "5bb691b4ebb5417f4ab9"
  , "clientSecret": "44c16f4d81c99e1ff5f694a532833298cae10473"
  },
```

#run vision with stud terminating ssl
```
stud --config=stud.conf
hipache --config ./config/server-no-ssl.json
hipache --config ./config/server.json

rpush frontend:web.vision.net web.vision
rpush frontend:web.vision.net http://127.0.0.1:3003
lrange frontend:web.vision.net 0 -1

rpush frontend:api.vision.net api.vision
rpush frontend:api.vision.net http://127.0.0.1:3005
lrange frontend:api.vision.net 0 -1

/vision-web/NODE_ENV=production PORT=3003 npm start
/vision-api/NODE_ENV=production PORT=3005 npm start
/vision-worker/npm start
```

#run vision with hipache terminating ssl
```
hipache --config ./config/server.json
hipache --config ./config/server.json

rpush frontend:web.vision.net web.vision
rpush frontend:web.vision.net http://127.0.0.1:3003
lrange frontend:web.vision.net 0 -1

rpush frontend:api.vision.net api.vision
rpush frontend:api.vision.net http://127.0.0.1:3005
lrange frontend:api.vision.net 0 -1

/vision-web/NODE_ENV=production PORT=3003 npm start
/vision-api/NODE_ENV=production PORT=3005 npm start
/vision-worker/npm start
```


#running integration tests vision-web

Update the following login file with your GitHub details

```
test/login.js

module.exports = {
  user : '#USER#',
  token : '#TOKEN#'
}
```

Run the tests

```
grunt test
```

#running integration tests vision-api
Update the following login file with your GitHub details

```
test/login.js

module.exports = {
  user : '#USER#',
  token : '#TOKEN#'
}
```

Run the tests

```
grunt test
```

#running cucumber tests

You need to be logged out of GitHub for these to run.
You will also need to have setup a GitHub application via the step - create GitHub application

Install cucumber

```
npm install -g cucumber
```

Run tests

```
grunt cucumberjs
```

#code coverage

```
grunt coverage

```


