import styled from "styled-components";

const Bubble = () => 
        <Wrapper>
            <Content>
                <TextWrapper>
                    <div>
                        <h3>Message</h3>
                        <p>has been</p>
                    </div>
                   
                    <h1>Send</h1>
                </TextWrapper>
                <img height='80px' src="./send-bubble.svg" />
            </Content>
        </Wrapper>

export default Bubble;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    width: 140px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    line-height: 30px;
    div{
        line-height: 16px;
    }

    p{
        font-size: 16px;
        color: #FFD899;
    }
    h1{
        font-size: 38px;
        color: #14142D;
    }
    h3{
        font-size: 22px;
        color: #ffffff;
    }
`