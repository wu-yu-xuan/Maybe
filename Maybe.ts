import { MaybeValue, MaybeClass } from './interface';
import Nothing from './Nothing';
import Just from './Just';

export default function Maybe<T>(
  value: MaybeValue<T> | (() => MaybeValue<T>) = undefined
): MaybeClass<T> {
  const val: MaybeValue<T> =
    value instanceof Function
      ? value()
      : value instanceof Just || value instanceof Nothing
      ? value.value()
      : value;
  return val === undefined || val === null ? new Nothing() : new Just(val);
}
