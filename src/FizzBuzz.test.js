import { FizzBuzz } from './FIzzBuzz'

describe('FizzBuzz', () => {
  it('should say 1 when number is 1 given number is normal number', () => {
    const result = new FizzBuzz(1).say()
    expect(result).toEqual('1')
  })
  it('should say 2 when number is 2', () => {
    const result = new FizzBuzz(2).say()
    expect(result).toEqual('2')
  })
  it('should say fizz when number is divisible by 3', () => {
    const result = new FizzBuzz(3).say()
    expect(result).toEqual('fizz')
  })
  it('should say buzz when number is divisible by 5', () => {
    const result = new FizzBuzz(5).say()
    expect(result).toEqual('buzz')
  })
  it('should say fizzbuzz when number is divisible by 3 and 5', () => {
    const result = new FizzBuzz(15).say()
    expect(result).toEqual('fizzbuzz')
  })
  it('should say fizz when number contains 3', () => {
    const result = new FizzBuzz(13).say()
    expect(result).toEqual('fizz')
  })
  it('should say buzz when number contains 5', () => {
    const result = new FizzBuzz(52).say()
    expect(result).toEqual('buzz')
  })
  it('should return fizzbuzz when number is 51', () => {
    expect(new FizzBuzz(51).say()).toEqual('fizzbuzz')
  })
  it('should return fizzbuzz when number is 35', () => {
    expect(new FizzBuzz(35).say()).toEqual('fizzbuzz')
  })
})
