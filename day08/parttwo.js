const fs = require('fs')
const path = require('path')
const { finished } = require('stream')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'), 'utf-8')
  .toString()
  .split('\n')

const instructions = input.map((i) => {
  const split = i.split(' ')
  return {
    operation: split[0],
    argument: parseInt(split[1]),
    accumulator: 0,
    hasRun: false,
    finished: false
  }
})

for (n = 0; n < instructions.length; n++) {
  const testInstructions = JSON.parse(JSON.stringify(instructions))
  switch (testInstructions[n].operation) {
    case 'jmp':
      testInstructions[n].operation = 'nop'
      break
    case 'nop':
      testInstructions[n].operation = 'jmp'
      break
  }

  const acc = runAccumulator(testInstructions)
  instructions[n].accumulator = acc.accumulator
  instructions[n].finished = acc.finished
}

function runAccumulator(testInstructions) {
  let index = 0
  let accumulator = 0

  while (testInstructions[index].hasRun === false) {
    testInstructions[index].hasRun = true
    switch (testInstructions[index].operation) {
      case 'acc':
        accumulator += testInstructions[index].argument
        index += 1
        break
      case 'jmp':
        index += testInstructions[index].argument
        break
      case 'nop':
        index += 1
        break
    }
    if (testInstructions[index] === undefined) {
      break
    }
  }

  return {
    accumulator: accumulator,
    finished: testInstructions[index] === undefined ? true : false
  }
}

const finishedAccumulatorValue = instructions.find((i) => i.finished === true)
  .accumulator

console.log(`Accumulator value is ${finishedAccumulatorValue}`)
