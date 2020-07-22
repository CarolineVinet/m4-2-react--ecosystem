import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { items } from "../data.js";

const MegaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FruitPic = styled.img`
  border-radius: 8px;
  height: 400px;
  width: 400px;
  margin: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10px;
`;

const FruitName = styled.h2`
  font-size: 34px;
  color: black;
  font-weight: bolder;
  margin-bottom: 2px;
`;

const LatinName = styled.p`
  font-style: italic;
  font-size: 22px;
  color: #b4afaf;
  margin-top: 2px;
`;

const DescriptionText = styled.p``;

const PurchaseButton = styled.button`
  color: white;
  font-size: 18px;
  background-color: #3098c5;
  width: 200px;
  padding: 5px;
  border-radius: 8px;
  align-self: center;
`;

const VendorInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const VendorImage = styled.img``;

const VendorText = styled.p``;

const ItemDetails = () => {
  const { itemId } = useParams();
  const selectedFruit = items[itemId]; //data.js line 17 to make sense of this.

  return (
    <MegaDiv>
      <FruitPic src={selectedFruit.imageSrc} alt="fruitpic"></FruitPic>
      <Description>
        <FruitName>{selectedFruit.name}</FruitName>
        <LatinName>{selectedFruit.latinName}</LatinName>
        <DescriptionText>{selectedFruit.description}</DescriptionText>
        <PurchaseButton>{selectedFruit.price}$ - Buy Now</PurchaseButton>
        <VendorInfo>
          <VendorImage></VendorImage>
          <VendorText></VendorText>
        </VendorInfo>
      </Description>
    </MegaDiv>
  );
};

export default ItemDetails;
