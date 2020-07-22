import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px 200px 200px;
  margin-top: 70px;
  margin-left: 400px;
  margin-right: 400px;
`;

const FruitItemDiv = styled.div`
  display: inline-block;
  text-align: center;
  width: 200px;
  border: 1.5px;
  border-style: solid;
  border-color: lightgray;
  border-radius: 10px;
`;

const FruitImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-top: -15px;
  box-shadow: 2px 2px 5px grey;
`;

const FruitName = styled.h3`
  font-weight: bold;
  margin-bottom: 2px;
`;

const FruitLatinName = styled.p`
  font-style: italic;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 30px;
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
