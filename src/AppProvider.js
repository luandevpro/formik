import React, { PureComponent } from "react";
import { Provider } from "./context";

export default class AppProvider extends PureComponent {
  state = {
    movies: [],
    activeIndex: 0,
    totalSlider: 0,
  };
  getMovies = result => {
    this.setState({
      movies: result,
    });
  };

  onNext = (by, value) => {
    if (by === "next" || by === "previous") {
      console.log("bfbf");
    }
  };
  getTotalSlider = totalSlider => {
    this.setState({
      totalSlider,
    });
  };
  render() {
    var { movies, activeIndex, totalSlider } = this.state;
    var { children } = this.props;
    console.log(totalSlider);
    return (
      <Provider
        value={{
          movies,
          activeIndex,
          totalSlider,
          getMovies: this.getMovies,
          onNext: this.onNext,
          getTotalSlider: this.getTotalSlider,
        }}
      >
        {children}
      </Provider>
    );
  }
}
