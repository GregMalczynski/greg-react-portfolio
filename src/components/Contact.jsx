import styled from 'styled-components';
import { useContext, useState } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { AppMinResContext } from '../context/AppMinResContext';
import { appStylesData } from '../app-data/appStylesData';
import { useTranslation } from 'react-i18next';
import Form from './contact-form/Form';
import Fade from 'react-reveal/Fade';
import SendHero from './contact-form/SendHero';
import LoaderWheel from './contact-form/LoaderWheel';
import Bubble from './contact-form/Bubble';

const Contact = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isMinRes} = useContext(AppMinResContext);

    const [ messageSend, setMessageSend ] = useState(false);
    const [ showMessageSend, setShowMessageSend ] = useState(false);
    const [ showBubble, setShowBubble ] = useState(false)

    const handleSendMessage = () => {
        setMessageSend(true)
        setTimeout(() => {
            setMessageSend(false)
            setShowMessageSend(true)
            setShowBubble(true)
            const show = () => setTimeout(() => {
                setShowMessageSend(false)
                setShowBubble(false)
            }, 3500)
            show()
        }, 3000)
    }

return(
    <Wrapper id='contact' brightmode={brightMode ? 1 : undefined}>
        <LoaderWheelWrapper messageSend={messageSend}>
            <LoaderWheel />  
        </LoaderWheelWrapper>
        <FeaturesWrapper showMessageSend={showMessageSend}>
        <SendHeroWrapper showMessageSend={showMessageSend}>
            <SendHero />
        </SendHeroWrapper>
        <BubbleWrapper showBubble={showBubble}>
            <Bubble />
        </BubbleWrapper> 
        </FeaturesWrapper>
        <Container brightmode={brightMode ? 1 : undefined}>
            <MainSection>
                <Fade left>
                    <Section>
                        <h1 brightmode={brightMode ? 1 : undefined} style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('Contact.Title')}</h1>
                    </Section>
                </Fade>
                <Fade right>
                    <Section>
                        <h2 brightmode={brightMode ? 1 : undefined} style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('Contact.Subtitle')}</h2>
                    </Section>
                </Fade>
                <Fade left>
                    <Img>
                        {brightMode ? <img src='./contact-image-bright.svg' /> : <img src='./contact-image.svg' />}
                    </Img>
                </Fade>
                    <SectionBottom>
                        <SectionLeft>
                            <p style={isMinRes ? {...appStylesData.minRes.p} : {...appStylesData.maxRes.p}}>{t('Contact.Description')}</p>
                            <IconsWrapper>
                                <a href='https://www.linkedin.com/in/grzegorz-malczynski' target='_blank' ><img src='./ico-linked-dark.svg' /></a>
                                <a href='https://github.com/GregMalczynski' target='_blank' ><img src='./ico-github-dark.svg' /></a>
                                <a href='https://www.codewars.com/users/GregoryMalczynski' target='_blank' ><img src='./ico-codewarz-dark.svg' /></a>
                            </IconsWrapper>
                        </SectionLeft>
                        <SectionRight>
                            <Form 
                                brightmode={brightMode ? 1 : undefined} 
                                handleSendMessage={handleSendMessage}
                            />
                        </SectionRight>
                    </SectionBottom>
                <Footer>
                    <p style={{fontSize: '10px'}}>Project / Draw / Designed / Code</p>
                    <p style={{fontSize: '10px'}}>By Greg</p>
                </Footer>
            </MainSection>
        </Container>
    </Wrapper>
    )
}
export default Contact;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.brightmode ? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    transition: 0.2s;
`
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p{
        color: ${props => props.brightmode ? '#5F5F93' : '#789A98'};
    }
    h2{
        font-weight: 400;
    }
    h1{
        font-size: 6vw;
        line-height: 5.5vw;
        background: linear-gradient(to right, #F99055 10%, #B94971 50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightmode ? 'drop-shadow(0.5vw 0.5vw #dadaf2)' : 'drop-shadow(0.5vw 0.5vw #262147)'};
    }
    h2, h3, h4 {
        color: white;
        font-size: 2vw;
        color: ${props => props.brightmode ? '#4F4E66' : '#ffffff'};
    }

    @media (max-width: 768px) {
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }
`
const MainSection = styled.div`
    max-width: 50%; 
    height: 100vh;
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 25px;
    }
`
const Section = styled.div`
`
const SectionBottom = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`
const SectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SectionRight = styled.div`

`
const IconsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
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
const Img = styled.div`
    img{
        width: 100%;
        height: 36vh;
        max-width: 900px;

        @media (max-width: 768px) {
            height: 26vh;
        }
    }
`
const Footer = styled.div`
    
`
const FeaturesWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    visibility: ${props => props.showMessageSend ? 'visible' : 'hidden'};
    z-index: 21;
    overflow-x: hidden;
`
const SendHeroWrapper = styled.div` 
    width: 160px;
    position: absolute;
    display: flex;
    align-items: right;
    justify-content: flex-end;
    margin-top: 50vh;
    transform: ${props => props.showMessageSend ? 'translateX(0px)' : 'translateX(200px)'};
    transition: 0.2s;
    z-index: 20;
`
const BubbleWrapper = styled.div`
    width: 140px;
    position: relative;
    display: flex;
    align-items: right;
    justify-content: flex-end;
    margin-top: 50vh;
    transform: ${props => props.showBubble ? 'translateX(-130px) translateY(-150px)' : 'translateX(200px) translateY(-150px)'};
    transition: 0.6s;
    z-index: 19;
`
const LoaderWheelWrapper = styled.div`
    width: 100vw;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 75vh;
    opacity: ${props => props.messageSend ? '1' : '0'};
    visibility: ${props => props.messageSend ? 'visible' : 'hidden'};
    transition: 0.4s;
    z-index: 18;
`