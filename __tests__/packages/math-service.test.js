// import MathService from '../packages/math-service.js'

describe('MathService', () => {
  describe('sum', () => {
    it ('boots', () => {
      expect(true).toEqual(true)
    })

    xit('adds two numbers', () => {
      const mathService = new MathService()
      const result = mathService.sum(1, 2)

      expect(result).toEqual(3)
    })
  })
})
