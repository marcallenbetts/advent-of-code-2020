const inputs = require('./input.json')

let partOneAnswer

inputs.forEach((n1) => {
  inputs.forEach((n2) => {
    if (n1 + n2 === 2020) {
      partOneAnswer = n1 * n2
    }
  })
})

let partTwoAnswer

inputs.forEach((n1) => {
  inputs.forEach((n2) => {
    inputs.forEach((n3) => {
      if (n1 + n2 + n3 === 2020) {
        partTwoAnswer = n1 * n2 * n3
      }
    })
  })
})

console.log(`Part 1 Answer: ${partOneAnswer}`)
console.log(`Part 2 Answer: ${partTwoAnswer}`)
