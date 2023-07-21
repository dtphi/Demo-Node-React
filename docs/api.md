# Api Gateway

## Admin api

http://localhost:4030/api/v1/admins | GET /admins

http://localhost:3032/api/v1/admins/authentication | POST /authentication
BODY
JSON: {"strategy":"local","email":"dtphi.khtn@gmail.com","password":"12345678"}

## Customer api

http://localhost:3030/authentication
BODY
JSON : {"strategy":"local","email":"dtphi.khtn@gmail.com","password":"12345678"}

## Service api
