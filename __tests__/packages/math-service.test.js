import MathService from '../../packages/math-service.js'

describe('MathService', () => {
  describe('sum', () => {
    it('adds two numbers', () => {
      const mathService = new MathService()
      const result = mathService.sum(1, 2)

      expect(result).toEqual(3)
    })
  })
})
