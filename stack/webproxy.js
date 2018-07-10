module.exports = Webproxy

function Webproxy (webproxy) {
  const {
  } = webproxy

  return {
    name: 'webproxy',
    services: [
      {
        name: 'traefik',
        image: 'traefik:1.5',
        args: [
          '--api',
          '--docker',
          '--docker.swarmmode',
          '--docker.domain=example.com',
          '--docker.exposedbydefault=false',
          '--docker.watch',
          //'--entrypoints=Name:http Address::80 Redirect.EntryPoint:https'
          //'--entrypoints=Name:https Address::443 TLS'
          //'--defaultentrypoints=http,https'
          //'--acme'
          //'--acme.storage=/etc/traefik/acme/acme.json'
          //'--acme.entryPoint=https'
          //'--acme.httpChallenge.entryPoint=http'
          //'--acme.OnHostRule=true'
          //'--acme.onDemand=false'
          //'--acme.email=contact@mydomain.ca'
        ],
        volumes: [
          {
            type: 'bind',
            source: '/var/run/docker.sock',
            target: '/var/run/docker.sock',
            is_read_only: true
          },
          {
            type: 'volume',
            source: 'acme',
            target: '/etc/traefik/acme'
          }
        ],
        ports: [
          {
            target: 80,
            published: 80,
            mode: 'host'
          },
          {
            target: 443,
            published: 443,
            mode: 'host'
          },
          {
            target: 8080,
            published: 8080,
            mode: 'host'
          }
        ],
        placement: {
          constraints: [
            'node.role == manager'
          ]
        },
        restart_policy: {
          condition: 'on-failure'
        },
        networks: [
          {
            name: 'web',
            is_external: true
          }
        ]
      }
    ],
    volumes: [
      {
        name: 'acme'
      }
    ]
  }
}
