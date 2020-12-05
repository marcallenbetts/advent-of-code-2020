const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'))
  .toString()
  .split('\n')

const seatIds = input.map((boardingPass) => {
  let row = []
  let seat = []

  for (r = 0; r < 128; r++) {
    row.push(r)
  }

  for (s = 0; s < 8; s++) {
    seat.push(s)
  }

  for (c = 0; c < 7; c++) {
    row =
      boardingPass.charAt(c) === 'F'
        ? row.slice(0, row.length / 2)
        : row.slice(-(row.length / 2))
  }

  for (c = 7; c < 10; c++) {
    seat =
      boardingPass.charAt(c) === 'L'
        ? seat.slice(0, seat.length / 2)
        : seat.slice(-(seat.length / 2))
  }

  return row[0] * 8 + seat[0]
})

console.log(`Max seatId is ${Math.max(...seatIds)}`)

// let row = []
// let seat = []

// for (r = 0; r < 128; r++) {
//   row.push(r)
// }

// for (s = 0; s < 8; s++) {
//   seat.push(s)
// }

// for (c = 0; c < 7; c++) {
//   row =
//     boardingPass.charAt(c) === 'F'
//       ? row.slice(0, row.length / 2)
//       : row.slice(-(row.length / 2))
// }

// for (c = 7; c < 10; c++) {
//   seat =
//     boardingPass.charAt(c) === 'L'
//       ? seat.slice(0, seat.length / 2)
//       : seat.slice(-(seat.length / 2))
// }

// const seatId = row[0] * 8 + seat[0]

// console.log(`Row ${row[0]}`)
// console.log(`Seat ${seat[0]}`)
// console.log(`Seat ID ${seatId}`)
