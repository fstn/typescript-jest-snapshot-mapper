import {SnapshotMapperMetadataArgsStorage} from "./SnapshotMapperMetadataArgsStorage";
import {SnapshotMapperPropertyMetadataArgs} from "./SnapshotMapperPropertyMetadataArgs";

export function getSnapshotMapperMetadataArgsStorage(): SnapshotMapperMetadataArgsStorage {
    if (!(global as any).jestSnapshotFilterMetadataArgsStorage )
        (global as any).jestSnapshotFilterMetadataArgsStorage = new SnapshotMapperMetadataArgsStorage();

    return (global as any).jestSnapshotFilterMetadataArgsStorage ;
}
