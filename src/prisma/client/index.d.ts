
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model ApplicationAccess
 * 
 */
export type ApplicationAccess = $Result.DefaultSelection<Prisma.$ApplicationAccessPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model DepartmentManagements
 * 
 */
export type DepartmentManagements = $Result.DefaultSelection<Prisma.$DepartmentManagementsPayload>
/**
 * Model TitleOfDepartments
 * 
 */
export type TitleOfDepartments = $Result.DefaultSelection<Prisma.$TitleOfDepartmentsPayload>
/**
 * Model UserIdentity
 * 
 */
export type UserIdentity = $Result.DefaultSelection<Prisma.$UserIdentityPayload>
/**
 * Model Divisions
 * 
 */
export type Divisions = $Result.DefaultSelection<Prisma.$DivisionsPayload>
/**
 * Model DivisionsManagement
 * 
 */
export type DivisionsManagement = $Result.DefaultSelection<Prisma.$DivisionsManagementPayload>
/**
 * Model TitleOfDivisions
 * 
 */
export type TitleOfDivisions = $Result.DefaultSelection<Prisma.$TitleOfDivisionsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs>;

  /**
   * `prisma.applicationAccess`: Exposes CRUD operations for the **ApplicationAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationAccesses
    * const applicationAccesses = await prisma.applicationAccess.findMany()
    * ```
    */
  get applicationAccess(): Prisma.ApplicationAccessDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs>;

  /**
   * `prisma.departmentManagements`: Exposes CRUD operations for the **DepartmentManagements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DepartmentManagements
    * const departmentManagements = await prisma.departmentManagements.findMany()
    * ```
    */
  get departmentManagements(): Prisma.DepartmentManagementsDelegate<ExtArgs>;

  /**
   * `prisma.titleOfDepartments`: Exposes CRUD operations for the **TitleOfDepartments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TitleOfDepartments
    * const titleOfDepartments = await prisma.titleOfDepartments.findMany()
    * ```
    */
  get titleOfDepartments(): Prisma.TitleOfDepartmentsDelegate<ExtArgs>;

  /**
   * `prisma.userIdentity`: Exposes CRUD operations for the **UserIdentity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserIdentities
    * const userIdentities = await prisma.userIdentity.findMany()
    * ```
    */
  get userIdentity(): Prisma.UserIdentityDelegate<ExtArgs>;

  /**
   * `prisma.divisions`: Exposes CRUD operations for the **Divisions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.divisions.findMany()
    * ```
    */
  get divisions(): Prisma.DivisionsDelegate<ExtArgs>;

  /**
   * `prisma.divisionsManagement`: Exposes CRUD operations for the **DivisionsManagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DivisionsManagements
    * const divisionsManagements = await prisma.divisionsManagement.findMany()
    * ```
    */
  get divisionsManagement(): Prisma.DivisionsManagementDelegate<ExtArgs>;

  /**
   * `prisma.titleOfDivisions`: Exposes CRUD operations for the **TitleOfDivisions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TitleOfDivisions
    * const titleOfDivisions = await prisma.titleOfDivisions.findMany()
    * ```
    */
  get titleOfDivisions(): Prisma.TitleOfDivisionsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    SubCategory: 'SubCategory',
    Applications: 'Applications',
    ApplicationAccess: 'ApplicationAccess',
    Roles: 'Roles',
    Otp: 'Otp',
    Departments: 'Departments',
    DepartmentManagements: 'DepartmentManagements',
    TitleOfDepartments: 'TitleOfDepartments',
    UserIdentity: 'UserIdentity',
    Divisions: 'Divisions',
    DivisionsManagement: 'DivisionsManagement',
    TitleOfDivisions: 'TitleOfDivisions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'category' | 'subCategory' | 'applications' | 'applicationAccess' | 'roles' | 'otp' | 'departments' | 'departmentManagements' | 'titleOfDepartments' | 'userIdentity' | 'divisions' | 'divisionsManagement' | 'titleOfDivisions'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      ApplicationAccess: {
        payload: Prisma.$ApplicationAccessPayload<ExtArgs>
        fields: Prisma.ApplicationAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          findFirst: {
            args: Prisma.ApplicationAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          findMany: {
            args: Prisma.ApplicationAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>[]
          }
          create: {
            args: Prisma.ApplicationAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          createMany: {
            args: Prisma.ApplicationAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          update: {
            args: Prisma.ApplicationAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationAccessPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplicationAccess>
          }
          groupBy: {
            args: Prisma.ApplicationAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationAccessCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>,
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      DepartmentManagements: {
        payload: Prisma.$DepartmentManagementsPayload<ExtArgs>
        fields: Prisma.DepartmentManagementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentManagementsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentManagementsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentManagementsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentManagementsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          findMany: {
            args: Prisma.DepartmentManagementsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>[]
          }
          create: {
            args: Prisma.DepartmentManagementsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          createMany: {
            args: Prisma.DepartmentManagementsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DepartmentManagementsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          update: {
            args: Prisma.DepartmentManagementsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentManagementsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentManagementsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentManagementsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepartmentManagementsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentManagementsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDepartmentManagements>
          }
          groupBy: {
            args: Prisma.DepartmentManagementsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentManagementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentManagementsCountArgs<ExtArgs>,
            result: $Utils.Optional<DepartmentManagementsCountAggregateOutputType> | number
          }
        }
      }
      TitleOfDepartments: {
        payload: Prisma.$TitleOfDepartmentsPayload<ExtArgs>
        fields: Prisma.TitleOfDepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TitleOfDepartmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TitleOfDepartmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          findFirst: {
            args: Prisma.TitleOfDepartmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TitleOfDepartmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          findMany: {
            args: Prisma.TitleOfDepartmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>[]
          }
          create: {
            args: Prisma.TitleOfDepartmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          createMany: {
            args: Prisma.TitleOfDepartmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TitleOfDepartmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          update: {
            args: Prisma.TitleOfDepartmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.TitleOfDepartmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TitleOfDepartmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TitleOfDepartmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDepartmentsPayload>
          }
          aggregate: {
            args: Prisma.TitleOfDepartmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTitleOfDepartments>
          }
          groupBy: {
            args: Prisma.TitleOfDepartmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TitleOfDepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TitleOfDepartmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<TitleOfDepartmentsCountAggregateOutputType> | number
          }
        }
      }
      UserIdentity: {
        payload: Prisma.$UserIdentityPayload<ExtArgs>
        fields: Prisma.UserIdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserIdentityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserIdentityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          findFirst: {
            args: Prisma.UserIdentityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserIdentityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          findMany: {
            args: Prisma.UserIdentityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>[]
          }
          create: {
            args: Prisma.UserIdentityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          createMany: {
            args: Prisma.UserIdentityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserIdentityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          update: {
            args: Prisma.UserIdentityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          deleteMany: {
            args: Prisma.UserIdentityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserIdentityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserIdentityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserIdentityPayload>
          }
          aggregate: {
            args: Prisma.UserIdentityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserIdentity>
          }
          groupBy: {
            args: Prisma.UserIdentityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserIdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserIdentityCountArgs<ExtArgs>,
            result: $Utils.Optional<UserIdentityCountAggregateOutputType> | number
          }
        }
      }
      Divisions: {
        payload: Prisma.$DivisionsPayload<ExtArgs>
        fields: Prisma.DivisionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          findFirst: {
            args: Prisma.DivisionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          findMany: {
            args: Prisma.DivisionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>[]
          }
          create: {
            args: Prisma.DivisionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          createMany: {
            args: Prisma.DivisionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DivisionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          update: {
            args: Prisma.DivisionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          deleteMany: {
            args: Prisma.DivisionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DivisionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsPayload>
          }
          aggregate: {
            args: Prisma.DivisionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDivisions>
          }
          groupBy: {
            args: Prisma.DivisionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DivisionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionsCountArgs<ExtArgs>,
            result: $Utils.Optional<DivisionsCountAggregateOutputType> | number
          }
        }
      }
      DivisionsManagement: {
        payload: Prisma.$DivisionsManagementPayload<ExtArgs>
        fields: Prisma.DivisionsManagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionsManagementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionsManagementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          findFirst: {
            args: Prisma.DivisionsManagementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionsManagementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          findMany: {
            args: Prisma.DivisionsManagementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>[]
          }
          create: {
            args: Prisma.DivisionsManagementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          createMany: {
            args: Prisma.DivisionsManagementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DivisionsManagementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          update: {
            args: Prisma.DivisionsManagementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          deleteMany: {
            args: Prisma.DivisionsManagementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionsManagementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DivisionsManagementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionsManagementPayload>
          }
          aggregate: {
            args: Prisma.DivisionsManagementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDivisionsManagement>
          }
          groupBy: {
            args: Prisma.DivisionsManagementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DivisionsManagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionsManagementCountArgs<ExtArgs>,
            result: $Utils.Optional<DivisionsManagementCountAggregateOutputType> | number
          }
        }
      }
      TitleOfDivisions: {
        payload: Prisma.$TitleOfDivisionsPayload<ExtArgs>
        fields: Prisma.TitleOfDivisionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TitleOfDivisionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TitleOfDivisionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          findFirst: {
            args: Prisma.TitleOfDivisionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TitleOfDivisionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          findMany: {
            args: Prisma.TitleOfDivisionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>[]
          }
          create: {
            args: Prisma.TitleOfDivisionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          createMany: {
            args: Prisma.TitleOfDivisionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TitleOfDivisionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          update: {
            args: Prisma.TitleOfDivisionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          deleteMany: {
            args: Prisma.TitleOfDivisionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TitleOfDivisionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TitleOfDivisionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TitleOfDivisionsPayload>
          }
          aggregate: {
            args: Prisma.TitleOfDivisionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTitleOfDivisions>
          }
          groupBy: {
            args: Prisma.TitleOfDivisionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TitleOfDivisionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TitleOfDivisionsCountArgs<ExtArgs>,
            result: $Utils.Optional<TitleOfDivisionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserIdentity: number
    applicationAccess: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserIdentity?: boolean | UserCountOutputTypeCountUserIdentityArgs
    applicationAccess?: boolean | UserCountOutputTypeCountApplicationAccessArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdentityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationAccessWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }



  /**
   * Count Type ApplicationsCountOutputType
   */

  export type ApplicationsCountOutputType = {
    applicationAccess: number
  }

  export type ApplicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationAccess?: boolean | ApplicationsCountOutputTypeCountApplicationAccessArgs
  }

  // Custom InputTypes

  /**
   * ApplicationsCountOutputType without action
   */
  export type ApplicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationsCountOutputType
     */
    select?: ApplicationsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ApplicationsCountOutputType without action
   */
  export type ApplicationsCountOutputTypeCountApplicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationAccessWhereInput
  }



  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    applicationAccess: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationAccess?: boolean | RolesCountOutputTypeCountApplicationAccessArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountApplicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationAccessWhereInput
  }



  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    DepartmentManagement: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DepartmentManagement?: boolean | DepartmentsCountOutputTypeCountDepartmentManagementArgs
  }

  // Custom InputTypes

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountDepartmentManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentManagementsWhereInput
  }



  /**
   * Count Type DepartmentManagementsCountOutputType
   */

  export type DepartmentManagementsCountOutputType = {
    UserIdentity: number
  }

  export type DepartmentManagementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserIdentity?: boolean | DepartmentManagementsCountOutputTypeCountUserIdentityArgs
  }

  // Custom InputTypes

  /**
   * DepartmentManagementsCountOutputType without action
   */
  export type DepartmentManagementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagementsCountOutputType
     */
    select?: DepartmentManagementsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DepartmentManagementsCountOutputType without action
   */
  export type DepartmentManagementsCountOutputTypeCountUserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdentityWhereInput
  }



  /**
   * Count Type TitleOfDepartmentsCountOutputType
   */

  export type TitleOfDepartmentsCountOutputType = {
    DepartmentManagement: number
  }

  export type TitleOfDepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DepartmentManagement?: boolean | TitleOfDepartmentsCountOutputTypeCountDepartmentManagementArgs
  }

  // Custom InputTypes

  /**
   * TitleOfDepartmentsCountOutputType without action
   */
  export type TitleOfDepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartmentsCountOutputType
     */
    select?: TitleOfDepartmentsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TitleOfDepartmentsCountOutputType without action
   */
  export type TitleOfDepartmentsCountOutputTypeCountDepartmentManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentManagementsWhereInput
  }



  /**
   * Count Type DivisionsCountOutputType
   */

  export type DivisionsCountOutputType = {
    UserIdentity: number
    DivisionManagement: number
  }

  export type DivisionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserIdentity?: boolean | DivisionsCountOutputTypeCountUserIdentityArgs
    DivisionManagement?: boolean | DivisionsCountOutputTypeCountDivisionManagementArgs
  }

  // Custom InputTypes

  /**
   * DivisionsCountOutputType without action
   */
  export type DivisionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsCountOutputType
     */
    select?: DivisionsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DivisionsCountOutputType without action
   */
  export type DivisionsCountOutputTypeCountUserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdentityWhereInput
  }


  /**
   * DivisionsCountOutputType without action
   */
  export type DivisionsCountOutputTypeCountDivisionManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionsManagementWhereInput
  }



  /**
   * Count Type TitleOfDivisionsCountOutputType
   */

  export type TitleOfDivisionsCountOutputType = {
    DivisionManagement: number
    UserIdentity: number
  }

  export type TitleOfDivisionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DivisionManagement?: boolean | TitleOfDivisionsCountOutputTypeCountDivisionManagementArgs
    UserIdentity?: boolean | TitleOfDivisionsCountOutputTypeCountUserIdentityArgs
  }

  // Custom InputTypes

  /**
   * TitleOfDivisionsCountOutputType without action
   */
  export type TitleOfDivisionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisionsCountOutputType
     */
    select?: TitleOfDivisionsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TitleOfDivisionsCountOutputType without action
   */
  export type TitleOfDivisionsCountOutputTypeCountDivisionManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionsManagementWhereInput
  }


  /**
   * TitleOfDivisionsCountOutputType without action
   */
  export type TitleOfDivisionsCountOutputTypeCountUserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdentityWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phoneNumber: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    phoneNumber: string
    isActive: boolean | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    UserIdentity?: boolean | User$UserIdentityArgs<ExtArgs>
    applicationAccess?: boolean | User$applicationAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserIdentity?: boolean | User$UserIdentityArgs<ExtArgs>
    applicationAccess?: boolean | User$applicationAccessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserIdentity: Prisma.$UserIdentityPayload<ExtArgs>[]
      applicationAccess: Prisma.$ApplicationAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      phoneNumber: string
      isActive: boolean | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserIdentity<T extends User$UserIdentityArgs<ExtArgs> = {}>(args?: Subset<T, User$UserIdentityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findMany'> | Null>;

    applicationAccess<T extends User$applicationAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.UserIdentity
   */
  export type User$UserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    where?: UserIdentityWhereInput
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    cursor?: UserIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * User.applicationAccess
   */
  export type User$applicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    where?: ApplicationAccessWhereInput
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    cursor?: ApplicationAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly deletedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    categoryId: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }


  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
    **/
    create<T extends SubCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubCategories.
     *     @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     *     @example
     *     // Create many SubCategories
     *     const subCategory = await prisma.subCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
    **/
    delete<T extends SubCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
    **/
    upsert<T extends SubCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>
    ): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubCategory model
   */ 
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly categoryId: FieldRef<"SubCategory", 'Int'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly isActive: FieldRef<"SubCategory", 'Boolean'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"SubCategory", 'DateTime'>
    readonly deletedAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }


  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }


  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }


  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }


  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
  }


  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }



  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
  }

  export type ApplicationsCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    _all: number
  }


  export type ApplicationsMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
  }

  export type ApplicationsCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    applicationAccess?: boolean | Applications$applicationAccessArgs<ExtArgs>
    _count?: boolean | ApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>

  export type ApplicationsSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationAccess?: boolean | Applications$applicationAccessArgs<ExtArgs>
    _count?: boolean | ApplicationsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      applicationAccess: Prisma.$ApplicationAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }


  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Applications that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationsWithIdOnly = await prisma.applications.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
    **/
    create<T extends ApplicationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const applications = await prisma.applications.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicationAccess<T extends Applications$applicationAccessArgs<ExtArgs> = {}>(args?: Subset<T, Applications$applicationAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Applications model
   */ 
  interface ApplicationsFieldRefs {
    readonly id: FieldRef<"Applications", 'String'>
    readonly name: FieldRef<"Applications", 'String'>
    readonly isActive: FieldRef<"Applications", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }


  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }


  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
  }


  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }


  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }


  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
  }


  /**
   * Applications.applicationAccess
   */
  export type Applications$applicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    where?: ApplicationAccessWhereInput
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    cursor?: ApplicationAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationsInclude<ExtArgs> | null
  }



  /**
   * Model ApplicationAccess
   */

  export type AggregateApplicationAccess = {
    _count: ApplicationAccessCountAggregateOutputType | null
    _avg: ApplicationAccessAvgAggregateOutputType | null
    _sum: ApplicationAccessSumAggregateOutputType | null
    _min: ApplicationAccessMinAggregateOutputType | null
    _max: ApplicationAccessMaxAggregateOutputType | null
  }

  export type ApplicationAccessAvgAggregateOutputType = {
    roleId: number | null
  }

  export type ApplicationAccessSumAggregateOutputType = {
    roleId: number | null
  }

  export type ApplicationAccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    applicationId: string | null
    roleId: number | null
    isActive: boolean | null
  }

  export type ApplicationAccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    applicationId: string | null
    roleId: number | null
    isActive: boolean | null
  }

  export type ApplicationAccessCountAggregateOutputType = {
    id: number
    userId: number
    applicationId: number
    roleId: number
    isActive: number
    _all: number
  }


  export type ApplicationAccessAvgAggregateInputType = {
    roleId?: true
  }

  export type ApplicationAccessSumAggregateInputType = {
    roleId?: true
  }

  export type ApplicationAccessMinAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    roleId?: true
    isActive?: true
  }

  export type ApplicationAccessMaxAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    roleId?: true
    isActive?: true
  }

  export type ApplicationAccessCountAggregateInputType = {
    id?: true
    userId?: true
    applicationId?: true
    roleId?: true
    isActive?: true
    _all?: true
  }

  export type ApplicationAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationAccess to aggregate.
     */
    where?: ApplicationAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationAccesses to fetch.
     */
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationAccesses
    **/
    _count?: true | ApplicationAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationAccessMaxAggregateInputType
  }

  export type GetApplicationAccessAggregateType<T extends ApplicationAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationAccess[P]>
      : GetScalarType<T[P], AggregateApplicationAccess[P]>
  }




  export type ApplicationAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationAccessWhereInput
    orderBy?: ApplicationAccessOrderByWithAggregationInput | ApplicationAccessOrderByWithAggregationInput[]
    by: ApplicationAccessScalarFieldEnum[] | ApplicationAccessScalarFieldEnum
    having?: ApplicationAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationAccessCountAggregateInputType | true
    _avg?: ApplicationAccessAvgAggregateInputType
    _sum?: ApplicationAccessSumAggregateInputType
    _min?: ApplicationAccessMinAggregateInputType
    _max?: ApplicationAccessMaxAggregateInputType
  }

  export type ApplicationAccessGroupByOutputType = {
    id: string
    userId: string
    applicationId: string
    roleId: number
    isActive: boolean
    _count: ApplicationAccessCountAggregateOutputType | null
    _avg: ApplicationAccessAvgAggregateOutputType | null
    _sum: ApplicationAccessSumAggregateOutputType | null
    _min: ApplicationAccessMinAggregateOutputType | null
    _max: ApplicationAccessMaxAggregateOutputType | null
  }

  type GetApplicationAccessGroupByPayload<T extends ApplicationAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationAccessGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationAccessGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    applicationId?: boolean
    roleId?: boolean
    isActive?: boolean
    application?: boolean | ApplicationsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationAccess"]>

  export type ApplicationAccessSelectScalar = {
    id?: boolean
    userId?: boolean
    applicationId?: boolean
    roleId?: boolean
    isActive?: boolean
  }

  export type ApplicationAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationsDefaultArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $ApplicationAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationAccess"
    objects: {
      application: Prisma.$ApplicationsPayload<ExtArgs>
      role: Prisma.$RolesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      applicationId: string
      roleId: number
      isActive: boolean
    }, ExtArgs["result"]["applicationAccess"]>
    composites: {}
  }


  type ApplicationAccessGetPayload<S extends boolean | null | undefined | ApplicationAccessDefaultArgs> = $Result.GetResult<Prisma.$ApplicationAccessPayload, S>

  type ApplicationAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApplicationAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApplicationAccessCountAggregateInputType | true
    }

  export interface ApplicationAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationAccess'], meta: { name: 'ApplicationAccess' } }
    /**
     * Find zero or one ApplicationAccess that matches the filter.
     * @param {ApplicationAccessFindUniqueArgs} args - Arguments to find a ApplicationAccess
     * @example
     * // Get one ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApplicationAccess that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationAccessFindUniqueOrThrowArgs} args - Arguments to find a ApplicationAccess
     * @example
     * // Get one ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApplicationAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessFindFirstArgs} args - Arguments to find a ApplicationAccess
     * @example
     * // Get one ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApplicationAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessFindFirstOrThrowArgs} args - Arguments to find a ApplicationAccess
     * @example
     * // Get one ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApplicationAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationAccesses
     * const applicationAccesses = await prisma.applicationAccess.findMany()
     * 
     * // Get first 10 ApplicationAccesses
     * const applicationAccesses = await prisma.applicationAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationAccessWithIdOnly = await prisma.applicationAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApplicationAccess.
     * @param {ApplicationAccessCreateArgs} args - Arguments to create a ApplicationAccess.
     * @example
     * // Create one ApplicationAccess
     * const ApplicationAccess = await prisma.applicationAccess.create({
     *   data: {
     *     // ... data to create a ApplicationAccess
     *   }
     * })
     * 
    **/
    create<T extends ApplicationAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessCreateArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApplicationAccesses.
     *     @param {ApplicationAccessCreateManyArgs} args - Arguments to create many ApplicationAccesses.
     *     @example
     *     // Create many ApplicationAccesses
     *     const applicationAccess = await prisma.applicationAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApplicationAccess.
     * @param {ApplicationAccessDeleteArgs} args - Arguments to delete one ApplicationAccess.
     * @example
     * // Delete one ApplicationAccess
     * const ApplicationAccess = await prisma.applicationAccess.delete({
     *   where: {
     *     // ... filter to delete one ApplicationAccess
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApplicationAccess.
     * @param {ApplicationAccessUpdateArgs} args - Arguments to update one ApplicationAccess.
     * @example
     * // Update one ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApplicationAccesses.
     * @param {ApplicationAccessDeleteManyArgs} args - Arguments to filter ApplicationAccesses to delete.
     * @example
     * // Delete a few ApplicationAccesses
     * const { count } = await prisma.applicationAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationAccesses
     * const applicationAccess = await prisma.applicationAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApplicationAccess.
     * @param {ApplicationAccessUpsertArgs} args - Arguments to update or create a ApplicationAccess.
     * @example
     * // Update or create a ApplicationAccess
     * const applicationAccess = await prisma.applicationAccess.upsert({
     *   create: {
     *     // ... data to create a ApplicationAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationAccess we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationAccessUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationAccessClient<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApplicationAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessCountArgs} args - Arguments to filter ApplicationAccesses to count.
     * @example
     * // Count the number of ApplicationAccesses
     * const count = await prisma.applicationAccess.count({
     *   where: {
     *     // ... the filter for the ApplicationAccesses we want to count
     *   }
     * })
    **/
    count<T extends ApplicationAccessCountArgs>(
      args?: Subset<T, ApplicationAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAccessAggregateArgs>(args: Subset<T, ApplicationAccessAggregateArgs>): Prisma.PrismaPromise<GetApplicationAccessAggregateType<T>>

    /**
     * Group by ApplicationAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationAccessGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationAccess model
   */
  readonly fields: ApplicationAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    application<T extends ApplicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationsDefaultArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApplicationAccess model
   */ 
  interface ApplicationAccessFieldRefs {
    readonly id: FieldRef<"ApplicationAccess", 'String'>
    readonly userId: FieldRef<"ApplicationAccess", 'String'>
    readonly applicationId: FieldRef<"ApplicationAccess", 'String'>
    readonly roleId: FieldRef<"ApplicationAccess", 'Int'>
    readonly isActive: FieldRef<"ApplicationAccess", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ApplicationAccess findUnique
   */
  export type ApplicationAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationAccess to fetch.
     */
    where: ApplicationAccessWhereUniqueInput
  }


  /**
   * ApplicationAccess findUniqueOrThrow
   */
  export type ApplicationAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationAccess to fetch.
     */
    where: ApplicationAccessWhereUniqueInput
  }


  /**
   * ApplicationAccess findFirst
   */
  export type ApplicationAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationAccess to fetch.
     */
    where?: ApplicationAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationAccesses to fetch.
     */
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationAccesses.
     */
    cursor?: ApplicationAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationAccesses.
     */
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * ApplicationAccess findFirstOrThrow
   */
  export type ApplicationAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationAccess to fetch.
     */
    where?: ApplicationAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationAccesses to fetch.
     */
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationAccesses.
     */
    cursor?: ApplicationAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationAccesses.
     */
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * ApplicationAccess findMany
   */
  export type ApplicationAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationAccesses to fetch.
     */
    where?: ApplicationAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationAccesses to fetch.
     */
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationAccesses.
     */
    cursor?: ApplicationAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationAccesses.
     */
    skip?: number
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * ApplicationAccess create
   */
  export type ApplicationAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationAccess.
     */
    data: XOR<ApplicationAccessCreateInput, ApplicationAccessUncheckedCreateInput>
  }


  /**
   * ApplicationAccess createMany
   */
  export type ApplicationAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationAccesses.
     */
    data: ApplicationAccessCreateManyInput | ApplicationAccessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ApplicationAccess update
   */
  export type ApplicationAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationAccess.
     */
    data: XOR<ApplicationAccessUpdateInput, ApplicationAccessUncheckedUpdateInput>
    /**
     * Choose, which ApplicationAccess to update.
     */
    where: ApplicationAccessWhereUniqueInput
  }


  /**
   * ApplicationAccess updateMany
   */
  export type ApplicationAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationAccesses.
     */
    data: XOR<ApplicationAccessUpdateManyMutationInput, ApplicationAccessUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationAccesses to update
     */
    where?: ApplicationAccessWhereInput
  }


  /**
   * ApplicationAccess upsert
   */
  export type ApplicationAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationAccess to update in case it exists.
     */
    where: ApplicationAccessWhereUniqueInput
    /**
     * In case the ApplicationAccess found by the `where` argument doesn't exist, create a new ApplicationAccess with this data.
     */
    create: XOR<ApplicationAccessCreateInput, ApplicationAccessUncheckedCreateInput>
    /**
     * In case the ApplicationAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationAccessUpdateInput, ApplicationAccessUncheckedUpdateInput>
  }


  /**
   * ApplicationAccess delete
   */
  export type ApplicationAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    /**
     * Filter which ApplicationAccess to delete.
     */
    where: ApplicationAccessWhereUniqueInput
  }


  /**
   * ApplicationAccess deleteMany
   */
  export type ApplicationAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationAccesses to delete
     */
    where?: ApplicationAccessWhereInput
  }


  /**
   * ApplicationAccess without action
   */
  export type ApplicationAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
  }



  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    applicationAccess?: boolean | Roles$applicationAccessArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationAccess?: boolean | Roles$applicationAccessArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      applicationAccess: Prisma.$ApplicationAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends RolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesCreateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends RolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends RolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicationAccess<T extends Roles$applicationAccessArgs<ExtArgs> = {}>(args?: Subset<T, Roles$applicationAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roles model
   */ 
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly isActive: FieldRef<"Roles", 'Boolean'>
    readonly createdAt: FieldRef<"Roles", 'DateTime'>
    readonly updatedAt: FieldRef<"Roles", 'DateTime'>
    readonly deletedAt: FieldRef<"Roles", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }


  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
  }


  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }


  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
  }


  /**
   * Roles.applicationAccess
   */
  export type Roles$applicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationAccess
     */
    select?: ApplicationAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ApplicationAccessInclude<ExtArgs> | null
    where?: ApplicationAccessWhereInput
    orderBy?: ApplicationAccessOrderByWithRelationInput | ApplicationAccessOrderByWithRelationInput[]
    cursor?: ApplicationAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationAccessScalarFieldEnum | ApplicationAccessScalarFieldEnum[]
  }


  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
  }



  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    token: string | null
    email: string | null
    phoneNumber: string | null
    otp: string | null
    expiry: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    token: string | null
    email: string | null
    phoneNumber: string | null
    otp: string | null
    expiry: Date | null
  }

  export type OtpCountAggregateOutputType = {
    token: number
    email: number
    phoneNumber: number
    otp: number
    expiry: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    token?: true
    email?: true
    phoneNumber?: true
    otp?: true
    expiry?: true
  }

  export type OtpMaxAggregateInputType = {
    token?: true
    email?: true
    phoneNumber?: true
    otp?: true
    expiry?: true
  }

  export type OtpCountAggregateInputType = {
    token?: true
    email?: true
    phoneNumber?: true
    otp?: true
    expiry?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    token: string
    email: string
    phoneNumber: string
    otp: string
    expiry: Date | null
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    email?: boolean
    phoneNumber?: boolean
    otp?: boolean
    expiry?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    token?: boolean
    email?: boolean
    phoneNumber?: boolean
    otp?: boolean
    expiry?: boolean
  }


  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      token: string
      email: string
      phoneNumber: string
      otp: string
      expiry: Date | null
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }


  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OtpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Otp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OtpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const otpWithTokenOnly = await prisma.otp.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends OtpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
    **/
    create<T extends OtpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpCreateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Otps.
     *     @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     *     @example
     *     // Create many Otps
     *     const otp = await prisma.otp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OtpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
    **/
    delete<T extends OtpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OtpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OtpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OtpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
    **/
    upsert<T extends OtpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Otp model
   */ 
  interface OtpFieldRefs {
    readonly token: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly phoneNumber: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly expiry: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }


  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
  }


  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }


  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
  }


  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
  }



  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentsSumAggregateInputType = {
    id?: true
  }

  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    DepartmentManagement?: boolean | Departments$DepartmentManagementArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DepartmentManagement?: boolean | Departments$DepartmentManagementArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      DepartmentManagement: Prisma.$DepartmentManagementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }


  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Departments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepartmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
    **/
    create<T extends DepartmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Departments.
     *     @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const departments = await prisma.departments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepartmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>
    ): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DepartmentManagement<T extends Departments$DepartmentManagementArgs<ExtArgs> = {}>(args?: Subset<T, Departments$DepartmentManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Departments model
   */ 
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'Int'>
    readonly name: FieldRef<"Departments", 'String'>
    readonly isActive: FieldRef<"Departments", 'Boolean'>
    readonly createdAt: FieldRef<"Departments", 'DateTime'>
    readonly updatedAt: FieldRef<"Departments", 'DateTime'>
    readonly deletedAt: FieldRef<"Departments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }


  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }


  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
  }


  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }


  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }


  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
  }


  /**
   * Departments.DepartmentManagement
   */
  export type Departments$DepartmentManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    where?: DepartmentManagementsWhereInput
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    cursor?: DepartmentManagementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentManagementsScalarFieldEnum | DepartmentManagementsScalarFieldEnum[]
  }


  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }



  /**
   * Model DepartmentManagements
   */

  export type AggregateDepartmentManagements = {
    _count: DepartmentManagementsCountAggregateOutputType | null
    _avg: DepartmentManagementsAvgAggregateOutputType | null
    _sum: DepartmentManagementsSumAggregateOutputType | null
    _min: DepartmentManagementsMinAggregateOutputType | null
    _max: DepartmentManagementsMaxAggregateOutputType | null
  }

  export type DepartmentManagementsAvgAggregateOutputType = {
    id: number | null
    divisionId: number | null
    departmentId: number | null
    titleId: number | null
  }

  export type DepartmentManagementsSumAggregateOutputType = {
    id: number | null
    divisionId: number | null
    departmentId: number | null
    titleId: number | null
  }

  export type DepartmentManagementsMinAggregateOutputType = {
    id: number | null
    divisionId: number | null
    departmentId: number | null
    titleId: number | null
    isProfitCenter: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepartmentManagementsMaxAggregateOutputType = {
    id: number | null
    divisionId: number | null
    departmentId: number | null
    titleId: number | null
    isProfitCenter: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepartmentManagementsCountAggregateOutputType = {
    id: number
    divisionId: number
    departmentId: number
    titleId: number
    isProfitCenter: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DepartmentManagementsAvgAggregateInputType = {
    id?: true
    divisionId?: true
    departmentId?: true
    titleId?: true
  }

  export type DepartmentManagementsSumAggregateInputType = {
    id?: true
    divisionId?: true
    departmentId?: true
    titleId?: true
  }

  export type DepartmentManagementsMinAggregateInputType = {
    id?: true
    divisionId?: true
    departmentId?: true
    titleId?: true
    isProfitCenter?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepartmentManagementsMaxAggregateInputType = {
    id?: true
    divisionId?: true
    departmentId?: true
    titleId?: true
    isProfitCenter?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepartmentManagementsCountAggregateInputType = {
    id?: true
    divisionId?: true
    departmentId?: true
    titleId?: true
    isProfitCenter?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DepartmentManagementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentManagements to aggregate.
     */
    where?: DepartmentManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentManagements to fetch.
     */
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DepartmentManagements
    **/
    _count?: true | DepartmentManagementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentManagementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentManagementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentManagementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentManagementsMaxAggregateInputType
  }

  export type GetDepartmentManagementsAggregateType<T extends DepartmentManagementsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartmentManagements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartmentManagements[P]>
      : GetScalarType<T[P], AggregateDepartmentManagements[P]>
  }




  export type DepartmentManagementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentManagementsWhereInput
    orderBy?: DepartmentManagementsOrderByWithAggregationInput | DepartmentManagementsOrderByWithAggregationInput[]
    by: DepartmentManagementsScalarFieldEnum[] | DepartmentManagementsScalarFieldEnum
    having?: DepartmentManagementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentManagementsCountAggregateInputType | true
    _avg?: DepartmentManagementsAvgAggregateInputType
    _sum?: DepartmentManagementsSumAggregateInputType
    _min?: DepartmentManagementsMinAggregateInputType
    _max?: DepartmentManagementsMaxAggregateInputType
  }

  export type DepartmentManagementsGroupByOutputType = {
    id: number
    divisionId: number
    departmentId: number
    titleId: number
    isProfitCenter: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DepartmentManagementsCountAggregateOutputType | null
    _avg: DepartmentManagementsAvgAggregateOutputType | null
    _sum: DepartmentManagementsSumAggregateOutputType | null
    _min: DepartmentManagementsMinAggregateOutputType | null
    _max: DepartmentManagementsMaxAggregateOutputType | null
  }

  type GetDepartmentManagementsGroupByPayload<T extends DepartmentManagementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentManagementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentManagementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentManagementsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentManagementsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentManagementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    divisionId?: boolean
    departmentId?: boolean
    titleId?: boolean
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    title?: boolean | TitleOfDepartmentsDefaultArgs<ExtArgs>
    UserIdentity?: boolean | DepartmentManagements$UserIdentityArgs<ExtArgs>
    _count?: boolean | DepartmentManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departmentManagements"]>

  export type DepartmentManagementsSelectScalar = {
    id?: boolean
    divisionId?: boolean
    departmentId?: boolean
    titleId?: boolean
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DepartmentManagementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    title?: boolean | TitleOfDepartmentsDefaultArgs<ExtArgs>
    UserIdentity?: boolean | DepartmentManagements$UserIdentityArgs<ExtArgs>
    _count?: boolean | DepartmentManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DepartmentManagementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DepartmentManagements"
    objects: {
      department: Prisma.$DepartmentsPayload<ExtArgs>
      title: Prisma.$TitleOfDepartmentsPayload<ExtArgs>
      UserIdentity: Prisma.$UserIdentityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      divisionId: number
      departmentId: number
      titleId: number
      isProfitCenter: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["departmentManagements"]>
    composites: {}
  }


  type DepartmentManagementsGetPayload<S extends boolean | null | undefined | DepartmentManagementsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentManagementsPayload, S>

  type DepartmentManagementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentManagementsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentManagementsCountAggregateInputType | true
    }

  export interface DepartmentManagementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DepartmentManagements'], meta: { name: 'DepartmentManagements' } }
    /**
     * Find zero or one DepartmentManagements that matches the filter.
     * @param {DepartmentManagementsFindUniqueArgs} args - Arguments to find a DepartmentManagements
     * @example
     * // Get one DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepartmentManagementsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsFindUniqueArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DepartmentManagements that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DepartmentManagementsFindUniqueOrThrowArgs} args - Arguments to find a DepartmentManagements
     * @example
     * // Get one DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepartmentManagementsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DepartmentManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsFindFirstArgs} args - Arguments to find a DepartmentManagements
     * @example
     * // Get one DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepartmentManagementsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsFindFirstArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DepartmentManagements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsFindFirstOrThrowArgs} args - Arguments to find a DepartmentManagements
     * @example
     * // Get one DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepartmentManagementsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DepartmentManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findMany()
     * 
     * // Get first 10 DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentManagementsWithIdOnly = await prisma.departmentManagements.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepartmentManagementsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DepartmentManagements.
     * @param {DepartmentManagementsCreateArgs} args - Arguments to create a DepartmentManagements.
     * @example
     * // Create one DepartmentManagements
     * const DepartmentManagements = await prisma.departmentManagements.create({
     *   data: {
     *     // ... data to create a DepartmentManagements
     *   }
     * })
     * 
    **/
    create<T extends DepartmentManagementsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsCreateArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DepartmentManagements.
     *     @param {DepartmentManagementsCreateManyArgs} args - Arguments to create many DepartmentManagements.
     *     @example
     *     // Create many DepartmentManagements
     *     const departmentManagements = await prisma.departmentManagements.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DepartmentManagementsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DepartmentManagements.
     * @param {DepartmentManagementsDeleteArgs} args - Arguments to delete one DepartmentManagements.
     * @example
     * // Delete one DepartmentManagements
     * const DepartmentManagements = await prisma.departmentManagements.delete({
     *   where: {
     *     // ... filter to delete one DepartmentManagements
     *   }
     * })
     * 
    **/
    delete<T extends DepartmentManagementsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsDeleteArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DepartmentManagements.
     * @param {DepartmentManagementsUpdateArgs} args - Arguments to update one DepartmentManagements.
     * @example
     * // Update one DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepartmentManagementsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsUpdateArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DepartmentManagements.
     * @param {DepartmentManagementsDeleteManyArgs} args - Arguments to filter DepartmentManagements to delete.
     * @example
     * // Delete a few DepartmentManagements
     * const { count } = await prisma.departmentManagements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepartmentManagementsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepartmentManagementsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DepartmentManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepartmentManagementsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DepartmentManagements.
     * @param {DepartmentManagementsUpsertArgs} args - Arguments to update or create a DepartmentManagements.
     * @example
     * // Update or create a DepartmentManagements
     * const departmentManagements = await prisma.departmentManagements.upsert({
     *   create: {
     *     // ... data to create a DepartmentManagements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DepartmentManagements we want to update
     *   }
     * })
    **/
    upsert<T extends DepartmentManagementsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepartmentManagementsUpsertArgs<ExtArgs>>
    ): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DepartmentManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsCountArgs} args - Arguments to filter DepartmentManagements to count.
     * @example
     * // Count the number of DepartmentManagements
     * const count = await prisma.departmentManagements.count({
     *   where: {
     *     // ... the filter for the DepartmentManagements we want to count
     *   }
     * })
    **/
    count<T extends DepartmentManagementsCountArgs>(
      args?: Subset<T, DepartmentManagementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentManagementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DepartmentManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentManagementsAggregateArgs>(args: Subset<T, DepartmentManagementsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentManagementsAggregateType<T>>

    /**
     * Group by DepartmentManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentManagementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentManagementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentManagementsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentManagementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentManagementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentManagementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DepartmentManagements model
   */
  readonly fields: DepartmentManagementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DepartmentManagements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentManagementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    department<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    title<T extends TitleOfDepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDepartmentsDefaultArgs<ExtArgs>>): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    UserIdentity<T extends DepartmentManagements$UserIdentityArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentManagements$UserIdentityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DepartmentManagements model
   */ 
  interface DepartmentManagementsFieldRefs {
    readonly id: FieldRef<"DepartmentManagements", 'Int'>
    readonly divisionId: FieldRef<"DepartmentManagements", 'Int'>
    readonly departmentId: FieldRef<"DepartmentManagements", 'Int'>
    readonly titleId: FieldRef<"DepartmentManagements", 'Int'>
    readonly isProfitCenter: FieldRef<"DepartmentManagements", 'Boolean'>
    readonly isActive: FieldRef<"DepartmentManagements", 'Boolean'>
    readonly createdAt: FieldRef<"DepartmentManagements", 'DateTime'>
    readonly updatedAt: FieldRef<"DepartmentManagements", 'DateTime'>
    readonly deletedAt: FieldRef<"DepartmentManagements", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DepartmentManagements findUnique
   */
  export type DepartmentManagementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentManagements to fetch.
     */
    where: DepartmentManagementsWhereUniqueInput
  }


  /**
   * DepartmentManagements findUniqueOrThrow
   */
  export type DepartmentManagementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentManagements to fetch.
     */
    where: DepartmentManagementsWhereUniqueInput
  }


  /**
   * DepartmentManagements findFirst
   */
  export type DepartmentManagementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentManagements to fetch.
     */
    where?: DepartmentManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentManagements to fetch.
     */
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentManagements.
     */
    cursor?: DepartmentManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentManagements.
     */
    distinct?: DepartmentManagementsScalarFieldEnum | DepartmentManagementsScalarFieldEnum[]
  }


  /**
   * DepartmentManagements findFirstOrThrow
   */
  export type DepartmentManagementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentManagements to fetch.
     */
    where?: DepartmentManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentManagements to fetch.
     */
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DepartmentManagements.
     */
    cursor?: DepartmentManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DepartmentManagements.
     */
    distinct?: DepartmentManagementsScalarFieldEnum | DepartmentManagementsScalarFieldEnum[]
  }


  /**
   * DepartmentManagements findMany
   */
  export type DepartmentManagementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter, which DepartmentManagements to fetch.
     */
    where?: DepartmentManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DepartmentManagements to fetch.
     */
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DepartmentManagements.
     */
    cursor?: DepartmentManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DepartmentManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DepartmentManagements.
     */
    skip?: number
    distinct?: DepartmentManagementsScalarFieldEnum | DepartmentManagementsScalarFieldEnum[]
  }


  /**
   * DepartmentManagements create
   */
  export type DepartmentManagementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * The data needed to create a DepartmentManagements.
     */
    data: XOR<DepartmentManagementsCreateInput, DepartmentManagementsUncheckedCreateInput>
  }


  /**
   * DepartmentManagements createMany
   */
  export type DepartmentManagementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DepartmentManagements.
     */
    data: DepartmentManagementsCreateManyInput | DepartmentManagementsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DepartmentManagements update
   */
  export type DepartmentManagementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * The data needed to update a DepartmentManagements.
     */
    data: XOR<DepartmentManagementsUpdateInput, DepartmentManagementsUncheckedUpdateInput>
    /**
     * Choose, which DepartmentManagements to update.
     */
    where: DepartmentManagementsWhereUniqueInput
  }


  /**
   * DepartmentManagements updateMany
   */
  export type DepartmentManagementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DepartmentManagements.
     */
    data: XOR<DepartmentManagementsUpdateManyMutationInput, DepartmentManagementsUncheckedUpdateManyInput>
    /**
     * Filter which DepartmentManagements to update
     */
    where?: DepartmentManagementsWhereInput
  }


  /**
   * DepartmentManagements upsert
   */
  export type DepartmentManagementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * The filter to search for the DepartmentManagements to update in case it exists.
     */
    where: DepartmentManagementsWhereUniqueInput
    /**
     * In case the DepartmentManagements found by the `where` argument doesn't exist, create a new DepartmentManagements with this data.
     */
    create: XOR<DepartmentManagementsCreateInput, DepartmentManagementsUncheckedCreateInput>
    /**
     * In case the DepartmentManagements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentManagementsUpdateInput, DepartmentManagementsUncheckedUpdateInput>
  }


  /**
   * DepartmentManagements delete
   */
  export type DepartmentManagementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    /**
     * Filter which DepartmentManagements to delete.
     */
    where: DepartmentManagementsWhereUniqueInput
  }


  /**
   * DepartmentManagements deleteMany
   */
  export type DepartmentManagementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DepartmentManagements to delete
     */
    where?: DepartmentManagementsWhereInput
  }


  /**
   * DepartmentManagements.UserIdentity
   */
  export type DepartmentManagements$UserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    where?: UserIdentityWhereInput
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    cursor?: UserIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * DepartmentManagements without action
   */
  export type DepartmentManagementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
  }



  /**
   * Model TitleOfDepartments
   */

  export type AggregateTitleOfDepartments = {
    _count: TitleOfDepartmentsCountAggregateOutputType | null
    _avg: TitleOfDepartmentsAvgAggregateOutputType | null
    _sum: TitleOfDepartmentsSumAggregateOutputType | null
    _min: TitleOfDepartmentsMinAggregateOutputType | null
    _max: TitleOfDepartmentsMaxAggregateOutputType | null
  }

  export type TitleOfDepartmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type TitleOfDepartmentsSumAggregateOutputType = {
    id: number | null
  }

  export type TitleOfDepartmentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    isLeader: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TitleOfDepartmentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isLeader: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TitleOfDepartmentsCountAggregateOutputType = {
    id: number
    name: number
    isLeader: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TitleOfDepartmentsAvgAggregateInputType = {
    id?: true
  }

  export type TitleOfDepartmentsSumAggregateInputType = {
    id?: true
  }

  export type TitleOfDepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TitleOfDepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TitleOfDepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TitleOfDepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleOfDepartments to aggregate.
     */
    where?: TitleOfDepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDepartments to fetch.
     */
    orderBy?: TitleOfDepartmentsOrderByWithRelationInput | TitleOfDepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TitleOfDepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TitleOfDepartments
    **/
    _count?: true | TitleOfDepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TitleOfDepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TitleOfDepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TitleOfDepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TitleOfDepartmentsMaxAggregateInputType
  }

  export type GetTitleOfDepartmentsAggregateType<T extends TitleOfDepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateTitleOfDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitleOfDepartments[P]>
      : GetScalarType<T[P], AggregateTitleOfDepartments[P]>
  }




  export type TitleOfDepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TitleOfDepartmentsWhereInput
    orderBy?: TitleOfDepartmentsOrderByWithAggregationInput | TitleOfDepartmentsOrderByWithAggregationInput[]
    by: TitleOfDepartmentsScalarFieldEnum[] | TitleOfDepartmentsScalarFieldEnum
    having?: TitleOfDepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TitleOfDepartmentsCountAggregateInputType | true
    _avg?: TitleOfDepartmentsAvgAggregateInputType
    _sum?: TitleOfDepartmentsSumAggregateInputType
    _min?: TitleOfDepartmentsMinAggregateInputType
    _max?: TitleOfDepartmentsMaxAggregateInputType
  }

  export type TitleOfDepartmentsGroupByOutputType = {
    id: number
    name: string
    isLeader: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TitleOfDepartmentsCountAggregateOutputType | null
    _avg: TitleOfDepartmentsAvgAggregateOutputType | null
    _sum: TitleOfDepartmentsSumAggregateOutputType | null
    _min: TitleOfDepartmentsMinAggregateOutputType | null
    _max: TitleOfDepartmentsMaxAggregateOutputType | null
  }

  type GetTitleOfDepartmentsGroupByPayload<T extends TitleOfDepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TitleOfDepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TitleOfDepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TitleOfDepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], TitleOfDepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type TitleOfDepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isLeader?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    DepartmentManagement?: boolean | TitleOfDepartments$DepartmentManagementArgs<ExtArgs>
    _count?: boolean | TitleOfDepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titleOfDepartments"]>

  export type TitleOfDepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    isLeader?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TitleOfDepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DepartmentManagement?: boolean | TitleOfDepartments$DepartmentManagementArgs<ExtArgs>
    _count?: boolean | TitleOfDepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TitleOfDepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TitleOfDepartments"
    objects: {
      DepartmentManagement: Prisma.$DepartmentManagementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isLeader: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["titleOfDepartments"]>
    composites: {}
  }


  type TitleOfDepartmentsGetPayload<S extends boolean | null | undefined | TitleOfDepartmentsDefaultArgs> = $Result.GetResult<Prisma.$TitleOfDepartmentsPayload, S>

  type TitleOfDepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TitleOfDepartmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TitleOfDepartmentsCountAggregateInputType | true
    }

  export interface TitleOfDepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TitleOfDepartments'], meta: { name: 'TitleOfDepartments' } }
    /**
     * Find zero or one TitleOfDepartments that matches the filter.
     * @param {TitleOfDepartmentsFindUniqueArgs} args - Arguments to find a TitleOfDepartments
     * @example
     * // Get one TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TitleOfDepartmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TitleOfDepartments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TitleOfDepartmentsFindUniqueOrThrowArgs} args - Arguments to find a TitleOfDepartments
     * @example
     * // Get one TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TitleOfDepartmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TitleOfDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsFindFirstArgs} args - Arguments to find a TitleOfDepartments
     * @example
     * // Get one TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TitleOfDepartmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsFindFirstArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TitleOfDepartments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsFindFirstOrThrowArgs} args - Arguments to find a TitleOfDepartments
     * @example
     * // Get one TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TitleOfDepartmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TitleOfDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findMany()
     * 
     * // Get first 10 TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const titleOfDepartmentsWithIdOnly = await prisma.titleOfDepartments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TitleOfDepartmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TitleOfDepartments.
     * @param {TitleOfDepartmentsCreateArgs} args - Arguments to create a TitleOfDepartments.
     * @example
     * // Create one TitleOfDepartments
     * const TitleOfDepartments = await prisma.titleOfDepartments.create({
     *   data: {
     *     // ... data to create a TitleOfDepartments
     *   }
     * })
     * 
    **/
    create<T extends TitleOfDepartmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsCreateArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TitleOfDepartments.
     *     @param {TitleOfDepartmentsCreateManyArgs} args - Arguments to create many TitleOfDepartments.
     *     @example
     *     // Create many TitleOfDepartments
     *     const titleOfDepartments = await prisma.titleOfDepartments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TitleOfDepartmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TitleOfDepartments.
     * @param {TitleOfDepartmentsDeleteArgs} args - Arguments to delete one TitleOfDepartments.
     * @example
     * // Delete one TitleOfDepartments
     * const TitleOfDepartments = await prisma.titleOfDepartments.delete({
     *   where: {
     *     // ... filter to delete one TitleOfDepartments
     *   }
     * })
     * 
    **/
    delete<T extends TitleOfDepartmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsDeleteArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TitleOfDepartments.
     * @param {TitleOfDepartmentsUpdateArgs} args - Arguments to update one TitleOfDepartments.
     * @example
     * // Update one TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TitleOfDepartmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsUpdateArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TitleOfDepartments.
     * @param {TitleOfDepartmentsDeleteManyArgs} args - Arguments to filter TitleOfDepartments to delete.
     * @example
     * // Delete a few TitleOfDepartments
     * const { count } = await prisma.titleOfDepartments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TitleOfDepartmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDepartmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TitleOfDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TitleOfDepartmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TitleOfDepartments.
     * @param {TitleOfDepartmentsUpsertArgs} args - Arguments to update or create a TitleOfDepartments.
     * @example
     * // Update or create a TitleOfDepartments
     * const titleOfDepartments = await prisma.titleOfDepartments.upsert({
     *   create: {
     *     // ... data to create a TitleOfDepartments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TitleOfDepartments we want to update
     *   }
     * })
    **/
    upsert<T extends TitleOfDepartmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDepartmentsUpsertArgs<ExtArgs>>
    ): Prisma__TitleOfDepartmentsClient<$Result.GetResult<Prisma.$TitleOfDepartmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TitleOfDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsCountArgs} args - Arguments to filter TitleOfDepartments to count.
     * @example
     * // Count the number of TitleOfDepartments
     * const count = await prisma.titleOfDepartments.count({
     *   where: {
     *     // ... the filter for the TitleOfDepartments we want to count
     *   }
     * })
    **/
    count<T extends TitleOfDepartmentsCountArgs>(
      args?: Subset<T, TitleOfDepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TitleOfDepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TitleOfDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TitleOfDepartmentsAggregateArgs>(args: Subset<T, TitleOfDepartmentsAggregateArgs>): Prisma.PrismaPromise<GetTitleOfDepartmentsAggregateType<T>>

    /**
     * Group by TitleOfDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDepartmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TitleOfDepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TitleOfDepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: TitleOfDepartmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TitleOfDepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTitleOfDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TitleOfDepartments model
   */
  readonly fields: TitleOfDepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TitleOfDepartments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TitleOfDepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DepartmentManagement<T extends TitleOfDepartments$DepartmentManagementArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDepartments$DepartmentManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TitleOfDepartments model
   */ 
  interface TitleOfDepartmentsFieldRefs {
    readonly id: FieldRef<"TitleOfDepartments", 'Int'>
    readonly name: FieldRef<"TitleOfDepartments", 'String'>
    readonly isLeader: FieldRef<"TitleOfDepartments", 'Boolean'>
    readonly isActive: FieldRef<"TitleOfDepartments", 'Boolean'>
    readonly createdAt: FieldRef<"TitleOfDepartments", 'DateTime'>
    readonly updatedAt: FieldRef<"TitleOfDepartments", 'DateTime'>
    readonly deletedAt: FieldRef<"TitleOfDepartments", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TitleOfDepartments findUnique
   */
  export type TitleOfDepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDepartments to fetch.
     */
    where: TitleOfDepartmentsWhereUniqueInput
  }


  /**
   * TitleOfDepartments findUniqueOrThrow
   */
  export type TitleOfDepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDepartments to fetch.
     */
    where: TitleOfDepartmentsWhereUniqueInput
  }


  /**
   * TitleOfDepartments findFirst
   */
  export type TitleOfDepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDepartments to fetch.
     */
    where?: TitleOfDepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDepartments to fetch.
     */
    orderBy?: TitleOfDepartmentsOrderByWithRelationInput | TitleOfDepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleOfDepartments.
     */
    cursor?: TitleOfDepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleOfDepartments.
     */
    distinct?: TitleOfDepartmentsScalarFieldEnum | TitleOfDepartmentsScalarFieldEnum[]
  }


  /**
   * TitleOfDepartments findFirstOrThrow
   */
  export type TitleOfDepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDepartments to fetch.
     */
    where?: TitleOfDepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDepartments to fetch.
     */
    orderBy?: TitleOfDepartmentsOrderByWithRelationInput | TitleOfDepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleOfDepartments.
     */
    cursor?: TitleOfDepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleOfDepartments.
     */
    distinct?: TitleOfDepartmentsScalarFieldEnum | TitleOfDepartmentsScalarFieldEnum[]
  }


  /**
   * TitleOfDepartments findMany
   */
  export type TitleOfDepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDepartments to fetch.
     */
    where?: TitleOfDepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDepartments to fetch.
     */
    orderBy?: TitleOfDepartmentsOrderByWithRelationInput | TitleOfDepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TitleOfDepartments.
     */
    cursor?: TitleOfDepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDepartments.
     */
    skip?: number
    distinct?: TitleOfDepartmentsScalarFieldEnum | TitleOfDepartmentsScalarFieldEnum[]
  }


  /**
   * TitleOfDepartments create
   */
  export type TitleOfDepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a TitleOfDepartments.
     */
    data: XOR<TitleOfDepartmentsCreateInput, TitleOfDepartmentsUncheckedCreateInput>
  }


  /**
   * TitleOfDepartments createMany
   */
  export type TitleOfDepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TitleOfDepartments.
     */
    data: TitleOfDepartmentsCreateManyInput | TitleOfDepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TitleOfDepartments update
   */
  export type TitleOfDepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a TitleOfDepartments.
     */
    data: XOR<TitleOfDepartmentsUpdateInput, TitleOfDepartmentsUncheckedUpdateInput>
    /**
     * Choose, which TitleOfDepartments to update.
     */
    where: TitleOfDepartmentsWhereUniqueInput
  }


  /**
   * TitleOfDepartments updateMany
   */
  export type TitleOfDepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TitleOfDepartments.
     */
    data: XOR<TitleOfDepartmentsUpdateManyMutationInput, TitleOfDepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which TitleOfDepartments to update
     */
    where?: TitleOfDepartmentsWhereInput
  }


  /**
   * TitleOfDepartments upsert
   */
  export type TitleOfDepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the TitleOfDepartments to update in case it exists.
     */
    where: TitleOfDepartmentsWhereUniqueInput
    /**
     * In case the TitleOfDepartments found by the `where` argument doesn't exist, create a new TitleOfDepartments with this data.
     */
    create: XOR<TitleOfDepartmentsCreateInput, TitleOfDepartmentsUncheckedCreateInput>
    /**
     * In case the TitleOfDepartments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TitleOfDepartmentsUpdateInput, TitleOfDepartmentsUncheckedUpdateInput>
  }


  /**
   * TitleOfDepartments delete
   */
  export type TitleOfDepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
    /**
     * Filter which TitleOfDepartments to delete.
     */
    where: TitleOfDepartmentsWhereUniqueInput
  }


  /**
   * TitleOfDepartments deleteMany
   */
  export type TitleOfDepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleOfDepartments to delete
     */
    where?: TitleOfDepartmentsWhereInput
  }


  /**
   * TitleOfDepartments.DepartmentManagement
   */
  export type TitleOfDepartments$DepartmentManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentManagements
     */
    select?: DepartmentManagementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DepartmentManagementsInclude<ExtArgs> | null
    where?: DepartmentManagementsWhereInput
    orderBy?: DepartmentManagementsOrderByWithRelationInput | DepartmentManagementsOrderByWithRelationInput[]
    cursor?: DepartmentManagementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentManagementsScalarFieldEnum | DepartmentManagementsScalarFieldEnum[]
  }


  /**
   * TitleOfDepartments without action
   */
  export type TitleOfDepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDepartments
     */
    select?: TitleOfDepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDepartmentsInclude<ExtArgs> | null
  }



  /**
   * Model UserIdentity
   */

  export type AggregateUserIdentity = {
    _count: UserIdentityCountAggregateOutputType | null
    _avg: UserIdentityAvgAggregateOutputType | null
    _sum: UserIdentitySumAggregateOutputType | null
    _min: UserIdentityMinAggregateOutputType | null
    _max: UserIdentityMaxAggregateOutputType | null
  }

  export type UserIdentityAvgAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleOfDivisionId: number | null
    DepartmentManagementId: number | null
  }

  export type UserIdentitySumAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleOfDivisionId: number | null
    DepartmentManagementId: number | null
  }

  export type UserIdentityMinAggregateOutputType = {
    id: number | null
    userId: string | null
    divisionId: number | null
    titleOfDivisionId: number | null
    DepartmentManagementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserIdentityMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    divisionId: number | null
    titleOfDivisionId: number | null
    DepartmentManagementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserIdentityCountAggregateOutputType = {
    id: number
    userId: number
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserIdentityAvgAggregateInputType = {
    id?: true
    divisionId?: true
    titleOfDivisionId?: true
    DepartmentManagementId?: true
  }

  export type UserIdentitySumAggregateInputType = {
    id?: true
    divisionId?: true
    titleOfDivisionId?: true
    DepartmentManagementId?: true
  }

  export type UserIdentityMinAggregateInputType = {
    id?: true
    userId?: true
    divisionId?: true
    titleOfDivisionId?: true
    DepartmentManagementId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserIdentityMaxAggregateInputType = {
    id?: true
    userId?: true
    divisionId?: true
    titleOfDivisionId?: true
    DepartmentManagementId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserIdentityCountAggregateInputType = {
    id?: true
    userId?: true
    divisionId?: true
    titleOfDivisionId?: true
    DepartmentManagementId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserIdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIdentity to aggregate.
     */
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     */
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserIdentities
    **/
    _count?: true | UserIdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserIdentityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserIdentitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserIdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserIdentityMaxAggregateInputType
  }

  export type GetUserIdentityAggregateType<T extends UserIdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserIdentity[P]>
      : GetScalarType<T[P], AggregateUserIdentity[P]>
  }




  export type UserIdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserIdentityWhereInput
    orderBy?: UserIdentityOrderByWithAggregationInput | UserIdentityOrderByWithAggregationInput[]
    by: UserIdentityScalarFieldEnum[] | UserIdentityScalarFieldEnum
    having?: UserIdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserIdentityCountAggregateInputType | true
    _avg?: UserIdentityAvgAggregateInputType
    _sum?: UserIdentitySumAggregateInputType
    _min?: UserIdentityMinAggregateInputType
    _max?: UserIdentityMaxAggregateInputType
  }

  export type UserIdentityGroupByOutputType = {
    id: number
    userId: string
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserIdentityCountAggregateOutputType | null
    _avg: UserIdentityAvgAggregateOutputType | null
    _sum: UserIdentitySumAggregateOutputType | null
    _min: UserIdentityMinAggregateOutputType | null
    _max: UserIdentityMaxAggregateOutputType | null
  }

  type GetUserIdentityGroupByPayload<T extends UserIdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserIdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserIdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserIdentityGroupByOutputType[P]>
            : GetScalarType<T[P], UserIdentityGroupByOutputType[P]>
        }
      >
    >


  export type UserIdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    divisionId?: boolean
    titleOfDivisionId?: boolean
    DepartmentManagementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    DepartmentManagement?: boolean | DepartmentManagementsDefaultArgs<ExtArgs>
    division?: boolean | DivisionsDefaultArgs<ExtArgs>
    titleOfDivision?: boolean | TitleOfDivisionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userIdentity"]>

  export type UserIdentitySelectScalar = {
    id?: boolean
    userId?: boolean
    divisionId?: boolean
    titleOfDivisionId?: boolean
    DepartmentManagementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserIdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    DepartmentManagement?: boolean | DepartmentManagementsDefaultArgs<ExtArgs>
    division?: boolean | DivisionsDefaultArgs<ExtArgs>
    titleOfDivision?: boolean | TitleOfDivisionsDefaultArgs<ExtArgs>
  }


  export type $UserIdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserIdentity"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      DepartmentManagement: Prisma.$DepartmentManagementsPayload<ExtArgs>
      division: Prisma.$DivisionsPayload<ExtArgs>
      titleOfDivision: Prisma.$TitleOfDivisionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      divisionId: number
      titleOfDivisionId: number
      DepartmentManagementId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["userIdentity"]>
    composites: {}
  }


  type UserIdentityGetPayload<S extends boolean | null | undefined | UserIdentityDefaultArgs> = $Result.GetResult<Prisma.$UserIdentityPayload, S>

  type UserIdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserIdentityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserIdentityCountAggregateInputType | true
    }

  export interface UserIdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserIdentity'], meta: { name: 'UserIdentity' } }
    /**
     * Find zero or one UserIdentity that matches the filter.
     * @param {UserIdentityFindUniqueArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserIdentityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityFindUniqueArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserIdentity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserIdentityFindUniqueOrThrowArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserIdentityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserIdentity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindFirstArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserIdentityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityFindFirstArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserIdentity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindFirstOrThrowArgs} args - Arguments to find a UserIdentity
     * @example
     * // Get one UserIdentity
     * const userIdentity = await prisma.userIdentity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserIdentityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserIdentities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserIdentities
     * const userIdentities = await prisma.userIdentity.findMany()
     * 
     * // Get first 10 UserIdentities
     * const userIdentities = await prisma.userIdentity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userIdentityWithIdOnly = await prisma.userIdentity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserIdentityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserIdentity.
     * @param {UserIdentityCreateArgs} args - Arguments to create a UserIdentity.
     * @example
     * // Create one UserIdentity
     * const UserIdentity = await prisma.userIdentity.create({
     *   data: {
     *     // ... data to create a UserIdentity
     *   }
     * })
     * 
    **/
    create<T extends UserIdentityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityCreateArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserIdentities.
     *     @param {UserIdentityCreateManyArgs} args - Arguments to create many UserIdentities.
     *     @example
     *     // Create many UserIdentities
     *     const userIdentity = await prisma.userIdentity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserIdentityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserIdentity.
     * @param {UserIdentityDeleteArgs} args - Arguments to delete one UserIdentity.
     * @example
     * // Delete one UserIdentity
     * const UserIdentity = await prisma.userIdentity.delete({
     *   where: {
     *     // ... filter to delete one UserIdentity
     *   }
     * })
     * 
    **/
    delete<T extends UserIdentityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityDeleteArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserIdentity.
     * @param {UserIdentityUpdateArgs} args - Arguments to update one UserIdentity.
     * @example
     * // Update one UserIdentity
     * const userIdentity = await prisma.userIdentity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserIdentityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityUpdateArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserIdentities.
     * @param {UserIdentityDeleteManyArgs} args - Arguments to filter UserIdentities to delete.
     * @example
     * // Delete a few UserIdentities
     * const { count } = await prisma.userIdentity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserIdentityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserIdentityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserIdentities
     * const userIdentity = await prisma.userIdentity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserIdentityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserIdentity.
     * @param {UserIdentityUpsertArgs} args - Arguments to update or create a UserIdentity.
     * @example
     * // Update or create a UserIdentity
     * const userIdentity = await prisma.userIdentity.upsert({
     *   create: {
     *     // ... data to create a UserIdentity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserIdentity we want to update
     *   }
     * })
    **/
    upsert<T extends UserIdentityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserIdentityUpsertArgs<ExtArgs>>
    ): Prisma__UserIdentityClient<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityCountArgs} args - Arguments to filter UserIdentities to count.
     * @example
     * // Count the number of UserIdentities
     * const count = await prisma.userIdentity.count({
     *   where: {
     *     // ... the filter for the UserIdentities we want to count
     *   }
     * })
    **/
    count<T extends UserIdentityCountArgs>(
      args?: Subset<T, UserIdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserIdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserIdentityAggregateArgs>(args: Subset<T, UserIdentityAggregateArgs>): Prisma.PrismaPromise<GetUserIdentityAggregateType<T>>

    /**
     * Group by UserIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserIdentityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserIdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserIdentityGroupByArgs['orderBy'] }
        : { orderBy?: UserIdentityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserIdentity model
   */
  readonly fields: UserIdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserIdentity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserIdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    DepartmentManagement<T extends DepartmentManagementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentManagementsDefaultArgs<ExtArgs>>): Prisma__DepartmentManagementsClient<$Result.GetResult<Prisma.$DepartmentManagementsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    division<T extends DivisionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionsDefaultArgs<ExtArgs>>): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    titleOfDivision<T extends TitleOfDivisionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDivisionsDefaultArgs<ExtArgs>>): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserIdentity model
   */ 
  interface UserIdentityFieldRefs {
    readonly id: FieldRef<"UserIdentity", 'Int'>
    readonly userId: FieldRef<"UserIdentity", 'String'>
    readonly divisionId: FieldRef<"UserIdentity", 'Int'>
    readonly titleOfDivisionId: FieldRef<"UserIdentity", 'Int'>
    readonly DepartmentManagementId: FieldRef<"UserIdentity", 'Int'>
    readonly createdAt: FieldRef<"UserIdentity", 'DateTime'>
    readonly updatedAt: FieldRef<"UserIdentity", 'DateTime'>
    readonly deletedAt: FieldRef<"UserIdentity", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserIdentity findUnique
   */
  export type UserIdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter, which UserIdentity to fetch.
     */
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity findUniqueOrThrow
   */
  export type UserIdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter, which UserIdentity to fetch.
     */
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity findFirst
   */
  export type UserIdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter, which UserIdentity to fetch.
     */
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     */
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIdentities.
     */
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIdentities.
     */
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * UserIdentity findFirstOrThrow
   */
  export type UserIdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter, which UserIdentity to fetch.
     */
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     */
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserIdentities.
     */
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserIdentities.
     */
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * UserIdentity findMany
   */
  export type UserIdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter, which UserIdentities to fetch.
     */
    where?: UserIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserIdentities to fetch.
     */
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserIdentities.
     */
    cursor?: UserIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserIdentities.
     */
    skip?: number
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * UserIdentity create
   */
  export type UserIdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserIdentity.
     */
    data: XOR<UserIdentityCreateInput, UserIdentityUncheckedCreateInput>
  }


  /**
   * UserIdentity createMany
   */
  export type UserIdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserIdentities.
     */
    data: UserIdentityCreateManyInput | UserIdentityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserIdentity update
   */
  export type UserIdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserIdentity.
     */
    data: XOR<UserIdentityUpdateInput, UserIdentityUncheckedUpdateInput>
    /**
     * Choose, which UserIdentity to update.
     */
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity updateMany
   */
  export type UserIdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserIdentities.
     */
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyInput>
    /**
     * Filter which UserIdentities to update
     */
    where?: UserIdentityWhereInput
  }


  /**
   * UserIdentity upsert
   */
  export type UserIdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserIdentity to update in case it exists.
     */
    where: UserIdentityWhereUniqueInput
    /**
     * In case the UserIdentity found by the `where` argument doesn't exist, create a new UserIdentity with this data.
     */
    create: XOR<UserIdentityCreateInput, UserIdentityUncheckedCreateInput>
    /**
     * In case the UserIdentity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserIdentityUpdateInput, UserIdentityUncheckedUpdateInput>
  }


  /**
   * UserIdentity delete
   */
  export type UserIdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    /**
     * Filter which UserIdentity to delete.
     */
    where: UserIdentityWhereUniqueInput
  }


  /**
   * UserIdentity deleteMany
   */
  export type UserIdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserIdentities to delete
     */
    where?: UserIdentityWhereInput
  }


  /**
   * UserIdentity without action
   */
  export type UserIdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
  }



  /**
   * Model Divisions
   */

  export type AggregateDivisions = {
    _count: DivisionsCountAggregateOutputType | null
    _avg: DivisionsAvgAggregateOutputType | null
    _sum: DivisionsSumAggregateOutputType | null
    _min: DivisionsMinAggregateOutputType | null
    _max: DivisionsMaxAggregateOutputType | null
  }

  export type DivisionsAvgAggregateOutputType = {
    id: number | null
  }

  export type DivisionsSumAggregateOutputType = {
    id: number | null
  }

  export type DivisionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DivisionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DivisionsCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DivisionsAvgAggregateInputType = {
    id?: true
  }

  export type DivisionsSumAggregateInputType = {
    id?: true
  }

  export type DivisionsMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DivisionsMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DivisionsCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DivisionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to aggregate.
     */
    where?: DivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionsOrderByWithRelationInput | DivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionsMaxAggregateInputType
  }

  export type GetDivisionsAggregateType<T extends DivisionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisions[P]>
      : GetScalarType<T[P], AggregateDivisions[P]>
  }




  export type DivisionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionsWhereInput
    orderBy?: DivisionsOrderByWithAggregationInput | DivisionsOrderByWithAggregationInput[]
    by: DivisionsScalarFieldEnum[] | DivisionsScalarFieldEnum
    having?: DivisionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionsCountAggregateInputType | true
    _avg?: DivisionsAvgAggregateInputType
    _sum?: DivisionsSumAggregateInputType
    _min?: DivisionsMinAggregateInputType
    _max?: DivisionsMaxAggregateInputType
  }

  export type DivisionsGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DivisionsCountAggregateOutputType | null
    _avg: DivisionsAvgAggregateOutputType | null
    _sum: DivisionsSumAggregateOutputType | null
    _min: DivisionsMinAggregateOutputType | null
    _max: DivisionsMaxAggregateOutputType | null
  }

  type GetDivisionsGroupByPayload<T extends DivisionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionsGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionsGroupByOutputType[P]>
        }
      >
    >


  export type DivisionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    UserIdentity?: boolean | Divisions$UserIdentityArgs<ExtArgs>
    DivisionManagement?: boolean | Divisions$DivisionManagementArgs<ExtArgs>
    _count?: boolean | DivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisions"]>

  export type DivisionsSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DivisionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserIdentity?: boolean | Divisions$UserIdentityArgs<ExtArgs>
    DivisionManagement?: boolean | Divisions$DivisionManagementArgs<ExtArgs>
    _count?: boolean | DivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DivisionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Divisions"
    objects: {
      UserIdentity: Prisma.$UserIdentityPayload<ExtArgs>[]
      DivisionManagement: Prisma.$DivisionsManagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["divisions"]>
    composites: {}
  }


  type DivisionsGetPayload<S extends boolean | null | undefined | DivisionsDefaultArgs> = $Result.GetResult<Prisma.$DivisionsPayload, S>

  type DivisionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DivisionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DivisionsCountAggregateInputType | true
    }

  export interface DivisionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Divisions'], meta: { name: 'Divisions' } }
    /**
     * Find zero or one Divisions that matches the filter.
     * @param {DivisionsFindUniqueArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DivisionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsFindUniqueArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Divisions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DivisionsFindUniqueOrThrowArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DivisionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsFindFirstArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DivisionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsFindFirstArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Divisions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsFindFirstOrThrowArgs} args - Arguments to find a Divisions
     * @example
     * // Get one Divisions
     * const divisions = await prisma.divisions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DivisionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.divisions.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.divisions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionsWithIdOnly = await prisma.divisions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DivisionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Divisions.
     * @param {DivisionsCreateArgs} args - Arguments to create a Divisions.
     * @example
     * // Create one Divisions
     * const Divisions = await prisma.divisions.create({
     *   data: {
     *     // ... data to create a Divisions
     *   }
     * })
     * 
    **/
    create<T extends DivisionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsCreateArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Divisions.
     *     @param {DivisionsCreateManyArgs} args - Arguments to create many Divisions.
     *     @example
     *     // Create many Divisions
     *     const divisions = await prisma.divisions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DivisionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Divisions.
     * @param {DivisionsDeleteArgs} args - Arguments to delete one Divisions.
     * @example
     * // Delete one Divisions
     * const Divisions = await prisma.divisions.delete({
     *   where: {
     *     // ... filter to delete one Divisions
     *   }
     * })
     * 
    **/
    delete<T extends DivisionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsDeleteArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Divisions.
     * @param {DivisionsUpdateArgs} args - Arguments to update one Divisions.
     * @example
     * // Update one Divisions
     * const divisions = await prisma.divisions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DivisionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsUpdateArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionsDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.divisions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DivisionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const divisions = await prisma.divisions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DivisionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Divisions.
     * @param {DivisionsUpsertArgs} args - Arguments to update or create a Divisions.
     * @example
     * // Update or create a Divisions
     * const divisions = await prisma.divisions.upsert({
     *   create: {
     *     // ... data to create a Divisions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Divisions we want to update
     *   }
     * })
    **/
    upsert<T extends DivisionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsUpsertArgs<ExtArgs>>
    ): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.divisions.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionsCountArgs>(
      args?: Subset<T, DivisionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivisionsAggregateArgs>(args: Subset<T, DivisionsAggregateArgs>): Prisma.PrismaPromise<GetDivisionsAggregateType<T>>

    /**
     * Group by Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DivisionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionsGroupByArgs['orderBy'] }
        : { orderBy?: DivisionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DivisionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Divisions model
   */
  readonly fields: DivisionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Divisions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    UserIdentity<T extends Divisions$UserIdentityArgs<ExtArgs> = {}>(args?: Subset<T, Divisions$UserIdentityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findMany'> | Null>;

    DivisionManagement<T extends Divisions$DivisionManagementArgs<ExtArgs> = {}>(args?: Subset<T, Divisions$DivisionManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Divisions model
   */ 
  interface DivisionsFieldRefs {
    readonly id: FieldRef<"Divisions", 'Int'>
    readonly name: FieldRef<"Divisions", 'String'>
    readonly isActive: FieldRef<"Divisions", 'Boolean'>
    readonly createdAt: FieldRef<"Divisions", 'DateTime'>
    readonly updatedAt: FieldRef<"Divisions", 'DateTime'>
    readonly deletedAt: FieldRef<"Divisions", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Divisions findUnique
   */
  export type DivisionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where: DivisionsWhereUniqueInput
  }


  /**
   * Divisions findUniqueOrThrow
   */
  export type DivisionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where: DivisionsWhereUniqueInput
  }


  /**
   * Divisions findFirst
   */
  export type DivisionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionsOrderByWithRelationInput | DivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }


  /**
   * Divisions findFirstOrThrow
   */
  export type DivisionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionsOrderByWithRelationInput | DivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }


  /**
   * Divisions findMany
   */
  export type DivisionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionsOrderByWithRelationInput | DivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    distinct?: DivisionsScalarFieldEnum | DivisionsScalarFieldEnum[]
  }


  /**
   * Divisions create
   */
  export type DivisionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Divisions.
     */
    data: XOR<DivisionsCreateInput, DivisionsUncheckedCreateInput>
  }


  /**
   * Divisions createMany
   */
  export type DivisionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionsCreateManyInput | DivisionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Divisions update
   */
  export type DivisionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Divisions.
     */
    data: XOR<DivisionsUpdateInput, DivisionsUncheckedUpdateInput>
    /**
     * Choose, which Divisions to update.
     */
    where: DivisionsWhereUniqueInput
  }


  /**
   * Divisions updateMany
   */
  export type DivisionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionsUpdateManyMutationInput, DivisionsUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionsWhereInput
  }


  /**
   * Divisions upsert
   */
  export type DivisionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Divisions to update in case it exists.
     */
    where: DivisionsWhereUniqueInput
    /**
     * In case the Divisions found by the `where` argument doesn't exist, create a new Divisions with this data.
     */
    create: XOR<DivisionsCreateInput, DivisionsUncheckedCreateInput>
    /**
     * In case the Divisions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionsUpdateInput, DivisionsUncheckedUpdateInput>
  }


  /**
   * Divisions delete
   */
  export type DivisionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
    /**
     * Filter which Divisions to delete.
     */
    where: DivisionsWhereUniqueInput
  }


  /**
   * Divisions deleteMany
   */
  export type DivisionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionsWhereInput
  }


  /**
   * Divisions.UserIdentity
   */
  export type Divisions$UserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    where?: UserIdentityWhereInput
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    cursor?: UserIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * Divisions.DivisionManagement
   */
  export type Divisions$DivisionManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    where?: DivisionsManagementWhereInput
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    cursor?: DivisionsManagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisionsManagementScalarFieldEnum | DivisionsManagementScalarFieldEnum[]
  }


  /**
   * Divisions without action
   */
  export type DivisionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisions
     */
    select?: DivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsInclude<ExtArgs> | null
  }



  /**
   * Model DivisionsManagement
   */

  export type AggregateDivisionsManagement = {
    _count: DivisionsManagementCountAggregateOutputType | null
    _avg: DivisionsManagementAvgAggregateOutputType | null
    _sum: DivisionsManagementSumAggregateOutputType | null
    _min: DivisionsManagementMinAggregateOutputType | null
    _max: DivisionsManagementMaxAggregateOutputType | null
  }

  export type DivisionsManagementAvgAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleId: number | null
  }

  export type DivisionsManagementSumAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleId: number | null
  }

  export type DivisionsManagementMinAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DivisionsManagementMaxAggregateOutputType = {
    id: number | null
    divisionId: number | null
    titleId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DivisionsManagementCountAggregateOutputType = {
    id: number
    divisionId: number
    titleId: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DivisionsManagementAvgAggregateInputType = {
    id?: true
    divisionId?: true
    titleId?: true
  }

  export type DivisionsManagementSumAggregateInputType = {
    id?: true
    divisionId?: true
    titleId?: true
  }

  export type DivisionsManagementMinAggregateInputType = {
    id?: true
    divisionId?: true
    titleId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DivisionsManagementMaxAggregateInputType = {
    id?: true
    divisionId?: true
    titleId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DivisionsManagementCountAggregateInputType = {
    id?: true
    divisionId?: true
    titleId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DivisionsManagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivisionsManagement to aggregate.
     */
    where?: DivisionsManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisionsManagements to fetch.
     */
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionsManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisionsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisionsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DivisionsManagements
    **/
    _count?: true | DivisionsManagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionsManagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionsManagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionsManagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionsManagementMaxAggregateInputType
  }

  export type GetDivisionsManagementAggregateType<T extends DivisionsManagementAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisionsManagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisionsManagement[P]>
      : GetScalarType<T[P], AggregateDivisionsManagement[P]>
  }




  export type DivisionsManagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionsManagementWhereInput
    orderBy?: DivisionsManagementOrderByWithAggregationInput | DivisionsManagementOrderByWithAggregationInput[]
    by: DivisionsManagementScalarFieldEnum[] | DivisionsManagementScalarFieldEnum
    having?: DivisionsManagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionsManagementCountAggregateInputType | true
    _avg?: DivisionsManagementAvgAggregateInputType
    _sum?: DivisionsManagementSumAggregateInputType
    _min?: DivisionsManagementMinAggregateInputType
    _max?: DivisionsManagementMaxAggregateInputType
  }

  export type DivisionsManagementGroupByOutputType = {
    id: number
    divisionId: number
    titleId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DivisionsManagementCountAggregateOutputType | null
    _avg: DivisionsManagementAvgAggregateOutputType | null
    _sum: DivisionsManagementSumAggregateOutputType | null
    _min: DivisionsManagementMinAggregateOutputType | null
    _max: DivisionsManagementMaxAggregateOutputType | null
  }

  type GetDivisionsManagementGroupByPayload<T extends DivisionsManagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionsManagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionsManagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionsManagementGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionsManagementGroupByOutputType[P]>
        }
      >
    >


  export type DivisionsManagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    divisionId?: boolean
    titleId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    division?: boolean | DivisionsDefaultArgs<ExtArgs>
    title?: boolean | TitleOfDivisionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisionsManagement"]>

  export type DivisionsManagementSelectScalar = {
    id?: boolean
    divisionId?: boolean
    titleId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DivisionsManagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionsDefaultArgs<ExtArgs>
    title?: boolean | TitleOfDivisionsDefaultArgs<ExtArgs>
  }


  export type $DivisionsManagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DivisionsManagement"
    objects: {
      division: Prisma.$DivisionsPayload<ExtArgs>
      title: Prisma.$TitleOfDivisionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      divisionId: number
      titleId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["divisionsManagement"]>
    composites: {}
  }


  type DivisionsManagementGetPayload<S extends boolean | null | undefined | DivisionsManagementDefaultArgs> = $Result.GetResult<Prisma.$DivisionsManagementPayload, S>

  type DivisionsManagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DivisionsManagementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DivisionsManagementCountAggregateInputType | true
    }

  export interface DivisionsManagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DivisionsManagement'], meta: { name: 'DivisionsManagement' } }
    /**
     * Find zero or one DivisionsManagement that matches the filter.
     * @param {DivisionsManagementFindUniqueArgs} args - Arguments to find a DivisionsManagement
     * @example
     * // Get one DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DivisionsManagementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementFindUniqueArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DivisionsManagement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DivisionsManagementFindUniqueOrThrowArgs} args - Arguments to find a DivisionsManagement
     * @example
     * // Get one DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DivisionsManagementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DivisionsManagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementFindFirstArgs} args - Arguments to find a DivisionsManagement
     * @example
     * // Get one DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DivisionsManagementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementFindFirstArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DivisionsManagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementFindFirstOrThrowArgs} args - Arguments to find a DivisionsManagement
     * @example
     * // Get one DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DivisionsManagementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DivisionsManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DivisionsManagements
     * const divisionsManagements = await prisma.divisionsManagement.findMany()
     * 
     * // Get first 10 DivisionsManagements
     * const divisionsManagements = await prisma.divisionsManagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionsManagementWithIdOnly = await prisma.divisionsManagement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DivisionsManagementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DivisionsManagement.
     * @param {DivisionsManagementCreateArgs} args - Arguments to create a DivisionsManagement.
     * @example
     * // Create one DivisionsManagement
     * const DivisionsManagement = await prisma.divisionsManagement.create({
     *   data: {
     *     // ... data to create a DivisionsManagement
     *   }
     * })
     * 
    **/
    create<T extends DivisionsManagementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementCreateArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DivisionsManagements.
     *     @param {DivisionsManagementCreateManyArgs} args - Arguments to create many DivisionsManagements.
     *     @example
     *     // Create many DivisionsManagements
     *     const divisionsManagement = await prisma.divisionsManagement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DivisionsManagementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DivisionsManagement.
     * @param {DivisionsManagementDeleteArgs} args - Arguments to delete one DivisionsManagement.
     * @example
     * // Delete one DivisionsManagement
     * const DivisionsManagement = await prisma.divisionsManagement.delete({
     *   where: {
     *     // ... filter to delete one DivisionsManagement
     *   }
     * })
     * 
    **/
    delete<T extends DivisionsManagementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementDeleteArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DivisionsManagement.
     * @param {DivisionsManagementUpdateArgs} args - Arguments to update one DivisionsManagement.
     * @example
     * // Update one DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DivisionsManagementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementUpdateArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DivisionsManagements.
     * @param {DivisionsManagementDeleteManyArgs} args - Arguments to filter DivisionsManagements to delete.
     * @example
     * // Delete a few DivisionsManagements
     * const { count } = await prisma.divisionsManagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DivisionsManagementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionsManagementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DivisionsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DivisionsManagements
     * const divisionsManagement = await prisma.divisionsManagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DivisionsManagementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DivisionsManagement.
     * @param {DivisionsManagementUpsertArgs} args - Arguments to update or create a DivisionsManagement.
     * @example
     * // Update or create a DivisionsManagement
     * const divisionsManagement = await prisma.divisionsManagement.upsert({
     *   create: {
     *     // ... data to create a DivisionsManagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DivisionsManagement we want to update
     *   }
     * })
    **/
    upsert<T extends DivisionsManagementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionsManagementUpsertArgs<ExtArgs>>
    ): Prisma__DivisionsManagementClient<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DivisionsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementCountArgs} args - Arguments to filter DivisionsManagements to count.
     * @example
     * // Count the number of DivisionsManagements
     * const count = await prisma.divisionsManagement.count({
     *   where: {
     *     // ... the filter for the DivisionsManagements we want to count
     *   }
     * })
    **/
    count<T extends DivisionsManagementCountArgs>(
      args?: Subset<T, DivisionsManagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionsManagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DivisionsManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DivisionsManagementAggregateArgs>(args: Subset<T, DivisionsManagementAggregateArgs>): Prisma.PrismaPromise<GetDivisionsManagementAggregateType<T>>

    /**
     * Group by DivisionsManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionsManagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DivisionsManagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionsManagementGroupByArgs['orderBy'] }
        : { orderBy?: DivisionsManagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DivisionsManagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionsManagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DivisionsManagement model
   */
  readonly fields: DivisionsManagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DivisionsManagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionsManagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    division<T extends DivisionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionsDefaultArgs<ExtArgs>>): Prisma__DivisionsClient<$Result.GetResult<Prisma.$DivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    title<T extends TitleOfDivisionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDivisionsDefaultArgs<ExtArgs>>): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DivisionsManagement model
   */ 
  interface DivisionsManagementFieldRefs {
    readonly id: FieldRef<"DivisionsManagement", 'Int'>
    readonly divisionId: FieldRef<"DivisionsManagement", 'Int'>
    readonly titleId: FieldRef<"DivisionsManagement", 'Int'>
    readonly isActive: FieldRef<"DivisionsManagement", 'Boolean'>
    readonly createdAt: FieldRef<"DivisionsManagement", 'DateTime'>
    readonly updatedAt: FieldRef<"DivisionsManagement", 'DateTime'>
    readonly deletedAt: FieldRef<"DivisionsManagement", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DivisionsManagement findUnique
   */
  export type DivisionsManagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter, which DivisionsManagement to fetch.
     */
    where: DivisionsManagementWhereUniqueInput
  }


  /**
   * DivisionsManagement findUniqueOrThrow
   */
  export type DivisionsManagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter, which DivisionsManagement to fetch.
     */
    where: DivisionsManagementWhereUniqueInput
  }


  /**
   * DivisionsManagement findFirst
   */
  export type DivisionsManagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter, which DivisionsManagement to fetch.
     */
    where?: DivisionsManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisionsManagements to fetch.
     */
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivisionsManagements.
     */
    cursor?: DivisionsManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisionsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisionsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivisionsManagements.
     */
    distinct?: DivisionsManagementScalarFieldEnum | DivisionsManagementScalarFieldEnum[]
  }


  /**
   * DivisionsManagement findFirstOrThrow
   */
  export type DivisionsManagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter, which DivisionsManagement to fetch.
     */
    where?: DivisionsManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisionsManagements to fetch.
     */
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DivisionsManagements.
     */
    cursor?: DivisionsManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisionsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisionsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DivisionsManagements.
     */
    distinct?: DivisionsManagementScalarFieldEnum | DivisionsManagementScalarFieldEnum[]
  }


  /**
   * DivisionsManagement findMany
   */
  export type DivisionsManagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter, which DivisionsManagements to fetch.
     */
    where?: DivisionsManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DivisionsManagements to fetch.
     */
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DivisionsManagements.
     */
    cursor?: DivisionsManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DivisionsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DivisionsManagements.
     */
    skip?: number
    distinct?: DivisionsManagementScalarFieldEnum | DivisionsManagementScalarFieldEnum[]
  }


  /**
   * DivisionsManagement create
   */
  export type DivisionsManagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * The data needed to create a DivisionsManagement.
     */
    data: XOR<DivisionsManagementCreateInput, DivisionsManagementUncheckedCreateInput>
  }


  /**
   * DivisionsManagement createMany
   */
  export type DivisionsManagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DivisionsManagements.
     */
    data: DivisionsManagementCreateManyInput | DivisionsManagementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DivisionsManagement update
   */
  export type DivisionsManagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * The data needed to update a DivisionsManagement.
     */
    data: XOR<DivisionsManagementUpdateInput, DivisionsManagementUncheckedUpdateInput>
    /**
     * Choose, which DivisionsManagement to update.
     */
    where: DivisionsManagementWhereUniqueInput
  }


  /**
   * DivisionsManagement updateMany
   */
  export type DivisionsManagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DivisionsManagements.
     */
    data: XOR<DivisionsManagementUpdateManyMutationInput, DivisionsManagementUncheckedUpdateManyInput>
    /**
     * Filter which DivisionsManagements to update
     */
    where?: DivisionsManagementWhereInput
  }


  /**
   * DivisionsManagement upsert
   */
  export type DivisionsManagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * The filter to search for the DivisionsManagement to update in case it exists.
     */
    where: DivisionsManagementWhereUniqueInput
    /**
     * In case the DivisionsManagement found by the `where` argument doesn't exist, create a new DivisionsManagement with this data.
     */
    create: XOR<DivisionsManagementCreateInput, DivisionsManagementUncheckedCreateInput>
    /**
     * In case the DivisionsManagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionsManagementUpdateInput, DivisionsManagementUncheckedUpdateInput>
  }


  /**
   * DivisionsManagement delete
   */
  export type DivisionsManagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    /**
     * Filter which DivisionsManagement to delete.
     */
    where: DivisionsManagementWhereUniqueInput
  }


  /**
   * DivisionsManagement deleteMany
   */
  export type DivisionsManagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DivisionsManagements to delete
     */
    where?: DivisionsManagementWhereInput
  }


  /**
   * DivisionsManagement without action
   */
  export type DivisionsManagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
  }



  /**
   * Model TitleOfDivisions
   */

  export type AggregateTitleOfDivisions = {
    _count: TitleOfDivisionsCountAggregateOutputType | null
    _avg: TitleOfDivisionsAvgAggregateOutputType | null
    _sum: TitleOfDivisionsSumAggregateOutputType | null
    _min: TitleOfDivisionsMinAggregateOutputType | null
    _max: TitleOfDivisionsMaxAggregateOutputType | null
  }

  export type TitleOfDivisionsAvgAggregateOutputType = {
    id: number | null
  }

  export type TitleOfDivisionsSumAggregateOutputType = {
    id: number | null
  }

  export type TitleOfDivisionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    isLeader: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TitleOfDivisionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isLeader: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TitleOfDivisionsCountAggregateOutputType = {
    id: number
    name: number
    isLeader: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TitleOfDivisionsAvgAggregateInputType = {
    id?: true
  }

  export type TitleOfDivisionsSumAggregateInputType = {
    id?: true
  }

  export type TitleOfDivisionsMinAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TitleOfDivisionsMaxAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TitleOfDivisionsCountAggregateInputType = {
    id?: true
    name?: true
    isLeader?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TitleOfDivisionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleOfDivisions to aggregate.
     */
    where?: TitleOfDivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDivisions to fetch.
     */
    orderBy?: TitleOfDivisionsOrderByWithRelationInput | TitleOfDivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TitleOfDivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDivisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDivisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TitleOfDivisions
    **/
    _count?: true | TitleOfDivisionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TitleOfDivisionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TitleOfDivisionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TitleOfDivisionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TitleOfDivisionsMaxAggregateInputType
  }

  export type GetTitleOfDivisionsAggregateType<T extends TitleOfDivisionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTitleOfDivisions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitleOfDivisions[P]>
      : GetScalarType<T[P], AggregateTitleOfDivisions[P]>
  }




  export type TitleOfDivisionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TitleOfDivisionsWhereInput
    orderBy?: TitleOfDivisionsOrderByWithAggregationInput | TitleOfDivisionsOrderByWithAggregationInput[]
    by: TitleOfDivisionsScalarFieldEnum[] | TitleOfDivisionsScalarFieldEnum
    having?: TitleOfDivisionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TitleOfDivisionsCountAggregateInputType | true
    _avg?: TitleOfDivisionsAvgAggregateInputType
    _sum?: TitleOfDivisionsSumAggregateInputType
    _min?: TitleOfDivisionsMinAggregateInputType
    _max?: TitleOfDivisionsMaxAggregateInputType
  }

  export type TitleOfDivisionsGroupByOutputType = {
    id: number
    name: string
    isLeader: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TitleOfDivisionsCountAggregateOutputType | null
    _avg: TitleOfDivisionsAvgAggregateOutputType | null
    _sum: TitleOfDivisionsSumAggregateOutputType | null
    _min: TitleOfDivisionsMinAggregateOutputType | null
    _max: TitleOfDivisionsMaxAggregateOutputType | null
  }

  type GetTitleOfDivisionsGroupByPayload<T extends TitleOfDivisionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TitleOfDivisionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TitleOfDivisionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TitleOfDivisionsGroupByOutputType[P]>
            : GetScalarType<T[P], TitleOfDivisionsGroupByOutputType[P]>
        }
      >
    >


  export type TitleOfDivisionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isLeader?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    DivisionManagement?: boolean | TitleOfDivisions$DivisionManagementArgs<ExtArgs>
    UserIdentity?: boolean | TitleOfDivisions$UserIdentityArgs<ExtArgs>
    _count?: boolean | TitleOfDivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titleOfDivisions"]>

  export type TitleOfDivisionsSelectScalar = {
    id?: boolean
    name?: boolean
    isLeader?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TitleOfDivisionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DivisionManagement?: boolean | TitleOfDivisions$DivisionManagementArgs<ExtArgs>
    UserIdentity?: boolean | TitleOfDivisions$UserIdentityArgs<ExtArgs>
    _count?: boolean | TitleOfDivisionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TitleOfDivisionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TitleOfDivisions"
    objects: {
      DivisionManagement: Prisma.$DivisionsManagementPayload<ExtArgs>[]
      UserIdentity: Prisma.$UserIdentityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isLeader: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["titleOfDivisions"]>
    composites: {}
  }


  type TitleOfDivisionsGetPayload<S extends boolean | null | undefined | TitleOfDivisionsDefaultArgs> = $Result.GetResult<Prisma.$TitleOfDivisionsPayload, S>

  type TitleOfDivisionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TitleOfDivisionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TitleOfDivisionsCountAggregateInputType | true
    }

  export interface TitleOfDivisionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TitleOfDivisions'], meta: { name: 'TitleOfDivisions' } }
    /**
     * Find zero or one TitleOfDivisions that matches the filter.
     * @param {TitleOfDivisionsFindUniqueArgs} args - Arguments to find a TitleOfDivisions
     * @example
     * // Get one TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TitleOfDivisionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsFindUniqueArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TitleOfDivisions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TitleOfDivisionsFindUniqueOrThrowArgs} args - Arguments to find a TitleOfDivisions
     * @example
     * // Get one TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TitleOfDivisionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TitleOfDivisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsFindFirstArgs} args - Arguments to find a TitleOfDivisions
     * @example
     * // Get one TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TitleOfDivisionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsFindFirstArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TitleOfDivisions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsFindFirstOrThrowArgs} args - Arguments to find a TitleOfDivisions
     * @example
     * // Get one TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TitleOfDivisionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TitleOfDivisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findMany()
     * 
     * // Get first 10 TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const titleOfDivisionsWithIdOnly = await prisma.titleOfDivisions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TitleOfDivisionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TitleOfDivisions.
     * @param {TitleOfDivisionsCreateArgs} args - Arguments to create a TitleOfDivisions.
     * @example
     * // Create one TitleOfDivisions
     * const TitleOfDivisions = await prisma.titleOfDivisions.create({
     *   data: {
     *     // ... data to create a TitleOfDivisions
     *   }
     * })
     * 
    **/
    create<T extends TitleOfDivisionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsCreateArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TitleOfDivisions.
     *     @param {TitleOfDivisionsCreateManyArgs} args - Arguments to create many TitleOfDivisions.
     *     @example
     *     // Create many TitleOfDivisions
     *     const titleOfDivisions = await prisma.titleOfDivisions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TitleOfDivisionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TitleOfDivisions.
     * @param {TitleOfDivisionsDeleteArgs} args - Arguments to delete one TitleOfDivisions.
     * @example
     * // Delete one TitleOfDivisions
     * const TitleOfDivisions = await prisma.titleOfDivisions.delete({
     *   where: {
     *     // ... filter to delete one TitleOfDivisions
     *   }
     * })
     * 
    **/
    delete<T extends TitleOfDivisionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsDeleteArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TitleOfDivisions.
     * @param {TitleOfDivisionsUpdateArgs} args - Arguments to update one TitleOfDivisions.
     * @example
     * // Update one TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TitleOfDivisionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsUpdateArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TitleOfDivisions.
     * @param {TitleOfDivisionsDeleteManyArgs} args - Arguments to filter TitleOfDivisions to delete.
     * @example
     * // Delete a few TitleOfDivisions
     * const { count } = await prisma.titleOfDivisions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TitleOfDivisionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TitleOfDivisionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TitleOfDivisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TitleOfDivisionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TitleOfDivisions.
     * @param {TitleOfDivisionsUpsertArgs} args - Arguments to update or create a TitleOfDivisions.
     * @example
     * // Update or create a TitleOfDivisions
     * const titleOfDivisions = await prisma.titleOfDivisions.upsert({
     *   create: {
     *     // ... data to create a TitleOfDivisions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TitleOfDivisions we want to update
     *   }
     * })
    **/
    upsert<T extends TitleOfDivisionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TitleOfDivisionsUpsertArgs<ExtArgs>>
    ): Prisma__TitleOfDivisionsClient<$Result.GetResult<Prisma.$TitleOfDivisionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TitleOfDivisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsCountArgs} args - Arguments to filter TitleOfDivisions to count.
     * @example
     * // Count the number of TitleOfDivisions
     * const count = await prisma.titleOfDivisions.count({
     *   where: {
     *     // ... the filter for the TitleOfDivisions we want to count
     *   }
     * })
    **/
    count<T extends TitleOfDivisionsCountArgs>(
      args?: Subset<T, TitleOfDivisionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TitleOfDivisionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TitleOfDivisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TitleOfDivisionsAggregateArgs>(args: Subset<T, TitleOfDivisionsAggregateArgs>): Prisma.PrismaPromise<GetTitleOfDivisionsAggregateType<T>>

    /**
     * Group by TitleOfDivisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TitleOfDivisionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TitleOfDivisionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TitleOfDivisionsGroupByArgs['orderBy'] }
        : { orderBy?: TitleOfDivisionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TitleOfDivisionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTitleOfDivisionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TitleOfDivisions model
   */
  readonly fields: TitleOfDivisionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TitleOfDivisions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TitleOfDivisionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    DivisionManagement<T extends TitleOfDivisions$DivisionManagementArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDivisions$DivisionManagementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionsManagementPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserIdentity<T extends TitleOfDivisions$UserIdentityArgs<ExtArgs> = {}>(args?: Subset<T, TitleOfDivisions$UserIdentityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserIdentityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TitleOfDivisions model
   */ 
  interface TitleOfDivisionsFieldRefs {
    readonly id: FieldRef<"TitleOfDivisions", 'Int'>
    readonly name: FieldRef<"TitleOfDivisions", 'String'>
    readonly isLeader: FieldRef<"TitleOfDivisions", 'Boolean'>
    readonly isActive: FieldRef<"TitleOfDivisions", 'Boolean'>
    readonly createdAt: FieldRef<"TitleOfDivisions", 'DateTime'>
    readonly updatedAt: FieldRef<"TitleOfDivisions", 'DateTime'>
    readonly deletedAt: FieldRef<"TitleOfDivisions", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TitleOfDivisions findUnique
   */
  export type TitleOfDivisionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDivisions to fetch.
     */
    where: TitleOfDivisionsWhereUniqueInput
  }


  /**
   * TitleOfDivisions findUniqueOrThrow
   */
  export type TitleOfDivisionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDivisions to fetch.
     */
    where: TitleOfDivisionsWhereUniqueInput
  }


  /**
   * TitleOfDivisions findFirst
   */
  export type TitleOfDivisionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDivisions to fetch.
     */
    where?: TitleOfDivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDivisions to fetch.
     */
    orderBy?: TitleOfDivisionsOrderByWithRelationInput | TitleOfDivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleOfDivisions.
     */
    cursor?: TitleOfDivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDivisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDivisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleOfDivisions.
     */
    distinct?: TitleOfDivisionsScalarFieldEnum | TitleOfDivisionsScalarFieldEnum[]
  }


  /**
   * TitleOfDivisions findFirstOrThrow
   */
  export type TitleOfDivisionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDivisions to fetch.
     */
    where?: TitleOfDivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDivisions to fetch.
     */
    orderBy?: TitleOfDivisionsOrderByWithRelationInput | TitleOfDivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TitleOfDivisions.
     */
    cursor?: TitleOfDivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDivisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDivisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TitleOfDivisions.
     */
    distinct?: TitleOfDivisionsScalarFieldEnum | TitleOfDivisionsScalarFieldEnum[]
  }


  /**
   * TitleOfDivisions findMany
   */
  export type TitleOfDivisionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter, which TitleOfDivisions to fetch.
     */
    where?: TitleOfDivisionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TitleOfDivisions to fetch.
     */
    orderBy?: TitleOfDivisionsOrderByWithRelationInput | TitleOfDivisionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TitleOfDivisions.
     */
    cursor?: TitleOfDivisionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TitleOfDivisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TitleOfDivisions.
     */
    skip?: number
    distinct?: TitleOfDivisionsScalarFieldEnum | TitleOfDivisionsScalarFieldEnum[]
  }


  /**
   * TitleOfDivisions create
   */
  export type TitleOfDivisionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * The data needed to create a TitleOfDivisions.
     */
    data: XOR<TitleOfDivisionsCreateInput, TitleOfDivisionsUncheckedCreateInput>
  }


  /**
   * TitleOfDivisions createMany
   */
  export type TitleOfDivisionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TitleOfDivisions.
     */
    data: TitleOfDivisionsCreateManyInput | TitleOfDivisionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TitleOfDivisions update
   */
  export type TitleOfDivisionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * The data needed to update a TitleOfDivisions.
     */
    data: XOR<TitleOfDivisionsUpdateInput, TitleOfDivisionsUncheckedUpdateInput>
    /**
     * Choose, which TitleOfDivisions to update.
     */
    where: TitleOfDivisionsWhereUniqueInput
  }


  /**
   * TitleOfDivisions updateMany
   */
  export type TitleOfDivisionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TitleOfDivisions.
     */
    data: XOR<TitleOfDivisionsUpdateManyMutationInput, TitleOfDivisionsUncheckedUpdateManyInput>
    /**
     * Filter which TitleOfDivisions to update
     */
    where?: TitleOfDivisionsWhereInput
  }


  /**
   * TitleOfDivisions upsert
   */
  export type TitleOfDivisionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * The filter to search for the TitleOfDivisions to update in case it exists.
     */
    where: TitleOfDivisionsWhereUniqueInput
    /**
     * In case the TitleOfDivisions found by the `where` argument doesn't exist, create a new TitleOfDivisions with this data.
     */
    create: XOR<TitleOfDivisionsCreateInput, TitleOfDivisionsUncheckedCreateInput>
    /**
     * In case the TitleOfDivisions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TitleOfDivisionsUpdateInput, TitleOfDivisionsUncheckedUpdateInput>
  }


  /**
   * TitleOfDivisions delete
   */
  export type TitleOfDivisionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
    /**
     * Filter which TitleOfDivisions to delete.
     */
    where: TitleOfDivisionsWhereUniqueInput
  }


  /**
   * TitleOfDivisions deleteMany
   */
  export type TitleOfDivisionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TitleOfDivisions to delete
     */
    where?: TitleOfDivisionsWhereInput
  }


  /**
   * TitleOfDivisions.DivisionManagement
   */
  export type TitleOfDivisions$DivisionManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionsManagement
     */
    select?: DivisionsManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionsManagementInclude<ExtArgs> | null
    where?: DivisionsManagementWhereInput
    orderBy?: DivisionsManagementOrderByWithRelationInput | DivisionsManagementOrderByWithRelationInput[]
    cursor?: DivisionsManagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisionsManagementScalarFieldEnum | DivisionsManagementScalarFieldEnum[]
  }


  /**
   * TitleOfDivisions.UserIdentity
   */
  export type TitleOfDivisions$UserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserIdentity
     */
    select?: UserIdentitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserIdentityInclude<ExtArgs> | null
    where?: UserIdentityWhereInput
    orderBy?: UserIdentityOrderByWithRelationInput | UserIdentityOrderByWithRelationInput[]
    cursor?: UserIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserIdentityScalarFieldEnum | UserIdentityScalarFieldEnum[]
  }


  /**
   * TitleOfDivisions without action
   */
  export type TitleOfDivisionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TitleOfDivisions
     */
    select?: TitleOfDivisionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TitleOfDivisionsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const ApplicationAccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    applicationId: 'applicationId',
    roleId: 'roleId',
    isActive: 'isActive'
  };

  export type ApplicationAccessScalarFieldEnum = (typeof ApplicationAccessScalarFieldEnum)[keyof typeof ApplicationAccessScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    token: 'token',
    email: 'email',
    phoneNumber: 'phoneNumber',
    otp: 'otp',
    expiry: 'expiry'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const DepartmentManagementsScalarFieldEnum: {
    id: 'id',
    divisionId: 'divisionId',
    departmentId: 'departmentId',
    titleId: 'titleId',
    isProfitCenter: 'isProfitCenter',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DepartmentManagementsScalarFieldEnum = (typeof DepartmentManagementsScalarFieldEnum)[keyof typeof DepartmentManagementsScalarFieldEnum]


  export const TitleOfDepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isLeader: 'isLeader',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TitleOfDepartmentsScalarFieldEnum = (typeof TitleOfDepartmentsScalarFieldEnum)[keyof typeof TitleOfDepartmentsScalarFieldEnum]


  export const UserIdentityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    divisionId: 'divisionId',
    titleOfDivisionId: 'titleOfDivisionId',
    DepartmentManagementId: 'DepartmentManagementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserIdentityScalarFieldEnum = (typeof UserIdentityScalarFieldEnum)[keyof typeof UserIdentityScalarFieldEnum]


  export const DivisionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DivisionsScalarFieldEnum = (typeof DivisionsScalarFieldEnum)[keyof typeof DivisionsScalarFieldEnum]


  export const DivisionsManagementScalarFieldEnum: {
    id: 'id',
    divisionId: 'divisionId',
    titleId: 'titleId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DivisionsManagementScalarFieldEnum = (typeof DivisionsManagementScalarFieldEnum)[keyof typeof DivisionsManagementScalarFieldEnum]


  export const TitleOfDivisionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isLeader: 'isLeader',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TitleOfDivisionsScalarFieldEnum = (typeof TitleOfDivisionsScalarFieldEnum)[keyof typeof TitleOfDivisionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    isActive?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    UserIdentity?: UserIdentityListRelationFilter
    applicationAccess?: ApplicationAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    UserIdentity?: UserIdentityOrderByRelationAggregateInput
    applicationAccess?: ApplicationAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    isActive?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    UserIdentity?: UserIdentityListRelationFilter
    applicationAccess?: ApplicationAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    subCategories?: SubCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subCategories?: SubCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Category"> | Date | string | null
    subCategories?: SubCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    categoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SubCategory"> | Date | string | null
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_categoryId?: SubCategoryNameCategoryIdCompoundUniqueInput
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    categoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SubCategory"> | Date | string | null
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "id" | "name_categoryId">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    categoryId?: IntWithAggregatesFilter<"SubCategory"> | number
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    isActive?: BoolWithAggregatesFilter<"SubCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"SubCategory"> | Date | string | null
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    id?: StringFilter<"Applications"> | string
    name?: StringFilter<"Applications"> | string
    isActive?: BoolFilter<"Applications"> | boolean
    applicationAccess?: ApplicationAccessListRelationFilter
  }

  export type ApplicationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    applicationAccess?: ApplicationAccessOrderByRelationAggregateInput
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    name?: StringFilter<"Applications"> | string
    isActive?: BoolFilter<"Applications"> | boolean
    applicationAccess?: ApplicationAccessListRelationFilter
  }, "id">

  export type ApplicationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Applications"> | string
    name?: StringWithAggregatesFilter<"Applications"> | string
    isActive?: BoolWithAggregatesFilter<"Applications"> | boolean
  }

  export type ApplicationAccessWhereInput = {
    AND?: ApplicationAccessWhereInput | ApplicationAccessWhereInput[]
    OR?: ApplicationAccessWhereInput[]
    NOT?: ApplicationAccessWhereInput | ApplicationAccessWhereInput[]
    id?: StringFilter<"ApplicationAccess"> | string
    userId?: StringFilter<"ApplicationAccess"> | string
    applicationId?: StringFilter<"ApplicationAccess"> | string
    roleId?: IntFilter<"ApplicationAccess"> | number
    isActive?: BoolFilter<"ApplicationAccess"> | boolean
    application?: XOR<ApplicationsRelationFilter, ApplicationsWhereInput>
    role?: XOR<RolesRelationFilter, RolesWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ApplicationAccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    application?: ApplicationsOrderByWithRelationInput
    role?: RolesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ApplicationAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicationAccessWhereInput | ApplicationAccessWhereInput[]
    OR?: ApplicationAccessWhereInput[]
    NOT?: ApplicationAccessWhereInput | ApplicationAccessWhereInput[]
    userId?: StringFilter<"ApplicationAccess"> | string
    applicationId?: StringFilter<"ApplicationAccess"> | string
    roleId?: IntFilter<"ApplicationAccess"> | number
    isActive?: BoolFilter<"ApplicationAccess"> | boolean
    application?: XOR<ApplicationsRelationFilter, ApplicationsWhereInput>
    role?: XOR<RolesRelationFilter, RolesWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ApplicationAccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
    _count?: ApplicationAccessCountOrderByAggregateInput
    _avg?: ApplicationAccessAvgOrderByAggregateInput
    _max?: ApplicationAccessMaxOrderByAggregateInput
    _min?: ApplicationAccessMinOrderByAggregateInput
    _sum?: ApplicationAccessSumOrderByAggregateInput
  }

  export type ApplicationAccessScalarWhereWithAggregatesInput = {
    AND?: ApplicationAccessScalarWhereWithAggregatesInput | ApplicationAccessScalarWhereWithAggregatesInput[]
    OR?: ApplicationAccessScalarWhereWithAggregatesInput[]
    NOT?: ApplicationAccessScalarWhereWithAggregatesInput | ApplicationAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicationAccess"> | string
    userId?: StringWithAggregatesFilter<"ApplicationAccess"> | string
    applicationId?: StringWithAggregatesFilter<"ApplicationAccess"> | string
    roleId?: IntWithAggregatesFilter<"ApplicationAccess"> | number
    isActive?: BoolWithAggregatesFilter<"ApplicationAccess"> | boolean
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringFilter<"Roles"> | string
    isActive?: BoolFilter<"Roles"> | boolean
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    applicationAccess?: ApplicationAccessListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    applicationAccess?: ApplicationAccessOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    isActive?: BoolFilter<"Roles"> | boolean
    createdAt?: DateTimeFilter<"Roles"> | Date | string
    updatedAt?: DateTimeFilter<"Roles"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Roles"> | Date | string | null
    applicationAccess?: ApplicationAccessListRelationFilter
  }, "id" | "name">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringWithAggregatesFilter<"Roles"> | string
    isActive?: BoolWithAggregatesFilter<"Roles"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Roles"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Roles"> | Date | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    token?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    phoneNumber?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expiry?: DateTimeNullableFilter<"Otp"> | Date | string | null
  }

  export type OtpOrderByWithRelationInput = {
    token?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    otp?: SortOrder
    expiry?: SortOrderInput | SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    otp?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    phoneNumber?: StringFilter<"Otp"> | string
    expiry?: DateTimeNullableFilter<"Otp"> | Date | string | null
  }, "otp" | "token">

  export type OtpOrderByWithAggregationInput = {
    token?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    otp?: SortOrder
    expiry?: SortOrderInput | SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    phoneNumber?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    expiry?: DateTimeNullableWithAggregatesFilter<"Otp"> | Date | string | null
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: IntFilter<"Departments"> | number
    name?: StringFilter<"Departments"> | string
    isActive?: BoolFilter<"Departments"> | boolean
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Departments"> | Date | string | null
    DepartmentManagement?: DepartmentManagementsListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    DepartmentManagement?: DepartmentManagementsOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    isActive?: BoolFilter<"Departments"> | boolean
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Departments"> | Date | string | null
    DepartmentManagement?: DepartmentManagementsListRelationFilter
  }, "id" | "name">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _avg?: DepartmentsAvgOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
    _sum?: DepartmentsSumOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departments"> | number
    name?: StringWithAggregatesFilter<"Departments"> | string
    isActive?: BoolWithAggregatesFilter<"Departments"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Departments"> | Date | string | null
  }

  export type DepartmentManagementsWhereInput = {
    AND?: DepartmentManagementsWhereInput | DepartmentManagementsWhereInput[]
    OR?: DepartmentManagementsWhereInput[]
    NOT?: DepartmentManagementsWhereInput | DepartmentManagementsWhereInput[]
    id?: IntFilter<"DepartmentManagements"> | number
    divisionId?: IntFilter<"DepartmentManagements"> | number
    departmentId?: IntFilter<"DepartmentManagements"> | number
    titleId?: IntFilter<"DepartmentManagements"> | number
    isProfitCenter?: BoolFilter<"DepartmentManagements"> | boolean
    isActive?: BoolFilter<"DepartmentManagements"> | boolean
    createdAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    updatedAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DepartmentManagements"> | Date | string | null
    department?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
    title?: XOR<TitleOfDepartmentsRelationFilter, TitleOfDepartmentsWhereInput>
    UserIdentity?: UserIdentityListRelationFilter
  }

  export type DepartmentManagementsOrderByWithRelationInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
    isProfitCenter?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    department?: DepartmentsOrderByWithRelationInput
    title?: TitleOfDepartmentsOrderByWithRelationInput
    UserIdentity?: UserIdentityOrderByRelationAggregateInput
  }

  export type DepartmentManagementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartmentManagementsWhereInput | DepartmentManagementsWhereInput[]
    OR?: DepartmentManagementsWhereInput[]
    NOT?: DepartmentManagementsWhereInput | DepartmentManagementsWhereInput[]
    divisionId?: IntFilter<"DepartmentManagements"> | number
    departmentId?: IntFilter<"DepartmentManagements"> | number
    titleId?: IntFilter<"DepartmentManagements"> | number
    isProfitCenter?: BoolFilter<"DepartmentManagements"> | boolean
    isActive?: BoolFilter<"DepartmentManagements"> | boolean
    createdAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    updatedAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DepartmentManagements"> | Date | string | null
    department?: XOR<DepartmentsRelationFilter, DepartmentsWhereInput>
    title?: XOR<TitleOfDepartmentsRelationFilter, TitleOfDepartmentsWhereInput>
    UserIdentity?: UserIdentityListRelationFilter
  }, "id">

  export type DepartmentManagementsOrderByWithAggregationInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
    isProfitCenter?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DepartmentManagementsCountOrderByAggregateInput
    _avg?: DepartmentManagementsAvgOrderByAggregateInput
    _max?: DepartmentManagementsMaxOrderByAggregateInput
    _min?: DepartmentManagementsMinOrderByAggregateInput
    _sum?: DepartmentManagementsSumOrderByAggregateInput
  }

  export type DepartmentManagementsScalarWhereWithAggregatesInput = {
    AND?: DepartmentManagementsScalarWhereWithAggregatesInput | DepartmentManagementsScalarWhereWithAggregatesInput[]
    OR?: DepartmentManagementsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentManagementsScalarWhereWithAggregatesInput | DepartmentManagementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DepartmentManagements"> | number
    divisionId?: IntWithAggregatesFilter<"DepartmentManagements"> | number
    departmentId?: IntWithAggregatesFilter<"DepartmentManagements"> | number
    titleId?: IntWithAggregatesFilter<"DepartmentManagements"> | number
    isProfitCenter?: BoolWithAggregatesFilter<"DepartmentManagements"> | boolean
    isActive?: BoolWithAggregatesFilter<"DepartmentManagements"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DepartmentManagements"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DepartmentManagements"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DepartmentManagements"> | Date | string | null
  }

  export type TitleOfDepartmentsWhereInput = {
    AND?: TitleOfDepartmentsWhereInput | TitleOfDepartmentsWhereInput[]
    OR?: TitleOfDepartmentsWhereInput[]
    NOT?: TitleOfDepartmentsWhereInput | TitleOfDepartmentsWhereInput[]
    id?: IntFilter<"TitleOfDepartments"> | number
    name?: StringFilter<"TitleOfDepartments"> | string
    isLeader?: BoolFilter<"TitleOfDepartments"> | boolean
    isActive?: BoolFilter<"TitleOfDepartments"> | boolean
    createdAt?: DateTimeFilter<"TitleOfDepartments"> | Date | string
    updatedAt?: DateTimeFilter<"TitleOfDepartments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TitleOfDepartments"> | Date | string | null
    DepartmentManagement?: DepartmentManagementsListRelationFilter
  }

  export type TitleOfDepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    DepartmentManagement?: DepartmentManagementsOrderByRelationAggregateInput
  }

  export type TitleOfDepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TitleOfDepartmentsWhereInput | TitleOfDepartmentsWhereInput[]
    OR?: TitleOfDepartmentsWhereInput[]
    NOT?: TitleOfDepartmentsWhereInput | TitleOfDepartmentsWhereInput[]
    isLeader?: BoolFilter<"TitleOfDepartments"> | boolean
    isActive?: BoolFilter<"TitleOfDepartments"> | boolean
    createdAt?: DateTimeFilter<"TitleOfDepartments"> | Date | string
    updatedAt?: DateTimeFilter<"TitleOfDepartments"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TitleOfDepartments"> | Date | string | null
    DepartmentManagement?: DepartmentManagementsListRelationFilter
  }, "id" | "name">

  export type TitleOfDepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TitleOfDepartmentsCountOrderByAggregateInput
    _avg?: TitleOfDepartmentsAvgOrderByAggregateInput
    _max?: TitleOfDepartmentsMaxOrderByAggregateInput
    _min?: TitleOfDepartmentsMinOrderByAggregateInput
    _sum?: TitleOfDepartmentsSumOrderByAggregateInput
  }

  export type TitleOfDepartmentsScalarWhereWithAggregatesInput = {
    AND?: TitleOfDepartmentsScalarWhereWithAggregatesInput | TitleOfDepartmentsScalarWhereWithAggregatesInput[]
    OR?: TitleOfDepartmentsScalarWhereWithAggregatesInput[]
    NOT?: TitleOfDepartmentsScalarWhereWithAggregatesInput | TitleOfDepartmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TitleOfDepartments"> | number
    name?: StringWithAggregatesFilter<"TitleOfDepartments"> | string
    isLeader?: BoolWithAggregatesFilter<"TitleOfDepartments"> | boolean
    isActive?: BoolWithAggregatesFilter<"TitleOfDepartments"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TitleOfDepartments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TitleOfDepartments"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TitleOfDepartments"> | Date | string | null
  }

  export type UserIdentityWhereInput = {
    AND?: UserIdentityWhereInput | UserIdentityWhereInput[]
    OR?: UserIdentityWhereInput[]
    NOT?: UserIdentityWhereInput | UserIdentityWhereInput[]
    id?: IntFilter<"UserIdentity"> | number
    userId?: StringFilter<"UserIdentity"> | string
    divisionId?: IntFilter<"UserIdentity"> | number
    titleOfDivisionId?: IntFilter<"UserIdentity"> | number
    DepartmentManagementId?: IntFilter<"UserIdentity"> | number
    createdAt?: DateTimeFilter<"UserIdentity"> | Date | string
    updatedAt?: DateTimeFilter<"UserIdentity"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserIdentity"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    DepartmentManagement?: XOR<DepartmentManagementsRelationFilter, DepartmentManagementsWhereInput>
    division?: XOR<DivisionsRelationFilter, DivisionsWhereInput>
    titleOfDivision?: XOR<TitleOfDivisionsRelationFilter, TitleOfDivisionsWhereInput>
  }

  export type UserIdentityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    DepartmentManagement?: DepartmentManagementsOrderByWithRelationInput
    division?: DivisionsOrderByWithRelationInput
    titleOfDivision?: TitleOfDivisionsOrderByWithRelationInput
  }

  export type UserIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserIdentityWhereInput | UserIdentityWhereInput[]
    OR?: UserIdentityWhereInput[]
    NOT?: UserIdentityWhereInput | UserIdentityWhereInput[]
    userId?: StringFilter<"UserIdentity"> | string
    divisionId?: IntFilter<"UserIdentity"> | number
    titleOfDivisionId?: IntFilter<"UserIdentity"> | number
    DepartmentManagementId?: IntFilter<"UserIdentity"> | number
    createdAt?: DateTimeFilter<"UserIdentity"> | Date | string
    updatedAt?: DateTimeFilter<"UserIdentity"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserIdentity"> | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    DepartmentManagement?: XOR<DepartmentManagementsRelationFilter, DepartmentManagementsWhereInput>
    division?: XOR<DivisionsRelationFilter, DivisionsWhereInput>
    titleOfDivision?: XOR<TitleOfDivisionsRelationFilter, TitleOfDivisionsWhereInput>
  }, "id">

  export type UserIdentityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserIdentityCountOrderByAggregateInput
    _avg?: UserIdentityAvgOrderByAggregateInput
    _max?: UserIdentityMaxOrderByAggregateInput
    _min?: UserIdentityMinOrderByAggregateInput
    _sum?: UserIdentitySumOrderByAggregateInput
  }

  export type UserIdentityScalarWhereWithAggregatesInput = {
    AND?: UserIdentityScalarWhereWithAggregatesInput | UserIdentityScalarWhereWithAggregatesInput[]
    OR?: UserIdentityScalarWhereWithAggregatesInput[]
    NOT?: UserIdentityScalarWhereWithAggregatesInput | UserIdentityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserIdentity"> | number
    userId?: StringWithAggregatesFilter<"UserIdentity"> | string
    divisionId?: IntWithAggregatesFilter<"UserIdentity"> | number
    titleOfDivisionId?: IntWithAggregatesFilter<"UserIdentity"> | number
    DepartmentManagementId?: IntWithAggregatesFilter<"UserIdentity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserIdentity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserIdentity"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserIdentity"> | Date | string | null
  }

  export type DivisionsWhereInput = {
    AND?: DivisionsWhereInput | DivisionsWhereInput[]
    OR?: DivisionsWhereInput[]
    NOT?: DivisionsWhereInput | DivisionsWhereInput[]
    id?: IntFilter<"Divisions"> | number
    name?: StringFilter<"Divisions"> | string
    isActive?: BoolFilter<"Divisions"> | boolean
    createdAt?: DateTimeFilter<"Divisions"> | Date | string
    updatedAt?: DateTimeFilter<"Divisions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Divisions"> | Date | string | null
    UserIdentity?: UserIdentityListRelationFilter
    DivisionManagement?: DivisionsManagementListRelationFilter
  }

  export type DivisionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    UserIdentity?: UserIdentityOrderByRelationAggregateInput
    DivisionManagement?: DivisionsManagementOrderByRelationAggregateInput
  }

  export type DivisionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisionsWhereInput | DivisionsWhereInput[]
    OR?: DivisionsWhereInput[]
    NOT?: DivisionsWhereInput | DivisionsWhereInput[]
    name?: StringFilter<"Divisions"> | string
    isActive?: BoolFilter<"Divisions"> | boolean
    createdAt?: DateTimeFilter<"Divisions"> | Date | string
    updatedAt?: DateTimeFilter<"Divisions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Divisions"> | Date | string | null
    UserIdentity?: UserIdentityListRelationFilter
    DivisionManagement?: DivisionsManagementListRelationFilter
  }, "id">

  export type DivisionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DivisionsCountOrderByAggregateInput
    _avg?: DivisionsAvgOrderByAggregateInput
    _max?: DivisionsMaxOrderByAggregateInput
    _min?: DivisionsMinOrderByAggregateInput
    _sum?: DivisionsSumOrderByAggregateInput
  }

  export type DivisionsScalarWhereWithAggregatesInput = {
    AND?: DivisionsScalarWhereWithAggregatesInput | DivisionsScalarWhereWithAggregatesInput[]
    OR?: DivisionsScalarWhereWithAggregatesInput[]
    NOT?: DivisionsScalarWhereWithAggregatesInput | DivisionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Divisions"> | number
    name?: StringWithAggregatesFilter<"Divisions"> | string
    isActive?: BoolWithAggregatesFilter<"Divisions"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Divisions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Divisions"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Divisions"> | Date | string | null
  }

  export type DivisionsManagementWhereInput = {
    AND?: DivisionsManagementWhereInput | DivisionsManagementWhereInput[]
    OR?: DivisionsManagementWhereInput[]
    NOT?: DivisionsManagementWhereInput | DivisionsManagementWhereInput[]
    id?: IntFilter<"DivisionsManagement"> | number
    divisionId?: IntFilter<"DivisionsManagement"> | number
    titleId?: IntFilter<"DivisionsManagement"> | number
    isActive?: BoolFilter<"DivisionsManagement"> | boolean
    createdAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    updatedAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DivisionsManagement"> | Date | string | null
    division?: XOR<DivisionsRelationFilter, DivisionsWhereInput>
    title?: XOR<TitleOfDivisionsRelationFilter, TitleOfDivisionsWhereInput>
  }

  export type DivisionsManagementOrderByWithRelationInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    division?: DivisionsOrderByWithRelationInput
    title?: TitleOfDivisionsOrderByWithRelationInput
  }

  export type DivisionsManagementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisionsManagementWhereInput | DivisionsManagementWhereInput[]
    OR?: DivisionsManagementWhereInput[]
    NOT?: DivisionsManagementWhereInput | DivisionsManagementWhereInput[]
    divisionId?: IntFilter<"DivisionsManagement"> | number
    titleId?: IntFilter<"DivisionsManagement"> | number
    isActive?: BoolFilter<"DivisionsManagement"> | boolean
    createdAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    updatedAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DivisionsManagement"> | Date | string | null
    division?: XOR<DivisionsRelationFilter, DivisionsWhereInput>
    title?: XOR<TitleOfDivisionsRelationFilter, TitleOfDivisionsWhereInput>
  }, "id">

  export type DivisionsManagementOrderByWithAggregationInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DivisionsManagementCountOrderByAggregateInput
    _avg?: DivisionsManagementAvgOrderByAggregateInput
    _max?: DivisionsManagementMaxOrderByAggregateInput
    _min?: DivisionsManagementMinOrderByAggregateInput
    _sum?: DivisionsManagementSumOrderByAggregateInput
  }

  export type DivisionsManagementScalarWhereWithAggregatesInput = {
    AND?: DivisionsManagementScalarWhereWithAggregatesInput | DivisionsManagementScalarWhereWithAggregatesInput[]
    OR?: DivisionsManagementScalarWhereWithAggregatesInput[]
    NOT?: DivisionsManagementScalarWhereWithAggregatesInput | DivisionsManagementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DivisionsManagement"> | number
    divisionId?: IntWithAggregatesFilter<"DivisionsManagement"> | number
    titleId?: IntWithAggregatesFilter<"DivisionsManagement"> | number
    isActive?: BoolWithAggregatesFilter<"DivisionsManagement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DivisionsManagement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DivisionsManagement"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"DivisionsManagement"> | Date | string | null
  }

  export type TitleOfDivisionsWhereInput = {
    AND?: TitleOfDivisionsWhereInput | TitleOfDivisionsWhereInput[]
    OR?: TitleOfDivisionsWhereInput[]
    NOT?: TitleOfDivisionsWhereInput | TitleOfDivisionsWhereInput[]
    id?: IntFilter<"TitleOfDivisions"> | number
    name?: StringFilter<"TitleOfDivisions"> | string
    isLeader?: BoolFilter<"TitleOfDivisions"> | boolean
    isActive?: BoolFilter<"TitleOfDivisions"> | boolean
    createdAt?: DateTimeFilter<"TitleOfDivisions"> | Date | string
    updatedAt?: DateTimeFilter<"TitleOfDivisions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TitleOfDivisions"> | Date | string | null
    DivisionManagement?: DivisionsManagementListRelationFilter
    UserIdentity?: UserIdentityListRelationFilter
  }

  export type TitleOfDivisionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    DivisionManagement?: DivisionsManagementOrderByRelationAggregateInput
    UserIdentity?: UserIdentityOrderByRelationAggregateInput
  }

  export type TitleOfDivisionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TitleOfDivisionsWhereInput | TitleOfDivisionsWhereInput[]
    OR?: TitleOfDivisionsWhereInput[]
    NOT?: TitleOfDivisionsWhereInput | TitleOfDivisionsWhereInput[]
    isLeader?: BoolFilter<"TitleOfDivisions"> | boolean
    isActive?: BoolFilter<"TitleOfDivisions"> | boolean
    createdAt?: DateTimeFilter<"TitleOfDivisions"> | Date | string
    updatedAt?: DateTimeFilter<"TitleOfDivisions"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TitleOfDivisions"> | Date | string | null
    DivisionManagement?: DivisionsManagementListRelationFilter
    UserIdentity?: UserIdentityListRelationFilter
  }, "id" | "name">

  export type TitleOfDivisionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TitleOfDivisionsCountOrderByAggregateInput
    _avg?: TitleOfDivisionsAvgOrderByAggregateInput
    _max?: TitleOfDivisionsMaxOrderByAggregateInput
    _min?: TitleOfDivisionsMinOrderByAggregateInput
    _sum?: TitleOfDivisionsSumOrderByAggregateInput
  }

  export type TitleOfDivisionsScalarWhereWithAggregatesInput = {
    AND?: TitleOfDivisionsScalarWhereWithAggregatesInput | TitleOfDivisionsScalarWhereWithAggregatesInput[]
    OR?: TitleOfDivisionsScalarWhereWithAggregatesInput[]
    NOT?: TitleOfDivisionsScalarWhereWithAggregatesInput | TitleOfDivisionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TitleOfDivisions"> | number
    name?: StringWithAggregatesFilter<"TitleOfDivisions"> | string
    isLeader?: BoolWithAggregatesFilter<"TitleOfDivisions"> | boolean
    isActive?: BoolWithAggregatesFilter<"TitleOfDivisions"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TitleOfDivisions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TitleOfDivisions"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TitleOfDivisions"> | Date | string | null
  }

  export type UserCreateInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityCreateNestedManyWithoutUserInput
    applicationAccess?: ApplicationAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutUserInput
    applicationAccess?: ApplicationAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUpdateManyWithoutUserNestedInput
    applicationAccess?: ApplicationAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutUserNestedInput
    applicationAccess?: ApplicationAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subCategories?: SubCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subCategories?: SubCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subCategories?: SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubCategoryCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category: CategoryCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    categoryId: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    categoryId: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationsCreateInput = {
    id: string
    name: string
    isActive: boolean
    applicationAccess?: ApplicationAccessCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationsUncheckedCreateInput = {
    id: string
    name: string
    isActive: boolean
    applicationAccess?: ApplicationAccessUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    applicationAccess?: ApplicationAccessUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    applicationAccess?: ApplicationAccessUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationsCreateManyInput = {
    id: string
    name: string
    isActive: boolean
  }

  export type ApplicationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessCreateInput = {
    id: string
    isActive: boolean
    application: ApplicationsCreateNestedOneWithoutApplicationAccessInput
    role: RolesCreateNestedOneWithoutApplicationAccessInput
    user: UserCreateNestedOneWithoutApplicationAccessInput
  }

  export type ApplicationAccessUncheckedCreateInput = {
    id: string
    userId: string
    applicationId: string
    roleId: number
    isActive: boolean
  }

  export type ApplicationAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    application?: ApplicationsUpdateOneRequiredWithoutApplicationAccessNestedInput
    role?: RolesUpdateOneRequiredWithoutApplicationAccessNestedInput
    user?: UserUpdateOneRequiredWithoutApplicationAccessNestedInput
  }

  export type ApplicationAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessCreateManyInput = {
    id: string
    userId: string
    applicationId: string
    roleId: number
    isActive: boolean
  }

  export type ApplicationAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolesCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applicationAccess?: ApplicationAccessCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applicationAccess?: ApplicationAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicationAccess?: ApplicationAccessUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicationAccess?: ApplicationAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpCreateInput = {
    token: string
    email: string
    phoneNumber: string
    otp: string
    expiry?: Date | string | null
  }

  export type OtpUncheckedCreateInput = {
    token: string
    email: string
    phoneNumber: string
    otp: string
    expiry?: Date | string | null
  }

  export type OtpUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpCreateManyInput = {
    token: string
    email: string
    phoneNumber: string
    otp: string
    expiry?: Date | string | null
  }

  export type OtpUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentsCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DepartmentManagement?: DepartmentManagementsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DepartmentManagement?: DepartmentManagementsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartmentManagement?: DepartmentManagementsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartmentManagement?: DepartmentManagementsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentManagementsCreateInput = {
    divisionId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    department: DepartmentsCreateNestedOneWithoutDepartmentManagementInput
    title: TitleOfDepartmentsCreateNestedOneWithoutDepartmentManagementInput
    UserIdentity?: UserIdentityCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsUncheckedCreateInput = {
    id?: number
    divisionId: number
    departmentId: number
    titleId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsUpdateInput = {
    divisionId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
    title?: TitleOfDepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
    UserIdentity?: UserIdentityUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsCreateManyInput = {
    id?: number
    divisionId: number
    departmentId: number
    titleId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentManagementsUpdateManyMutationInput = {
    divisionId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentManagementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDepartmentsCreateInput = {
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DepartmentManagement?: DepartmentManagementsCreateNestedManyWithoutTitleInput
  }

  export type TitleOfDepartmentsUncheckedCreateInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DepartmentManagement?: DepartmentManagementsUncheckedCreateNestedManyWithoutTitleInput
  }

  export type TitleOfDepartmentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartmentManagement?: DepartmentManagementsUpdateManyWithoutTitleNestedInput
  }

  export type TitleOfDepartmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartmentManagement?: DepartmentManagementsUncheckedUpdateManyWithoutTitleNestedInput
  }

  export type TitleOfDepartmentsCreateManyInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TitleOfDepartmentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDepartmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutUserIdentityInput
    DepartmentManagement: DepartmentManagementsCreateNestedOneWithoutUserIdentityInput
    division: DivisionsCreateNestedOneWithoutUserIdentityInput
    titleOfDivision: TitleOfDivisionsCreateNestedOneWithoutUserIdentityInput
  }

  export type UserIdentityUncheckedCreateInput = {
    id?: number
    userId: string
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUserIdentityNestedInput
    DepartmentManagement?: DepartmentManagementsUpdateOneRequiredWithoutUserIdentityNestedInput
    division?: DivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
    titleOfDivision?: TitleOfDivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
  }

  export type UserIdentityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityCreateManyInput = {
    id?: number
    userId: string
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityCreateNestedManyWithoutDivisionInput
    DivisionManagement?: DivisionsManagementCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutDivisionInput
    DivisionManagement?: DivisionsManagementUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUpdateManyWithoutDivisionNestedInput
    DivisionManagement?: DivisionsManagementUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutDivisionNestedInput
    DivisionManagement?: DivisionsManagementUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionsCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementCreateInput = {
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    division: DivisionsCreateNestedOneWithoutDivisionManagementInput
    title: TitleOfDivisionsCreateNestedOneWithoutDivisionManagementInput
  }

  export type DivisionsManagementUncheckedCreateInput = {
    id?: number
    divisionId: number
    titleId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    division?: DivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput
    title?: TitleOfDivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput
  }

  export type DivisionsManagementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementCreateManyInput = {
    id?: number
    divisionId: number
    titleId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDivisionsCreateInput = {
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementCreateNestedManyWithoutTitleInput
    UserIdentity?: UserIdentityCreateNestedManyWithoutTitleOfDivisionInput
  }

  export type TitleOfDivisionsUncheckedCreateInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedCreateNestedManyWithoutTitleInput
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutTitleOfDivisionInput
  }

  export type TitleOfDivisionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUpdateManyWithoutTitleNestedInput
    UserIdentity?: UserIdentityUpdateManyWithoutTitleOfDivisionNestedInput
  }

  export type TitleOfDivisionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedUpdateManyWithoutTitleNestedInput
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutTitleOfDivisionNestedInput
  }

  export type TitleOfDivisionsCreateManyInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TitleOfDivisionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDivisionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserIdentityListRelationFilter = {
    every?: UserIdentityWhereInput
    some?: UserIdentityWhereInput
    none?: UserIdentityWhereInput
  }

  export type ApplicationAccessListRelationFilter = {
    every?: ApplicationAccessWhereInput
    some?: ApplicationAccessWhereInput
    none?: ApplicationAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserIdentityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubCategoryNameCategoryIdCompoundUniqueInput = {
    name: string
    categoryId: number
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type ApplicationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationsRelationFilter = {
    is?: ApplicationsWhereInput
    isNot?: ApplicationsWhereInput
  }

  export type RolesRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApplicationAccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationAccessAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type ApplicationAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationAccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    applicationId?: SortOrder
    roleId?: SortOrder
    isActive?: SortOrder
  }

  export type ApplicationAccessSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpCountOrderByAggregateInput = {
    token?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    token?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    token?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
  }

  export type DepartmentManagementsListRelationFilter = {
    every?: DepartmentManagementsWhereInput
    some?: DepartmentManagementsWhereInput
    none?: DepartmentManagementsWhereInput
  }

  export type DepartmentManagementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentsRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type TitleOfDepartmentsRelationFilter = {
    is?: TitleOfDepartmentsWhereInput
    isNot?: TitleOfDepartmentsWhereInput
  }

  export type DepartmentManagementsCountOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
    isProfitCenter?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentManagementsAvgOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
  }

  export type DepartmentManagementsMaxOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
    isProfitCenter?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentManagementsMinOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
    isProfitCenter?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepartmentManagementsSumOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    departmentId?: SortOrder
    titleId?: SortOrder
  }

  export type TitleOfDepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDepartmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TitleOfDepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDepartmentsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentManagementsRelationFilter = {
    is?: DepartmentManagementsWhereInput
    isNot?: DepartmentManagementsWhereInput
  }

  export type DivisionsRelationFilter = {
    is?: DivisionsWhereInput
    isNot?: DivisionsWhereInput
  }

  export type TitleOfDivisionsRelationFilter = {
    is?: TitleOfDivisionsWhereInput
    isNot?: TitleOfDivisionsWhereInput
  }

  export type UserIdentityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserIdentityAvgOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
  }

  export type UserIdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserIdentityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserIdentitySumOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleOfDivisionId?: SortOrder
    DepartmentManagementId?: SortOrder
  }

  export type DivisionsManagementListRelationFilter = {
    every?: DivisionsManagementWhereInput
    some?: DivisionsManagementWhereInput
    none?: DivisionsManagementWhereInput
  }

  export type DivisionsManagementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DivisionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DivisionsManagementCountOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsManagementAvgOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
  }

  export type DivisionsManagementMaxOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsManagementMinOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DivisionsManagementSumOrderByAggregateInput = {
    id?: SortOrder
    divisionId?: SortOrder
    titleId?: SortOrder
  }

  export type TitleOfDivisionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDivisionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TitleOfDivisionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDivisionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isLeader?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TitleOfDivisionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserIdentityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput> | UserIdentityCreateWithoutUserInput[] | UserIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutUserInput | UserIdentityCreateOrConnectWithoutUserInput[]
    createMany?: UserIdentityCreateManyUserInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type ApplicationAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput> | ApplicationAccessCreateWithoutUserInput[] | ApplicationAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutUserInput | ApplicationAccessCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationAccessCreateManyUserInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type UserIdentityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput> | UserIdentityCreateWithoutUserInput[] | UserIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutUserInput | UserIdentityCreateOrConnectWithoutUserInput[]
    createMany?: UserIdentityCreateManyUserInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type ApplicationAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput> | ApplicationAccessCreateWithoutUserInput[] | ApplicationAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutUserInput | ApplicationAccessCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationAccessCreateManyUserInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserIdentityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput> | UserIdentityCreateWithoutUserInput[] | UserIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutUserInput | UserIdentityCreateOrConnectWithoutUserInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutUserInput | UserIdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserIdentityCreateManyUserInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutUserInput | UserIdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutUserInput | UserIdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type ApplicationAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput> | ApplicationAccessCreateWithoutUserInput[] | ApplicationAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutUserInput | ApplicationAccessCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutUserInput | ApplicationAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationAccessCreateManyUserInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutUserInput | ApplicationAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutUserInput | ApplicationAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type UserIdentityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput> | UserIdentityCreateWithoutUserInput[] | UserIdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutUserInput | UserIdentityCreateOrConnectWithoutUserInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutUserInput | UserIdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserIdentityCreateManyUserInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutUserInput | UserIdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutUserInput | UserIdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput> | ApplicationAccessCreateWithoutUserInput[] | ApplicationAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutUserInput | ApplicationAccessCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutUserInput | ApplicationAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationAccessCreateManyUserInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutUserInput | ApplicationAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutUserInput | ApplicationAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type SubCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput> | SubCategoryCreateWithoutCategoryInput[] | SubCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutCategoryInput | SubCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubCategoryCreateManyCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutCategoryInput | SubCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ApplicationAccessCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput> | ApplicationAccessCreateWithoutApplicationInput[] | ApplicationAccessUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutApplicationInput | ApplicationAccessCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationAccessCreateManyApplicationInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type ApplicationAccessUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput> | ApplicationAccessCreateWithoutApplicationInput[] | ApplicationAccessUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutApplicationInput | ApplicationAccessCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationAccessCreateManyApplicationInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type ApplicationAccessUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput> | ApplicationAccessCreateWithoutApplicationInput[] | ApplicationAccessUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutApplicationInput | ApplicationAccessCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutApplicationInput | ApplicationAccessUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationAccessCreateManyApplicationInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutApplicationInput | ApplicationAccessUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutApplicationInput | ApplicationAccessUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput> | ApplicationAccessCreateWithoutApplicationInput[] | ApplicationAccessUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutApplicationInput | ApplicationAccessCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutApplicationInput | ApplicationAccessUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationAccessCreateManyApplicationInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutApplicationInput | ApplicationAccessUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutApplicationInput | ApplicationAccessUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type ApplicationsCreateNestedOneWithoutApplicationAccessInput = {
    create?: XOR<ApplicationsCreateWithoutApplicationAccessInput, ApplicationsUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: ApplicationsCreateOrConnectWithoutApplicationAccessInput
    connect?: ApplicationsWhereUniqueInput
  }

  export type RolesCreateNestedOneWithoutApplicationAccessInput = {
    create?: XOR<RolesCreateWithoutApplicationAccessInput, RolesUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: RolesCreateOrConnectWithoutApplicationAccessInput
    connect?: RolesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationAccessInput = {
    create?: XOR<UserCreateWithoutApplicationAccessInput, UserUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationAccessInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationsUpdateOneRequiredWithoutApplicationAccessNestedInput = {
    create?: XOR<ApplicationsCreateWithoutApplicationAccessInput, ApplicationsUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: ApplicationsCreateOrConnectWithoutApplicationAccessInput
    upsert?: ApplicationsUpsertWithoutApplicationAccessInput
    connect?: ApplicationsWhereUniqueInput
    update?: XOR<XOR<ApplicationsUpdateToOneWithWhereWithoutApplicationAccessInput, ApplicationsUpdateWithoutApplicationAccessInput>, ApplicationsUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type RolesUpdateOneRequiredWithoutApplicationAccessNestedInput = {
    create?: XOR<RolesCreateWithoutApplicationAccessInput, RolesUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: RolesCreateOrConnectWithoutApplicationAccessInput
    upsert?: RolesUpsertWithoutApplicationAccessInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutApplicationAccessInput, RolesUpdateWithoutApplicationAccessInput>, RolesUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type UserUpdateOneRequiredWithoutApplicationAccessNestedInput = {
    create?: XOR<UserCreateWithoutApplicationAccessInput, UserUncheckedCreateWithoutApplicationAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationAccessInput
    upsert?: UserUpsertWithoutApplicationAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationAccessInput, UserUpdateWithoutApplicationAccessInput>, UserUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type ApplicationAccessCreateNestedManyWithoutRoleInput = {
    create?: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput> | ApplicationAccessCreateWithoutRoleInput[] | ApplicationAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutRoleInput | ApplicationAccessCreateOrConnectWithoutRoleInput[]
    createMany?: ApplicationAccessCreateManyRoleInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type ApplicationAccessUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput> | ApplicationAccessCreateWithoutRoleInput[] | ApplicationAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutRoleInput | ApplicationAccessCreateOrConnectWithoutRoleInput[]
    createMany?: ApplicationAccessCreateManyRoleInputEnvelope
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
  }

  export type ApplicationAccessUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput> | ApplicationAccessCreateWithoutRoleInput[] | ApplicationAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutRoleInput | ApplicationAccessCreateOrConnectWithoutRoleInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutRoleInput | ApplicationAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ApplicationAccessCreateManyRoleInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutRoleInput | ApplicationAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutRoleInput | ApplicationAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput> | ApplicationAccessCreateWithoutRoleInput[] | ApplicationAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: ApplicationAccessCreateOrConnectWithoutRoleInput | ApplicationAccessCreateOrConnectWithoutRoleInput[]
    upsert?: ApplicationAccessUpsertWithWhereUniqueWithoutRoleInput | ApplicationAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: ApplicationAccessCreateManyRoleInputEnvelope
    set?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    disconnect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    delete?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    connect?: ApplicationAccessWhereUniqueInput | ApplicationAccessWhereUniqueInput[]
    update?: ApplicationAccessUpdateWithWhereUniqueWithoutRoleInput | ApplicationAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: ApplicationAccessUpdateManyWithWhereWithoutRoleInput | ApplicationAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
  }

  export type DepartmentManagementsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput> | DepartmentManagementsCreateWithoutDepartmentInput[] | DepartmentManagementsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutDepartmentInput | DepartmentManagementsCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentManagementsCreateManyDepartmentInputEnvelope
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
  }

  export type DepartmentManagementsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput> | DepartmentManagementsCreateWithoutDepartmentInput[] | DepartmentManagementsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutDepartmentInput | DepartmentManagementsCreateOrConnectWithoutDepartmentInput[]
    createMany?: DepartmentManagementsCreateManyDepartmentInputEnvelope
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
  }

  export type DepartmentManagementsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput> | DepartmentManagementsCreateWithoutDepartmentInput[] | DepartmentManagementsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutDepartmentInput | DepartmentManagementsCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentManagementsUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentManagementsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentManagementsCreateManyDepartmentInputEnvelope
    set?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    disconnect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    delete?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    update?: DepartmentManagementsUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentManagementsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentManagementsUpdateManyWithWhereWithoutDepartmentInput | DepartmentManagementsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
  }

  export type DepartmentManagementsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput> | DepartmentManagementsCreateWithoutDepartmentInput[] | DepartmentManagementsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutDepartmentInput | DepartmentManagementsCreateOrConnectWithoutDepartmentInput[]
    upsert?: DepartmentManagementsUpsertWithWhereUniqueWithoutDepartmentInput | DepartmentManagementsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: DepartmentManagementsCreateManyDepartmentInputEnvelope
    set?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    disconnect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    delete?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    update?: DepartmentManagementsUpdateWithWhereUniqueWithoutDepartmentInput | DepartmentManagementsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: DepartmentManagementsUpdateManyWithWhereWithoutDepartmentInput | DepartmentManagementsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
  }

  export type DepartmentsCreateNestedOneWithoutDepartmentManagementInput = {
    create?: XOR<DepartmentsCreateWithoutDepartmentManagementInput, DepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDepartmentManagementInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type TitleOfDepartmentsCreateNestedOneWithoutDepartmentManagementInput = {
    create?: XOR<TitleOfDepartmentsCreateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    connectOrCreate?: TitleOfDepartmentsCreateOrConnectWithoutDepartmentManagementInput
    connect?: TitleOfDepartmentsWhereUniqueInput
  }

  export type UserIdentityCreateNestedManyWithoutDepartmentManagementInput = {
    create?: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput> | UserIdentityCreateWithoutDepartmentManagementInput[] | UserIdentityUncheckedCreateWithoutDepartmentManagementInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDepartmentManagementInput | UserIdentityCreateOrConnectWithoutDepartmentManagementInput[]
    createMany?: UserIdentityCreateManyDepartmentManagementInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type UserIdentityUncheckedCreateNestedManyWithoutDepartmentManagementInput = {
    create?: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput> | UserIdentityCreateWithoutDepartmentManagementInput[] | UserIdentityUncheckedCreateWithoutDepartmentManagementInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDepartmentManagementInput | UserIdentityCreateOrConnectWithoutDepartmentManagementInput[]
    createMany?: UserIdentityCreateManyDepartmentManagementInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type DepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput = {
    create?: XOR<DepartmentsCreateWithoutDepartmentManagementInput, DepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDepartmentManagementInput
    upsert?: DepartmentsUpsertWithoutDepartmentManagementInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutDepartmentManagementInput, DepartmentsUpdateWithoutDepartmentManagementInput>, DepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
  }

  export type TitleOfDepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput = {
    create?: XOR<TitleOfDepartmentsCreateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    connectOrCreate?: TitleOfDepartmentsCreateOrConnectWithoutDepartmentManagementInput
    upsert?: TitleOfDepartmentsUpsertWithoutDepartmentManagementInput
    connect?: TitleOfDepartmentsWhereUniqueInput
    update?: XOR<XOR<TitleOfDepartmentsUpdateToOneWithWhereWithoutDepartmentManagementInput, TitleOfDepartmentsUpdateWithoutDepartmentManagementInput>, TitleOfDepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
  }

  export type UserIdentityUpdateManyWithoutDepartmentManagementNestedInput = {
    create?: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput> | UserIdentityCreateWithoutDepartmentManagementInput[] | UserIdentityUncheckedCreateWithoutDepartmentManagementInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDepartmentManagementInput | UserIdentityCreateOrConnectWithoutDepartmentManagementInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutDepartmentManagementInput | UserIdentityUpsertWithWhereUniqueWithoutDepartmentManagementInput[]
    createMany?: UserIdentityCreateManyDepartmentManagementInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutDepartmentManagementInput | UserIdentityUpdateWithWhereUniqueWithoutDepartmentManagementInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutDepartmentManagementInput | UserIdentityUpdateManyWithWhereWithoutDepartmentManagementInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type UserIdentityUncheckedUpdateManyWithoutDepartmentManagementNestedInput = {
    create?: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput> | UserIdentityCreateWithoutDepartmentManagementInput[] | UserIdentityUncheckedCreateWithoutDepartmentManagementInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDepartmentManagementInput | UserIdentityCreateOrConnectWithoutDepartmentManagementInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutDepartmentManagementInput | UserIdentityUpsertWithWhereUniqueWithoutDepartmentManagementInput[]
    createMany?: UserIdentityCreateManyDepartmentManagementInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutDepartmentManagementInput | UserIdentityUpdateWithWhereUniqueWithoutDepartmentManagementInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutDepartmentManagementInput | UserIdentityUpdateManyWithWhereWithoutDepartmentManagementInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type DepartmentManagementsCreateNestedManyWithoutTitleInput = {
    create?: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput> | DepartmentManagementsCreateWithoutTitleInput[] | DepartmentManagementsUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutTitleInput | DepartmentManagementsCreateOrConnectWithoutTitleInput[]
    createMany?: DepartmentManagementsCreateManyTitleInputEnvelope
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
  }

  export type DepartmentManagementsUncheckedCreateNestedManyWithoutTitleInput = {
    create?: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput> | DepartmentManagementsCreateWithoutTitleInput[] | DepartmentManagementsUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutTitleInput | DepartmentManagementsCreateOrConnectWithoutTitleInput[]
    createMany?: DepartmentManagementsCreateManyTitleInputEnvelope
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
  }

  export type DepartmentManagementsUpdateManyWithoutTitleNestedInput = {
    create?: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput> | DepartmentManagementsCreateWithoutTitleInput[] | DepartmentManagementsUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutTitleInput | DepartmentManagementsCreateOrConnectWithoutTitleInput[]
    upsert?: DepartmentManagementsUpsertWithWhereUniqueWithoutTitleInput | DepartmentManagementsUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: DepartmentManagementsCreateManyTitleInputEnvelope
    set?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    disconnect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    delete?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    update?: DepartmentManagementsUpdateWithWhereUniqueWithoutTitleInput | DepartmentManagementsUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: DepartmentManagementsUpdateManyWithWhereWithoutTitleInput | DepartmentManagementsUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
  }

  export type DepartmentManagementsUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput> | DepartmentManagementsCreateWithoutTitleInput[] | DepartmentManagementsUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutTitleInput | DepartmentManagementsCreateOrConnectWithoutTitleInput[]
    upsert?: DepartmentManagementsUpsertWithWhereUniqueWithoutTitleInput | DepartmentManagementsUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: DepartmentManagementsCreateManyTitleInputEnvelope
    set?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    disconnect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    delete?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    connect?: DepartmentManagementsWhereUniqueInput | DepartmentManagementsWhereUniqueInput[]
    update?: DepartmentManagementsUpdateWithWhereUniqueWithoutTitleInput | DepartmentManagementsUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: DepartmentManagementsUpdateManyWithWhereWithoutTitleInput | DepartmentManagementsUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserIdentityInput = {
    create?: XOR<UserCreateWithoutUserIdentityInput, UserUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserIdentityInput
    connect?: UserWhereUniqueInput
  }

  export type DepartmentManagementsCreateNestedOneWithoutUserIdentityInput = {
    create?: XOR<DepartmentManagementsCreateWithoutUserIdentityInput, DepartmentManagementsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutUserIdentityInput
    connect?: DepartmentManagementsWhereUniqueInput
  }

  export type DivisionsCreateNestedOneWithoutUserIdentityInput = {
    create?: XOR<DivisionsCreateWithoutUserIdentityInput, DivisionsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: DivisionsCreateOrConnectWithoutUserIdentityInput
    connect?: DivisionsWhereUniqueInput
  }

  export type TitleOfDivisionsCreateNestedOneWithoutUserIdentityInput = {
    create?: XOR<TitleOfDivisionsCreateWithoutUserIdentityInput, TitleOfDivisionsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: TitleOfDivisionsCreateOrConnectWithoutUserIdentityInput
    connect?: TitleOfDivisionsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserIdentityNestedInput = {
    create?: XOR<UserCreateWithoutUserIdentityInput, UserUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserIdentityInput
    upsert?: UserUpsertWithoutUserIdentityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserIdentityInput, UserUpdateWithoutUserIdentityInput>, UserUncheckedUpdateWithoutUserIdentityInput>
  }

  export type DepartmentManagementsUpdateOneRequiredWithoutUserIdentityNestedInput = {
    create?: XOR<DepartmentManagementsCreateWithoutUserIdentityInput, DepartmentManagementsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: DepartmentManagementsCreateOrConnectWithoutUserIdentityInput
    upsert?: DepartmentManagementsUpsertWithoutUserIdentityInput
    connect?: DepartmentManagementsWhereUniqueInput
    update?: XOR<XOR<DepartmentManagementsUpdateToOneWithWhereWithoutUserIdentityInput, DepartmentManagementsUpdateWithoutUserIdentityInput>, DepartmentManagementsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type DivisionsUpdateOneRequiredWithoutUserIdentityNestedInput = {
    create?: XOR<DivisionsCreateWithoutUserIdentityInput, DivisionsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: DivisionsCreateOrConnectWithoutUserIdentityInput
    upsert?: DivisionsUpsertWithoutUserIdentityInput
    connect?: DivisionsWhereUniqueInput
    update?: XOR<XOR<DivisionsUpdateToOneWithWhereWithoutUserIdentityInput, DivisionsUpdateWithoutUserIdentityInput>, DivisionsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type TitleOfDivisionsUpdateOneRequiredWithoutUserIdentityNestedInput = {
    create?: XOR<TitleOfDivisionsCreateWithoutUserIdentityInput, TitleOfDivisionsUncheckedCreateWithoutUserIdentityInput>
    connectOrCreate?: TitleOfDivisionsCreateOrConnectWithoutUserIdentityInput
    upsert?: TitleOfDivisionsUpsertWithoutUserIdentityInput
    connect?: TitleOfDivisionsWhereUniqueInput
    update?: XOR<XOR<TitleOfDivisionsUpdateToOneWithWhereWithoutUserIdentityInput, TitleOfDivisionsUpdateWithoutUserIdentityInput>, TitleOfDivisionsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type UserIdentityCreateNestedManyWithoutDivisionInput = {
    create?: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput> | UserIdentityCreateWithoutDivisionInput[] | UserIdentityUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDivisionInput | UserIdentityCreateOrConnectWithoutDivisionInput[]
    createMany?: UserIdentityCreateManyDivisionInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type DivisionsManagementCreateNestedManyWithoutDivisionInput = {
    create?: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput> | DivisionsManagementCreateWithoutDivisionInput[] | DivisionsManagementUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutDivisionInput | DivisionsManagementCreateOrConnectWithoutDivisionInput[]
    createMany?: DivisionsManagementCreateManyDivisionInputEnvelope
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
  }

  export type UserIdentityUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput> | UserIdentityCreateWithoutDivisionInput[] | UserIdentityUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDivisionInput | UserIdentityCreateOrConnectWithoutDivisionInput[]
    createMany?: UserIdentityCreateManyDivisionInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type DivisionsManagementUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput> | DivisionsManagementCreateWithoutDivisionInput[] | DivisionsManagementUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutDivisionInput | DivisionsManagementCreateOrConnectWithoutDivisionInput[]
    createMany?: DivisionsManagementCreateManyDivisionInputEnvelope
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
  }

  export type UserIdentityUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput> | UserIdentityCreateWithoutDivisionInput[] | UserIdentityUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDivisionInput | UserIdentityCreateOrConnectWithoutDivisionInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutDivisionInput | UserIdentityUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: UserIdentityCreateManyDivisionInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutDivisionInput | UserIdentityUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutDivisionInput | UserIdentityUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type DivisionsManagementUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput> | DivisionsManagementCreateWithoutDivisionInput[] | DivisionsManagementUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutDivisionInput | DivisionsManagementCreateOrConnectWithoutDivisionInput[]
    upsert?: DivisionsManagementUpsertWithWhereUniqueWithoutDivisionInput | DivisionsManagementUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: DivisionsManagementCreateManyDivisionInputEnvelope
    set?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    disconnect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    delete?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    update?: DivisionsManagementUpdateWithWhereUniqueWithoutDivisionInput | DivisionsManagementUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: DivisionsManagementUpdateManyWithWhereWithoutDivisionInput | DivisionsManagementUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
  }

  export type UserIdentityUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput> | UserIdentityCreateWithoutDivisionInput[] | UserIdentityUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutDivisionInput | UserIdentityCreateOrConnectWithoutDivisionInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutDivisionInput | UserIdentityUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: UserIdentityCreateManyDivisionInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutDivisionInput | UserIdentityUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutDivisionInput | UserIdentityUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type DivisionsManagementUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput> | DivisionsManagementCreateWithoutDivisionInput[] | DivisionsManagementUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutDivisionInput | DivisionsManagementCreateOrConnectWithoutDivisionInput[]
    upsert?: DivisionsManagementUpsertWithWhereUniqueWithoutDivisionInput | DivisionsManagementUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: DivisionsManagementCreateManyDivisionInputEnvelope
    set?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    disconnect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    delete?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    update?: DivisionsManagementUpdateWithWhereUniqueWithoutDivisionInput | DivisionsManagementUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: DivisionsManagementUpdateManyWithWhereWithoutDivisionInput | DivisionsManagementUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
  }

  export type DivisionsCreateNestedOneWithoutDivisionManagementInput = {
    create?: XOR<DivisionsCreateWithoutDivisionManagementInput, DivisionsUncheckedCreateWithoutDivisionManagementInput>
    connectOrCreate?: DivisionsCreateOrConnectWithoutDivisionManagementInput
    connect?: DivisionsWhereUniqueInput
  }

  export type TitleOfDivisionsCreateNestedOneWithoutDivisionManagementInput = {
    create?: XOR<TitleOfDivisionsCreateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedCreateWithoutDivisionManagementInput>
    connectOrCreate?: TitleOfDivisionsCreateOrConnectWithoutDivisionManagementInput
    connect?: TitleOfDivisionsWhereUniqueInput
  }

  export type DivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput = {
    create?: XOR<DivisionsCreateWithoutDivisionManagementInput, DivisionsUncheckedCreateWithoutDivisionManagementInput>
    connectOrCreate?: DivisionsCreateOrConnectWithoutDivisionManagementInput
    upsert?: DivisionsUpsertWithoutDivisionManagementInput
    connect?: DivisionsWhereUniqueInput
    update?: XOR<XOR<DivisionsUpdateToOneWithWhereWithoutDivisionManagementInput, DivisionsUpdateWithoutDivisionManagementInput>, DivisionsUncheckedUpdateWithoutDivisionManagementInput>
  }

  export type TitleOfDivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput = {
    create?: XOR<TitleOfDivisionsCreateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedCreateWithoutDivisionManagementInput>
    connectOrCreate?: TitleOfDivisionsCreateOrConnectWithoutDivisionManagementInput
    upsert?: TitleOfDivisionsUpsertWithoutDivisionManagementInput
    connect?: TitleOfDivisionsWhereUniqueInput
    update?: XOR<XOR<TitleOfDivisionsUpdateToOneWithWhereWithoutDivisionManagementInput, TitleOfDivisionsUpdateWithoutDivisionManagementInput>, TitleOfDivisionsUncheckedUpdateWithoutDivisionManagementInput>
  }

  export type DivisionsManagementCreateNestedManyWithoutTitleInput = {
    create?: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput> | DivisionsManagementCreateWithoutTitleInput[] | DivisionsManagementUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutTitleInput | DivisionsManagementCreateOrConnectWithoutTitleInput[]
    createMany?: DivisionsManagementCreateManyTitleInputEnvelope
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
  }

  export type UserIdentityCreateNestedManyWithoutTitleOfDivisionInput = {
    create?: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput> | UserIdentityCreateWithoutTitleOfDivisionInput[] | UserIdentityUncheckedCreateWithoutTitleOfDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutTitleOfDivisionInput | UserIdentityCreateOrConnectWithoutTitleOfDivisionInput[]
    createMany?: UserIdentityCreateManyTitleOfDivisionInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type DivisionsManagementUncheckedCreateNestedManyWithoutTitleInput = {
    create?: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput> | DivisionsManagementCreateWithoutTitleInput[] | DivisionsManagementUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutTitleInput | DivisionsManagementCreateOrConnectWithoutTitleInput[]
    createMany?: DivisionsManagementCreateManyTitleInputEnvelope
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
  }

  export type UserIdentityUncheckedCreateNestedManyWithoutTitleOfDivisionInput = {
    create?: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput> | UserIdentityCreateWithoutTitleOfDivisionInput[] | UserIdentityUncheckedCreateWithoutTitleOfDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutTitleOfDivisionInput | UserIdentityCreateOrConnectWithoutTitleOfDivisionInput[]
    createMany?: UserIdentityCreateManyTitleOfDivisionInputEnvelope
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
  }

  export type DivisionsManagementUpdateManyWithoutTitleNestedInput = {
    create?: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput> | DivisionsManagementCreateWithoutTitleInput[] | DivisionsManagementUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutTitleInput | DivisionsManagementCreateOrConnectWithoutTitleInput[]
    upsert?: DivisionsManagementUpsertWithWhereUniqueWithoutTitleInput | DivisionsManagementUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: DivisionsManagementCreateManyTitleInputEnvelope
    set?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    disconnect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    delete?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    update?: DivisionsManagementUpdateWithWhereUniqueWithoutTitleInput | DivisionsManagementUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: DivisionsManagementUpdateManyWithWhereWithoutTitleInput | DivisionsManagementUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
  }

  export type UserIdentityUpdateManyWithoutTitleOfDivisionNestedInput = {
    create?: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput> | UserIdentityCreateWithoutTitleOfDivisionInput[] | UserIdentityUncheckedCreateWithoutTitleOfDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutTitleOfDivisionInput | UserIdentityCreateOrConnectWithoutTitleOfDivisionInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutTitleOfDivisionInput | UserIdentityUpsertWithWhereUniqueWithoutTitleOfDivisionInput[]
    createMany?: UserIdentityCreateManyTitleOfDivisionInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutTitleOfDivisionInput | UserIdentityUpdateWithWhereUniqueWithoutTitleOfDivisionInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutTitleOfDivisionInput | UserIdentityUpdateManyWithWhereWithoutTitleOfDivisionInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type DivisionsManagementUncheckedUpdateManyWithoutTitleNestedInput = {
    create?: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput> | DivisionsManagementCreateWithoutTitleInput[] | DivisionsManagementUncheckedCreateWithoutTitleInput[]
    connectOrCreate?: DivisionsManagementCreateOrConnectWithoutTitleInput | DivisionsManagementCreateOrConnectWithoutTitleInput[]
    upsert?: DivisionsManagementUpsertWithWhereUniqueWithoutTitleInput | DivisionsManagementUpsertWithWhereUniqueWithoutTitleInput[]
    createMany?: DivisionsManagementCreateManyTitleInputEnvelope
    set?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    disconnect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    delete?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    connect?: DivisionsManagementWhereUniqueInput | DivisionsManagementWhereUniqueInput[]
    update?: DivisionsManagementUpdateWithWhereUniqueWithoutTitleInput | DivisionsManagementUpdateWithWhereUniqueWithoutTitleInput[]
    updateMany?: DivisionsManagementUpdateManyWithWhereWithoutTitleInput | DivisionsManagementUpdateManyWithWhereWithoutTitleInput[]
    deleteMany?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
  }

  export type UserIdentityUncheckedUpdateManyWithoutTitleOfDivisionNestedInput = {
    create?: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput> | UserIdentityCreateWithoutTitleOfDivisionInput[] | UserIdentityUncheckedCreateWithoutTitleOfDivisionInput[]
    connectOrCreate?: UserIdentityCreateOrConnectWithoutTitleOfDivisionInput | UserIdentityCreateOrConnectWithoutTitleOfDivisionInput[]
    upsert?: UserIdentityUpsertWithWhereUniqueWithoutTitleOfDivisionInput | UserIdentityUpsertWithWhereUniqueWithoutTitleOfDivisionInput[]
    createMany?: UserIdentityCreateManyTitleOfDivisionInputEnvelope
    set?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    disconnect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    delete?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    connect?: UserIdentityWhereUniqueInput | UserIdentityWhereUniqueInput[]
    update?: UserIdentityUpdateWithWhereUniqueWithoutTitleOfDivisionInput | UserIdentityUpdateWithWhereUniqueWithoutTitleOfDivisionInput[]
    updateMany?: UserIdentityUpdateManyWithWhereWithoutTitleOfDivisionInput | UserIdentityUpdateManyWithWhereWithoutTitleOfDivisionInput[]
    deleteMany?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserIdentityCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DepartmentManagement: DepartmentManagementsCreateNestedOneWithoutUserIdentityInput
    division: DivisionsCreateNestedOneWithoutUserIdentityInput
    titleOfDivision: TitleOfDivisionsCreateNestedOneWithoutUserIdentityInput
  }

  export type UserIdentityUncheckedCreateWithoutUserInput = {
    id?: number
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityCreateOrConnectWithoutUserInput = {
    where: UserIdentityWhereUniqueInput
    create: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput>
  }

  export type UserIdentityCreateManyUserInputEnvelope = {
    data: UserIdentityCreateManyUserInput | UserIdentityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationAccessCreateWithoutUserInput = {
    id: string
    isActive: boolean
    application: ApplicationsCreateNestedOneWithoutApplicationAccessInput
    role: RolesCreateNestedOneWithoutApplicationAccessInput
  }

  export type ApplicationAccessUncheckedCreateWithoutUserInput = {
    id: string
    applicationId: string
    roleId: number
    isActive: boolean
  }

  export type ApplicationAccessCreateOrConnectWithoutUserInput = {
    where: ApplicationAccessWhereUniqueInput
    create: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput>
  }

  export type ApplicationAccessCreateManyUserInputEnvelope = {
    data: ApplicationAccessCreateManyUserInput | ApplicationAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserIdentityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserIdentityWhereUniqueInput
    update: XOR<UserIdentityUpdateWithoutUserInput, UserIdentityUncheckedUpdateWithoutUserInput>
    create: XOR<UserIdentityCreateWithoutUserInput, UserIdentityUncheckedCreateWithoutUserInput>
  }

  export type UserIdentityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserIdentityWhereUniqueInput
    data: XOR<UserIdentityUpdateWithoutUserInput, UserIdentityUncheckedUpdateWithoutUserInput>
  }

  export type UserIdentityUpdateManyWithWhereWithoutUserInput = {
    where: UserIdentityScalarWhereInput
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserIdentityScalarWhereInput = {
    AND?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
    OR?: UserIdentityScalarWhereInput[]
    NOT?: UserIdentityScalarWhereInput | UserIdentityScalarWhereInput[]
    id?: IntFilter<"UserIdentity"> | number
    userId?: StringFilter<"UserIdentity"> | string
    divisionId?: IntFilter<"UserIdentity"> | number
    titleOfDivisionId?: IntFilter<"UserIdentity"> | number
    DepartmentManagementId?: IntFilter<"UserIdentity"> | number
    createdAt?: DateTimeFilter<"UserIdentity"> | Date | string
    updatedAt?: DateTimeFilter<"UserIdentity"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserIdentity"> | Date | string | null
  }

  export type ApplicationAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationAccessWhereUniqueInput
    update: XOR<ApplicationAccessUpdateWithoutUserInput, ApplicationAccessUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationAccessCreateWithoutUserInput, ApplicationAccessUncheckedCreateWithoutUserInput>
  }

  export type ApplicationAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationAccessWhereUniqueInput
    data: XOR<ApplicationAccessUpdateWithoutUserInput, ApplicationAccessUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationAccessUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationAccessScalarWhereInput
    data: XOR<ApplicationAccessUpdateManyMutationInput, ApplicationAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationAccessScalarWhereInput = {
    AND?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
    OR?: ApplicationAccessScalarWhereInput[]
    NOT?: ApplicationAccessScalarWhereInput | ApplicationAccessScalarWhereInput[]
    id?: StringFilter<"ApplicationAccess"> | string
    userId?: StringFilter<"ApplicationAccess"> | string
    applicationId?: StringFilter<"ApplicationAccess"> | string
    roleId?: IntFilter<"ApplicationAccess"> | number
    isActive?: BoolFilter<"ApplicationAccess"> | boolean
  }

  export type SubCategoryCreateWithoutCategoryInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubCategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubCategoryCreateOrConnectWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryCreateManyCategoryInputEnvelope = {
    data: SubCategoryCreateManyCategoryInput | SubCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubCategoryCreateWithoutCategoryInput, SubCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutCategoryInput, SubCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    categoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    updatedAt?: DateTimeFilter<"SubCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SubCategory"> | Date | string | null
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationAccessCreateWithoutApplicationInput = {
    id: string
    isActive: boolean
    role: RolesCreateNestedOneWithoutApplicationAccessInput
    user: UserCreateNestedOneWithoutApplicationAccessInput
  }

  export type ApplicationAccessUncheckedCreateWithoutApplicationInput = {
    id: string
    userId: string
    roleId: number
    isActive: boolean
  }

  export type ApplicationAccessCreateOrConnectWithoutApplicationInput = {
    where: ApplicationAccessWhereUniqueInput
    create: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationAccessCreateManyApplicationInputEnvelope = {
    data: ApplicationAccessCreateManyApplicationInput | ApplicationAccessCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationAccessUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationAccessWhereUniqueInput
    update: XOR<ApplicationAccessUpdateWithoutApplicationInput, ApplicationAccessUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationAccessCreateWithoutApplicationInput, ApplicationAccessUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationAccessUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationAccessWhereUniqueInput
    data: XOR<ApplicationAccessUpdateWithoutApplicationInput, ApplicationAccessUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationAccessUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationAccessScalarWhereInput
    data: XOR<ApplicationAccessUpdateManyMutationInput, ApplicationAccessUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationsCreateWithoutApplicationAccessInput = {
    id: string
    name: string
    isActive: boolean
  }

  export type ApplicationsUncheckedCreateWithoutApplicationAccessInput = {
    id: string
    name: string
    isActive: boolean
  }

  export type ApplicationsCreateOrConnectWithoutApplicationAccessInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutApplicationAccessInput, ApplicationsUncheckedCreateWithoutApplicationAccessInput>
  }

  export type RolesCreateWithoutApplicationAccessInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RolesUncheckedCreateWithoutApplicationAccessInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RolesCreateOrConnectWithoutApplicationAccessInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutApplicationAccessInput, RolesUncheckedCreateWithoutApplicationAccessInput>
  }

  export type UserCreateWithoutApplicationAccessInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicationAccessInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicationAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationAccessInput, UserUncheckedCreateWithoutApplicationAccessInput>
  }

  export type ApplicationsUpsertWithoutApplicationAccessInput = {
    update: XOR<ApplicationsUpdateWithoutApplicationAccessInput, ApplicationsUncheckedUpdateWithoutApplicationAccessInput>
    create: XOR<ApplicationsCreateWithoutApplicationAccessInput, ApplicationsUncheckedCreateWithoutApplicationAccessInput>
    where?: ApplicationsWhereInput
  }

  export type ApplicationsUpdateToOneWithWhereWithoutApplicationAccessInput = {
    where?: ApplicationsWhereInput
    data: XOR<ApplicationsUpdateWithoutApplicationAccessInput, ApplicationsUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type ApplicationsUpdateWithoutApplicationAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationsUncheckedUpdateWithoutApplicationAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RolesUpsertWithoutApplicationAccessInput = {
    update: XOR<RolesUpdateWithoutApplicationAccessInput, RolesUncheckedUpdateWithoutApplicationAccessInput>
    create: XOR<RolesCreateWithoutApplicationAccessInput, RolesUncheckedCreateWithoutApplicationAccessInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutApplicationAccessInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutApplicationAccessInput, RolesUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type RolesUpdateWithoutApplicationAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RolesUncheckedUpdateWithoutApplicationAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutApplicationAccessInput = {
    update: XOR<UserUpdateWithoutApplicationAccessInput, UserUncheckedUpdateWithoutApplicationAccessInput>
    create: XOR<UserCreateWithoutApplicationAccessInput, UserUncheckedCreateWithoutApplicationAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationAccessInput, UserUncheckedUpdateWithoutApplicationAccessInput>
  }

  export type UserUpdateWithoutApplicationAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ApplicationAccessCreateWithoutRoleInput = {
    id: string
    isActive: boolean
    application: ApplicationsCreateNestedOneWithoutApplicationAccessInput
    user: UserCreateNestedOneWithoutApplicationAccessInput
  }

  export type ApplicationAccessUncheckedCreateWithoutRoleInput = {
    id: string
    userId: string
    applicationId: string
    isActive: boolean
  }

  export type ApplicationAccessCreateOrConnectWithoutRoleInput = {
    where: ApplicationAccessWhereUniqueInput
    create: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput>
  }

  export type ApplicationAccessCreateManyRoleInputEnvelope = {
    data: ApplicationAccessCreateManyRoleInput | ApplicationAccessCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationAccessUpsertWithWhereUniqueWithoutRoleInput = {
    where: ApplicationAccessWhereUniqueInput
    update: XOR<ApplicationAccessUpdateWithoutRoleInput, ApplicationAccessUncheckedUpdateWithoutRoleInput>
    create: XOR<ApplicationAccessCreateWithoutRoleInput, ApplicationAccessUncheckedCreateWithoutRoleInput>
  }

  export type ApplicationAccessUpdateWithWhereUniqueWithoutRoleInput = {
    where: ApplicationAccessWhereUniqueInput
    data: XOR<ApplicationAccessUpdateWithoutRoleInput, ApplicationAccessUncheckedUpdateWithoutRoleInput>
  }

  export type ApplicationAccessUpdateManyWithWhereWithoutRoleInput = {
    where: ApplicationAccessScalarWhereInput
    data: XOR<ApplicationAccessUpdateManyMutationInput, ApplicationAccessUncheckedUpdateManyWithoutRoleInput>
  }

  export type DepartmentManagementsCreateWithoutDepartmentInput = {
    divisionId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    title: TitleOfDepartmentsCreateNestedOneWithoutDepartmentManagementInput
    UserIdentity?: UserIdentityCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsUncheckedCreateWithoutDepartmentInput = {
    id?: number
    divisionId: number
    titleId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsCreateOrConnectWithoutDepartmentInput = {
    where: DepartmentManagementsWhereUniqueInput
    create: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentManagementsCreateManyDepartmentInputEnvelope = {
    data: DepartmentManagementsCreateManyDepartmentInput | DepartmentManagementsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentManagementsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentManagementsWhereUniqueInput
    update: XOR<DepartmentManagementsUpdateWithoutDepartmentInput, DepartmentManagementsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<DepartmentManagementsCreateWithoutDepartmentInput, DepartmentManagementsUncheckedCreateWithoutDepartmentInput>
  }

  export type DepartmentManagementsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: DepartmentManagementsWhereUniqueInput
    data: XOR<DepartmentManagementsUpdateWithoutDepartmentInput, DepartmentManagementsUncheckedUpdateWithoutDepartmentInput>
  }

  export type DepartmentManagementsUpdateManyWithWhereWithoutDepartmentInput = {
    where: DepartmentManagementsScalarWhereInput
    data: XOR<DepartmentManagementsUpdateManyMutationInput, DepartmentManagementsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentManagementsScalarWhereInput = {
    AND?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
    OR?: DepartmentManagementsScalarWhereInput[]
    NOT?: DepartmentManagementsScalarWhereInput | DepartmentManagementsScalarWhereInput[]
    id?: IntFilter<"DepartmentManagements"> | number
    divisionId?: IntFilter<"DepartmentManagements"> | number
    departmentId?: IntFilter<"DepartmentManagements"> | number
    titleId?: IntFilter<"DepartmentManagements"> | number
    isProfitCenter?: BoolFilter<"DepartmentManagements"> | boolean
    isActive?: BoolFilter<"DepartmentManagements"> | boolean
    createdAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    updatedAt?: DateTimeFilter<"DepartmentManagements"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DepartmentManagements"> | Date | string | null
  }

  export type DepartmentsCreateWithoutDepartmentManagementInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentsUncheckedCreateWithoutDepartmentManagementInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentsCreateOrConnectWithoutDepartmentManagementInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutDepartmentManagementInput, DepartmentsUncheckedCreateWithoutDepartmentManagementInput>
  }

  export type TitleOfDepartmentsCreateWithoutDepartmentManagementInput = {
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TitleOfDepartmentsUncheckedCreateWithoutDepartmentManagementInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TitleOfDepartmentsCreateOrConnectWithoutDepartmentManagementInput = {
    where: TitleOfDepartmentsWhereUniqueInput
    create: XOR<TitleOfDepartmentsCreateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedCreateWithoutDepartmentManagementInput>
  }

  export type UserIdentityCreateWithoutDepartmentManagementInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutUserIdentityInput
    division: DivisionsCreateNestedOneWithoutUserIdentityInput
    titleOfDivision: TitleOfDivisionsCreateNestedOneWithoutUserIdentityInput
  }

  export type UserIdentityUncheckedCreateWithoutDepartmentManagementInput = {
    id?: number
    userId: string
    divisionId: number
    titleOfDivisionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityCreateOrConnectWithoutDepartmentManagementInput = {
    where: UserIdentityWhereUniqueInput
    create: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput>
  }

  export type UserIdentityCreateManyDepartmentManagementInputEnvelope = {
    data: UserIdentityCreateManyDepartmentManagementInput | UserIdentityCreateManyDepartmentManagementInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentsUpsertWithoutDepartmentManagementInput = {
    update: XOR<DepartmentsUpdateWithoutDepartmentManagementInput, DepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
    create: XOR<DepartmentsCreateWithoutDepartmentManagementInput, DepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutDepartmentManagementInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutDepartmentManagementInput, DepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
  }

  export type DepartmentsUpdateWithoutDepartmentManagementInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentsUncheckedUpdateWithoutDepartmentManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDepartmentsUpsertWithoutDepartmentManagementInput = {
    update: XOR<TitleOfDepartmentsUpdateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
    create: XOR<TitleOfDepartmentsCreateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedCreateWithoutDepartmentManagementInput>
    where?: TitleOfDepartmentsWhereInput
  }

  export type TitleOfDepartmentsUpdateToOneWithWhereWithoutDepartmentManagementInput = {
    where?: TitleOfDepartmentsWhereInput
    data: XOR<TitleOfDepartmentsUpdateWithoutDepartmentManagementInput, TitleOfDepartmentsUncheckedUpdateWithoutDepartmentManagementInput>
  }

  export type TitleOfDepartmentsUpdateWithoutDepartmentManagementInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TitleOfDepartmentsUncheckedUpdateWithoutDepartmentManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUpsertWithWhereUniqueWithoutDepartmentManagementInput = {
    where: UserIdentityWhereUniqueInput
    update: XOR<UserIdentityUpdateWithoutDepartmentManagementInput, UserIdentityUncheckedUpdateWithoutDepartmentManagementInput>
    create: XOR<UserIdentityCreateWithoutDepartmentManagementInput, UserIdentityUncheckedCreateWithoutDepartmentManagementInput>
  }

  export type UserIdentityUpdateWithWhereUniqueWithoutDepartmentManagementInput = {
    where: UserIdentityWhereUniqueInput
    data: XOR<UserIdentityUpdateWithoutDepartmentManagementInput, UserIdentityUncheckedUpdateWithoutDepartmentManagementInput>
  }

  export type UserIdentityUpdateManyWithWhereWithoutDepartmentManagementInput = {
    where: UserIdentityScalarWhereInput
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyWithoutDepartmentManagementInput>
  }

  export type DepartmentManagementsCreateWithoutTitleInput = {
    divisionId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    department: DepartmentsCreateNestedOneWithoutDepartmentManagementInput
    UserIdentity?: UserIdentityCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsUncheckedCreateWithoutTitleInput = {
    id?: number
    divisionId: number
    departmentId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsCreateOrConnectWithoutTitleInput = {
    where: DepartmentManagementsWhereUniqueInput
    create: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput>
  }

  export type DepartmentManagementsCreateManyTitleInputEnvelope = {
    data: DepartmentManagementsCreateManyTitleInput | DepartmentManagementsCreateManyTitleInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentManagementsUpsertWithWhereUniqueWithoutTitleInput = {
    where: DepartmentManagementsWhereUniqueInput
    update: XOR<DepartmentManagementsUpdateWithoutTitleInput, DepartmentManagementsUncheckedUpdateWithoutTitleInput>
    create: XOR<DepartmentManagementsCreateWithoutTitleInput, DepartmentManagementsUncheckedCreateWithoutTitleInput>
  }

  export type DepartmentManagementsUpdateWithWhereUniqueWithoutTitleInput = {
    where: DepartmentManagementsWhereUniqueInput
    data: XOR<DepartmentManagementsUpdateWithoutTitleInput, DepartmentManagementsUncheckedUpdateWithoutTitleInput>
  }

  export type DepartmentManagementsUpdateManyWithWhereWithoutTitleInput = {
    where: DepartmentManagementsScalarWhereInput
    data: XOR<DepartmentManagementsUpdateManyMutationInput, DepartmentManagementsUncheckedUpdateManyWithoutTitleInput>
  }

  export type UserCreateWithoutUserIdentityInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applicationAccess?: ApplicationAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserIdentityInput = {
    id: string
    email: string
    name: string
    phoneNumber?: string
    isActive?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    applicationAccess?: ApplicationAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserIdentityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserIdentityInput, UserUncheckedCreateWithoutUserIdentityInput>
  }

  export type DepartmentManagementsCreateWithoutUserIdentityInput = {
    divisionId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    department: DepartmentsCreateNestedOneWithoutDepartmentManagementInput
    title: TitleOfDepartmentsCreateNestedOneWithoutDepartmentManagementInput
  }

  export type DepartmentManagementsUncheckedCreateWithoutUserIdentityInput = {
    id?: number
    divisionId: number
    departmentId: number
    titleId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentManagementsCreateOrConnectWithoutUserIdentityInput = {
    where: DepartmentManagementsWhereUniqueInput
    create: XOR<DepartmentManagementsCreateWithoutUserIdentityInput, DepartmentManagementsUncheckedCreateWithoutUserIdentityInput>
  }

  export type DivisionsCreateWithoutUserIdentityInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsUncheckedCreateWithoutUserIdentityInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsCreateOrConnectWithoutUserIdentityInput = {
    where: DivisionsWhereUniqueInput
    create: XOR<DivisionsCreateWithoutUserIdentityInput, DivisionsUncheckedCreateWithoutUserIdentityInput>
  }

  export type TitleOfDivisionsCreateWithoutUserIdentityInput = {
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementCreateNestedManyWithoutTitleInput
  }

  export type TitleOfDivisionsUncheckedCreateWithoutUserIdentityInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedCreateNestedManyWithoutTitleInput
  }

  export type TitleOfDivisionsCreateOrConnectWithoutUserIdentityInput = {
    where: TitleOfDivisionsWhereUniqueInput
    create: XOR<TitleOfDivisionsCreateWithoutUserIdentityInput, TitleOfDivisionsUncheckedCreateWithoutUserIdentityInput>
  }

  export type UserUpsertWithoutUserIdentityInput = {
    update: XOR<UserUpdateWithoutUserIdentityInput, UserUncheckedUpdateWithoutUserIdentityInput>
    create: XOR<UserCreateWithoutUserIdentityInput, UserUncheckedCreateWithoutUserIdentityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserIdentityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserIdentityInput, UserUncheckedUpdateWithoutUserIdentityInput>
  }

  export type UserUpdateWithoutUserIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicationAccess?: ApplicationAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicationAccess?: ApplicationAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentManagementsUpsertWithoutUserIdentityInput = {
    update: XOR<DepartmentManagementsUpdateWithoutUserIdentityInput, DepartmentManagementsUncheckedUpdateWithoutUserIdentityInput>
    create: XOR<DepartmentManagementsCreateWithoutUserIdentityInput, DepartmentManagementsUncheckedCreateWithoutUserIdentityInput>
    where?: DepartmentManagementsWhereInput
  }

  export type DepartmentManagementsUpdateToOneWithWhereWithoutUserIdentityInput = {
    where?: DepartmentManagementsWhereInput
    data: XOR<DepartmentManagementsUpdateWithoutUserIdentityInput, DepartmentManagementsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type DepartmentManagementsUpdateWithoutUserIdentityInput = {
    divisionId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
    title?: TitleOfDepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateWithoutUserIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsUpsertWithoutUserIdentityInput = {
    update: XOR<DivisionsUpdateWithoutUserIdentityInput, DivisionsUncheckedUpdateWithoutUserIdentityInput>
    create: XOR<DivisionsCreateWithoutUserIdentityInput, DivisionsUncheckedCreateWithoutUserIdentityInput>
    where?: DivisionsWhereInput
  }

  export type DivisionsUpdateToOneWithWhereWithoutUserIdentityInput = {
    where?: DivisionsWhereInput
    data: XOR<DivisionsUpdateWithoutUserIdentityInput, DivisionsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type DivisionsUpdateWithoutUserIdentityInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionsUncheckedUpdateWithoutUserIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type TitleOfDivisionsUpsertWithoutUserIdentityInput = {
    update: XOR<TitleOfDivisionsUpdateWithoutUserIdentityInput, TitleOfDivisionsUncheckedUpdateWithoutUserIdentityInput>
    create: XOR<TitleOfDivisionsCreateWithoutUserIdentityInput, TitleOfDivisionsUncheckedCreateWithoutUserIdentityInput>
    where?: TitleOfDivisionsWhereInput
  }

  export type TitleOfDivisionsUpdateToOneWithWhereWithoutUserIdentityInput = {
    where?: TitleOfDivisionsWhereInput
    data: XOR<TitleOfDivisionsUpdateWithoutUserIdentityInput, TitleOfDivisionsUncheckedUpdateWithoutUserIdentityInput>
  }

  export type TitleOfDivisionsUpdateWithoutUserIdentityInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUpdateManyWithoutTitleNestedInput
  }

  export type TitleOfDivisionsUncheckedUpdateWithoutUserIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DivisionManagement?: DivisionsManagementUncheckedUpdateManyWithoutTitleNestedInput
  }

  export type UserIdentityCreateWithoutDivisionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutUserIdentityInput
    DepartmentManagement: DepartmentManagementsCreateNestedOneWithoutUserIdentityInput
    titleOfDivision: TitleOfDivisionsCreateNestedOneWithoutUserIdentityInput
  }

  export type UserIdentityUncheckedCreateWithoutDivisionInput = {
    id?: number
    userId: string
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityCreateOrConnectWithoutDivisionInput = {
    where: UserIdentityWhereUniqueInput
    create: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput>
  }

  export type UserIdentityCreateManyDivisionInputEnvelope = {
    data: UserIdentityCreateManyDivisionInput | UserIdentityCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type DivisionsManagementCreateWithoutDivisionInput = {
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    title: TitleOfDivisionsCreateNestedOneWithoutDivisionManagementInput
  }

  export type DivisionsManagementUncheckedCreateWithoutDivisionInput = {
    id?: number
    titleId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementCreateOrConnectWithoutDivisionInput = {
    where: DivisionsManagementWhereUniqueInput
    create: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput>
  }

  export type DivisionsManagementCreateManyDivisionInputEnvelope = {
    data: DivisionsManagementCreateManyDivisionInput | DivisionsManagementCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type UserIdentityUpsertWithWhereUniqueWithoutDivisionInput = {
    where: UserIdentityWhereUniqueInput
    update: XOR<UserIdentityUpdateWithoutDivisionInput, UserIdentityUncheckedUpdateWithoutDivisionInput>
    create: XOR<UserIdentityCreateWithoutDivisionInput, UserIdentityUncheckedCreateWithoutDivisionInput>
  }

  export type UserIdentityUpdateWithWhereUniqueWithoutDivisionInput = {
    where: UserIdentityWhereUniqueInput
    data: XOR<UserIdentityUpdateWithoutDivisionInput, UserIdentityUncheckedUpdateWithoutDivisionInput>
  }

  export type UserIdentityUpdateManyWithWhereWithoutDivisionInput = {
    where: UserIdentityScalarWhereInput
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyWithoutDivisionInput>
  }

  export type DivisionsManagementUpsertWithWhereUniqueWithoutDivisionInput = {
    where: DivisionsManagementWhereUniqueInput
    update: XOR<DivisionsManagementUpdateWithoutDivisionInput, DivisionsManagementUncheckedUpdateWithoutDivisionInput>
    create: XOR<DivisionsManagementCreateWithoutDivisionInput, DivisionsManagementUncheckedCreateWithoutDivisionInput>
  }

  export type DivisionsManagementUpdateWithWhereUniqueWithoutDivisionInput = {
    where: DivisionsManagementWhereUniqueInput
    data: XOR<DivisionsManagementUpdateWithoutDivisionInput, DivisionsManagementUncheckedUpdateWithoutDivisionInput>
  }

  export type DivisionsManagementUpdateManyWithWhereWithoutDivisionInput = {
    where: DivisionsManagementScalarWhereInput
    data: XOR<DivisionsManagementUpdateManyMutationInput, DivisionsManagementUncheckedUpdateManyWithoutDivisionInput>
  }

  export type DivisionsManagementScalarWhereInput = {
    AND?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
    OR?: DivisionsManagementScalarWhereInput[]
    NOT?: DivisionsManagementScalarWhereInput | DivisionsManagementScalarWhereInput[]
    id?: IntFilter<"DivisionsManagement"> | number
    divisionId?: IntFilter<"DivisionsManagement"> | number
    titleId?: IntFilter<"DivisionsManagement"> | number
    isActive?: BoolFilter<"DivisionsManagement"> | boolean
    createdAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    updatedAt?: DateTimeFilter<"DivisionsManagement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"DivisionsManagement"> | Date | string | null
  }

  export type DivisionsCreateWithoutDivisionManagementInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsUncheckedCreateWithoutDivisionManagementInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionsCreateOrConnectWithoutDivisionManagementInput = {
    where: DivisionsWhereUniqueInput
    create: XOR<DivisionsCreateWithoutDivisionManagementInput, DivisionsUncheckedCreateWithoutDivisionManagementInput>
  }

  export type TitleOfDivisionsCreateWithoutDivisionManagementInput = {
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityCreateNestedManyWithoutTitleOfDivisionInput
  }

  export type TitleOfDivisionsUncheckedCreateWithoutDivisionManagementInput = {
    id?: number
    name: string
    isLeader?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    UserIdentity?: UserIdentityUncheckedCreateNestedManyWithoutTitleOfDivisionInput
  }

  export type TitleOfDivisionsCreateOrConnectWithoutDivisionManagementInput = {
    where: TitleOfDivisionsWhereUniqueInput
    create: XOR<TitleOfDivisionsCreateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedCreateWithoutDivisionManagementInput>
  }

  export type DivisionsUpsertWithoutDivisionManagementInput = {
    update: XOR<DivisionsUpdateWithoutDivisionManagementInput, DivisionsUncheckedUpdateWithoutDivisionManagementInput>
    create: XOR<DivisionsCreateWithoutDivisionManagementInput, DivisionsUncheckedCreateWithoutDivisionManagementInput>
    where?: DivisionsWhereInput
  }

  export type DivisionsUpdateToOneWithWhereWithoutDivisionManagementInput = {
    where?: DivisionsWhereInput
    data: XOR<DivisionsUpdateWithoutDivisionManagementInput, DivisionsUncheckedUpdateWithoutDivisionManagementInput>
  }

  export type DivisionsUpdateWithoutDivisionManagementInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionsUncheckedUpdateWithoutDivisionManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type TitleOfDivisionsUpsertWithoutDivisionManagementInput = {
    update: XOR<TitleOfDivisionsUpdateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedUpdateWithoutDivisionManagementInput>
    create: XOR<TitleOfDivisionsCreateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedCreateWithoutDivisionManagementInput>
    where?: TitleOfDivisionsWhereInput
  }

  export type TitleOfDivisionsUpdateToOneWithWhereWithoutDivisionManagementInput = {
    where?: TitleOfDivisionsWhereInput
    data: XOR<TitleOfDivisionsUpdateWithoutDivisionManagementInput, TitleOfDivisionsUncheckedUpdateWithoutDivisionManagementInput>
  }

  export type TitleOfDivisionsUpdateWithoutDivisionManagementInput = {
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUpdateManyWithoutTitleOfDivisionNestedInput
  }

  export type TitleOfDivisionsUncheckedUpdateWithoutDivisionManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isLeader?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutTitleOfDivisionNestedInput
  }

  export type DivisionsManagementCreateWithoutTitleInput = {
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    division: DivisionsCreateNestedOneWithoutDivisionManagementInput
  }

  export type DivisionsManagementUncheckedCreateWithoutTitleInput = {
    id?: number
    divisionId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementCreateOrConnectWithoutTitleInput = {
    where: DivisionsManagementWhereUniqueInput
    create: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput>
  }

  export type DivisionsManagementCreateManyTitleInputEnvelope = {
    data: DivisionsManagementCreateManyTitleInput | DivisionsManagementCreateManyTitleInput[]
    skipDuplicates?: boolean
  }

  export type UserIdentityCreateWithoutTitleOfDivisionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    User: UserCreateNestedOneWithoutUserIdentityInput
    DepartmentManagement: DepartmentManagementsCreateNestedOneWithoutUserIdentityInput
    division: DivisionsCreateNestedOneWithoutUserIdentityInput
  }

  export type UserIdentityUncheckedCreateWithoutTitleOfDivisionInput = {
    id?: number
    userId: string
    divisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityCreateOrConnectWithoutTitleOfDivisionInput = {
    where: UserIdentityWhereUniqueInput
    create: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput>
  }

  export type UserIdentityCreateManyTitleOfDivisionInputEnvelope = {
    data: UserIdentityCreateManyTitleOfDivisionInput | UserIdentityCreateManyTitleOfDivisionInput[]
    skipDuplicates?: boolean
  }

  export type DivisionsManagementUpsertWithWhereUniqueWithoutTitleInput = {
    where: DivisionsManagementWhereUniqueInput
    update: XOR<DivisionsManagementUpdateWithoutTitleInput, DivisionsManagementUncheckedUpdateWithoutTitleInput>
    create: XOR<DivisionsManagementCreateWithoutTitleInput, DivisionsManagementUncheckedCreateWithoutTitleInput>
  }

  export type DivisionsManagementUpdateWithWhereUniqueWithoutTitleInput = {
    where: DivisionsManagementWhereUniqueInput
    data: XOR<DivisionsManagementUpdateWithoutTitleInput, DivisionsManagementUncheckedUpdateWithoutTitleInput>
  }

  export type DivisionsManagementUpdateManyWithWhereWithoutTitleInput = {
    where: DivisionsManagementScalarWhereInput
    data: XOR<DivisionsManagementUpdateManyMutationInput, DivisionsManagementUncheckedUpdateManyWithoutTitleInput>
  }

  export type UserIdentityUpsertWithWhereUniqueWithoutTitleOfDivisionInput = {
    where: UserIdentityWhereUniqueInput
    update: XOR<UserIdentityUpdateWithoutTitleOfDivisionInput, UserIdentityUncheckedUpdateWithoutTitleOfDivisionInput>
    create: XOR<UserIdentityCreateWithoutTitleOfDivisionInput, UserIdentityUncheckedCreateWithoutTitleOfDivisionInput>
  }

  export type UserIdentityUpdateWithWhereUniqueWithoutTitleOfDivisionInput = {
    where: UserIdentityWhereUniqueInput
    data: XOR<UserIdentityUpdateWithoutTitleOfDivisionInput, UserIdentityUncheckedUpdateWithoutTitleOfDivisionInput>
  }

  export type UserIdentityUpdateManyWithWhereWithoutTitleOfDivisionInput = {
    where: UserIdentityScalarWhereInput
    data: XOR<UserIdentityUpdateManyMutationInput, UserIdentityUncheckedUpdateManyWithoutTitleOfDivisionInput>
  }

  export type UserIdentityCreateManyUserInput = {
    id?: number
    divisionId: number
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ApplicationAccessCreateManyUserInput = {
    id: string
    applicationId: string
    roleId: number
    isActive: boolean
  }

  export type UserIdentityUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartmentManagement?: DepartmentManagementsUpdateOneRequiredWithoutUserIdentityNestedInput
    division?: DivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
    titleOfDivision?: TitleOfDivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
  }

  export type UserIdentityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    application?: ApplicationsUpdateOneRequiredWithoutApplicationAccessNestedInput
    role?: RolesUpdateOneRequiredWithoutApplicationAccessNestedInput
  }

  export type ApplicationAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubCategoryCreateManyCategoryInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SubCategoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationAccessCreateManyApplicationInput = {
    id: string
    userId: string
    roleId: number
    isActive: boolean
  }

  export type ApplicationAccessUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    role?: RolesUpdateOneRequiredWithoutApplicationAccessNestedInput
    user?: UserUpdateOneRequiredWithoutApplicationAccessNestedInput
  }

  export type ApplicationAccessUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessCreateManyRoleInput = {
    id: string
    userId: string
    applicationId: string
    isActive: boolean
  }

  export type ApplicationAccessUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    application?: ApplicationsUpdateOneRequiredWithoutApplicationAccessNestedInput
    user?: UserUpdateOneRequiredWithoutApplicationAccessNestedInput
  }

  export type ApplicationAccessUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationAccessUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartmentManagementsCreateManyDepartmentInput = {
    id?: number
    divisionId: number
    titleId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentManagementsUpdateWithoutDepartmentInput = {
    divisionId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: TitleOfDepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
    UserIdentity?: UserIdentityUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityCreateManyDepartmentManagementInput = {
    id?: number
    userId: string
    divisionId: number
    titleOfDivisionId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityUpdateWithoutDepartmentManagementInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUserIdentityNestedInput
    division?: DivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
    titleOfDivision?: TitleOfDivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
  }

  export type UserIdentityUncheckedUpdateWithoutDepartmentManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUncheckedUpdateManyWithoutDepartmentManagementInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentManagementsCreateManyTitleInput = {
    id?: number
    divisionId: number
    departmentId: number
    isProfitCenter?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepartmentManagementsUpdateWithoutTitleInput = {
    divisionId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentsUpdateOneRequiredWithoutDepartmentManagementNestedInput
    UserIdentity?: UserIdentityUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserIdentity?: UserIdentityUncheckedUpdateManyWithoutDepartmentManagementNestedInput
  }

  export type DepartmentManagementsUncheckedUpdateManyWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
    isProfitCenter?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityCreateManyDivisionInput = {
    id?: number
    userId: string
    titleOfDivisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementCreateManyDivisionInput = {
    id?: number
    titleId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityUpdateWithoutDivisionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUserIdentityNestedInput
    DepartmentManagement?: DepartmentManagementsUpdateOneRequiredWithoutUserIdentityNestedInput
    titleOfDivision?: TitleOfDivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
  }

  export type UserIdentityUncheckedUpdateWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUncheckedUpdateManyWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    titleOfDivisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementUpdateWithoutDivisionInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: TitleOfDivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput
  }

  export type DivisionsManagementUncheckedUpdateWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementUncheckedUpdateManyWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    titleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementCreateManyTitleInput = {
    id?: number
    divisionId: number
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserIdentityCreateManyTitleOfDivisionInput = {
    id?: number
    userId: string
    divisionId: number
    DepartmentManagementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DivisionsManagementUpdateWithoutTitleInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    division?: DivisionsUpdateOneRequiredWithoutDivisionManagementNestedInput
  }

  export type DivisionsManagementUncheckedUpdateWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DivisionsManagementUncheckedUpdateManyWithoutTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUpdateWithoutTitleOfDivisionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutUserIdentityNestedInput
    DepartmentManagement?: DepartmentManagementsUpdateOneRequiredWithoutUserIdentityNestedInput
    division?: DivisionsUpdateOneRequiredWithoutUserIdentityNestedInput
  }

  export type UserIdentityUncheckedUpdateWithoutTitleOfDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserIdentityUncheckedUpdateManyWithoutTitleOfDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    divisionId?: IntFieldUpdateOperationsInput | number
    DepartmentManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationsCountOutputTypeDefaultArgs instead
     */
    export type ApplicationsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsCountOutputTypeDefaultArgs instead
     */
    export type DepartmentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentManagementsCountOutputTypeDefaultArgs instead
     */
    export type DepartmentManagementsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentManagementsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleOfDepartmentsCountOutputTypeDefaultArgs instead
     */
    export type TitleOfDepartmentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleOfDepartmentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionsCountOutputTypeDefaultArgs instead
     */
    export type DivisionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleOfDivisionsCountOutputTypeDefaultArgs instead
     */
    export type TitleOfDivisionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleOfDivisionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoryDefaultArgs instead
     */
    export type SubCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationsDefaultArgs instead
     */
    export type ApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApplicationAccessDefaultArgs instead
     */
    export type ApplicationAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApplicationAccessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesDefaultArgs instead
     */
    export type RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpDefaultArgs instead
     */
    export type OtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentsDefaultArgs instead
     */
    export type DepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentManagementsDefaultArgs instead
     */
    export type DepartmentManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentManagementsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleOfDepartmentsDefaultArgs instead
     */
    export type TitleOfDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleOfDepartmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserIdentityDefaultArgs instead
     */
    export type UserIdentityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserIdentityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionsDefaultArgs instead
     */
    export type DivisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionsManagementDefaultArgs instead
     */
    export type DivisionsManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionsManagementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TitleOfDivisionsDefaultArgs instead
     */
    export type TitleOfDivisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TitleOfDivisionsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}