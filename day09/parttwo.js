const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n')
  .map((n) => parseInt(n))

const preambleSize = 25

const invalidNumber = findInvalidNumber(input, preambleSize)

const sortedRange = findRange(input, invalidNumber).sort((a, b) => a - b)
console.log(sortedRange[0] + sortedRange[sortedRange.length - 1])

function findInvalidNumber(input) {
  for (index = 0; index < input.length - preambleSize; index++) {
    const preamble = input.slice(index, preambleSize + index)
    const test = input[preambleSize + index]

    const acc = preamble.reduce((acc, value) => {
      if (
        preamble.find((v) => v === test - value && v !== value) !== undefined
      ) {
        acc++
      }
      return acc
    }, 0)

    if (acc === 0) {
      return test
    }
  }
}

function findRange(input, invalidNumber) {
  let index = 0
  let length = 2
  let range = []
  while (range.length === 0) {
    let range = input.slice(index, length)
    let sum = input.slice(index, length).reduce((acc, val) => {
      return acc + val
    }, 0)

    if (sum < invalidNumber) {
      length++
    } else if (sum > invalidNumber) {
      index++
      length = 2
    } else {
      return range
    }
  }
}
