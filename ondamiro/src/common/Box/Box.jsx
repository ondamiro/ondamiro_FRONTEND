import React from "react";
import data from "../../page/Main/data.json";
import * as S from "./Box.styled";

const Box = () => {
  return (
    <>
      {data.items.map((data) => (
        <S.Back>
          <img src={data.img} alt="error" />
          <S.Area>
            <S.textArea key={data.id}>
              <div>{data.title}</div>
              <S.bottomArea>
                <div>{data.person}</div>
                <div>{data.time}</div>
              </S.bottomArea>
            </S.textArea>
          </S.Area>
        </S.Back>
      ))}
    </>
  );
};

export default Box;
