/**
 * Common valibot schemas for primitive types used across the API.
 * @module
 */
import * as v from "valibot";
/** Unsigned decimal number as a string (e.g., "123.45"). */
export declare const UnsignedDecimal: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
export type UnsignedDecimal = v.InferOutput<typeof UnsignedDecimal>;
/** Decimal number as a string, can be negative (e.g., "-123.45"). */
export declare const Decimal: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>;
export type Decimal = v.InferOutput<typeof Decimal>;
/** Safe integer number. */
export declare const Integer: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>]>;
export type Integer = v.InferOutput<typeof Integer>;
/** Unsigned safe integer number (>= 0). */
export declare const UnsignedInteger: v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>;
export type UnsignedInteger = v.InferOutput<typeof UnsignedInteger>;
/** Hexadecimal string starting with "0x". */
export declare const Hex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>;
export type Hex = v.InferOutput<typeof Hex>;
/** Ethereum address (42 characters hex string). */
export declare const Address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>;
export type Address = v.InferOutput<typeof Address>;
/** Client order ID (34 characters hex string). */
export declare const Cloid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>;
export type Cloid = v.InferOutput<typeof Cloid>;
/** Percentage string (e.g., "50%"). */
export declare const Percent: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>;
export type Percent = v.InferOutput<typeof Percent>;
//# sourceMappingURL=_schemas.d.ts.map