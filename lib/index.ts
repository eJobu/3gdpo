import * as webPayments from './redirectedPayments'

export type NonEmptyArray<T> = [T, ...T[]]
export type Json = Readonly<Record<string, any>>
export {
  webPayments
}
