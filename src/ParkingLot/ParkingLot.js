import { Ticket } from './Tikect'
import { Car } from './Car'

export class ParkingLot {
  constructor(totalSpaces) {
    this._totalSpaces = totalSpaces
    this._cars = []
  }
  park(car) {
    if (this.getFreeSpaces() === 0) {
      throw new Error()
    }
    this._cars.push(car)
    return new Ticket()
  }

  pick(ticket) {
    if (!ticket) {
      throw new Error()
    }
    return new Car()
  }

  getFreeSpaces() {
    return Math.max(this._totalSpaces - this._cars.length, 0)
  }
}
