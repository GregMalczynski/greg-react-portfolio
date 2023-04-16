import styled from 'styled-components';
import { useContext } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { technologies } from '../app-data/technologies';
import { useTranslation } from 'react-i18next';
import { AppMinResContext } from '../context/AppMinResContext';
import { appStylesData } from '../app-data/appStylesData';

const About = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isMinRes} = useContext(AppMinResContext);

return(
    <Wrapper id='about' brightMode={brightMode}>
        <Container brightMode={brightMode}>
            <LeftSide>
                <h1 style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('About.Front.1')}</h1><br />
                <h2 style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('About.Front.2')}</h2><br />
                <p>{t('About.Front.3')}</p><br />
                <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Front-End Technologies</h3>
                <TechnologiesWrapper>
                    {technologies.frontEnd.map((item, index) => <SmallBox key={index} brightMode={brightMode}><p>{item}</p></SmallBox>)}
                </TechnologiesWrapper>
                <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Back-End Technologies</h3>
                <TechnologiesWrapper>
                    {technologies.backEnd.map((item, index) => <SmallBox key={index} brightMode={brightMode}><p>{item}</p></SmallBox>)}
                </TechnologiesWrapper>
                <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>Other Skills</h3>
                <TechnologiesWrapper>
                    {technologies.other.map((item, index) => <SmallBox key={index} brightMode={brightMode}><p>{item}</p></SmallBox>)}
                </TechnologiesWrapper>
            </LeftSide>
            <MiddleSide brightMode={brightMode}>
                <div />
                <img src='./about-image.svg' />
            </MiddleSide>
            <RightSide>
                <h1 style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('About.Graphic.1')}</h1><br />
                <h2 style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('About.Graphic.2')}</h2><br />
                <p>{t('About.Graphic.3')}</p><br />
            <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>I use Software</h3>
            <TechnologiesWrapper>
                {technologies.graphic.map((item, index) => <SmallBox key={index} brightMode={brightMode}><p>{item}</p></SmallBox>)}
            </TechnologiesWrapper>
            </RightSide>
        </Container>
    </Wrapper>
    )
}
export default About;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.brightMode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
`
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    p{
        color: ${props => props.brightMode? '#5F5F92' : '#90AFAD'};
    }
    h1{
       
        background: linear-gradient(to right, #F99055 10%, #B94971 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightMode? 'drop-shadow(8px 8px #dadaf2)' : 'drop-shadow(8px 8px #262147)'};
    }
    h2, h3, h4 {
        color: ${props => props.brightMode? '#4F4E66' : '#ffffff'};
    }

    @media (max-width: 768px) {
        margin-top: 10vh;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h1{
            filter: ${props => props.brightMode? 'drop-shadow(5px 5px #BED4A9)' : 'drop-shadow(8px 8px #262147)'};
        }
    }
`
const LeftSide = styled.div`
    max-width: 32vw;
    display: flex;
    flex-direction: column;
    justify-content: left;

    @media (max-width: 768px) {
        max-width: 100%;
        align-items: center;
    }
`
const MiddleSide = styled.div`
    img{
        margin-top: 4vh;
        width: 25vw;
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
            background: ${props => props.brightMode? 'black' : '#ffffff'};
            width: 100px;
            height: 3px;
        }
    }
`
const RightSide = styled.div`
    max-width: 32vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    max-height: 70px;
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
    background: ${props => props.brightMode? '#BED4A9' : '#262147'};;
    text-align: center;
    color: ${props => props.brightMode? 'black' : '#ffffff'};
    transition: 0.2s;

    &:hover {
        transform: translateY(-3px);
    }
`