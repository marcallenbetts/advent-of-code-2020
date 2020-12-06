const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n\n')
  .map((i) => i.replace(/\n/g, ''))
  // Get uniqute count for each group
  .map((i) => new Set(i).size)
  // Sum count for all groups
  .reduce((acc, i) => {
    return (acc += i)
  }, 0)

console.log(`Sum is ${input}`)
