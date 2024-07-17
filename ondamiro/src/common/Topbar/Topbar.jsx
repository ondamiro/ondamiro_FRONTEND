import React from 'react'
import * as S from './Topbar.styled'
import { useNavigate } from "react-router-dom";
import logoImg from '../../assets/img/logo.svg'
import userImg from '../../assets/img/user.svg'
import writeImg from '../../assets/img/write.svg'

const Topbar = () => {
    const Navigate = useNavigate();
  return (
    <>
    <S.Back>
        <S.choiceArea>
        <S.choices>
            <S.choice>음식 나눔</S.choice>
            <S.choice onClick={() => Navigate(`/save`)}>식품 보관법</S.choice>
            <S.choice>공동 구매</S.choice>
        </S.choices>
        </S.choiceArea>
        <S.logo src={logoImg} />
        <S.iconArea>
        <S.icons>
            <S.icon>
                <img src={userImg} />
            </S.icon>
            <S.icon>
                <img src={writeImg} />
            </S.icon>
        </S.icons>
        </S.iconArea>
    </S.Back>
    </>
  )
}

export default Topbar;