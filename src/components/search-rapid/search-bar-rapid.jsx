import React from "react";
import axios from "axios";
import CardList from "../cardlist";
import Spinner from "./spinner";
import { SearchContainer, CardsContainer, Button, Input } from "./Style-search-bar";

class SearchBarRapid extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      text: "",
      loading: false,
    };
  }

  searchCard = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${text}`);
    this.setState({ cards: res.data.cards, loading: false });
  };

  //  clear cards
  clearCards = () =>
    this.setState({
      cards: [],
      loading: false,
    });

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.searchCard(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    const { cards, text, loading } = this.state;
    return (
      <SearchContainer>
        <CardsContainer>
          <div>
            <form onSubmit={this.onSubmit}>
              <Input type="text" name="text" placeholder=" Rapid Card Search..." value={text} onChange={this.onChange} />
            </form>
            {cards.length > 0 && (
              <Button type="button" onClick={this.clearCards}>
                Clear
              </Button>
            )}
          </div>
          <div>{loading ? <Spinner /> : <CardList cards={cards} />}</div>
        </CardsContainer>
      </SearchContainer>
    );
  }
}

export default SearchBarRapid;
