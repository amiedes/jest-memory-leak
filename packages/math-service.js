import fs from 'fs'

export default class MathService {
  constructor () {
    const rawSeed = fs.readFileSync('./seed.json')
    this.dummySeed = JSON.parse(rawSeed)
  }

  sum (firstOperand, secondOperand) {
    return firstOperand + secondOperand
  }
}
