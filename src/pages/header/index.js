import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Navbar from "../../components/Navbar";
import Image from 'react-bootstrap/Image';
import header from './header.jpg'

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* HEADER IMAGE */}
            {/* <Image src={header} style={{width:''}} fluid/> */}
      </>
    );
}

export default Header;
//
import React from 'react';
import { FaBars } from 'react-icons/fa';
import Viewer from '../ContentViewer';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavBarElements';
const Navbar = ({ toggle }) => {
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Manhwa</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Viewer'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign up</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/Viewer'>Sign in</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
