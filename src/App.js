import React, { Component } from "react";
import FormResgister from "./components/form/FormResgister";

class App extends Component {
  handleSubmit = value => {
    alert(value);
  };
  render() {
    return (
      <div className="container mt-5">
        <FormResgister handleSubmit={this.handleSubmit} />{" "}
      </div>
    );
  }
}

export default App;
