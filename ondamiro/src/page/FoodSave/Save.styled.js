import styled from "styled-components";

export const title = styled.p`
    font-weight: bold;
    font-size: 3vw;
`;
export const titleBox = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const keep = styled.div`
    display : flex;
`;
export const contents = styled.div`
    width : 25vw;
    margin-left : 2vw;
`;
export const mainBox = styled.div`
    height: 80vh;
    margin-top: 5vw;
`;
export const layer = styled.div`
    display : flex;
    justify-content: center;
    margin-top: 3vw;
`;
export const menus = styled.div`
    display : flex;
    width :40vw;
    justify-content: space-around;
`;
export const menu = styled.div`
    color: #C1C1C1;
    width: 5vw;
    height: 5vh;
    background-color :white;
    border :1px solid #C1C1C1;
    border-radius: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
    background-color: #f7f2f2;
    }
&:active{
    background-color: #f2ebeb;
}
`;
export const menuMove = styled.div`
    display : flex;
    justify-content: center;
`;
