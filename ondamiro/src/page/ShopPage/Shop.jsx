import React from 'react'
import Topbar from '../../common/Topbar/Topbar'
import * as S from './Shop.style'
import ShopBox from '../../common/ShopBox/ShopBox';


const Shop = () => {
  return (
    <>
      <Topbar />
      <S.Back>
        <S.SiteTitle>공동 구매</S.SiteTitle>
        </S.Back>
        <S.Back>
        <S.Form>
          <ShopBox />
        </S.Form>
      </S.Back>
    </>
  );
};
export default Shop