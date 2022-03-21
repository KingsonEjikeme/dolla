import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="discover">Discover</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="signup">Signup</NavLinks>
              </NavItem>
              <NavBtn>
                  <NavBtnLink to="/signin">Sign in</NavBtnLink>
              </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar