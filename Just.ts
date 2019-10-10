import { MaybeClass, MaybeValue } from './interface';
import Maybe from './Maybe';

export default class Just<T> implements MaybeClass<T> {
  constructor(private val: T) {}
  isJust(): true {
    return true;
  }
  isNothing(): false {
    return false;
  }
  value() {
    return this.val;
  }
  call<R, Args extends any[]>(
    fn: (value: T, ...args: Args) => MaybeValue<R>,
    ...args: Args
  ): MaybeClass<R> {
    return Maybe<R>(fn(this.val, ...args));
  }
}
