import { getAge } from './unit2'

describe('getAge Unit Test Suites', () => {
    it('should return "vous avez 31 ans"', () => {
        expect(getAge(31)).toBe('Vous avez actuellement 31 ans')
    })
    
})