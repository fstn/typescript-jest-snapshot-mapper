"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.ApplyMapperForProperty = exports.remove = exports.applyToNested = void 0;
const global_1 = require("./global");
exports.applyToNested = () => undefined;
exports.remove = () => undefined;
exports.ApplyMapperForProperty = (scope) => (instance, meta, context) => {
    const cb = meta.callBack;
    const params = meta.params || [];
    if (cb === exports.applyToNested) {
        if (Array.isArray(instance[meta.propertyName])) {
            instance[meta.propertyName] = instance[meta.propertyName].map((i) => exports.get(scope)(i, context));
        }
        else {
            instance[meta.propertyName] = exports.get(scope)(instance[meta.propertyName], context);
        }
    }
    else if (cb === exports.remove) {
        delete instance[meta.propertyName];
    }
    else if (cb !== undefined) {
        instance[meta.propertyName] = cb(...params, context, scope);
    }
    return instance;
};
function metaDataFilter(instance, p, scope) {
    if (!instance) {
        return false;
    }
    const proto = Object.getPrototypeOf(instance);
    return ((proto === null || proto === void 0 ? void 0 : proto.constructor.toString()) == p.target.toString() &&
        (scope === p.scope || !p.scope)) || metaDataFilter(proto, p, scope);
}
exports.get = (scope) => (instance, context) => {
    if (!instance) {
        return instance;
    }
    const allMeta = global_1.getSnapshotMapperMetadataArgsStorage();
    const classMeta = allMeta.properties
        .filter((p) => metaDataFilter(instance, p, scope));
    for (const meta of classMeta) {
        instance = exports.ApplyMapperForProperty(scope)(instance, meta, context);
    }
    return instance;
};
//# sourceMappingURL=index.js.map