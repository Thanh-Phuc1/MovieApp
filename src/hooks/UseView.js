import { useEffect, useState } from "react"

export const UseView = () => {
    const [windownWidth, setWindownWidth] = useState( window.innerWidth || document.documentElement.clientWidth)
    useEffect(() => {
      const hanldeWindownWidth = () => {
        const width = window.innerWidth || document.documentElement.clientWidth;
      }
      hanldeWindownWidth();
      window.addEventListener('resize', hanldeWindownWidth)    
      return () => {
          window.removeEventListener('resize', hanldeWindownWidth)
      }
    }, []);
    return [windownWidth] ;
;    
}