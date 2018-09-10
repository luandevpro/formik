import React, { Component } from "react";
import axios from "axios";
import Slider from "./Slider";
import styled from "styled-components";

export default class ListSlider extends Component {
  componentDidMount() {
    const movies = axios({
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=8d8e6405b1d127dcbe031bd2b3e85c3b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
      method: "get",
      data: null,
    });
    movies.then(res => this.props.getMovies(res.data.results));
  }
  render() {
    var { movies } = this.props;
    console.log(movies);
    return <MovieGrip>gtgtgt</MovieGrip>;
  }
}

export const MovieGrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 10px;
`;
