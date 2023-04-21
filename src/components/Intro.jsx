import styled from "styled-components";
import { bgColorModeData } from "../app-data/bgColorModeData";

const Intro = () => {
    return(
        <Wrapper bgColorModeData={bgColorModeData}>
            <Img>
                <img src="./logo.svg" alt="logo"/>
            </Img>
        </Wrapper>
    )
}

export default Intro;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${bgColorModeData.darkMode.background};
    justify-content: center;
    align-items: center;
`

const Img = styled.div`
    animation-name: logoScale;
    animation-duration: 4.5s;
    animation-iteration-count: 1;
    img{
        width: 120px;
    }
    @keyframes logoScale {
        from {
            scale: 0;
            opacity: 0;
            filter: blur(10px);
        }
        10% {
            scale: 0;
            opacity: 0;
            filter: blur(10px);
        }
        15% {
            scale 1.1;
            opacity: 1;
            filter: blur(0px);
        }
        18% {
            scale 1;
        }
        80% {
            scale 1;
        }
        83% {
            scale 1.1;
            opacity: 1;
            filter: blur(0px);
        }
        88% {
            scale 0;
            opacity: 0;
            filter: blur(10px);
        }
        to {
            scale: 0;
        }
    }
`