const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n')

const map = input.map((i) => {
  const split = i.split(' ')
  return {
    operation: split[0],
    argument: parseInt(split[1]),
    hasRun: false
  }
})

let index = 0
let accumulator = 0

while (map[index].hasRun === false) {
  map[index].hasRun = true
  switch (map[index].operation) {
    case 'acc':
      accumulator += map[index].argument
      index += 1
      break
    case 'jmp':
      index += map[index].argument
      break
    case 'nop':
      index += 1
      break
  }
}

// map.forEach((m, index) => {
//   switch (m.operation) {
//     case 'acc':
//       console.log('acc')
//       console.log(index)
//       index += 1
//       break
//     case 'jmp':
//       console.log('jmp')
//       console.log(index)
//       break
//     case 'nop':
//       console.log('nop')
//       console.log(index)
//       break
//   }
// })

console.log(`Accumulator value is ${accumulator}`)
