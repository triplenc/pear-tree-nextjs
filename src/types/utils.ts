export type VoidFunction<T> = (arg: T) => void;

export type Nullable<T> = T | null;

export function isString(param: any): param is string {
  return typeof param === "string";
}
