import React from 'react'
import { ClosedIcon, Icon, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <ClosedIcon/>
        </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SidebarBtnWrap>
                
            </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
