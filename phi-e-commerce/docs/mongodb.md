- docker -v
- docker search mongo
- docker pull mongo:latest

* docker run -d -p 2718:27017 -v ~/mongo-docker-local:/data/db --name mongo-test mongo:latest
* docker exec -it mongo-test mongosh

```bash
[test> show dbs
```

```bash
docker network create mongoNet
docker network ls | grep mo
```

## Test mongo running.

[test> db.runCommand({ hello: 1})
[test> db.user.insertOne({name: 'Thanh Phi'})]
[test> db.user.find()

docker run -d -p 27018:27017 --net mongoNet --name r0 mongo:latest --replSet mongoRepSet
docker run -d -p 27019:27017 --net mongoNet --name r1 mongo:latest --replSet mongoRepSet
docker run -d -p 27010:27017 --net mongoNet --name r2 mongo:latest --replSet mongoRepSet

```bash
// Exec to bash of container r0 with IP4Address 172.18.0.2
docker exec -it r0 mongosh --host 172.18.0.2
// Config replication set for 3 db.
test>config = {"_id": "mongoRepSet", "members": [{_id: 0, host: "172.18.0.2:27017"}, {_id: 1, host: "172.18.0.3:27017"}, {_id: 2, host:"172.18.0.4:27017"}]}
test>rs.initiate(config)
test>rs.status()
```

docker exec -it r1 mongosh
docker exec -it r2 mongosh

## View netword

docker network inspect mongoNet | grep 'mongo\|IPv4Address'

# Create a MongoDB for shop

- docker run -d -p 27018:27017 -v ~/mongo-docker-local:/data/db --name r0 mongo:latest --replSet mongoRepSet
- docker run -d -p 27019:27017 -v ~/mongo-docker-local:/data/db --name r1 mongo:latest --replSet mongoRepSet
- docker run -d -p 27010:27017 -v ~/mongo-docker-local:/data/db --name r0 mongo:latest --replSet mongoRepSet

## If r0 kill , r1 replace ...

Mongodb
(https://cloud.mongodb.com/v2/64bf969a20fd4f293fd7de13#/setup/access?includeToast=true)
dtphikhtn/ry56MxEAWbuucn9u
