import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { items } from "../data.js";

const MegaDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const FruitPic = styled.img`
  border-radius: 5px;
  height: 200px;
  width: 200px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const VendorInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
/* 
div2 
        h2, name
        p, latin name
        p, description, 
        button, price
    

        div3:
            img, vendorimg
            p, sold by 
        /div3
*/

const ItemDetails = () => {
  const { itemId } = useParams();
  const selectedFruit = items[itemId]; //data.js line 17 to make sense of this.

  return (
    <MegaDiv>
      <FruitPic src={selectedFruit.imageSrc} alt="fruitpic"></FruitPic>
      <Description>
        <VendorInfo></VendorInfo>
      </Description>
    </MegaDiv>
  );
};

export default ItemDetails;
