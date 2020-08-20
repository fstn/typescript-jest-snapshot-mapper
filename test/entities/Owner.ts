import {Car} from "./Car";
import * as faker from "faker";
import {TestSafe} from "../context";
import {get} from "../../src" ;
import {MapToForSnapshot} from "../../src/utils/mapper/decorators/MapToForSnapshot";

export class Owner{
    firstName!: string;
    @TestSafe( (() => ({})))
    lastName!: string;
    @MapToForSnapshot()((context:any, scope:any)=>get(scope)(new Car(),context))
    car!: Car;
}
