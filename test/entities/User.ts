import * as faker from "faker";
import {Owner} from "./Owner";
import {TestSafe} from "../context";

export class User extends Owner{
    @TestSafe( (() => ({})))
    login!: string;
    @TestSafe( (() => ({})))
    password!: string;
}
