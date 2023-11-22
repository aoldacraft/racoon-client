import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarContainer>
      <NavArea>
        <NavTitle>Main</NavTitle>
        <NavList>
          <NavItem>
            <Link to="/">- Services</Link>
          </NavItem>
        </NavList>
      </NavArea>

      {/* <NavArea>
        <NavTitle>Settings</NavTitle>
        <NavList>
          <NavItem>
            <Link to="/setting/user">- User</Link>
          </NavItem>
          <NavItem>
            <Link to="/setting/server">- Server</Link>
          </NavItem>
        </NavList>
      </NavArea> */}

      <NavArea>
        <NavTitle>Log</NavTitle>
        <NavList>
          <NavItem>
            <Link to="/log">- All</Link>
          </NavItem>
        </NavList>
      </NavArea>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  width: 250px;
  height: 2868px;
  background-color: #212b36;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavArea = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul``;

const NavTitle = styled.h3`
  font-size: 18px;
  color: white;
`;

const NavItem = styled.div`
  color: white;
  font-size: 16px;
  padding-left: 25px;
  margin: 15px 0;
`;
