import { device } from "./Device.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RandomCard from "./random-card/randomCard.jsx";


const All = styled.div`
  margin: 0;
  padding: 0;
  @media ${device.mobile} {
    overflow: hidden;
  }
`;

const A = styled.a`
  color: white;
  font-size: 20px;
  &:hover {
    color: rgb(255, 123, 0);
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const ButtonGrimoire = styled.button`
  background-color: black;
  border-radius: 30px;
  width: 16vw;
  height: 6vh;
  cursor: pointer;

  @media ${device.mobile} {
    width: 40vh;
  }
`;

const DivFirstSection1 = styled.div`
  background-image: url("/image/banner.jpg");
  height: 90vh;
  background-position: center;
  @media ${device.mobile} {
    height: 38vh;
    background-position: center;
    background-size: cover;
  }
`;
const DivFirstSection2 = styled.div`
  background-image: url("/image/Zendikar-Rising-1.png");
  height: 23vh;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media ${device.mobile} {
    display: none;
  }
`;

const DivSecondSection = styled.div`
  background-image: url("/image/zendikar-rising.png");
  height: 100vh;
  @media ${device.mobile} {
    height: 35vh;
    background-position: center;
    background-size: cover;
  }
`;

const DivButton = styled.div`
  text-align: center;
  margin-top: 37vh;
  @media ${device.mobile} {
    margin-top: 2vh;
  }
`;

const DivTxtHistoire = styled.div`
  color: white;
  padding-top: 10vh;
  width: 100%;
  text-align: center;
  @media ${device.mobile} {
    padding-top: 3vh;
    h1 {
      padding: 0 3vw 0 3vw;
    }
  }
`;

const LiCards = styled.li`
  height: 10vh;
  padding: 10vh 13vh 0 8vh;
  list-style: none;

  @media ${device.mobile} {
    display: none;
  }
`;

const P = styled.p`
  @media ${device.mobile} {
    display: none;
  }
`;

const UlCards = styled.ul`
  display: flex;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <All>
      <section>

        <DivFirstSection1>
          <RandomCard></RandomCard>
        </DivFirstSection1>


        <DivFirstSection2></DivFirstSection2>
      </section>
      <section>
        <DivSecondSection>
          <div>
            <DivTxtHistoire>
              <h1>Une nouvelle aventure commence</h1>
              <P>
                Plan tumultueux au mana sauvage, à la météorologie instable et aux mystérieux terrains flottants, Zendikar est un monde à la beauté et aux dangers naturels incomparables. <br /> Son paysage est dévasté par des mouvements sismiques explosifs appelés le Roulis dont la violence rend la vie précaire imprévisible et pleine d &apos; aventure. Les fleuves venus d &apos; au-dessus de l &apos; horizon tombent en cascade.
              </P>
            </DivTxtHistoire>
          </div>

          <div>
            <UlCards>
              <LiCards>

                <img src="/image/carte-gauche.png" alt="Carte de la Canalieuse magmatique" />
              </LiCards>
              <LiCards>
                <img src="/image/carte-milieu.png" alt="Carte de Jace, mage du miroir" />
              </LiCards>
              <LiCards>
                <img src="/image/carte-droite.png" alt="Carte du Lac de montagne bouillant" />
              </LiCards>
            </UlCards>
            <DivButton>
              <Link to="/carte">
                <ButtonGrimoire type="button">
                  <A>Ouvrir le grimoire de Zendikar</A>
                </ButtonGrimoire>
              </Link>
            </DivButton>
          </div>
        </DivSecondSection>
      </section>
    </All>
  );
};

export default MainPage;
