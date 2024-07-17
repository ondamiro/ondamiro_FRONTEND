import React from "react";
import data from "../../page/ShopPage/shopData.json";
import * as S from "./ShopBox.styled";
import { useNavigate } from "react-router-dom";

const ShopBox = () => {
  const Navigate = useNavigate();

  return (
    <>
      {data.items.map((data) => (
        <S.Back onClick={() => Navigate(`/shopdetail`)}>
          <img src={data.img} alt="error" />
          <S.Area>
            <S.textArea key={data.id}>
              <S.Title>{data.title}</S.Title>
              <S.bottomArea>
                <S.Person>{data.company}</S.Person>
                <S.Time>{data.person}</S.Time>
              </S.bottomArea>
            </S.textArea>
          </S.Area>
        </S.Back>
      ))}
    </>
  );
};

export default ShopBox;
