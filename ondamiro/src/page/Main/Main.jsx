import React from "react";
import data from "../Main/data.json";
import Topbar from "../../common/Topbar/Topbar";
import Box from "../../common/Box/Box";
import * as S from "./Main.styled";

const Main = () => {
  console.log(data.items);
  return (
    <>
      <Topbar />
      <S.Back>
        <S.SiteTitle>음식 나눔</S.SiteTitle>
        </S.Back>
        <S.Back>
        <S.Form>
          <Box />
        </S.Form>
      </S.Back>
    </>
  );
};

export default Main;
