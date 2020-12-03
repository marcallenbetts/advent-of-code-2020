const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'))
  .toString()
  .split('\n')

let currentIndex = 0

const trees = input.reduce((acc, i) => {
  const length = i.length
  if (i.charAt(currentIndex % length) === '#') {
    acc++
  }
  currentIndex = currentIndex + 3
  return acc
}, 0)

console.log(`There are ${trees} trees for part one`)
