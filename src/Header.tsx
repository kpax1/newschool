import { Divide as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";
import { styled } from 'styled-components';

interface HeadProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Head({ isOpen, setOpen }: HeadProps) {
  return (
    <Header>
      <div>
        <a href="/" className="logo">
          𝔫𝔴𝔰𝔠
        </a>
      </div>

      <div className="menuicon">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          easing="ease-in"
          hideOutline={true}
          size={28}
        />
      </div>
    </Header>
  );
}




const Header = styled.div`
  background-color: #ffffff10;
  position: absolute;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 0.5px solid #ffffff4c;
  font-family: "Cookie", cursive;
  font-size: 2em;
  z-index: 3;
`;