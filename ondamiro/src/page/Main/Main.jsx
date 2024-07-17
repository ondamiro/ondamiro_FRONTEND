import React, { useEffect, useState } from "react"
import * as S from "./Main.styled";

const Main = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [howMuch, setHowMuch] = useState("");
  const [ingrdint, setIngrdint] = useState("");
  const [exprationDate, setExprationDate] = useState("");
  const [time, setTime] = useState("");
  const [map, setMap] = useState("");
  const [user, setUser] = useState("");
  const [recipe, setRecipe] = useState("");
  const [special, setSpecial] = useState("");

  useEffect(() => {
    if (id) {
      // JSON 데이터에서 id에 해당하는 데이터를 찾습니다.
      const postData = mainData.find(data => data.id === parseInt(id));

      if (postData) {
        setTitle(postData.title);
        setFoodImg(postData.foodImg);
        setHowMuch(postData.howMuch);
        setIngredient(postData.ingredient);
        setExpirationDate(postData.expirationDate);
        setTime(postData.time);
        setMap(postData.map);
        setUser(postData.user);
        setRecipe(postData.recipe);
        setSpecial(postData.special);
      } else {
        console.error("Post not found");
      }
    }
  }, [id]);

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
