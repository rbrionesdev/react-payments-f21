import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Things from "./pages/Things";
import ComponentDemo from "./pages/CompentDemo";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/payment_success" component={PaymentSuccess} />
          <Route exact path="/things" component={Things} />
          <Route exact path="/components" component={ComponentDemo} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
