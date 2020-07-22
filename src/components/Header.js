import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  a {
    margin: 10px;
    color: black;
    font-weight: bold;
    font-size: 20px;
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
        <NavLink
          exact
          to="/"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "pink",
            textDecoration: "underline",
          }}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#eb0ec6",
            textDecoration: "underline",
          }}
        >
          About
        </NavLink>
      </SubWrapper>
    </Wrapper>
  );
};

export default Header;
