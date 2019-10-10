import { Maybe } from '.';

it('maybe works well', () => {
  const maybe = Maybe(1);
  expect(maybe.value()).toBe(Maybe(() => 1).value());
  expect(maybe.value()).toBe(Maybe(Maybe(() => 1)).value());
  expect(maybe.value()).toBe(Maybe(Maybe(1)).value());
  expect(maybe.isJust()).toBeTruthy();
  expect(maybe.isNothing()).toBeFalsy();
  const result = maybe
    .call(() => null)
    .call(() => 1)
    .call(v => v + 1);
  expect(result.value()).toBeUndefined();
  expect(result.isJust()).toBeFalsy();
  expect(result.isNothing()).toBeTruthy();
});
