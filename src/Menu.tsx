import { RefObject } from 'react';
import { styled } from 'styled-components';

interface RightMenuProps {
  handleClick: (ref: RefObject<HTMLDivElement>) => void;
  myDivRef:  RefObject<HTMLDivElement>;
  aboutRef:  RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
}

export default function RightMenu({handleClick, myDivRef,aboutRef,galleryRef}:RightMenuProps) {
  return (
    <>
        
        <Menu>
          <div className="menuitem" onClick={()=>handleClick(aboutRef)}>
            about us
          </div>
          <div className="menuitem" onClick={()=>handleClick(myDivRef)}>
            contact
          </div>
          <div className="menuitem" onClick={()=>handleClick(myDivRef)}>Book </div>
          <div className="menuitem wow" onClick={()=>handleClick(galleryRef)}>gallery</div>
        </Menu>
      
    </>
  )
}


const Menu = styled.div`
  background-color: #cecece16;
  position: absolute;
  top: 50px;
  height: 92%;
  width: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  font-family: 'Orbitron', sans-serif;  border-radius: 8px;

`;