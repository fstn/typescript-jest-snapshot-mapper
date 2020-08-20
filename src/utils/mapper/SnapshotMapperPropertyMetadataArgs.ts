export interface SnapshotMapperPropertyMetadataArgs {
    /**
     * Scope where generation is applied is applied.
     */
    readonly scope: string;
    /**
     * Class to which property is applied.
     */
    readonly target: Function;
    /**
     * Class's property name to which column is applied.
     */
    readonly propertyName: string;
    /**
     * Function to call
     */
    readonly callBack: Function;
    /**
     * callback parameters
     */
    readonly params: any[]
}
