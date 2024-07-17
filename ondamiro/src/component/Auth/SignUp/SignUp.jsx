import React from "react";
import * as S from "./SignUp.styled"
import logoimg from "../../../assets/img/onda_logo.svg"
import close_eye from "../../../assets/img/close_eye.svg"

const SignUp = () => {
    return(
        <S.Body>
        <S.sidebar>
            <S.logoImg src={logoimg} alt="error" />
        </S.sidebar>
        <S.RightSide>
            <S.contentBox>
            <S.loginText>회원가입</S.loginText>
            <S.inputs>
                <S.Box>
                    <S.idInputBox placeholder="아이디 입력"></S.idInputBox>
                </S.Box>
                <S.cerBox>
                    <S.cellInputBox placeholder="전화번호 입력"></S.cellInputBox>
                    <S.cerBtn>인증</S.cerBtn>
                </S.cerBox>
                <S.Box>
                    <S.pwInputBox placeholder="비밀번호 입력" type="password" ></S.pwInputBox>
                    <S.closeEye src={close_eye} alt="error" />
                </S.Box>
                <S.Box>
                    <S.pwInputBox placeholder="비밀번호 재입력" type="password" ></S.pwInputBox>
                    <S.closeEye src={close_eye} alt="error" />
                </S.Box>
            </S.inputs>
            <S.Btns>
                <S.loginBtn>계정 만들기</S.loginBtn>
            </S.Btns>
            </S.contentBox>
        </S.RightSide>
        </S.Body>

    )
}

export default SignUp;