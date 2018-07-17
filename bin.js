const meow = require('meow')
const PeachPub = require('./')
 
const cli = meow(`
    Usage
      $ peachpub <command>
 
    Commands
      - init
      - create
      - update
 
    Examples
      $ peachpub init

      $ peachpub create

      $ peachpub update
`, {
    flags: {
    }
});

const commandName = cli.input[0]
const command = PeachPub[commandName]

command(cli.flags)
