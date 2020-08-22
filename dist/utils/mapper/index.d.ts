import { SnapshotMapperPropertyMetadataArgs } from "./SnapshotMapperPropertyMetadataArgs";
export declare const applyToNested: () => undefined;
export declare const remove: () => undefined;
export declare const ApplyMapperForProperty: (scope?: string | undefined) => (instance: any, meta: SnapshotMapperPropertyMetadataArgs, context: any) => any;
export declare const get: (scope?: string | undefined) => (instance?: any, context?: any) => any;
