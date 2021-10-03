import React from 'react';
import { SideBarContainer,Icon,CloseIcon,SidebarWrapper,SideBtnWrap,SidebarLink,SidebarMenu,SidebarRoute } from './SideBarElement';

const SideBar = ({ isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='discover'>Discover</SidebarLink>
                    <SidebarLink to='services'>Services</SidebarLink>
                    <SidebarLink to='signup'>Signup</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin' >Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
