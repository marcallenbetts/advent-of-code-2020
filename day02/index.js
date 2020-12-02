const inputs = require('./input.json')

const regex = /^(\d+)\-(\d+)\s(\w)\:\s(\w+)$/

let counterOne = 0
let minimum
let maximum
let character
let password
let charCount

let counterTwo = 0
let controlCharacterPositionOne
let controlCharacterPositionTwo
let controlCharacter

inputs.forEach((i) => {
  const match = i.match(regex)
  minimum = controlCharacterPositionOne = match[1]
  maximum = controlCharacterPositionTwo = match[2]
  character = controlCharacter = match[3]
  password = match[4]

  // Part One
  charCount = password.split('').filter((c) => c === character).length

  if (charCount >= minimum && charCount <= maximum) {
    counterOne += 1
  }

  // Part Two
  if (
    (password.charAt(controlCharacterPositionOne - 1) === controlCharacter ||
      password.charAt(controlCharacterPositionTwo - 1) === controlCharacter) &&
    password.charAt(controlCharacterPositionOne - 1) !==
      password.charAt(controlCharacterPositionTwo - 1)
  ) {
    counterTwo++
  }
})

console.log(`Part One Good passwords: ${counterOne}`)
console.log(`Part Two Good passwords: ${counterTwo}`)
