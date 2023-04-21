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
  const [ isIntro, setIsIntro ] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsIntro(false)
      }, 4000)
  }, [])

  return(
    <>
    {isIntro ? <Intro /> :
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