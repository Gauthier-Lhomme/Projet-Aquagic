import { Card, FlipBack, FlipFront } from "./search-rapid/Style-search-bar";

const CardItem = ({ name, imageUrl, text, manaCost }) => {
  return (
    <Card>
      <FlipFront>
        <img src={imageUrl} alt="card" />
      </FlipFront>

      <FlipBack className="info">
        <h1>{name}</h1>
        <p>{text} </p>
        <h3>manaCost: {manaCost}</h3>
      </FlipBack>
    </Card>
  );
};
export default CardItem;
