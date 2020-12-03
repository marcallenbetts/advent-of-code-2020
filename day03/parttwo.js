const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'))
  .toString()
  .split('\n')

let slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 }
]

const totalTrees = slopes
  .map((s) => countTrees(s, input))
  .reduce((acc, trees) => {
    return acc * trees
  })

console.log(`Total number of trees for part two is ${totalTrees}`)

function countTrees(slope, input) {
  let currentIndex = 0

  return input
    .filter((input, index) => index % slope.down === 0)
    .reduce((acc, input) => {
      if (input.charAt(currentIndex % input.length) === '#') {
        acc++
      }
      currentIndex += slope.right
      return acc
    }, 0)
}
