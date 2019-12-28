export class FizzBuzz {
  constructor(number) {
    this._number = number
  }

  say() {
    if (this._isRelatedTo(3) && this._isRelatedTo(5)) {
      return 'fizzbuzz'
    }
    if (this._isRelatedTo(3)) {
      return 'fizz'
    }
    if (this._isRelatedTo(5)) {
      return 'buzz'
    }
    return this._number.toString()
  }

  _isRelatedTo(number) {
    return this._isDivisibleBy(number) || this._isContains(number);
  }

  _isDivisibleBy(number) {
    return this._number % number === 0
  }

  _isContains(number) {
    return this._number.toString().includes(number)
  }
}
