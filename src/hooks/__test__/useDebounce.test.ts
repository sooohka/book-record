import { renderHook } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";

import useDebounce from "hooks/useDebounce";

describe("debounce Test", () => {
  const callback = jest.fn();

  it("2초뒤에 callback 실행됨", async () => {
    renderHook(() => useDebounce(callback, 200));

    await wait(200);

    expect(callback).toBeCalledTimes(1);
  });

  it("훅이 unmount되면 callback이 실행되지 않음", async () => {
    const { unmount } = renderHook(() => useDebounce(callback, 200));

    unmount();
    await wait(300);

    expect(callback).toBeCalledTimes(0);
  });
});
