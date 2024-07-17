import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Box.styled"

const Box = ({ title, howMuch, time }) => {
  const Navigate = useNavigate();
  return (
    <div onClick={() => Navigate(`/detail/${index}`)}>
      <div>{title}</div>
      <p>{howMuch}</p>
      <p>{time}</p>
    </div>
  );
};

export default Box;