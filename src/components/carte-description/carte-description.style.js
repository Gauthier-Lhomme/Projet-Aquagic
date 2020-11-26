import styled from "styled-components";
import { device } from "../Device";

export const CardContainer = styled.div`
  color: white;
  height: 70vh;
  padding-top: 50px;
  background-image: url("/image/card-page.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .btn {
    color: white;
    display: flex;
    justify-content: flex-end;
    margin: 50px 50px;
    transition: all 0.5s ease;
    color: rgba(255, 255, 255, 0.6);
    border: 3px solid #c4c4c4;
    width: 140px;
    height: 20px;
    text-align: center;
    line-height: 1;
    font-size: 16px;
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
    height: 120vh;
    max-height: 200vh;
    padding: 0 auto;
    .btn {
      width: 90px;
      height: 14px;
      font-size: 10px;
      margin: 22vh auto;
    }
  }
`;
export const Name = styled.div`
  text-align: center;

  font-family: "Arial Black", Gadget, sans-serif;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5vh;
  h1 {
    font-size: 28px;
  }
  @media ${device.mobile} {
    h1 {
      font-size: 18px;
    }
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px auto;
  height: 300px;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    margin: 25vh auto;
    max-width: 300px;
    max-height: 400px;
  }
`;
export const Image = styled.div`
  width: 22%;
  img {
    height: 380px;
  }

  @media ${device.mobile} {
    width: 80%;

    img {
      height: 250px;
      padding-left: 3vh;
    }
  }
`;
export const Info = styled.div`
  width: 20%;
  height: 350px;
  font-size: 16px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  @media ${device.mobile} {
    width: 100%;
    height: 380px;
  }
`;
export const Mana = styled.div`
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: 25px;
  }
  @media ${device.mobile} {
  }
`;
export const Text = styled.div`
  font-size: 14px;
  background-color: rgb(82, 82, 122);
  padding: 15px;

  @media ${device.mobile} {
  }
`;
export const Line = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.mobile} {
  }
`;
