import { MaybeClass, Just, Nothing } from '.';

export default function isMaybe<T>(maybe: any): maybe is MaybeClass<T> {
  return maybe instanceof Just || maybe instanceof Nothing;
}
