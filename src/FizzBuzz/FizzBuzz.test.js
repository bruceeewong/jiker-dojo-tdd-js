// FizzBuzz 需求：
// 1. 输入非3非5的倍数，返回原数字
// 2. 输入3的倍数，返回 Fizz
// 3. 输入5的倍数，返回 Buzz
// 4. 输入3和5的倍数，返回 FizzBuzz
// 5. 输入含3的数字， 返回 Fizz
// 6. 输入含5的数字， 返回 Buzz

import { FizzBuzz } from './FizzBuzz'

function getSay(number) {
  return new FizzBuzz(number).say()
}

describe('FizzBuzz', () => {
  it('should return raw number given number is normal number', () => {
    expect(getSay(1)).toEqual('1')
    expect(getSay(2)).toEqual('2')
  })
  it('should return fizz given number is divisible by 3', () => {
    expect(getSay(3)).toEqual('fizz')
    expect(getSay(99)).toEqual('fizz')
  })
  it('should return buzz given number is divisible by 5', () => {
    expect(getSay(5)).toEqual('buzz')
    expect(getSay(25)).toEqual('buzz')
  })
  it('should return fizz given number contains 3', () => {
    expect(getSay(13)).toEqual('fizz')
    expect(getSay(32)).toEqual('fizz')
  })
  it('should return buzz given number contains 5', () => {
    expect(getSay(52)).toEqual('buzz')
  })
  it('should return fizzbuzz given number is related to 3 and 5', () => {
    expect(getSay(15)).toEqual('fizzbuzz')
    expect(getSay(45)).toEqual('fizzbuzz')
    expect(getSay(35)).toEqual('fizzbuzz')
  })
})
