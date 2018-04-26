# butt

_work in progress_

a complete, production-quality [Scuttlebutt](https://scuttlebutt.nz) pub server

## usage

- [install Docker](https://docs.docker.com/engine/installation/)
- [install Docker Compose](https://docs.docker.com/compose/install/#install-compose)

```
git clone https://github.com/buttcloud/butt
cd butt
npm run swarm:init
npm run network:web:create
npm run stack:hub:deploy
npm run stack:pub:deploy
npm run sbot whoami
curl -H "Host: example.butt.nz" localhost
```

## scripts

`npm run ${command}`

- `swarm:init`
- `network:web:create`
- `network:web:rm`
- `volume:ssb:create`
- `volume:ssb:rm`
- `stack:hub:deploy`
- `stack:hub:ps`
- `stack:hub:rm`
- `stack:hub:services`
- `stack:pub:deploy`
- `stack:pub:ps`
- `stack:pub:rm`
- `stack:pub:services`
- `stack:ls`
- `service:logs`
- `inspect`
- `sbot`

## configuration

TODO environment variables

### `STACK_NAME`

### `HOST`

### `WEB_NETWORK`
