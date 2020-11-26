import React from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import Spinner from "../recherch-bar-rapid/spinner";

import {
  Gallery,
  Title,
  BgImage,
  CallApi,
  SetForm,
  Select,
  Input,
  ButtonClear,
} from "./Boosterstyled";


class Booster extends React.Component {
  constructor() {
    super();
    this.state = {
      sets: [],
      cards: [],
      code: "",
      loading: false,
      isFlipped: false,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  };
  handleChange = (e) => {
    this.setState({ code: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getBooster();
  };
  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      cards: [],
    });
  };

  async componentDidMount() {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    this.setState({ sets: res.data.sets });
    console.log(this.state.sets);
  }

  getBooster = async () => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.magicthegathering.io/v1/sets/${this.state.code}/booster`);
    this.setState({ cards: res.data.cards, loading: false });
  };

  render() {
    const { sets, code, cards, loading } = this.state;
    return (
      <BgImage>
        <CallApi>
          <Title>List of sets for booster</Title>
          <SetForm onSubmit={this.handleSubmit}>
            <Select value={code} onChange={this.handleChange}>
              <option selected disabled hidden value="">
                Select a set to generate booster
              </option>
              {sets.map((set) => {
                {
                  if (!set.booster) {
                    return null;
                  }
                }
                return (
                  <option key={set.id} value={set.code}>
                    {set.name}
                  </option>
                );
              })}
            </Select>
            <Input type="submit" value="BOOSTER" />
            <ButtonClear onClick={this.handleReset}>Clear</ButtonClear>
          </SetForm>
        </CallApi>
        {loading ? (
          <Spinner />
        ) : (
          <Gallery>
            {cards.map((card) => {
              return (
                <div>
                  <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                    <img src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg" alt="" onClick={this.handleClick} />
                    <img src={card.imageUrl} alt="" onClick={this.handleClick} />
                  </ReactCardFlip>
                </div>
              );
            })}
          </Gallery>
        )}
      </BgImage>
    );
  }
}

export default Booster;
