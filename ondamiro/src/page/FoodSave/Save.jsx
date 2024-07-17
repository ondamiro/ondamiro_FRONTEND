import React from "react";
import * as S from "./Save.styled"
import Topbar from "../../common/Topbar/Topbar";
import greenOnion from "../../assets/img/greenOnion.svg";
import garlic from "../../assets/img/garlic.svg";
import sangchoo from "../../assets/img/sangchoo.svg";
import carrot from "../../assets/img/carrot.svg";
import potato from "../../assets/img/potato.svg";
import cucum from "../../assets/img/cucum.svg";

const Save = () => {
    return(
        <>
        <div>
            <Topbar/>
        </div>
        <div>
            <S.titleBox>
            <S.title>식품 보관법</S.title>
            </S.titleBox>
            <S.menuMove>            
                <S.menus>
                <S.menu>채소</S.menu>
                <S.menu>과일</S.menu>
                <S.menu>육류</S.menu>
                <S.menu>생선</S.menu>
                <S.menu>유제품</S.menu>
                </S.menus>
            </S.menuMove>
            <S.mainBox>
            <S.layer>
                <S.keep>
                <img src={greenOnion} alt="error" />
                    <S.contents>
                        <h1>대파</h1>
                        <h4>보관 온도 :0~5도의 서늘한 장소</h4>
                        <h4>습도 : 90~95%의 고습한 환경</h4>
                        <h4>보관 용기 : 밀폐용기, 비밀봉투 또는 지퍼백</h4>
                    </S.contents>
                </S.keep>
                <S.keep>
                <img src={garlic} alt="error" />
                <S.contents>
                    <h1>마늘</h1>
                    <h4>보관 온도 : 0~20도 사이의 가급적 시원하고 바람이 잘 통하며 습하지 않은 곳</h4>
                    <h4>습도 : 90~95%의 고습한 환경</h4>
                    <h4>보관 용기 : 종이봉투, 망사주머니 또는 밀폐용기</h4>
                </S.contents>
                </S.keep>
            </S.layer>
            <S.layer>
                <S.keep>
                <img src={carrot} alt="error" />
                <S.contents>
                    <h1>당근</h1>
                    <h4>보관 온도 : 0~4도의 서늘한 장소</h4>
                    <h4>습도 : 90~95%의 고습한 환경</h4>
                    <h4>보관 용기 : 지퍼백 또는 밀폐용기에 보관</h4>
                </S.contents>
                </S.keep>
                <S.keep>
                <img src={sangchoo} alt="" />
                <S.contents>
                    <h1>상추</h1>
                    <h4>보관 온도 : 0~4도</h4>
                    <h4>습도 : 90% 이하의 환경</h4>
                    <h4>보관 용기 : 지퍼백 또는 밀폐용기에 보관</h4>
                </S.contents>
                </S.keep>
            </S.layer>
            <S.layer>
                <S.keep>
                <img src={potato} alt="error" />
                <S.contents>
                    <h1>감자</h1>
                    <h4>보관 온도 : 2~4도의 서늘한 장소</h4>
                    <h4>습도 : 약 85%의 고습한 환경</h4>
                    <h4>보관 용기 : 서늘하고 바람이 잘 통하며 밝은 곳에 
                    두되, 직사광선을 받지 않는 곳에 보관</h4>
                </S.contents>
                </S.keep>
                <S.keep>
                <img src={cucum} alt="error" />
                <S.contents>
                    <h1>오이</h1>
                    <h4>보관 온도 : 7~10도의 서늘한 장소</h4>
                    <h4>습도 : 90~95%의 고습한 환경</h4>
                    <h4>보관 용기 : 하나씩 신문지로 둘둘 말아 뚜껑이 있는 용기에 보관</h4>
                </S.contents>
                </S.keep>
            </S.layer>
            </S.mainBox>
        </div>
        </>
    )
}

export default Save;