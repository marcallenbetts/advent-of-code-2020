const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n')
  .map((n) => parseInt(n))

const preambleSize = 25

for (index = 0; index < input.length - preambleSize; index++) {
  const preamble = input.slice(index, preambleSize + index)
  const test = input[preambleSize + index]

  const acc = preamble.reduce((acc, value) => {
    if (preamble.find((v) => v === test - value && v !== value) !== undefined) {
      acc++
    }
    return acc
  }, 0)

  if (acc === 0) {
    console.log(`Invalid value is ${test}`)
  }
}
