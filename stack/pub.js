module.exports = Pub

function Pub (pub) {
  const {
    name,
    domain
  } = pub

  const host = `${name}.${domain}`
  const stackName = host.replace(/\./g, '_')

  return {
    name: stackName,
    networks: [
      {
        name: 'ssb',
        driver: 'overlay',
        is_attachable: true
      }
    ],
    services: [
      {
        name: 'peer-server',
        image: 'buttcloud/buttpub-peer-server',
        ports: [
          {
            target: 8008,
            published: 8008,
            mode: 'host'
          }
        ],
        env: {
          ssb_host: '0.0.0.0',
          ssb_externalHost: host
        },
        volumes: [
          {
            type: 'volume',
            source: 'ssb',
            target: '/home/node/.ssb'
          }
        ],
        labels: {
          'traefik.enable': false
        },
        restart_policy: {
          condition: 'on-failure'
        },
        //resources:
          //limits:
            //cpus: '0.50'
            //memory: 500M
          //reservations:
            //cpus: '0.30'
            //memory: 300M
        networks: [
          {
            name: 'ssb'
          }
        ]
      },
      {
        name: 'landing',
        image: 'buttcloud/buttpub-landing',
        env: {
          ssb_host: `${stackName}__peer-server`,
          ssb_landing__host: '0.0.0.0'
        },
        volumes: [
          {
            type: 'volume',
            source: 'ssb',
            target: '/home/node/.ssb'
          }
        ],
        labels: {
          'traefik.enable': true,
          'traefik.backend': `${stackName}_landing`,
          'traefik.port': 8901,
          'traefik.frontend.rule': `Host:${host}`,
          'traefik.docker.network': 'web'
        },
        networks: [
          {
            name: 'ssb'
          },
          {
            name: 'web',
            is_external: true
          }
        ]
      }
    ],
    volumes: [
      {
        name: 'ssb'
      }
    ]
  }
}
