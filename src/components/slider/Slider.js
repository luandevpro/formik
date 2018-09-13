import React, { Component, Fragment } from "react";
import styled from "styled-components";

const POSTER_PATH = "http://image.tmdb.org/t/p/w500";

export default class Slider extends Component {
  showIndex = i => {
    console.log(i);
  };
  render() {
    var {
      movies: { title, backdrop_path },
      index,
    } = this.props;
    return (
      <SliderWrapper onClick={() => this.showIndex(index)}>
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
  border-radius: 10px;
  img {
    width: 100%;
  }
`;
