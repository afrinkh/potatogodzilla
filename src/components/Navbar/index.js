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
                    <NavLogo to='/'>Jelly 🤍</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Viewer'>Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
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
