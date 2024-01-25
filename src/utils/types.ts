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
