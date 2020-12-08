const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n\n')
  .map((i) => i.split('\n'))

let counter = 0

input.forEach((group) => {
  const personOne = group[0]
  const groupSize = group.length
  for (c = 0; c < personOne.length; c++) {
    const test = group.join('').split('')
    if (test.filter((l) => l === personOne.charAt(c)).length === groupSize) {
      counter++
    }
  }
})

console.log(counter)
