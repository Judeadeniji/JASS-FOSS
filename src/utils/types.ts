type StyleValue = CSSDeclarationValue | UrlObject | string | string[] | boolean | number | null | undefined;

export type UrlObject = {
  url: string
}

type CSSDeclarationValue = {
  [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
}

export type CSSDeclaration = {
  [property: string]: typeof property extends string ? StyleValue | CSSDeclaration : never;
};

type PipeFunction<T, R> = (input: T) => R;

export function pipe<T>(...functions: Array<PipeFunction<any, any>>): PipeFunction<T, any> {
  return (input: T) => functions.reduce((result, fn) => fn(result), input);
}