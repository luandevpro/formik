import React, { Component } from "react";
import { Provider } from "./context";

export default class AppProvider extends Component {
  state = {
    movies: [],
  };
  getMovies = result => {
    console.log(result);
  };
  render() {
    var { movies } = this.state;
    var { children } = this.props;
    return (
      <Provider
        values={{
          movies,
          getMovies: this.getMovies,
        }}
      >
        {children}
      </Provider>
    );
  }
}
