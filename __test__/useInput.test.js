import { renderHook, act } from '@testing-library/react-hooks';

import useInput from '../useInput';

test('useInput', () => {
  const { result } = renderHook(() => useInput(''));

  expect(result.current.value).toEqual('');
  act(() =>
    result.current.handleChange({
      target: {
        value: 'Hello',
      },
    })
  );

  expect(result.current.value).toEqual('Hello');
  act(() => result.current.setValue('Hi there'));
  expect(result.current.value).toEqual('Hi there');
});
