import React from "react";
import { Consumer } from "../context";
import ListSlider from "../components/slider/ListSlider";

const ListSliderContainer = props => (
  <Consumer>
    {({ getMovies }) => <ListSlider {...props} getMovies={getMovies} />}
  </Consumer>
);
export default ListSliderContainer;
