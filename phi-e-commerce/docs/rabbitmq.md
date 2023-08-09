```bash
docker search rabbitmq
docker pull rabbitmq:3-management
docker run -d --name rabbitMQ -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

```bash
docker ps -a
```

```bash
docker exec -it rabbitMQ bash
```

## Change password
```bash
:/# rabbitmqctl change_password guest 123456
```

## Using amqplib
```bash
npm i amqplib --save
```