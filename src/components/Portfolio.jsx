import styled from 'styled-components';
import { useContext } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { portfolioData } from '../app-data/portfolioData';
import { AppMinResContext } from '../context/AppMinResContext';
import { appStylesData } from '../app-data/appStylesData';
import { useTranslation } from 'react-i18next';
import svgMask from '../../public/portfolio-mask.svg';
import Fade from 'react-reveal/Fade';

const Portfolio = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isMinRes} = useContext(AppMinResContext);

    const portfolioTemplateLeft = (item, index) => {
        return(
            <PortfolioContainer key={index} reverse={item.reverse}>
                <MaskWrapper reverse={item.reverse} svgMask={svgMask}>
                <Fade right>
                <div>
                <img className='clip-svg' src={item.img} />
                    <svg x="0px" y="0px" >
                        <defs>
                            <clipPath id='myClip'>
                                <polygon fill="#D16E6B" points="400.85,88.279 247.946,0 0,143.494 0,320.053 152.904,408.332 400.85,264.838 "/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                </Fade>
                </MaskWrapper>
                <ContentWrapper reverse={item.reverse}>
                <Fade left>
                    <div className='text-wrapper'>
                        <h4 style={isMinRes ? {...appStylesData.minRes.h4} : {...appStylesData.maxRes.h4}}>{t(`Portfolio.List.${index}.PreTitle`)}</h4>
                        <h2>{t(`Portfolio.List.${index}.Title`)}</h2>
                        <br />
                    </div>
                </Fade>
                    <Description brightMode={brightMode}>
                    <Fade left>
                        <div>
                            <p style={isMinRes ? {...appStylesData.minRes.p} : {...appStylesData.maxRes.p}}>{t(`Portfolio.List.${index}.Description`)}</p>
                        </div>
                    </Fade>
                    </Description>
                    <Fade left>
                    <TechnologiesWrapper reverse={item.reverse}>
                        <p style={brightMode ? {color: '#5F5F92'} : {color: 'white'}}>{t(`Portfolio.Technologies`)}</p> {item.technologies.map((item, index) => <SmallBox key={index} brightMode={brightMode}><p>{item}</p></SmallBox>)}
                    </TechnologiesWrapper>
                    <IconsWrapper reverse={item.reverse}>
                        <a href={item.git} target='_blank'><img src='./ico-github-dark.svg' /></a>
                        <img src='./ico-enter-dark.svg' />
                    </IconsWrapper>
                    </Fade>
                </ContentWrapper>
            </PortfolioContainer>
    )}

return(
    <Wrapper id='portfolio' brightMode={brightMode}>
        <Container brightMode={brightMode} >
            <Fade left>
                <h1 brightMode={brightMode} style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('Portfolio.Title')}</h1>
                <h2 brightMode={brightMode} style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('Portfolio.Subtitle')}</h2>
                {portfolioData.map((item, index) => {
                    return portfolioTemplateLeft(item, index)
                })}
            </Fade>
        </Container>
    </Wrapper>
    )
}
export default Portfolio;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.brightMode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    justify-content: center;
`
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 20px;

    p{
        color: ${props => props.brightMode? '#5F5F92' : '#90AFAD'};
        text-align: ${props => props.reverse ? 'left' : 'right'};
    }
    h1{
        font-size: 6vw;
        line-height: 5.5vw;
        background: linear-gradient(to right, #F99055 10%, #B94971 45%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightMode ? 'drop-shadow(0.5vw 0.5vw #dadaf2)' : 'drop-shadow(0.5vw 0.5vw #262147)'};
    }
    h2{
        color: ${props => props.brightMode? '#4F4E66' : '#ffffff'};
    }
    h3, h4 {
        color: white;
        font-size: 2vw;
        font-weight: 400;
        color: ${props => props.brightMode? 'black' : '#ffffff'};
        text-align: ${props => props.reverse ? 'left' : 'right'};
    }

    @media (max-width: 768px) {
        margin-top: 14vh;
        margin-left: 20px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
`

const PortfolioContainer = styled.div`
    max-width: 1400px;
    display: flex;
    flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
    justify-content: center;
    align-items: center;

    p{
        text-align: ${props => props.reverse ? 'right' : 'left'};
    }
    h2, h3, h4 {
        text-align: ${props => props.reverse ? 'right' : 'left'};
    }
    hr{
        width: 50px;
        height: 3px;
        border: none;
        background: black;
        text-align: right;
        margin-right: 0;
    }
`
const MaskWrapper = styled.div`
    display: flex;
    flex-direction: row;

    div{
        height: 420px;
        width: 415px;
    }
    img{
        scale: 1.0;
        transition: 0.3s;
    }
    .clip-svg {
        z-index: 0;
        clip-path: url(#myClip);
    }
    &:hover {
        img{
            scale: 1.05;
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const ContentWrapper = styled.div`
    max-width: 950px; 
    display: flex;
    flex-direction: column;
    margin-left: ${props => props.reverse ? '-50px' : null};
    margin-right: ${props => props.reverse ? null : '-50px'};
    z-index: 2;

    @media (max-width: 768px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`
const Description = styled.div`
    
    div {
        background: ${props => props.brightMode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
`
const TechnologiesWrapper = styled.div`
    max-width: 100%;
    max-height: 70px;
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.reverse ? 'flex-end' : 'flex-start'};
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
const IconsWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: ${props => props.reverse ? 'flex-end' : 'flex-start'};
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