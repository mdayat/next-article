import { useEffect, useRef, useState } from "react";

const useDetectClick = (initialState: boolean) => {
  const [isClicked, setIsClicked] = useState(initialState);
  const clickOutsideRef = useRef<HTMLElement>();

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        clickOutsideRef.current &&
        !clickOutsideRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClicked]);

  return { clickOutsideRef, isClicked, setIsClicked };
};

export { useDetectClick };
