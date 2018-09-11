import React, { Component } from "react";
import styled from "styled-components";

const POSTER_PATH = "http://image.tmdb.org/t/p/w500";

export default class Slider extends Component {
  render() {
    var {
      movies: { title, backdrop_path },
    } = this.props;
    return (
      <SliderWrapper>
        <p>{title}</p>
        <div>
          <img src={`${POSTER_PATH}/${backdrop_path}`} alt={title} />
        </div>
      </SliderWrapper>
    );
  }
}

export const SliderWrapper = styled.div`
  display: inline-block;
  margin-right: 25px;
  width: 353px;
  img {
    width: 100%;
  }
`;
