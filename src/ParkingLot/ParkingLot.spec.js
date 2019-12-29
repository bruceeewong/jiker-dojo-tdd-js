// 需求：
// 有一个停车场，能停车拿票，能凭票取车

// Tasking:
// 停车场初始时，是有空闲车位的(可停车的)
// 停车，有空余位时，一辆车进场停车，返回一张票据
// 停车，无空余位时，抛出错误
// 取车时，有票据，返回一辆车
// 取车时，无票据，抛出错误

import { ParkingLot } from './ParkingLot'
import { Ticket } from './Tikect'
import { Car } from './Car'

describe('ParkingLot', () => {
  it('should have free spaces when init', () => {
    const parkingLot = new ParkingLot(1)
    expect(parkingLot.getFreeSpaces()).toEqual(1)
  })

  describe('pick a car', () => {
    it('should return a ticket given a car when parking lot has available spaces', () => {
      // given
      const parkingLot = new ParkingLot(1)
      const car = new Car()

      // when
      const result = parkingLot.park(car)

      // then
      expect(result).toBeInstanceOf(Ticket)
    })

    it('should throw error given a car when parking log has no spaces', () => {
      // given
      const parkingLot = new ParkingLot(1)
      const car1 = new Car()
      const car2 = new Car()

      // when
      parkingLot.park(car1)

      // then
      expect(parkingLot.getFreeSpaces()).toEqual(0)
      expect(() => {
        parkingLot.park(car2)
      }).toThrow()
    })
  })

  describe('pick a car', () => {
    it('should return a car given a ticket', () => {
      // given
      const parkingLot = new ParkingLot(1)
      const ticket = new Ticket()

      // when
      const result = parkingLot.pick(ticket)

      // then
      expect(result).toBeInstanceOf(Car)
    })

    it('should throw error given nothing', () => {
      // given
      const parkingLot = new ParkingLot(1)

      // then
      expect(() => {
        parkingLot.pick()
      }).toThrow()
    })
  })
})
