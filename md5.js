'use strict'

const crypto = require('crypto')

function getMD5 (stringToHash) {
    return crypto.createHash('md5').update(stringToHash).digest('hex')
}

module.exports = getMD5
