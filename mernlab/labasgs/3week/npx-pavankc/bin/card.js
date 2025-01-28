#!/usr/bin/env node
// ----------------------------------------------------------------------------

// npm
var npxcard = require('npxcard')

// ----------------------------------------------------------------------------
// setup

const sections = [
  {
    title: 'Pavan Kumar Chennupati',
    details: [
      ['Email', 'pavankc005@gmail.com'],
      ['Portfolio', 'https://pavanc.me'],
      ['Twitter', 'https://x.com/pavancos'],
      ['GitHub', 'https://github.com/pavancos'],
      ['LinkedIn', 'https://linkedin.com/in/pavankch'],
    ],
  }
]

// ----------------------------------------------------------------------------
// output

const output = npxcard(sections)
console.log(output)

// ----------------------------------------------------------------------------