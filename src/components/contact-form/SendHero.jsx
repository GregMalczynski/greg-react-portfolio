import styled from "styled-components";

const SendHero = () =>
        <Wrapper>
            <Content>
                <img height='380px' src="./send-hero.svg" />
            </Content>
        </Wrapper>

export default SendHero;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 22px;
`