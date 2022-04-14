const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'test'), 'utf-8')
  .toString()
  .split('\n')

const rules = input.map((i) => {
  const tmp = i
    .split(/ bags contain| \d | bag,| bags,| bag\.| bags\./)
    .filter((c) => c !== '')
    .filter((c) => c !== ' no other')

  return {
    color: tmp[0],
    holds: [...tmp.slice(1)]
  }
})

const hmm = rules.map((r) => {
  return {
    color: r.color,
    holds: [...rules.find((rul) => (rul.color = r)).holds]
  }
})

console.log('test')

// const match = rules.reduce((acc, rule) => {
//   if (rule.holds.find((color) => color === 'shiny gold')) {
//     acc++
//   }
//   return acc
// }, 0)

// console.log(match)

// console.log(JSON.stringify(rules, null, 2))
