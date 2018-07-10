# butthub

## local dev

- install VirtualBox > 5
- [install `docker-machine`](https://docs.docker.com/machine/install-machine/#install-machine-directly)
- enable virtualization in your BIOS

create docker machines

```shell
docker-machine create -d virtualbox manager
docker-machine create -d virtualbox worker0
docker-machine create -d virtualbox worker1
```

start the swarm with the manager

```shell
docker-machine ssh manager docker swarm init --advertise-addr $(docker-machine ip manager)
```

join the swarm with each worker

```shell
docker-machine ssh worker0 docker swarm join --token $(docker-machine ssh manager docker swarm join-token worker -q) $(docker-machine ip manager)
docker-machine ssh worker1 docker swarm join --token $(docker-machine ssh manager docker swarm join-token worker -q) $(docker-machine ip manager)
```

check out your swarm!

```shell
docker-machine ssh manager docker node ls
```

get ready to use your local docker command to impersonate the manager node

```shell
eval $(docker-machine env manager)
```

```shell
npm install
npm run stack
npm run up
```

check out the stack!

```shell
docker service ls
```

wait until the services are replicated (they are probably downloading images)

spin down the stack

```shell
npm run down
```

spin down the machines (`stop` or `rm`)

```shell
docker-machine stop manager
docker-machine stop worker0
docker-machine stop worker1
```

reset your local docker environment

```
eval $(docker-machine env -u)
```

## resources

- [Docker Get Started, Part 4: Swarms](https://docs.docker.com/get-started/part4/)
- [Docker Swarm With Docker Machine, Scripts](https://mmorejon.github.io/en/blog/docker-swarm-with-docker-machine-scripts/)
