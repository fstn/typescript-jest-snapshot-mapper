import {Car} from "./Car";
import * as faker from "faker";
import {TestSafe} from "../context";
import {get} from "../../src" ;
import {MapToForSnapshot} from "../../src/utils/mapper/decorators/MapToForSnapshot";
import {applyToNested, remove} from "../../src/utils/mapper";

export class Owner{
    firstName!: string;
    // noinspection JSRemoveUnnecessaryParentheses
    @TestSafe(remove)
    lastName!: string;
    // @ts-ignore
    @MapToForSnapshot()(applyToNested)
    car!: Car[];
}
