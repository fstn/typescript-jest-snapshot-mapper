"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapToForSnapshot = void 0;
const global_1 = require("../global");
exports.MapToForSnapshot = (scope) => (cb, ...params) => {
    return function (object, propertyName) {
        global_1.getSnapshotMapperMetadataArgsStorage().properties.push({
            scope: scope,
            target: object.constructor,
            propertyName: propertyName,
            callBack: cb,
            params: params
        });
    };
};
//# sourceMappingURL=MapToForSnapshot.js.map