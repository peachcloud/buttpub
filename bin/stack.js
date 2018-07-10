const { writeFileSync } = require('fs')
const { join } = require('path')

const config = require('../config.json')
const Stack = require('../stack')

const stack = Stack(config)
const stackPath = join(__dirname, '../stack-config.json')
const stackJson = JSON.stringify(stack, null, 2)

writeFileSync(stackPath, stackJson)
