import { createContext } from "react";
import { useState, useEffect } from "react";



const MinResDetect = ({children}) => {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ minWidth, setMinWidth ] = useState(false);
  
    useEffect(() => {
      window.addEventListener('resize', widthValue );
      return () => window.removeEventListener('resize', widthValue);
    }, [])
  
    const widthValue = () => {
      let windowSize = window.innerWidth;
      setWindowWidth(windowSize);
    }

    useEffect(() => {
      windowWidth < 768 ? setMinWidth(true) : setMinWidth(false);
    }, [windowWidth]);

    return(
        <AppStyles.Provider value={minWidth}>
            {children}
        </AppStyles.Provider>
    )
}

const AppStyles = createContext(MinResDetect);

export { MinResDetect, AppStyles }