import {Owner} from "./entities/Owner";
import {User} from "./entities/User";
import {get} from "../src/utils/mapper";
import {getTestSafe} from "../test/context";
import * as faker from "faker";
import {Car} from "../test/entities/Car";

describe(`Test for generator`, () => {

    it('Mapper should remove name', async () => {
        let ownerWithFakeData = new Owner()
        ownerWithFakeData.firstName = faker.name.firstName()
        ownerWithFakeData.lastName = faker.name.lastName()
        ownerWithFakeData = getTestSafe(ownerWithFakeData, {})
        expect(ownerWithFakeData.firstName).not.toBeUndefined()
        expect(ownerWithFakeData.lastName).toBeUndefined()
    })

    it('Mapper should map Orange for ORANGE_CAR data context', async () => {
        let ownerWithFakeData = new Owner()
        ownerWithFakeData.firstName = faker.name.firstName()
        ownerWithFakeData.lastName = faker.name.lastName()
        ownerWithFakeData.car = new Car()
        ownerWithFakeData.car.color = "black"
        const ownerWithOrangeCar = get("ORANGE_CAR")(ownerWithFakeData, {})
        expect(ownerWithOrangeCar.car.color).toBe("orange")
    })

    it('Mapper should preserve car', async () => {
        let ownerWithFakeData = new Owner()
        ownerWithFakeData.firstName = faker.name.firstName()
        ownerWithFakeData.lastName = faker.name.lastName()
        ownerWithFakeData.car = new Car()
        ownerWithFakeData.car.color = "black"
        ownerWithFakeData.car.other = "other"
        const ownerWithOrangeCar = get("ORANGE_CAR")(ownerWithFakeData, {})
        expect(ownerWithOrangeCar.car.other).toBe("other")
    })

    it('Mapper should not crash with undefined car', async () => {
        let ownerWithFakeData = new Owner()
        ownerWithFakeData.firstName = faker.name.firstName()
        ownerWithFakeData.lastName = faker.name.lastName()
        const ownerWithOrangeCar = getTestSafe(ownerWithFakeData, {})
        expect(ownerWithOrangeCar?.car?.other).toBe(undefined)
    })

    it('Mapper should remove toRemove property', async () => {
        let ownerWithFakeData = new Owner()
        ownerWithFakeData.firstName = faker.name.firstName()
        ownerWithFakeData.lastName = faker.name.lastName()
        ownerWithFakeData.car = new Car()
        ownerWithFakeData.car.color = "black"
        ownerWithFakeData.car.other = "other"
        ownerWithFakeData.car.toRemove = "toRemove"
        const ownerWithOrangeCar = getTestSafe(ownerWithFakeData, {})
        expect(ownerWithOrangeCar?.car?.toRemove).toBeUndefined()
    })

})
