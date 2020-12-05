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
    isValidBirthyear(j.byr) &&
    isValidEyeColor(j.ecl) &&
    isValidExpirationYear(j.eyr) &&
    isValidHairColor(j.hcl) &&
    isValidHeight(j.hgt) &&
    isValidIssueYear(j.iyr) &&
    isValidPassportId(j.pid)
  ) {
    count++
  }
  return count
}, 0)

console.log(`Valid: ${validCount}`)
console.log(`Total: ${json.length}`)

function isValidBirthyear(byr) {
  return byr !== undefined && parseInt(byr) >= 1920 && parseInt(byr) <= 2002
}

function isValidEyeColor(ecl) {
  return (
    ecl !== undefined &&
    ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].filter((c) => ecl === c)
      .length === 1
  )
}

function isValidExpirationYear(eyr) {
  return eyr !== undefined && parseInt(eyr) >= 2020 && parseInt(eyr) <= 2030
}

function isValidHairColor(hcl) {
  return hcl !== undefined && hcl.match(/\#[a-f0-9]{6}/)
}

function isValidHeight(hgt) {
  if (hgt === undefined) {
    return false
  }

  const match = hgt.match(/^(\d+)(in|cm)$/)

  let isValid = true

  if (match === null) {
    isValid = false
  } else if (match[2] === 'cm' && (match[1] < 150 || match[1] > 193)) {
    isValid = false
  } else if (match[2] === 'in' && (match[1] < 59 || match[1] > 76)) {
    isValid = false
  }

  return isValid
}

function isValidIssueYear(iyr) {
  return iyr !== undefined && parseInt(iyr) >= 2010 && parseInt(iyr) <= 2020
}

function isValidPassportId(pid) {
  return pid !== undefined && pid.match(/^[0-9]{9}$/)
}
