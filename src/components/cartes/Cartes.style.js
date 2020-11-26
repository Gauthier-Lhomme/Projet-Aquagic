import styled from "styled-components";
import { device } from "../Device";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120vh;
  max-height: 1000vh;
  width: 100%;
  padding-top: 50px;
  background-image: url("/image/trans.png");
  background-position: center center;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media ${device.mobile} {
    min-height: 150vh;
    max-height: 500vh;
    padding-top: 20px;
  }
`;
export const Form = styled.div`
  margin: 5vh auto;
  h1 {
    font-size: 50px;
  }
  select {
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  input {
    color: black;
    margin-left: 35%;
    margin: 2vh auto;
    transition: all 0.5s ease;
    border: 3px solid black;
    width: 160px;
    height: 40px;
    text-align: center;
    font-weight: bold;
    line-height: 1;
    font-size: 14px;
    background-color: transparent;
    padding: 10px;
    outline: none;
    border-radius: 25px;
    text-decoration: none;
    &:hover {
      color: #001f3f;
      background-color: #fff;
    }
  }
  @media ${device.mobile} {
    h1 {
      text-align: center;
      font-size: 24px;
    }
    select {
      width: 95%;
    }
    input {
      width: 100%;
    }
  }
`;

export const ColorsContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10vh auto;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardName = styled.div`
  width: 28%;
  padding: 5vh auto;
  margin: 2vh 2vw;
  max-height: 1000vh;

  img {
    width: 4vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${device.mobile} {
    width: 80%;
    margin: 1vh auto;

    img {
      width: 10vw;
    }
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  height: 8px;
  cursor: pointer;
  margin-left: 3vw;

  @media ${device.mobile} {
    font-size: 14px;
    height: 6px;
    padding-left: 5vw;
  }
`;
export const Spin = styled.div`
  @media ${device.mobile} {
    width: 100%;
    margin-left: 90vw;
  }
`;
