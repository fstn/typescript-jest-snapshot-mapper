import {getSnapshotMapperMetadataArgsStorage} from "./global";
import {SnapshotMapperPropertyMetadataArgs} from "./SnapshotMapperPropertyMetadataArgs";

export const applyToNested = () => undefined

export const remove = () => undefined

export const ApplyMapperForProperty = (scope?: string) => (instance: any, meta: SnapshotMapperPropertyMetadataArgs, context: any) => {
    const cb = meta.callBack;
    const params = meta.params || []
    if (cb === applyToNested) {
        if (Array.isArray(instance[meta.propertyName])) {
            instance[meta.propertyName] = instance[meta.propertyName].map((i: any) => get(scope)(i, context))
        } else {
            instance[meta.propertyName] = get(scope)(instance[meta.propertyName], context)
        }
    } else if (cb === remove) {
        delete instance[meta.propertyName]
    } else if (cb !== undefined) {
        instance[meta.propertyName] = cb(...params, context, scope)
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

