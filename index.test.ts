import { Maybe, isMaybe } from '.';

it('maybe works well', () => {
  const maybe = Maybe(1);
  expect(isMaybe(1)).toBeFalsy();
  expect(isMaybe(maybe)).toBeTruthy();
  expect(maybe.value()).toBe(Maybe(() => 1).value());
  expect(maybe.value()).toBe(Maybe(Maybe(() => 1)).value());
  expect(maybe.value()).toBe(Maybe(Maybe(1)).value());
  expect(maybe.isJust()).toBeTruthy();
  expect(maybe.isNothing()).toBeFalsy();
  const result = maybe
    .call(() => null)
    .call(() => 1)
    .call(v => v + 1);
  expect(isMaybe(result)).toBeTruthy();
  expect(result.value()).toBeUndefined();
  expect(result.isJust()).toBeFalsy();
  expect(result.isNothing()).toBeTruthy();
});
