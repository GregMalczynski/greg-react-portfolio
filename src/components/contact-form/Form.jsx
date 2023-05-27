import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = ({brightmode}) => {

    const form = useRef();

    const [ firstRender, setFirstRender ] = useState(false)
    const [ userName, setUserName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ userMessage, setUserMessage ] = useState('');
    const [ isError, setIsError ] = useState({
        userName: '',
        userEmail: '',
        userMessage: '',
    })
    const [ validate, setIsValidate ] = useState({
        userName: false,
        userEmail: false,
        userMessage: false,
    })

    useEffect(() => {
        setFirstRender(true)
    }, [])

    useEffect(() => {
        if ( !firstRender ) {
            setIsError({...isError, userName: ''})
        } else {
            if ( !userName || userName == '' ) {
                setIsError({...isError, userName: 'Name cant be empty'})
            } else {
                if ( userName.length < 3 || userName.length > 12 ) {
                    setIsError({...isError, userName: 'Name length should be between ( 3 - 12 ) characters.'})
                    setIsValidate({...validate, userName: false})
                } else {
                    setIsError({...isError, userName: ''})
                    setIsValidate({...validate, userName: true})
                }
            }
        }
        
    }, [userName])

    useEffect(() => {
        const validParm = {
            textFormat: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };

        if ( !firstRender ) {
            setIsError({...isError, userEmail: ''})
        } else {
            if ( !userEmail || userEmail == '' ) {
                setIsError({...isError, userEmail: 'Email cant be empty'})
            } else {
                if ( !userEmail.match(validParm.textFormat) ) {
                    setIsError({...isError, userEmail: 'Wrong email adress format.'})
                    setIsValidate({...validate, userEmail: false})
                } else {
                    setIsError({...isError, userEmail: ''})
                    setIsValidate({...validate, userEmail: true})
                }
            }
        }
            
    }, [userEmail])

    useEffect(() => {
        if ( !firstRender ) {
            setIsError({...isError, userMessage: ''})
        } else {
            if ( !userMessage || userMessage == '' ) {
                setIsError({...isError, userMessage: 'Message cant be empty'})
                setIsValidate({...validate, userMessage: false})
            } else {
                setIsError({...isError, userMessage: ''})
                setIsValidate({...validate, userMessage: true})
            }
        }
    }, [userMessage])


    const sendEmail = (e) => {

        e.preventDefault();

        if ( validate.userName && validate.userEmail && validate.userMessage ) {

            emailjs.sendForm('service_5gq9e2o', 'template_rpqhkug', form.current, '0lu3pFJXvIbNyu3Xc')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });

            setUserName('');
            setUserEmail('');
            setUserMessage('');

        } else {
            console.log('Incorrect form')
        }
    }

    return(
        <Wrapper>
            <FormSection ref={form}>
                <Input 
                    isError={isError.userName.length}
                    brightmode={brightmode ? 1 : undefined}
                    type="text" 
                    name="user_name" 
                    placeholder="name" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}/>
                <p>{isError.userName}</p>
                <Input 
                    isError={isError.userEmail.length}
                    brightmode={brightmode ? 1 : undefined}
                    type="email" 
                    name="user_email" 
                    placeholder="email" 
                    value={userEmail} 
                    onChange={(e) => setUserEmail(e.target.value)}/>
                <p>{isError.userEmail}</p>
                <TextArea 
                    isError={isError.userMessage.length}
                    brightmode={brightmode ? 1 : undefined}
                    name="message" 
                    placeholder="message" 
                    value={userMessage} 
                    onChange={(e) => setUserMessage(e.target.value)}/>
                <p>{isError.userMessage}</p>
                <Button 
                    brightmode={brightmode ? 1 : undefined} 
                    onClick={sendEmail}><p>Send Message</p></Button>
            </FormSection>
        </Wrapper>
    )
}

export default Form;

const Wrapper = styled.div`
    min-width: 320px;
`
const FormSection = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 5px;

    p{
        font-size: 10px;
        color: #F2BB57
    }
`
const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    border: ${props => props.isError > 0 ? '2px solid #F2BB57' : 'none'};
    color: ${props => props.brightmode ? '#4F4E66' : 'white'};
    background: ${props => props.brightmode ? '#E4E4EF' : '#173D3A'};

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #467C77;
    }
`
const TextArea = styled.textarea`
    height: 60px;
    padding: 5px;
    border-radius: 3px;
    border: ${props => props.isError > 0 ? '2px solid #F2BB57' : 'none'};
    color: ${props => props.brightmode ? '#4F4E66' : 'white'};
    background: ${props => props.brightmode ? '#E4E4EF' : '#173D3A'};
    resize: none;

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #467C77;
    }
`
const Button = styled.button`
    height: 50px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
    background: none;
    border: 2px solid ${props => props.brightmode ? '#BED4A8' : '#ffffff'};
    justify-content: center;
    align-items: center;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    a:link {
        text-decoration: none;
    }
    p{
        font-size: 16px;
        color: ${props => props.brightmode ? '#4F4E66' : '#ffffff'};
    }

    &:hover {
        border: 2px solid ${props => props.brightmode ? '#49429A' : '#CB4A68'};
    }
`