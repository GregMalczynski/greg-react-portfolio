import styled from 'styled-components';
import Main from './components/Main';
import { useState } from 'react';
import { AppMode } from './context/AppMode';
import { AppLang } from './context/AppLang';
import { AppMinResContext } from './context/AppMinResContext';
import { useWindowWidthSize } from './hooks/useWindowWidthSize';

const App = () => {

  const [ brightMode, setBrightMode ] = useState(false);
  const [ isPlLang, setIsPlLang ] = useState(false);
  const {isMinRes} = useWindowWidthSize();

  return(
    <AppMode.Provider value={{brightMode, setBrightMode}}>
      <AppLang.Provider value={{isPlLang, setIsPlLang}}>
        <AppMinResContext.Provider value={{isMinRes}}>
          <Wrapper>
            <Main />
          </Wrapper>
        </AppMinResContext.Provider>
      </AppLang.Provider>
    </AppMode.Provider>
  )
}
export default App;

const Wrapper = styled.div`
`