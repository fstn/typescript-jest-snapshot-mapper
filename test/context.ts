import {MapToForSnapshot} from "../src";
import {get} from "../src/utils/mapper";

export const Scope = {
    TEST_SAFE: "TEST_SAFE"
}

export const TestSafe = MapToForSnapshot(Scope.TEST_SAFE)

export const getTestSafe = get(Scope.TEST_SAFE)
