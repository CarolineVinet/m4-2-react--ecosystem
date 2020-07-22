import React from "react";
import ListinGrid from "./ListinGrid.js";

const Home = ({ sellers, items }) => {
  return (
    <div>
      <p>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </p>
      <ListinGrid sellers={sellers} items={items}></ListinGrid>
    </div>
  );
};

export default Home;
