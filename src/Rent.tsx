import cdj from "/rentitems/cdj.png";
import cd2 from "/rentitems/cdj2.png";
import xone92 from "/rentitems/Xone92-large.png";
import xone96 from "/rentitems/Xone-96-Top2.png";
import yamaha from "/rentitems/dinamic.png";
import mix from "/rentitems/mixing.png";
import dinamicsome from "/rentitems/91bfiQf6nrL.png";

import krk from "/rentitems/A1mSSNDRY5L.png";

import { styled } from "styled-components";

export default function Rent() {
  return (
    <RentSector>
      <RentItem>
        <img src={mix} />
        <h1>behringer X 32</h1>
      </RentItem>

      <RentItem>
        <img src={cdj} />
        <h1>CDJ 2000 NXS2</h1>
      </RentItem>

      <RentItem>
        <img src={cd2} alt="" />
        <div>
          <h1>CDJ 3000</h1>
        </div>
      </RentItem>

      <RentItem>
        <img src={xone92} alt="" />
        <div>
          <h1>Xone 92</h1>
        </div>
      </RentItem>

      <RentItem>
        <img src={xone96} alt="" />
        <div>
          <h1>Xone 96</h1>
        </div>
      </RentItem>

      <RentItem>
        <img src={yamaha} alt="" />
        <div>
          <h1>Yamaha DSR 118W</h1>
        </div>
      </RentItem>

      <RentItem>
        <img src={krk} alt="" />
        <div>
          <h1>KRK Rokit 8</h1>
        </div>
      </RentItem>

      <RentItem>
        <img src={dinamicsome} alt="" />
        <div>
          <h1>Yamaha HS8</h1>
        </div>
      </RentItem>
    </RentSector>
  );
}

const RentSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;
`;

const RentItem = styled.div`
  min-width: 200px;
  min-height: 200px;
  position: relative;

  margin: 0.5em;

  img {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-weight: 600;
    position: absolute;
    top: 70%;
    background-color: #2627259c;
    width: 100%;
    text-align: center;
    color: #dfdfdff4;
  }
`;
