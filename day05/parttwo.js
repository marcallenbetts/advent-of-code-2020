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

  return {
    row: row[0],
    seat: seat[0],
    seatId: row[0] * 8 + seat[0]
  }
})

let rowCounts = []
for (i = 0; i < 127; i++) {
  rowCounts.push({
    row: i,
    count: seatIds.filter((sid) => sid.row === i).length
  })
}

const myRow = rowCounts.find((r) => r.count === 7).row

let mySeat
for (i = 0; i < 8; i++) {
  if (
    seatIds.filter((sid) => sid.row === myRow && sid.seat === i).length === 0
  ) {
    mySeat = i
  }
}
seatIds.filter((sid) => sid.row === myRow)

const mySeatId = myRow * 8 + mySeat

console.log(`My seatId is ${mySeatId}`)
