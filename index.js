const uuid = require('uuid/v4')
const secret = uuid()
const fn = () => new Promise(resolve => resolve({ secret: secret }))

module.exports = fn
