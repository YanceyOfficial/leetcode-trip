export interface Dict<T> {
  [key: string]: T
}

// eslint-disable-next-line no-shadow
export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export type CompareFunction<T> = (a: T, b: T) => number
