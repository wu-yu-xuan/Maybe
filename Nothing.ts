import { MaybeClass, MaybeValue } from './interface';
import Maybe from './Maybe';

export default class Nothing<T> implements MaybeClass<T> {
  isJust(): false {
    return false;
  }
  isNothing(): true {
    return true;
  }
  value(): undefined {
    return undefined;
  }
  call<R, Args extends any[]>(
    fn: (value: T, ...args: Args) => MaybeValue<R>,
    ...args: Args
  ): MaybeClass<R> {
    return Maybe();
  }
}
