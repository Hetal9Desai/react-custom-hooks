// create custom debounce hook with help of useEffect and clean-up function.
// const deboundedFunction=useDebounce(function,delay)

import { useEffect } from "react";

function useDebounce(callback, delay, deps = []) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay, callback]);
}

export default useDebounce;
