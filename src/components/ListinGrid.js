import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 200px 200px 200px;
`;

const FruitItemDiv = styled.div`
  display: inline-block;
  text-align: center;
  width: 200px;
`;

const FruitImage = styled.img`
  height: 100px;
  width: 100px;
`;

const FruitName = styled.h3`
  font-weight: bold;
`;

const FruitLatinName = styled.p`
  font-style: italic;
`;

const ListinGrid = ({ sellers, items }) => {
  const dataArray = Object.values(items);
  return (
    <FruitGrid>
      {dataArray.map((fruit) => {
        return (
          <FruitItemDiv>
            <Link to={`/items/${fruit.id}`}>
              <FruitImage src={fruit.imageSrc} alt="fruitpic"></FruitImage>
            </Link>
            <FruitName> {fruit.name} </FruitName>
            <FruitLatinName>{fruit.latinName}</FruitLatinName>
          </FruitItemDiv>
        );
      })}
    </FruitGrid>
  );
};

export default ListinGrid;
