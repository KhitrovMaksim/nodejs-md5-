'use strict'

const getMD5 = require('./md5')
const cliArg = process.argv[2]


console.log(getMD5(cliArg))
