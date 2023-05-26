import { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import cassetteWheel from "/audiomodule/tape-player_wheel.svg";
import btnPlay from '/audiomodule/btn-play.svg';
import btnPause from '/audiomodule/btn-pause.svg';
import btnOpenClose from '/audiomodule/btn-open-close.svg';

const audioUrl = './sounds/zhane-rl.mp3';
const audio = new Audio(audioUrl);

const AudioModule = () => {

    const [ isBtnOpen, setIsBtnOpen ] = useState(false);
    const [ isPlay, setIsPlay ] = useState(true);
    const [ firstRender, setFirstRender ] = useState(false);

    useEffect(() => {
        setFirstRender(true)
    }, [])

    useEffect(() => {
        if ( !firstRender ) {
            audio.play();
            audio.loop = true;
        } else {
            if ( isPlay ) {
                audio.pause();
                audio.play();
                audio.loop = true;
            } else {
                audio.pause();
            }
        }
    }, [isPlay]);

    return(
        <Wrapper>
            <SoundModule isBtnOpen={isBtnOpen}>
                <LeftSection>
                    <WheelOne isPlay={isPlay} src={cassetteWheel}/>    
                    <WheelTwo isPlay={isPlay} src={cassetteWheel}/>                
                    <BtnPlay isPlay={isPlay} src={btnPlay} onClick={() => setIsPlay(true)}/>  
                    <BtnPause isPlay={isPlay} src={btnPause} onClick={() => setIsPlay(false)}/>
                    <img src='./audiomodule/tape-player.svg' />
                </LeftSection>
                <RightSection>
                    <Header>
                        <p style={{color: 'white'}}>MU<br />SIC</p>
                        <p style={{color: 'black'}}>PA<br />NEL</p>
                    </Header>
                    <Button isBtnOpen={isBtnOpen} src={btnOpenClose} onClick={() => setIsBtnOpen(!isBtnOpen)}/>
                </RightSection>
            </SoundModule>
        </Wrapper>
    )
}

export default AudioModule;

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    bottom: 30px; 
    z-index: 15;
`
const SoundModule = styled.div`
    width: 290px;
    height: 160px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-left: ${props => props.isBtnOpen ? '0px' : '-220px'};
    border-radius: 0px 5px 5px 0px;
    background: #4C765F;
    padding: 8px;
    transition: 0.3s ease-in-out;
`
const LeftSection = styled.div`
    margin-left: 20px;
`
const WheelOne = styled.div`
    width: 75px;
    height: 75px;
    background: ${props => `url(${props.src})`};
    position: absolute;
    margin-left: 7px;
    margin-top: 7px;
    animation: rotate 3s linear;
    animation-iteration-count: infinite;
    animation-play-state: ${props => props.isPlay ? 'running' : 'paused'};
    
    @keyframes rotate {
        0% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
          }
        100% {
            -webkit-transform: rotate3d(0, 0, 1, 359deg);
            transform: rotate3d(0, 0, 1, 359deg);
          }
      }
`
const WheelTwo = styled(WheelOne)`
    margin-left: 90px;
    margin-top: 7px;
`
const BtnPlay = styled.button`
    width: 23px;
    height: 23px;
    position: absolute;
    margin-left: 62px;
    margin-top: 103px;
    border: none;
    background: ${props => `url(${props.src})`};
    filter: ${props => props.isPlay ? 'drop-shadow(0px 0px #00000090)' : 'drop-shadow(2px 2px #00000090)'};
    transform: ${props => props.isPlay ? 'translate(2px, 2px)' : 'translate(0px, 0px)'};
    cursor: pointer;
    transition: 0.1s;
`
const BtnPause = styled(BtnPlay)`
    margin-left: 89px;
    margin-top: 103px;
    filter: ${props => !props.isPlay ? 'drop-shadow(0px 0px #00000090)' : 'drop-shadow(2px 2px #00000090)'};
    transform: ${props => !props.isPlay ? 'translate(2px, 2px)' : 'translate(0px, 0px)'};
`
const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Header = styled.div`
    p{
        font-family: 'Montserrat';
        font-weight: 900;
        font-size: 23px;
        line-height: 21px;
    }
`
const Button = styled.button`
    width: 49px;
    height: 49px;
    background: ${props => `url(${props.src})`};
    border: none;
    cursor: pointer;
    transform: ${props => props.isBtnOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
    transition: 0.3s;

    :hover{
        opacity: 0.7;
`