const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n')
  .map((n) => parseInt(n))

const joltages = input.sort((a, b) => a - b)
joltages.unshift(0)
joltages.push(joltages[joltages.length - 1] + 3)

let joltageDifference = {
  1: 0,
  2: 0,
  3: 0
}

for (i = 0; i < joltages.length - 1; i++) {
  const diff = joltages[i + 1] - joltages[i]
  joltageDifference[diff]++
}

console.log(`The number is ${joltageDifference[1] * joltageDifference[3]}`)
