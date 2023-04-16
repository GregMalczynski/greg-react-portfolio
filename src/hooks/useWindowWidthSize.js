import { useState, useEffect } from "react";

export const useWindowWidthSize = () => {

const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
const [ isMinRes, setIsMinRes ] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', widthValue );
    return () => window.removeEventListener('resize', widthValue);
  }, [])

  const widthValue = () => {
    let windowSize = window.innerWidth;
    setWindowWidth(windowSize);
  }

  useEffect(() => {
    windowWidth < 768 ? setIsMinRes(true) : setIsMinRes(false)
  }, [windowWidth]);

  return {isMinRes};
}