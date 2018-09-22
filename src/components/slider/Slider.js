import React, { Component, Fragment } from "react";
import styled from "styled-components";

const POSTER_PATH = "http://image.tmdb.org/t/p/w500";

export default class Slider extends Component {
  render() {
    var {
      movies: { title, backdrop_path },
      index,
      activeIndex,
    } = this.props;
    return (
      <SliderWrapper show={activeIndex === index}>
        <div>
          <img src={`${POSTER_PATH}/${backdrop_path}`} alt={title} />
        </div>
        <p>
          {title} - {index}
        </p>
      </SliderWrapper>
    );
  }
}

export const SliderWrapper = styled.div`
  margin-right: 40px;
  max-width: 960px;
  min-width: 160px;
  border-radius: 10px;
  img {
    width: 100%;
  }
  opacity: ${props => (props.show ? 1 : 0.7)}
  &:hover {
    opacity: 1;
  }
`;
