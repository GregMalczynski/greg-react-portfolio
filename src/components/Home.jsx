import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';

import { appStylesData } from '../app-data/appStylesData';
import { AppLang } from '../context/AppLang';
import { useTranslation } from 'react-i18next';
import { AppMinResContext } from '../context/AppMinResContext';

const Main = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isPlLang} = useContext(AppLang);
    const {isMinRes} = useContext(AppMinResContext);

    useEffect(() => {
        isPlLang ? i18n.changeLanguage('pl') : i18n.changeLanguage('en')
    }, [isPlLang])

return(
    <Wrapper id='home' brightMode={brightMode}>
        <Container brightMode={brightMode}>
            <LeftSide brightMode={brightMode} appStylesData={appStylesData}>
                <Section>
                    <h3 style={isMinRes ? {...appStylesData.minRes.h3} : {...appStylesData.maxRes.h3}}>{t('Home.1')}</h3>
                </Section>
                <Section>
                    <h1 brightMode={brightMode} style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>GRZEGORZ<br />MALCZYNSKI</h1>
                </Section>
                <Section>
                    <h2 style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>FRONT-END DEVELOPER<br/>/ GRAPHIC DESIGNER</h2>
                </Section>
                <Section>
                <p style={{...appStylesData.maxRes.p}}>{t('Home.3')}</p>
                </Section>
                <IconsWrapper>
                        <img src='./ico-linked-dark.svg' />
                        <img src='./ico-github-dark.svg' />
                        <img src='./ico-codewarz-dark.svg' />
                </IconsWrapper>
                <Button brightMode={brightMode}>
                    <p>More About Me...</p>
                </Button>
            </LeftSide>
            <RightSide> 
                    <img src='./home-image.svg' />
            </RightSide>
        </Container>
    </Wrapper>
    )
}
export default Main;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.brightMode ? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    transition: 0.2s;
`
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 40px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;

    p{
        color: ${props => props.brightMode ? '#5F5F93' : '#789A98'};
    }
    h1{
        background: linear-gradient(to right, #F99055 10%, #B94971 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightMode ? 'drop-shadow(8px 8px #4f4e66)' : 'drop-shadow(8px 8px #262147)'};
    }
    h2, h3, h4 {
        color: ${props => props.brightMode ? '#4F4E66' : '#ffffff'};
    }

    @media (max-width: 768px) {
        margin-top: 0vh;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        h1{
            filter: ${props => props.brightMode ? 'drop-shadow(5px 5px #D1DDC3)' : 'drop-shadow(8px 8px #262147)'};
        }
    }
`
const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 20px;
    @media (max-width: 768px) {
        height: 28vh;
        align-items: center;
        gap: 5px;
    }
`
const Section = styled.div`
`
const RightSide = styled.div`
    display: flex;
    justify-content: center;
    img{
        width: 100%;
        height: 100%;
        max-width: 700px;
    }

    @media (max-width: 768px) {
        height: 48vh;
        img{
            max-width: 600px;
        }
    }
`
const IconsWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: left;
    gap: 10px;
    img{
        width: 34px;
        cursor: pointer;
        transition: 0.2s;
    }
    img:hover {
        opacity: 0.6;
        scale: 1.1;
    }
`
const Button = styled.div`
    width: 200px;
    height: 50px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid ${props => props.brightMode ? '#BED4A8' : '#ffffff'};
    justify-content: center;
    align-items: center;
    color: ${props => props.brightMode ? '#4F4E66' : '#ffffff'};
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    margin-bottom: 15px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        border: 2px solid ${props => props.brightMode ? '#49429A' : '#CB4A68'};
    }
`