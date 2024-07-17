import React from 'react'
import * as S from "./MyPage.styled"
import Topbar from '../../common/Topbar/Topbar'
import userImg from '../../assets/img/profile.svg'

const MyPage = () => {
  return (
    <div>
      <Topbar />
      <img src={userImg} alt='error' />
    </div>
  )
}

export default MyPage