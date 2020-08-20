import {MapToForSnapshot} from "../../src/utils/mapper/decorators/MapToForSnapshot";
import * as faker from "faker"
import {Scope, TestSafe} from "../context";

export class Car {

    @MapToForSnapshot("ORANGE_CAR")(() => "orange")
    @TestSafe((context: any) => context.color || faker.random.arrayElement(["blue", "red"]))
    public color!: string;

    @MapToForSnapshot(Scope.TEST_SAFE)( (() => ({})))
    public brand!: string;
}
