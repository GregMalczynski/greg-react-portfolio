import styled from 'styled-components';
import { useContext, useId, useState, useRef, useEffect } from 'react';
import { AppMode } from '../context/AppMode';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { experienceData } from '../app-data/experienceData';
import { useTranslation } from 'react-i18next';
import { AppMinResContext } from '../context/AppMinResContext';
import { appStylesData } from '../app-data/appStylesData';
import Fade from 'react-reveal/Fade';

const Experience = () => {

    const { t, i18n } = useTranslation();
    const {brightMode} = useContext(AppMode);
    const {isMinRes} = useContext(AppMinResContext);

    const ID = useId();
    const myRef = useRef();

    const [ jobDescription, setJobDescription ] = useState(0);
    const [ markerStyle, setMarkerStyle ] = useState({
        top: 0,
        height: 0,
    });

    const handleClick = (e, index) => {
        setJobDescription(index);
        indicator(e.target);
        useTranslation();
    }

    const indicator = (e) => {
        setMarkerStyle({top: e.offsetTop, height: e.offsetHeight});
    };

    const ButtonList = experienceData.map((item, index) => {
        return <JobButton 
            key={`${ID}-${index}`} 
            brightMode={brightMode}
            isMinRes={isMinRes}
            className='btn' 
            style={index === jobDescription ? {background: '#26214720'} : {background: 'none'}}
            onClick={e => handleClick(e, index)}
            >
            <p style={isMinRes ? {...appStylesData.maxRes.h1} : {...appStylesData.maxRes.p}}>{isMinRes ? `#${index}` : item.jobTitle}</p>
        </JobButton>
    })

    const ExperienceDataDescriptionList = t(`Experience.${jobDescription + 1}.Description`, {returnObjects: true}).map((item, index) => {
        return <li 
            key={`${ID}-${index}`}
            >
            <p style={isMinRes ? {...appStylesData.minRes.p} : {...appStylesData.maxRes.p}}>{item}</p>
        </li>
    })

    const ExperienceTemplate = () => {
        return <div>
            <h2 style={{fontWeight: '400'}}>{experienceData[jobDescription].jobTitle}</h2><br />
            <h4 style={isMinRes ? {...appStylesData.minRes.h4} : {...appStylesData.maxRes.h4}}><b>{experienceData[jobDescription].company}</b></h4><br />
            <h4 style={isMinRes ? {...appStylesData.minRes.h4} : {...appStylesData.maxRes.h4}}>{experienceData[jobDescription].period}</h4><br />
            <ul>{ExperienceDataDescriptionList}</ul>
        </div>
    }

    useEffect(() => {
        setMarkerStyle({top: myRef?.current.childNodes[0].offsetTop, height: myRef?.current.childNodes[0].offsetHeight})
    }, [])

return(
    <Wrapper id='experience' brightMode={brightMode}> 
        <Container brightMode={brightMode}>
            <LeftSide brightMode={brightMode}>
                <Fade bottom>
                {brightMode ? <img src='./experience-image-bright.svg' /> : <img src='./experience-image-dark.svg' />}
                </Fade>
            </LeftSide>
            <RightSide>
                <Section>
                <Fade right>
                    <h1 brightMode={brightMode} style={isMinRes ? {...appStylesData.minRes.h1} : {...appStylesData.maxRes.h1}}>{t('Experience.Title')}</h1>
                </Fade>
                </Section>
                <Section>
                    <Fade right>
                    <h2 brightMode={brightMode} style={isMinRes ? {...appStylesData.minRes.h2} : {...appStylesData.maxRes.h2}}>{t('Experience.Subtitle')}</h2>
                    </Fade>
                </Section>
                <ExperienceWrapper>
                <Fade right>
                    <JobWrapper>
                        <Bar markerStyle={markerStyle}>
                            <div className='marker'></div>
                        </Bar>
                        <Content >
                            <div ref={myRef} >
                                {ButtonList}
                            </div>
                        </Content>
                    </JobWrapper>
                    <DescriptionWrapper brightMode={brightMode}>
                        {ExperienceTemplate()}
                    </DescriptionWrapper>
                </Fade>
                </ExperienceWrapper>
            </RightSide>
        </Container>
    </Wrapper>
    )
}
export default Experience;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${props => props.brightMode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
`
const Container = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 20px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    p{
        color: ${props => props.brightMode ? '#5F5F92' : '#90AFAD'};
    }
    h1{
        font-size: 5.2vw;
        line-height: 4.8vw;
        background: linear-gradient(to right, #F99055 10%, #B94971 60%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: ${props => props.brightMode ? 'drop-shadow(0.5vw 0.5vw #dadaf2)' : 'drop-shadow(0.5vw 0.5vw #262147)'};
    }
    h2, h3, h4 {
        color: ${props => props.brightMode ? '#4F4E66' : '#ffffff'};
    }

    @media (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 0vh;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        h1{
            filter: ${props => props.brightMode ? 'drop-shadow(5px 5px #dadaf2)' : 'drop-shadow(8px 8px #262147)'};
        }
    }
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 420px;
        max-height: 80vh;
    }
    @media (max-width: 1090px) {
        display: none;
        p {
            text-align: right;
        }
    }
`
const RightSide = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-centent: center;
    align-items: left;
    gap: 25px;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }
    @media (max-width: 1090px) {
        width: 100%;
    } 
`
const Section = styled.div`
`
const ExperienceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 35px;
`
const Content = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    div{
        gap: 15px;
    }
    @media (max-width: 768px) {
        width: 130px;
    }
`
const JobWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

`
const Bar = styled.div`
    div{
        position: absolute;
        top: ${props => props.markerStyle.top}px;
        height: ${props => props.markerStyle.height}px;
        width: 5px;
        background: #C86975;
        transition: 0.3s;
    }
`
const DescriptionWrapper = styled.div`
    width: 100%;
    visibility: visible;
    opacity: 1;
    color: ${props => props.brightMode ? 'black' : '#ffffff'};
    ul {
        list-style-image: url("./arrow.svg");
    }
    li {
        line-height: 1.5rem;
        list-style-position: outside;
    }
    transition: visibility 1s;
    &:visible {
        opacity: 0;
        visibility: hidden;
    }
    
`
const JobButton = styled.div`
    padding: 5px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid #ffffff20;
    text-align: center;
    color: ${props => props.brightMode ? '#4F4E66' : '#ffffff'};
    
    font-family: 'Barlow', sans-serif;
    margin-bottom: 15px;
    cursor: pointer;
    text-align: left;

    &:hover {
        border: 1px solid #ffffff30;
    }
    &:focus {
        background: ${props => props.index === props.jobDescription ? 'blue' : '#262147'};
    }
`