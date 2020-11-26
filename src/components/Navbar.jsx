import { device } from "./Device.jsx";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import RechercheBar from "./recherch-bar-rapid/recherche-bar-rapid";

const NavigationBar = styled.nav`
  background-color: black;
  height: 8vh;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-between;
  padding: 0 1vw 0 1vw;
  @media ${device.mobile} {
    height: 10vh;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0 5vw 0 0;
`;

const Li = styled.li`
  @media ${device.desktop} {
    padding-right: 3vw;
    display: flex;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const A = styled(Link)`
  padding-right: 1.5vw;
  font-size: 1.5em;
  text-decoration: none;
  color: white;
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s ease;
  }
`;

const Logo = styled.img`
  width: 9vw;
  height: 8vh;

  @media ${device.mobile} {
    width: 13vh;
    height: 10vh;
    margin-left: 2vw;
  }
`;

const Burger = styled.div`
  display: none;

  @media ${device.mobile} {
    display: block;
    position: absolute;
    z-index: 1;
  }
`;

const Navbar = () => {
  return (
    <NavigationBar>
      <Link to="/">
        <Logo src="/image/Logo-magic.jpg" alt="Logo du jeu Magic The Gathering" id="logo" />
      </Link>
      <Ul>
        <Li>
          <A to="/histoire">Histoire</A>
        </Li>

        <Li>
          <A to="/carte">Cartes </A>
        </Li>

        <Li>
          <A to="/booster">Booster</A>
        </Li>
      </Ul>
      <RechercheBar />
      <Burger className="App" id="outer-container">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      </Burger>
    </NavigationBar>
  );
};

export default Navbar;
