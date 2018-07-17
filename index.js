/*
docker network create --driver=overlay web

STACK_NAME=hub docker stack deploy --compose-file ../buttpub/stacks/hub.yml hub
STACK_NAME=pub docker stack deploy --compose-file ../buttpub/stacks/pub.yml pub

PUB_NODE=$(docker service ps pub_peer-server --format "{{.Node}}")
alias pub_sbot="docker-machine ssh $(echo -n $PUB_NODE) docker run -i --rm --init -v pub_ssb:/home/node/.ssb --net pub_ssb -e ssb_host=pub_peer-server buttcloud/buttpub-peer-client"
pub_sbot whoami
*/

const { merge } = require('ramda')

const PEACH_CONFIG_VERSION = 1
const GYNE_CONFIG_VERSION = 1

// init: create default empty config
// status:
// 

// create: add new config, generate new lock, exec lock
// update: update existing config, generate new lock, exec lock

// helpers
//   - load config
//   - save config
//   - generate lock from config
//   - exec lock to stack
//
// notes
//   - config should have a version
//   - lock should have a version
//   - store diffs (changes) as ~/.peachpub/diffs/<timestamp>

function PeachPub (context) {

  return {
    init,

    create, // pub
    update, // pub
    remove, // pub

    status,
    logs
  }

  function init (options) {
    // load config
    return loadPeachConfig()
      .then(config => {
        // default to empty config
        if (isNil(config)) config = {}

        // check config version, should match what we expect
        const { version } = config
        if (version != PEACH_CONFIG_VERSION) {
          throw new Error(`Unexpected peach config version: ${version}`)
        }

        // override config values with new options
        return merge(config, options)
      })
      .then(savePeachConfig)
  }
  
  function update

  /* helpers */
  function loadPeachConfig () {
  
  }

  function savePeachConfig (peachConfig) {
  
  }

  function generateGyneConfig (peachConfig) {

  }

  function loadGyneConfig () {
  
  }

  function saveGyneConfig (gyneConfig) {
  
  }

  function executeGyneConfig () {

  }
}
