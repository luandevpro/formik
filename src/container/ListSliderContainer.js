import React, { Component } from "react";
import { Consumer } from "../context";
import ListSlider from "../components/slider/ListSlider";
import Slider from "../components/slider/Slider";

class ListSliderContainer extends Component {
  showSlider = movies => {
    var result = 0;
    if (movies.length > 0) {
      result = movies.map((movie, index) => {
        return <Slider key={index} index={index} movies={movie} />;
      });
    }
    return result;
  };
  render() {
    return (
      <Consumer>
        {({ movies, getMovies, activeIndex, onNext, getTotalSlider }) => (
          <ListSlider
            movies={movies}
            getMovies={getMovies}
            activeIndex={activeIndex}
            onNext={onNext}
            getTotalSlider={getTotalSlider}
          >
            {this.showSlider(movies)}
          </ListSlider>
        )}
      </Consumer>
    );
  }
}
export default ListSliderContainer;
