import MathService from '../../packages/math-service.js'

describe('MathService', () => {
  describe('sum', () => {
    it('adds two numbers', () => {
      expect(new MathService().sum(1, 2)).toEqual(3)
    })
  })
})
