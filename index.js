const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')

let data = {}

try {
    const file = path.join(__dirname, './../config.yml')
    const raw = fs.readFileSync(file)
    data = yaml.safeLoad(raw)
} catch (err) {
    console.log(err)
}

module.exports = data
