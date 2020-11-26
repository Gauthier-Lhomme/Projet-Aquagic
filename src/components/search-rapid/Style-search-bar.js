import styled from "styled-components";
import { device } from "../Device";

export const SearchContainer = styled.div`
  background-color: #15021b;
  border-bottom: 2px solid white;
  height: 14vh;
`;
export const CardsContainer = styled.div`
  max-width: 1800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  @media ${device.mobile} {
    max-width: 400px;
  }
`;
export const Button = styled.button`
  transition: all 0.5s ease;
  color: #fff;
  border: 3px solid white;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  font-size: 17px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 4px;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
  @media ${device.mobile} {
    font-size: 10px;
    margin-left: 155px;
    width: 80px;
    height: 20px;
    line-height: 0;
  }
`;

export const Input = styled.input`
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  margin: 30px auto;

  border: 3px solid #c4c4c4;
  width: 500px;
  height: 50px;
  overflow-x: hidden;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bolder;
  left: 30%;
  top: 200px;
  background: transparent;
  &:hover {
    color: #001f3f;
    background-color: #fff;
  }
  ::placeholder {
    color: white;
    opacity: 0.6;
  }
  @media ${device.mobile} {
    width: 200px;
    height: 25px;
    font-size: 12px;
  }
`;

// cardlist
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3.8rem;
  justify-items: center;
  margin: 40px 10px auto auto;
  @media ${device.mobile} {
    grid-template-columns: repeat(auto-fit, 80px);
    grid-gap: 3rem;
  }
`;

// flip cards

export const Card = styled.div`
  width: 280px;
  height: 360px;
  margin: 40px auto;
  border-radius: 15px;
  padding: 1.5rem;

  position: relative;
  display: flex;
  align-items: flex-end;
  transition: transform 1s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }

  @media ${device.mobile} {
    width: 80px;
    height: 110px;
    margin: 10px auto;
  }
`;
export const FlipFront = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  margin: 40px auto;
  border-radius: 15px;
  padding: 1.5rem;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #15021b;
  color: #fff;
  /* border-radius: 0.5rem; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    border-radius: 15px;
    /* border-radius: 0.5rem; */
  }
  @media ${device.mobile} {
    width: 70px;
    height: 110px;
    margin: 10px auto;
    img {
      width: 150%;
      height: 130%;
      object-fit: cover;
    }
  }
`;
export const FlipBack = styled.div`
  pposition: absolute;
  width: 280px;
  height: 360px;
  margin: 40px auto;
  border-radius: 15px;
  padding: 1.5rem;
  background: black;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  transform: rotateY(180deg);
  /* border-radius: 0.5rem; */

  h1 {
    margin: 20px auto;
  }
  h3 {
    font-size: 20px;
    color: red;
  }
  p {
    letter-spacing: 1px;
    font-size: 16px;
    margin-top: 8px;
    opacity: 0.7;
  }
  @media ${device.mobile} {
    width: 80px;
    height: 110px;
    margin: 10px auto;
    h1 {
      margin: 8px auto;
      font-size: 9px;
    }
    p {
      letter-spacing: 0.4px;
      font-size: 5px;
      margin-top: 6px;
    }
    h3 {
      font-size: 7px;
      color: red;
    }
  }
`;
//Spinner
export const Loading = styled.div`
  img {
    width: 60px;
    margin: 20px auto;
    display: block;
  }
  @media ${device.mobile} {
    img {
      width: 30px;
      margin: 10px auto;
      display: block;
  }
`;
