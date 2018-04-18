# butt

_work in progress_

a complete, production-quality [Scuttlebutt](https://scuttlebutt.nz) pub server

## usage

- [install Docker](https://docs.docker.com/engine/installation/)
- [install Docker Compose](https://docs.docker.com/compose/install/#install-compose)

```
git clone https://github.com/buttcloud/butt
cd butt
docker swarm init
npm run swarm:init
npm run stack:deploy
npm run sbot whoami
curl -H "Host: example.butt.nz" localhost
```

---

ignore below...

## notes

swarm nodes:

- manager
  - traefik things
    - mount acme
  - buttcloud-provider

  - database
    - mount storage
- worker
  - butt things
    - data volume from cinder


```
volumes:
  ssb:
    external:
      name: ${COMPOSE_PROJECT_NAME}-ssb
```

each pub needs it's own port.

can be anything except what docker swarm needs: 2377, 7946, and 4789, so maybe start at 10000 and count up.
