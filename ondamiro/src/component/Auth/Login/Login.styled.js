import styled from "styled-components";

export const sidebar = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #FF462D;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const loginBtn = styled.button`
    color: white;
    background-color: #FF462D;
    width: 12vw;
    height: 6vh;
    border : none;
    border-radius : 40px;
    font-weight: bold;
    font-size: 1vw;
    cursor: pointer;
`
export const SignUpBtn = styled.button`
    color: black;
    width: 12vw;
    height: 6vh;
    border : 1px solid #FF462D;
    border-radius : 40px;
    background-color: white;
    font-weight: bold;
    font-size: 1vw;
    cursor: pointer;
`;
export const pwInputBox = styled.input`
    width: 25vw;
    height: 6vh;
    border : none;
    border-radius : 40px;
    background-color: white;
    padding-left: 2vw;
    font-size : 1.2vw;
    cursor: pointer;
`;
export const idInputBox = styled.input`
    height: 6vh;
    width: 30vw;
    border : none;
    border-radius : 40px;
    background-color: white;
    padding-left: 2vw;
    font-size : 1.2vw;
    cursor: pointer;
`;
export const logoImg = styled.img`
    width: 15vw;
`;
export const Body = styled.body`
    display: flex;
`;
export const inputs = styled.div`
    height: 17vh;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
`;
export const loginText = styled.p`
    font-size: 2.5vw;
    text-align: center;
    font-weight:bold;
`;
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw;
`;
export const Btns = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;
export const contentBox = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Box = styled.div`
    border: 0.1vw solid #FF462D;
    border-radius : 40px;
    display: flex;
    align-items:center;
    width: 30vw;
`;
export const closeEye = styled.img`
    width: 2vw;
    height: 2vw;
    cursor: pointer;
    
`;