export const congruentValue = (a: any, b: any) => a === b

export const isNull = (value: any) => value === null

export const randomSequence = (limit = 10) =>
  Math.random()
    .toString(36)
    .slice(2, limit + 2)
