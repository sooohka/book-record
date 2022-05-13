import { useEffect } from "react";
/**
 * callback 바뀔때마다 time이 지난 후 callback호출됨
 */
function useDebounce(callback: () => void, time = 200) {
  useEffect(() => {
    const id = setTimeout(callback, time);
    return () => {
      clearTimeout(id);
    };
  }, [callback, time]);
}

export default useDebounce;
