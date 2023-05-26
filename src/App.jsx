import Main from './components/Main';
import { useState, useEffect } from 'react';
import { AppMode } from './context/AppMode';
import { AppLang } from './context/AppLang';
import { AppMinResContext } from './context/AppMinResContext';
import { useWindowWidthSize } from './hooks/useWindowWidthSize';
import Intro from './components/Intro';

const App = () => {

  const [ brightMode, setBrightMode ] = useState(false);
  const [ isPlLang, setIsPlLang ] = useState(false);
  const {isMinRes} = useWindowWidthSize();
  const [ isIntroPlay, setIsIntroPlay ] = useState(true);

  useEffect(() => {
      const introPlay = () => {
        setTimeout(() => {
          setIsIntroPlay(false);
        }, 4000)
      } 

      if ( document.readyState === 'complete' ) {
        introPlay()
      } else {
        window.addEventListener('load', introPlay);
        return () => window.removeEventListener('load', introPlay);
      }
  }, []);

  return(
    <>
    {isIntroPlay ? <Intro /> :
    <AppMode.Provider value={{brightMode, setBrightMode}}>
    <AppLang.Provider value={{isPlLang, setIsPlLang}}>
      <AppMinResContext.Provider value={{isMinRes}}>
        <Main />
      </AppMinResContext.Provider>
    </AppLang.Provider>
  </AppMode.Provider>
    }
    </>
  )
}
export default App;