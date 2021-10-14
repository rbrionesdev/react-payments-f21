import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment } from "semantic-ui-react";

class PaymentSuccess extends React.Component {
  render() {
    const { state } = this.props.location;
    return (
      <Segment>
        <Header as="h1" color="green">
          You now gots a cyber truck congrats
        </Header>
        <p>You have been charged: {state.amount}</p>
        <p>Your transaction ID is: {state.transactionId}</p>
        <Link to="/">Buy another truck</Link>
      </Segment>
    );
  }
}

export default PaymentSuccess;