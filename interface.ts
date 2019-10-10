export type MaybeValue<T> = T | null | undefined;

export interface MaybeClass<T> {
  isJust(): boolean;
  isNothing(): boolean;
  value(): MaybeValue<T>;
  call<R, Args extends any[]>(
    fn: (value: T, ...args: Args) => MaybeValue<R>,
    ...args: Args
  ): MaybeClass<R>;
}
