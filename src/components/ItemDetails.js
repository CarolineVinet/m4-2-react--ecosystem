import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { items, sellers } from "../data.js";

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

const DescriptionText = styled.p`
  max-width: 650px;
`;

const PurchaseButton = styled.button`
  color: white;
  font-size: 18px;
  background-color: #3098c5;
  width: 200px;
  padding: 5px;
  border-radius: 8px;
  align-self: center;
  margin-top: 20px;
`;

const VendorInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const VendorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-self: center;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VendorText = styled.p`
  font-size: 14px;
  margin-top: 2px;
`;

const VendorStore = styled.p`
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 20px;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const selectedFruit = items[itemId]; //data.js line 17 to make sense of this.
  const vendor = sellers[selectedFruit.sellerId];

  return (
    <MegaDiv>
      <FruitPic src={selectedFruit.imageSrc} alt="fruitpic"></FruitPic>
      <Description>
        <FruitName>{selectedFruit.name}</FruitName>
        <LatinName>{selectedFruit.latinName}</LatinName>
        <DescriptionText>{selectedFruit.description}</DescriptionText>
        <PurchaseButton>
          {selectedFruit.quantity >= 1
            ? `${selectedFruit.price}$ - Buy Now`
            : "Out of Stock"}
        </PurchaseButton>
        <VendorInfo>
          <VendorImage src={vendor.avatarSrc} alt="vendorpic"></VendorImage>
          <Wrapper>
            <VendorStore>{vendor.storeName}</VendorStore>
            <VendorText>{vendor.description}</VendorText>
          </Wrapper>
        </VendorInfo>
      </Description>
    </MegaDiv>
  );
};

export default ItemDetails;
