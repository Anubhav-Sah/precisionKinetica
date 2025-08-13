import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = (event) => {
    setIsMobile(event.matches);
    };


    // Set initial value
    setIsMobile(mql.matches);

    // Add event listener (cross-browser safe)
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      // Safari < 14 fallback
      mql.addListener(onChange);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return isMobile;
}
