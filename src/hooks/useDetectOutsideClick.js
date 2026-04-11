import { useEffect, useRef } from "react";

const useDetectOutsideClick = (callback) => {
  const dropDown = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropDown.current && !dropDown.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return dropDown
};

export default useDetectOutsideClick;
