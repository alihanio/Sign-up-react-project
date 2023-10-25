import React, { useState } from "react";
import styled from "styled-components";
const CardList = ({ bgColor, width, borderRadius }) => {
  const [error, setError] = useState(false);

  const changeColor = () => {
    setError((prev) => !prev);
  };

  return (
    <Conteiner bgColor={bgColor} width={width} radius={borderRadius}>
      <CardHeading color="blue" fontSize="3rem">
        ToDo
      </CardHeading>
      <ParagraphElement color={error === true ? "red" : "white"} width="30rem">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit soluta in
        officiis? Rem deleniti molestiae esse nam sapiente. Saepe accusantium
        illo impedit provident expedita asperiores corrupti, quos quod.
        Possimus, mollitia?
      </ParagraphElement>
      <Button onClick={changeColor}>Click</Button>
    </Conteiner>
  );
};

export default CardList;

const CardHeading = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;

const ParagraphElement = styled.p`
  color: ${({ color }) => color};
  width: ${({ width }) => width};
`;

const Conteiner = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: ${({ radius }) => radius};
  @media (min-width: 768px) {
    background-color: purple;
    height: 20rem;
  }
`;

const Button = styled.button`
  width: 3rem;
  height: 2rem;
  border: none;
  background: red;
  color: white;
  &:hover {
    background: green;
    border-radius: 1rem;
  }
  &:active {
    background: orange;
    border-radius: 1rem;
  }
  @media (min-width: 768px) {
    width: 5rem;
    height: 2rem;
    background: grey;
  }
`;
