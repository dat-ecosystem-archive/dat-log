#!/usr/bin/env node

var minimist = require('minimist')
var datLog = require('.')

datLog(minimist(process.argv.slice(2), {
  alias: { live: 'l', help: 'h' }, boolean: ['live', 'help']
}))
