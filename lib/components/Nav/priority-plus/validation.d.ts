/**
 * Joins an array of error messages into one message.
 */
export declare function throwValidation(errors?: string[]): void;
/**
 * Confirms the target DOM element is of the required type.
 */
export declare function validateTarget(targetElem: HTMLElement): string[];
/**
 * Confirms that the top-level options keys are valid. Does not check type.
 */
export declare function validateOptions(userOptions: object, defaultOptions: {
    [x: string]: any;
}): string[];
/**
 * Collects validation messages into one array.
 */
export declare function validateInput(targetElem: HTMLElement, userOptions: object, defaultOptions: object): string[];
/**
 * Throws an error if any error messages are returned from validation.
 */
export declare function validateAndThrow(targetElem: HTMLElement, userOptions: object, defaultOptions: object): void;
export default validateAndThrow;
