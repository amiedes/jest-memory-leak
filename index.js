import MathService from './packages/math-service.js'

console.log('This is the root of the project')

const mathService = new MathService()
const result = mathService.sum(1, 2)

console.log(result)
