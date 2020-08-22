"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnapshotMapperMetadataArgsStorage = void 0;
const SnapshotMapperMetadataArgsStorage_1 = require("./SnapshotMapperMetadataArgsStorage");
function getSnapshotMapperMetadataArgsStorage() {
    if (!global.jestSnapshotFilterMetadataArgsStorage)
        global.jestSnapshotFilterMetadataArgsStorage = new SnapshotMapperMetadataArgsStorage_1.SnapshotMapperMetadataArgsStorage();
    return global.jestSnapshotFilterMetadataArgsStorage;
}
exports.getSnapshotMapperMetadataArgsStorage = getSnapshotMapperMetadataArgsStorage;
//# sourceMappingURL=global.js.map