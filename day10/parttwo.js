const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'test2'), 'utf-8')
  .toString()
  .split('\n')
  .map((n) => parseInt(n))

const joltages = input.sort((a, b) => a - b)
joltages.unshift(0)
joltages.push(joltages[joltages.length - 1] + 3)

count = 1
index = 0

while (index < joltages.length - 1) {
  const currentJoltage = joltages[index]
  const filter = joltages.filter(
    (j) => j > currentJoltage && j <= currentJoltage + 3
  )
  count = count + filter.length
  index = index + 1
}

console.log(count + 1)
