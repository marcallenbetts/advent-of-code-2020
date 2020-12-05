const fs = require('fs')
const path = require('path')

const input = fs
  .readFileSync(path.resolve(__dirname, 'input'))
  .toString()
  .split('\n\n')

const json = input.map((i) => {
  return JSON.parse(
    `{${i}}`
      .replace('\\n', ' ')
      .replace(/\s+/g, ', ')
      .replace(/(\#?\w+)/g, '"$1"')
  )
})

const validCount = json.reduce((count, j) => {
  if (
    j.byr !== undefined &&
    j.ecl !== undefined &&
    j.eyr !== undefined &&
    j.hcl !== undefined &&
    j.hgt !== undefined &&
    j.iyr !== undefined &&
    j.pid !== undefined
  ) {
    count++
  }
  return count
}, 0)

console.log(validCount)
