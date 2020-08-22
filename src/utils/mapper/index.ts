import {getSnapshotMapperMetadataArgsStorage} from "./global";
import {SnapshotMapperPropertyMetadataArgs} from "./SnapshotMapperPropertyMetadataArgs";

export const applyToNested = () => undefined

export const remove = () => undefined

export const ApplyMapperForProperty = (scope?: string) => (instance: any, meta: SnapshotMapperPropertyMetadataArgs, context: any) => {
    const cb = meta.callBack;
    const params = meta.params || []
    if (cb === applyToNested) {
        const value = get(scope)(instance[meta.propertyName], context)
        instance[meta.propertyName] = value
    } else if (cb === remove) {
        delete instance[meta.propertyName]
    } else if (cb !== undefined) {
        const value = cb(...params, context, scope)
        instance[meta.propertyName] = value
    }
    return instance
}

function metaDataFilter(instance: any, p: SnapshotMapperPropertyMetadataArgs, scope: string | undefined): boolean {
    if (!instance) {
        return false
    }
    const proto = Object.getPrototypeOf(instance)
    return (proto?.constructor.toString() == p.target.toString() &&
        (scope === p.scope || !p.scope)) || metaDataFilter(proto, p, scope);
}

export const get = (scope?: string) => (instance?: any, context?: any) => {
    if (!instance) {
        return instance
    }
    const allMeta = getSnapshotMapperMetadataArgsStorage()
    const classMeta: SnapshotMapperPropertyMetadataArgs[] = allMeta.properties
        .filter((p: SnapshotMapperPropertyMetadataArgs) => metaDataFilter(instance, p, scope))

    for (const meta of classMeta) {
        instance = ApplyMapperForProperty(scope)(instance, meta, context)
    }
    return instance
}

