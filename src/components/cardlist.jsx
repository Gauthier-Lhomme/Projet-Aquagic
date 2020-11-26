import CardItem from "./carditem";
import { Cards } from "./search-rapid/Style-search-bar";

const CardList = ({ cards }) => {
  return (
    <Cards>
      {cards
        .filter((card, i) => {
          return i < 5;
        })
        .map((card) => {
          if (card.foreignNames.length === 0 || !card.manaCost || !card.imageUrl) {
            return null;
          }
          return <CardItem key={card.id} {...card} />;
        })}
    </Cards>
  );
};

export default CardList;
