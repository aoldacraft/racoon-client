import React, { useState } from "react";
import styled from "styled-components";

const NavBar = () => {
  const [command, setCommand] = useState("");
  return (
    <NavBarContainer>
      <CommandLine
        type="text"
        placeholder="Command Line"
        value={command}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCommand(e.target.value)
        }
      />
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.header`
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 250;
  background-color: white;
  padding: 12px 32px;
  /* top: 0;
  position: fixed;
  left: 256px; */
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

const CommandLine = styled.input`
  width: 85%;
  padding: 12px 20px;
  border: 1px solid #919eab;
  border-radius: 6px;
  color: #919eab;
`;
