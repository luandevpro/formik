import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import scrollTo from "./scrollToAnimate";
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
  onNext = () => {
    this.props.onNext("next", 3);
    var { carouselViewport } = this;
    console.log(carouselViewport);
    var numOfSlidesToScroll = 1;
    var widthToScroll = 378;
    var newPos =
      carouselViewport.scrollLeft + widthToScroll * numOfSlidesToScroll;
    // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    var timeToMoveOneSlide = 450;
    var totalTimeMove = numOfSlidesToScroll * timeToMoveOneSlide;
    scrollTo(carouselViewport, newPos, totalTimeMove, "scrollLeft");
  };
  onPrevious = () => {
    var { carouselViewport } = this;
    console.log(carouselViewport);
    var numOfSlidesToScroll = 3;
    var widthToScroll = 378;
    var newPos =
      carouselViewport.scrollLeft - widthToScroll * numOfSlidesToScroll;
    // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    var timeToMoveOneSlide = 450;
    var totalTimeMove = numOfSlidesToScroll * timeToMoveOneSlide;
    scrollTo(carouselViewport, newPos, totalTimeMove, "scrollLeft");
  };
  render() {
    var { activeIndex, onNext, onPrevious, children } = this.props;
    const child = React.Children.map(children, (child, i) => {
      if (i >= 0) {
        return <Fragment>{child}</Fragment>;
      }
    });
    return (
      <ListSliderWrapper>
        <IoIosArrowBackWrap onClick={() => this.onPrevious()} />
        <MovieGrip innerRef={carousel => (this.carouselViewport = carousel)}>
          {child}
        </MovieGrip>
        <IoIosArrowForwardWrap onClick={() => this.onNext()} />
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
  white-space: nowrap;
  overflow: hidden;
`;
