import { useEffect, useRef } from "react";

function useMount() {
  const v = useRef(true);

  useEffect(() => {
    v.current = false;
  }, []);

  return v.current;
}

export default useMount;
