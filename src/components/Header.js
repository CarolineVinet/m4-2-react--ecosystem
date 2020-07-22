import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  a {
    margin: 10px;
    color: black;
    font-size: 16px;
    text-decoration: none;
  }
`;

const SubWrapper = styled.div``;

const PageTitle = styled.h1`
  font-size: 40px;
  color: black;
  font-weight: bold;
  font-family: Raleway;
  justify-content: left;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <PageTitle> Fruit Emporium </PageTitle>
      <SubWrapper>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </SubWrapper>
    </Wrapper>
  );
};

export default Header;
