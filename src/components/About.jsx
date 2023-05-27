import styled from 'styled-components';
import { useContext } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { technologies } from '../app-data/technologies';
import { useTranslation } from 'react-i18next';
import { AppMinResContext } from '../context/AppMinResContext';
import { appStylesData } from '../app-data/appStylesData';
import Fade from 'react-reveal/Fade';

const About = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isMinRes} = useContext(AppMinResContext);

return(
    <Wrapper id='about' brightmode={brightMode ? 1 : undefined}>
        <Container brightmode={brightMode ? 1 : undefined}>
            <LeftSide>
                <Fade left>
                    <h1 style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('About.Front.1')}</h1>
                    <h2 style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('About.Front.2')}</h2><br />
                    <p style={isMinRes ? {...appStylesData.minRes.p} : {...appStylesData.maxRes.p}}>{t('About.Front.3')}</p><br />
                </Fade>
                <Fade left>
                    <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Front-End Technologies</h3>
                    <TechnologiesWrapper>
                        {technologies.frontEnd.map((item, index) => <SmallBox key={index} brightmode={brightMode ? 1 : undefined}><p>{item}</p></SmallBox>)}
                    </TechnologiesWrapper>
                </Fade>
                <Fade left>
                    <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Back-End Technologies</h3>
                    <TechnologiesWrapper>
                        {technologies.backEnd.map((item, index) => <SmallBox key={index} brightmode={brightMode ? 1 : undefined}><p>{item}</p></SmallBox>)}
                    </TechnologiesWrapper>
                </Fade>
                <Fade left>
                    <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Other Skills</h3>
                    <TechnologiesWrapper>
                        {technologies.other.map((item, index) => <SmallBox key={index} brightmode={brightMode ? 1 : undefined}><p>{item}</p></SmallBox>)}
                    </TechnologiesWrapper>
                </Fade>
            </LeftSide>
            <MiddleSide brightmode={brightMode ? 1 : undefined}>
                <Fade bottom>
                <div />
                {brightMode ? <img src='./about-image-bright.svg' /> : <img src='./about-image-dark.svg' />}
                </Fade>
            </MiddleSide>
            <RightSide>
                <Fade right>
                    <h1 style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('About.Graphic.1')}</h1>
                    <h2 style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('About.Graphic.2')}</h2><br />
                    <p style={isMinRes ? {...appStylesData.minRes.p} : {...appStylesData.maxRes.p}}>{t('About.Graphic.3')}</p><br />
                </Fade>
                <Fade right>
                    <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>I use Software</h3>
                    <TechnologiesWrapper>
                        {technologies.graphic.map((item, index) => <SmallBox key={index} brightmode={brightMode ? 1 : undefined}><p>{item}</p></SmallBox>)}
                    </TechnologiesWrapper>
                </Fade>
            </RightSide>
        </Container>
    </Wrapper>
    )
}
export default About;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.brightmode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    transition: 0.2s;
`
const Container = styled.div`
    margin-left: 5.5vw;
    margin-right: 5.5vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    p{
        color: ${props => props.brightmode? '#5F5F92' : '#90AFAD'};
    }
    h1{
        background: linear-gradient(to right, #F99055 10%, #B94971 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightmode ? 'drop-shadow(0.5vw 0.5vw #dadaf2)' : 'drop-shadow(0.5vw 0.5vw #262147)'};
    }
    h2, h4 {
        color: ${props => props.brightmode? '#4F4E66' : '#ffffff'};
    }
    h3{
        color: ${props => props.brightmode ? '#4F4E66' : '#F4BC58'};
    }

    @media (max-width: 768px) {
        margin-top: 10vh;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h1{
            filter: ${props => props.brightmode? 'drop-shadow(0.5vw 0.5vw #dadaf2)' : 'drop-shadow(0.5vw 0.5vw #262147)'};
        }
    }
`
const LeftSide = styled.div`
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 5px;

    @media (max-width: 768px) {
        max-width: 100%;
        align-items: center;
    }
`
const MiddleSide = styled.div`
    img{
        margin-top: 4vh;
        width: 25vw;
        max-height: 80vh;
    }
    div{
        display: none;
    }
    @media (max-width: 768px) {
        img{
            display: none;
        }
        div{
            display: block;
            background: ${props => props.brightmode? 'black' : '#ffffff'};
            width: 100px;
            height: 3px;
        }
    }
`
const RightSide = styled.div`
    max-width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    p{
        align-items: flex-end;
    }
    h2{
        text-align: right;
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        align-items: center;
    }
`
const TechnologiesWrapper = styled.div`
    max-width: 450px;
    max-height: 140px;
    margin-top: 5px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 8px;
`
const SmallBox = styled.div`
    display: inline;
    padding: 5px;
    border-radius: 5px;
    background: ${props => props.brightmode? '#DFDFEF' : '#262147'};;
    text-align: center;
    color: ${props => props.brightmode? 'black' : '#ffffff'};
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
    }
`