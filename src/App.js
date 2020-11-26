import { Switch, Route } from "react-router-dom";
import MainPage from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Histoire from "./components/Histoire";
import Cartes from "./components/Cartes/Cartes";
import Booster from "./components/Booster/Booster";
import styled from "styled-components";
import Card from "./components/carte-description/carte-description";

const Page = styled.div`
  margin: -8px;
`;

function App() {
  return (
    <Page>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/histoire" component={Histoire} />
        <Route path="/carte" component={Cartes} />
        <Route path="/booster" component={Booster} />
        <Route path="/card/:name" component={Card} />
      </Switch>
      <div className="container"></div>
      <Footer />
    </Page>
  );
}

export default App;
