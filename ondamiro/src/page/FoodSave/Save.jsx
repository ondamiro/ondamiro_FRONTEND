import React from "react";
import * as S from "./Save.styled"
import Topbar from "../../common/Topbar/Topbar";
import greenOnion from "../../assets/img/greenOnion.svg";


const Save = () => {
    return(
        <>
        <div>
            <Topbar/>
        </div>
        <div>
            <p>식품 보관법</p>
            <S.keep>
                <img src={greenOnion} alt="error" />
                    <h1>대파</h1>
                    <h4>보관 온도 :0~5도의 서늘한 장소</h4>
                    <h4>보관 용기 : 밀폐용기, 비밀봉투 또는 지퍼백</h4>
            </S.keep>
            <S.keep>
                {/* <img src={greenOnion} alt="" /> */}
                <h1>마늘</h1>
                <h4>보관 온도 : 0~20도 사이의 가급적 시원하고 바람이 잘 통하며 습하지 않은 곳</h4>
                <h4>습도 : 90~95%의 고습한 환경</h4>
                <h4>보관 용기 : 종이봉투, 망사주머니 또는 밀폐용기</h4>
            </S.keep>
            <S.keep>
                {/* <img src={greenOnion} alt="" /> */}
                <h1>당근</h1>
                <h4>보관 온도 : 0~4도의 서늘한 장소</h4>
                <h4>습도 : 90~95%의 고습한 환경</h4>
                <h4>보관 용기 : 지퍼백 또는 밀폐용기에 보관</h4>
            </S.keep>
            <S.keep>
                {/* <img src={greenOnion} alt="" /> */}
                <h1>상추</h1>
                <h4>보관 온도 : 0~4도</h4>
                <h4>습도 : 90% 이하의 환경</h4>
                <h4>보관 용기 : 지퍼백 또는 밀폐용기에 보관</h4>
            </S.keep>
        </div>
        </>
    )
}

export default Save;