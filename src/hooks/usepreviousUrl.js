import { useEffect, useRef } from "react";

const usePreviousUrl = () => {
  const prevUrlRef = useRef("");

  useEffect(() => {
    const handleRouteChange = (url) => {
      prevUrlRef.current = window.location.href;
    };

    window.addEventListener("beforeunload", handleRouteChange);
    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return prevUrlRef.current;
};

export default usePreviousUrl;
