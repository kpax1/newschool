import { styled } from 'styled-components';

interface clicktype {
    handleClick: () => void
}

export default function RightMenu({handleClick}:clicktype) {
  return (
    <>
        
        <Menu>
          <div className="menuitem" onClick={handleClick}>
            about us
          </div>
          <div className="menuitem" onClick={handleClick}>
            contact
          </div>
          <div className="menuitem">Book </div>
          <div className="menuitem wow">gallery</div>
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