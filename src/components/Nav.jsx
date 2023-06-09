import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { AppMode } from '../context/AppMode';
import { AppLang } from '../context/AppLang';
import { bgColorModeData } from '../app-data/bgColorModeData';
import { useTranslation } from 'react-i18next';
import { AppMinResContext } from '../context/AppMinResContext';

const Nav = () => {

    const { t, i18n } = useTranslation();
    const [ isScroll, setIsScroll ] = useState(false);

    const {brightMode, setBrightMode} = useContext(AppMode);
    const {isPlLang, setIsPlLang} = useContext(AppLang);
    const {isMinRes} = useContext(AppMinResContext);

    const [ showSlideMenu, setShowSlideMenu ] = useState(false);

    useEffect(() => {
        isPlLang ? i18n.changeLanguage('pl') : i18n.changeLanguage('en');
    }, [isPlLang]);

    useEffect(() => {
        isMinRes ? setShowSlideMenu(false) : setShowSlideMenu(false);
    }, [isMinRes]);

  return(
    <Wrapper brightmode={brightMode ? 1 : undefined}>
        <MenuSlideWrapper showSlideMenu={showSlideMenu}>
            <MenuSlide showSlideMenu={showSlideMenu} isMinRes={isMinRes} brightmode={brightMode ? 1 : undefined}>    
                <a href='#'>{t('Nav.Menu.1')}</a>
                <a href='#about'>{t('Nav.Menu.2')}</a>
                <a href='#experience'>{t('Nav.Menu.3')}</a>
                <a href='#portfolio'>{t('Nav.Menu.4')}</a>
                <a href='#contact'>{t('Nav.Menu.5')}</a>
                <Mode brightmode={brightMode ? 1 : undefined} isMinRes={isMinRes}>
                    <button onClick={() => setBrightMode(!brightMode)}>Color Mode /<br /> {brightMode ? 'Dark' : 'Bright'}</button>
                    <button onClick={() => setIsPlLang(!isPlLang)}>Language<br />{isPlLang ? 'EN' : 'PL'}</button>
                </Mode>
            </MenuSlide>
        </MenuSlideWrapper>
        <Menu>
            <Logo>
                <a href='#'><img src='./logo.svg' alt='logo'/></a>
            </Logo>
            {
                !isMinRes ? (
                <FullMenu>
                    <Items brightmode={brightMode ? 1 : undefined}>
                        <a href='#'>{t('Nav.Menu.1')}</a>
                        <a href='#about'>{t('Nav.Menu.2')}</a>
                        <a href='#experience'>{t('Nav.Menu.3')}</a>
                        <a href='#portfolio'>{t('Nav.Menu.4')}</a>
                        <a href='#contact'>{t('Nav.Menu.5')}</a>
                    </Items>
                    <Mode brightmode={brightMode ? 1 : undefined} isMinRes={isMinRes}>
                        <button onClick={() => setBrightMode(!brightMode)}>Color Mode / <br />{brightMode ? 'Dark' : 'Bright'}</button>
                        <button onClick={() => setIsPlLang(!isPlLang)}>Language<br />{isPlLang ? 'EN' : 'PL'}</button>
                    </Mode>
                </FullMenu>
                ) : (
                <BurgerMenu brightmode={brightMode ? 1 : undefined}>
                    {!showSlideMenu ? (
                        <div>
                            {!brightMode ? (
                                <img style={{color: 'red'}} onClick={() => setShowSlideMenu(!showSlideMenu)} src='./icon_hamburger_dark.svg' />
                                ) : (
                                <img onClick={() => setShowSlideMenu(!showSlideMenu)} src='./icon_hamburger_bright.svg' />
                            )}
                        </div>
                    ) : (
                        <div>
                            {!brightMode ? (
                                <img onClick={() => setShowSlideMenu(!showSlideMenu)} src='./icon_close_dark.svg' />
                                ) : (
                                <img onClick={() => setShowSlideMenu(!showSlideMenu)} src='./icon_close_bright.svg' />
                            )}
                        </div>
                    )}
                </BurgerMenu>
                )
            }
        </Menu>
    </Wrapper>
  )
}
export default Nav;

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 80px;
    display: flex;
    background: ${props => props.brightmode? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    box-shadow: ${props => props.isScroll ? '0 6px 6px 0px #00000012' : 'none'};
    transition: 0.5s;
    z-index: 10;
    
    a{
        text-decoration: none;
        padding: 8px;
        border-radius: 3px;
        color: ${props => props.brightmode? '#4F4E66' : '#ffffff'};
        transition: 0.2s;
    }
    a:hover {
        padding: 8px;
        background: #00000020;
    }
`
const MenuSlideWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 80px;
    visibility: ${props => props.showSlideMenu ? 'visible' : 'hidden' };
    z-index: 9;
`
const MenuSlide = styled.div`
    position: absolute;
    width: 260px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    margin-right: 0px;
    background: ${props => props.brightmode ? bgColorModeData.brightMode.background : bgColorModeData.darkMode.background};
    gap: 20px;
    transform: ${props => props.showSlideMenu ? 'translateX(0px)' : 'translateX(260px)'};
    visibility: ${props => props.showSlideMenu ? 'visible' : 'hidden'};
    transition: 0.3s;
`
const Menu = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;

    @media (max-width: 768px) {
        width: 100vh;
        margin-left: 20px;
        margin-right: 20px;
        
        h1{
            filter: ${props => props.brightmode? 'drop-shadow(5px 5px #BED4A9)' : 'drop-shadow(8px 8px #262147)'};
        }
    }
`
const Logo = styled.div`
    img{
        width: 55px;
        height: 55px;
        fill: #ffffff;
    }
`
const FullMenu = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    gap: 1vw;
`
const BurgerMenu = styled.div`
    p{
        color: ${props => props.brightmode? '#5F5F93' : '#789A98'};
    }
    img{
        opacity: 1;
        transition: 0.3s;
        cursor: pointer;
    }
    img:hover {
        opacity: 0.7;
    }
`
const Items = styled.div`
    display: flex;
    gap: 0.6vw;
`
const Mode = styled.div`
    display: flex; 
    flex-direction: ${props => props.isMinRes ? 'column' : 'row'};
    justify-content: center;
    gap: 10px;
    button{
        width: 100px;
        padding: 6px;
        border: 2px solid ${props => props.brightmode ? '#BED4A8' : '#ffffff'};
        border-radius: 4px;
        background: none;
        color: ${props => props.brightmode? 'black' : '#ffffff'};
        cursor: pointer;
        transition: 0.2s;
    }
    button:hover {
        border: 2px solid ${props => props.brightmode? '#49429A' : '#CB4A68'};
    }
`