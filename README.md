# butt

_work in progress_

a complete, production-quality [Scuttlebutt](https://scuttlebutt.nz) pub server

## usage

- [install Docker](https://docs.docker.com/engine/installation/)
- [install Docker Compose](https://docs.docker.com/compose/install/#install-compose)

```
git clone https://github.com/buttcloud/butt
cd butt
wget https://raw.githubusercontent.com/jwilder/nginx-proxy/master/nginx.tmpl
docker swarm init
npm run swarm:init
npm run stack:deploy
npm run sbot whoami
curl -H "Host: example.butt.nz" localhost
```

## notes

swarm nodes:

- manager
  - nginx things
    - mount config
    - mount certs
    - mount ...
  - haproxy things
    - mount config
  - buttcloud things
    - mount haxproxy config
  - database
    - mount storage
- worker
  - ssb things
    - data volume from cinder


```
volumes:
  ssb:
    external:
      name: ${COMPOSE_PROJECT_NAME}-ssb
```

---

## ports

IANA registered ports: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml

dynamic and/or private ports: those from 49152 through 65535: 16383 total ports

open question: is there a way to have a separate ipv6 address for each node?

