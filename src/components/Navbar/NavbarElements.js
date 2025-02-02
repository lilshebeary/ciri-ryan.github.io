import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: #0b3142;
  min-height: 219px;
  margin-top: -130px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 4.5em;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 608px) {
    min-height: 180px;
    margin-bottom: -4rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b3142;
  width: 100vw;
  z-index: 1;
  max-width: 800px;
  margin-right: 2.5rem;
  margin-left: 1.2rem;
  margin-bottom: 1rem;

  
  @media screen and (max-width: 760px) {
    padding: 0 1.5rem;
    max-height: 200px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  min-width: 245px;
  font-size: 3.9rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-weight: 200;
  min-height: 3.5em;
  font-family: 'Roboto', sans-serif;
  font-family: 'Sorts Mill Goudy', serif;
  text-shadow: 3px 3px #0b3142;
  margin-left: -.5rem;

  @media screen and (max-width: 460px) {
   font-size: 2.8rem;
   margin-left: .5rem;
   margin-right: -2rem;
  }

  &:hover {
   color: #3D8DAE;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 808px) {
    display: flex;
    cursor: pointer;
    font-size: 3.1rem;
    color: #f0f9ff;

    // svg:hover {
    //   color: #fff !important;
    // }
  }
  @media screen and (max-width: 508px) {
    display: flex;
    cursor: pointer;
    font-size: 2.5rem;
    color: #f0f9ff;
    margin-left:2rem;
    svg:hover {
      color: #fff !important;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: .8rem;
  list-style: none;
  text-align: center;
  margin-bottom: 0;
 
  

  @media screen and (max-width: 808px) {
    display: none;
  }
`;

export const NavItem = styled.li`
font-family: 'Roboto', sans-serif;
font-family: 'Sorts Mill Goudy', serif;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-top: 0;
  padding: .2em .8em;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: 200;
  border-radius: 50px;
  letter-spacing: .05rem;
 
  &.active {
    border: 0.07rem solid #8b8c89;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;

  white-space: nowrap;
  color: #00000c;
  font-size: 1.5 rem;

  border: 0.5 solid grey;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #3D8DAE;
  }
`;

export const Hr = styled.hr`
  position: absolute;
  justify-self: center;
  align-self: center;
  margin-top: 19rem;
  color: #00000c;
  width: 12em;
  text-decoration: solid;
  z-index: 10;

  @media screen and (max-width: 460px) {
    margin-top: 0;
   
  }
  @media screen and (max-height: 680px) {
    margin-top: 12rem;
  }
`;
