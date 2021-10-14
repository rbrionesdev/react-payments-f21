import React from "react";
import BraintreeDropin from "braintree-dropin-react";
import braintree from "braintree-web-drop-in";
import { Button, Dimmer, Loader, Segment } from "semantic-ui-react";
import axios from "axios";
import { Redirect } from "react-router";

const renderSubmitButton = ({ onClick, isDisabled, text }) => {
  return (
    <Button primary onClick={onClick} disabled={isDisabled}>
      {text}
    </Button>
  );
};

class BraintreeDrop extends React.Component {
  state = { loaded: false, token: "", redirect: false, transactionId: "" };

  // in place of useEffect(()=>{},[])
  componentDidMount = () => {
    axios
      .get("/api/braintree_token")
      .then((res) => {
        this.setState({
          token: res.data,
          loaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlePaymentMethod = (payload) => {
    const { amount } = this.props;
    console.log("payload:", payload);
    axios
      .post("/api/payment", { amount, ...payload })
      .then((res) => {
        console.log(res);
        this.setState({
          redirect: true,
          transactionId: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { loaded, token, redirect, transactionId } = this.state;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/payment_success",
            state: { amount: this.props.amount, transactionId },
          }}
        />
      );
    }
    if (loaded) {
      return (
        <Segment>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={renderSubmitButton}
          />
        </Segment>
      );
    }
    return (
      <Dimmer active>
        <Loader>Loading...</Loader>
      </Dimmer>
    );
  }
}

export default BraintreeDrop;
