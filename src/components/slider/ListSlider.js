import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default class ListSlider extends Component {
  async componentDidMount() {
    const movies = axios({
      url:
        "https://api.themoviedb.org/3/discover/movie?api_key=8d8e6405b1d127dcbe031bd2b3e85c3b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
      method: "get",
      data: null,
    });
    movies.then(res => this.props.getMovies(res.data.results));
    this.props.getTotalSlider(React.Children.count(this.props.children));
  }
  showIndex = i => {
    console.log(i);
  };
  render() {
    var { activeIndex, onNext, children } = this.props;
    const child = React.Children.map(children, (child, i) => {
      if (i < activeIndex && i >= activeIndex - 3) {
        return <div onClick={() => this.showIndex(i)}>{child}</div>;
      }
    });
    return (
      <ListSliderWrapper>
        {activeIndex > 3 && (
          <IoIosArrowBackWrap onClick={() => onNext("previous", -3)} />
        )}
        <MovieGrip sliding>{child}</MovieGrip>
        {Math.ceil(children.length / 3) * 3 ===
        Math.ceil(activeIndex / 3) * 3 ? null : (
          <IoIosArrowForwardWrap onClick={() => onNext("next", 3)} />
        )}
      </ListSliderWrapper>
    );
  }
}

export const ListSliderWrapper = styled.div`
  position: relative;
`;
export const IoIosArrowBackWrap = styled(IoIosArrowBack)`
  position: absolute;
  top: 50%;
  margin-left: -40px;
  z-index: 999;
  font-size: 30px;
  cursor: pointer;
`;
export const IoIosArrowForwardWrap = styled(IoIosArrowForward)`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: -40px;
  z-index: 999;
  cursor: pointer;
  font-size: 30px;
`;
export const MovieGrip = styled.div`
  ${"" /* display: flex; */}
  ${"" /* grid-template-columns: repeat(auto-fit, 1fr); */} ${
  "" /* grid-column-gap: 14px; */
}
  transition: transform 1s ease;
  white-space: nowrap;
  margin-right: 10px;
  margin-left: 10px;
  overflow: hidden;
`;
