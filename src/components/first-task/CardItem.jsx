import React from "react";
import CardList from "./CardList";
import styled from "styled-components";

const CardItem = () => {
  return (
    <ParentConteiner>
      <CardList bgColor="pink" width="32rem" borderRadius="1rem" />
    </ParentConteiner>
  );
};

export default CardItem;

const ParentConteiner = styled.div`
  display: flex;
  justify-content: center;
`;
