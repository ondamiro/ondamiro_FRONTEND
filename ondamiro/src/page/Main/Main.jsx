import React from "react"
import foodImg1 from "../../assets/img/image 7foodImgs.svg"
import foodImg2 from "../../assets/img/image 8foodImgs.svg"
import foodImg3 from "../../assets/img/image 9foodImgs.svg"
import foodImg4 from "../../assets/img/image 10foodImgs.svg"
import foodImg5 from "../../assets/img/image 11foodImgs.svg"
import foodImg6 from "../../assets/img/image 12foodImgs.svg"
import foodImg7 from "../../assets/img/image 13foodImgs.svg"
import foodImg8 from "../../assets/img/image 14foodImgs.svg"

const Main = () => {
  return (
    <>
      <div>
        <div>음식 나눔</div>
        <div>
          <div>
            <img src={foodImg1} alt="error" />
            <p>3분 전에 완성된 3분 카레라이스 드실분~</p>
            <div>
              <p>1인분</p>
              <p>1분 전</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
