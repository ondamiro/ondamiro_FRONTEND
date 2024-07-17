import React from 'react'
import * as S from './ShopDetail.style'
import Topbar from '../../common/Topbar/Topbar';
import pork from "../../assets/img/pork.svg"
import back from "../../assets/img/ion_arrow-back.svg"

const Detail = () => {
  return (
    <>
    <div>
        <Topbar />
    </div>
    <S.mainBody>
        <S.backImg src={back} alt="" />
    <S.body>
        <S.img src={pork} alt="error" />
        <S.title>
            <S.name>돼지고기</S.name>
            <S.location>대구광역시 라임 회장 협회산</S.location>
            <S.price>1,800 Point</S.price>
        </S.title>
        <S.recipe>
        <p><strong>제품명:</strong> 돼지고기 삼겹살</p>
        <p><strong>부위:</strong> 삼겹살 (배 부분)</p>
        <p><strong>원산지:</strong> 대한민국</p>
        <p><strong>등급:</strong> 1등급</p>
        <p><strong>포장 단위:</strong> 100g</p>
        <p><strong>유통기한:</strong> 제조일로부터 7일</p>
        <p><strong>보관 방법:</strong> 냉장 보관 (0~4℃) 또는 냉동 보관 (-18℃ 이하)</p>
        <p><strong>특징:</strong></p>
        <S.ul>
            <li>신선한 고기</li>
            <li>고소한 맛과 부드러운 식감</li>
            <li>구이, 볶음, 찜 등 다양한 요리에 적합</li>
        </S.ul>
        <p><strong>안전 및 품질 인증:</strong> HACCP 인증, 무항생제 인증</p>
        <p><strong>연락처:</strong> 010-9228-4856</p>

        <p><strong>기타:</strong></p>
        <S.ul>
            <li><strong>원재료명:</strong> 돼지고기 (삼겹살)</li>
            <li><strong>원산지:</strong> 대한민국</li>
            <li><strong>가공 방법:</strong>
                <ul>
                    <li>도축 후 냉장 보관</li>
                    <li>부위별 분리 후 진공 포장</li>
                    <li>저온 상태에서 운송</li>
                    <li>포장 후 냉장/냉동 보관</li>
                </ul>
            </li>
            <li><strong>알레르기 유발 성분 정보 예시:</strong>
                <ul>
                    <li>알레르기 유발 성분:</li>
                    <li>이 제품은 돼지고기를 포함하고 있습니다.</li>
                    <li>알레르기 반응이 있는 소비자는 주의하십시오.</li>
                    <li>가공 과정에서 대두, 밀, 우유, 견과류와 같은 알레르기 유발 성분과 교차 오염될 수 있습니다.</li>
                </ul>
            </li>
        </S.ul>
        </S.recipe>
        <S.Btn>
            <div>신청하기</div>
        </S.Btn>
    </S.body>
    </S.mainBody>
    </>
  )
}

export default Detail;