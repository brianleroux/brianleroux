#!/usr/bin/env node
var chalk = require('chalk')
var boxen = require('boxen')
let brian = require('.')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white(brian.name),
  'handle': chalk.cyan(brian.handle),
  'work': chalk.white(brian.work),
  'twitter': chalk.cyan(brian.twitter),
  'github': chalk.cyan(brian.github),
  'web': chalk.cyan(brian.web),
  'npx': chalk.white(brian.npx),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))

