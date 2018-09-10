import React, { Component } from "react";
import ListSliderContainer from "./container/ListSliderContainer";
import AppProvider from "./AppProvider";

class App extends Component {
  handleSubmit = value => {
    alert(value);
  };
  render() {
    return (
      <div className="container mt-5">
        <AppProvider>
          <ListSliderContainer />
        </AppProvider>
      </div>
    );
  }
}

export default App;
