const { writeFileSync } = require('fs')
const { join } = require('path')

const config = require('../stack.json')
const Stack = require('../stack')

const stack = Stack(config)
const stackPath = join(__dirname, '../stack-lock.json')
const stackJson = JSON.stringify(stack, null, 2)

writeFileSync(stackPath, stackJson)
