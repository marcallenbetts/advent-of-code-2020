const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'test'), 'utf-8')
  .toString()
  .split('\n')

// L = empty
// # = occupied
// floor

let occupiedSeatCount

function countOccupiedAdjacentSeats(row, seat) {
  let count = 0
  const adjacentSeats = [
    { r: -1, s: -1 },
    { r: -1, s: 0 },
    { r: -1, s: 1 },
    { r: 0, s: -1 },
    { r: 0, s: 1 },
    { r: 1, s: -1 },
    { r: 1, s: 1 }
  ]
  adjacentSeats.forEach((s) => {
    if (input[row + s.r].charAt(seat + s.s) === 'X') {
      count++
    }
  })
}

function countOccupiedSeats() {
  return input.reduce((acc, row) => {
    acc = acc + row.filter((r) => r === '#').length
    return acc
  }, 0)
}

// console.log(countOccupiedSeats())
console.log(countOccupiedAdjacentSeats(0, 0))
