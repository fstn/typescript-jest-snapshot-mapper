import {SnapshotMapperMetadataArgsStorage} from "../SnapshotMapperMetadataArgsStorage";
import {getSnapshotMapperMetadataArgsStorage} from "../global";
import {SnapshotMapperPropertyMetadataArgs} from "../SnapshotMapperPropertyMetadataArgs";


export const MapToForSnapshot = (scope?: string) =>
    (cb: ( context: any, scope?: any) => {}, ...params: any[]): PropertyDecorator => {
        return function (object: Object, propertyName: string | symbol) {
            getSnapshotMapperMetadataArgsStorage().properties.push({
                scope: scope,
                target: object.constructor,
                propertyName: propertyName,
                callBack: cb,
                params: params
            } as SnapshotMapperPropertyMetadataArgs);
        };
    }
