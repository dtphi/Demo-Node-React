# QPS : query per second

## command prepare

```bash
$ sysbench --db-driver=mysql --mysql-user=user --mysql_password=password --mysql-db=myqb --mysql-host=192.168.43.163 --mysql-port=3306 --tables=16 --table-size=10000 --threads=4 --time=200 --events=0 --report-interval=1 usr/bin/oltp_read_write prepare
```

## command run

```bash
$ sysbench --db-driver=mysql --mysql-user=user --mysql_password=password --mysql-db=myqb --mysql-host=192.168.43.163 --mysql-port=3306 --tables=16 --table-size=10000 --threads=4 --time=200 --events=0 --report-interval=1 usr/bin/oltp_read_write run
```