const { map } = require('ramda')

const Webproxy = require('./webproxy')
const Pub = require('./pub')

module.exports = Stack

const Pubs = map(Pub)

function Stack ({ webproxy, pubs }) {
  return {
    networks: [
      {
        name: 'web',
        driver: 'overlay'
      }
    ],
    stacks: [
      Webproxy(webproxy),
      ...Pubs(pubs)
    ]
  }
}
