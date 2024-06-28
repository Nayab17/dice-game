import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const numberSelectorhandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  // console.log(selectedNumber);

  return (
    <NUmberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </NUmberSelectorContainer>
  );
};

export default NumberSelector;

const NUmberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
