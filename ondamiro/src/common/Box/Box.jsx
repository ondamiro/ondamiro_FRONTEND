import React from "react";
import data from "../../page/Main/data.json";
import * as S from "./Box.styled";
import { useNavigate } from "react-router-dom";

const Box = () => {
  const Navigate = useNavigate();

  return (
    <>
      {data.items.map((data) => (
        <S.Back onClick={() => Navigate(`/detail/${data.id}`)}>
          <img src={data.img} alt="error" />
          <S.Area>
            <S.textArea key={data.id}>
              <S.Title>{data.title}</S.Title>
              <S.bottomArea>
                <S.Person>{data.person}</S.Person>
                <S.Time>{data.time}</S.Time>
              </S.bottomArea>
            </S.textArea>
          </S.Area>
        </S.Back>
      ))}
    </>
  );
};

export default Box;
