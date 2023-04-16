import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Experience from './Experience'
import Portfolio from './Portfolio';
import Contact from './Contact';
import AudioModule from './AudioModule';

const Main = () => 

    <Wrapper>
        <Nav />
        <AudioModule />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
    </Wrapper>

export default Main;

const Wrapper = styled.div`
`