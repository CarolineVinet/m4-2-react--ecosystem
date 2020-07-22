import React from "react";
import styled from "styled-components";

const AboutText = styled.p`
  align-self: center;
  margin: 10px;
  font-size: 20px;
`;

const About = (props) => {
  return (
    <AboutText>
      Fruit emporium is founded on a very simple principle: Fruit is good. We
      carry the finest selection of produce from around the world, from tart
      citrus to sweet cherries. Our sellers are world-class, and your fruit is
      guaranteed to be worthy of auction in Asian markets.
    </AboutText>
  );
};

export default About;
