import styled from "styled-components";
import { device } from "../Device";

export const SearchContainer = styled.div`
  margin: 1.3vh 1vh 0 0;
  .input-container {
    display: flex;
    flex-direction: row;
  }

  @media ${device.mobile} {
    .input-container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin-right: 180px;
      margin-top: 10px;
    }

    margin-left: 3.5vw;
    max-height: 500vh;
  }
`;
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  @media ${device.mobile} {
    margin-top: 5px;
    max-width: 140px;
  }
`;
export const Result = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  width: 300px;
  border-bottom: 1px solid #666;
  cursor: pointer;
  img {
    width: 100%;
    display: inline-block;
  }

  .result-image {
    width: 100px;
    margin-right: 10px;
  }
  .result-name {
    font-size: 24px;
    color: white;
    font-family: "Arial Black", Gadget, sans-serif;
    flex: 1;
  }
  .card-name {
    font-size: 17px;
    font-family: "Arial Black", Gadget, sans-serif;
  }

  @media ${device.mobile} {
    height: 25px;
    width: 100%;
    border: 0.5px solid #666;

    .result-image {
      display: none;
    }
    .result-name {
      font-size: 12px;
      text-align: center;
      font-family: Palatino, URW Palladio L, serif;
      flex: 1;
    }
    .card-name {
      font-size: 9px;
    }
  }
`;

export const Input = styled.input`
  transition: all 0.5s ease;
  border: 3px solid #c4c4c4;
  width: 350px;
  height: 40px;
  overflow-x: hidden;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bolder;
  left: 30%;
  top: 200px;
  background: transparent;
  margin: auto 0;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
  ::placeholder {
    color: white;
    opacity: 0.6;
  }
  @media ${device.mobile} {
    width: 120px;
    height: 20px;
    font-size: 10px;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  float: left;
  width: 80px;
  height: 30px;
  margin: auto 10px;
  transition: all 0.5s ease;
  color: rgba(255, 255, 255, 0.6);

  border: 3px solid #c4c4c4;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 14px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 25px;
  line-height: 0;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
  @media ${device.mobile} {
    font-size: 6px;
    width: 50px;
    height: 5px;
    line-height: 0;
    margin-top: 2px;
    text-align: center;
  }
`;

//Spinner
export const Loading = styled.div`
  width: 50%;
  img {
    width: 50px;
    margin: 40px auto;
    display: block;
  }
  @media ${device.mobile} {
    margin-right: 50vw;
    img {
      width: 18px;
      margin-top: 5px;
      margin-right: 240px;
      display: block;
    }
  }
`;

// Mana cost
export const Mana = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  img {
    width: 25px;
  }
  @media ${device.mobile} {
    img {
      display: none;
    }
  }
`;
