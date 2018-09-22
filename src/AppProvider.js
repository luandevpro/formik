import React, { PureComponent } from "react";
import { throttle } from "lodash";
import { Provider } from "./context";
import scrollTo from "./components/slider/scrollToAnimate";

export default class AppProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      activeIndex: 0,
      totalSlider: 0,
      widthToScroll: 162,
      numOfSlidesToScroll: 1,
      timeToMoveOneSlide: 200,
    };
  }
  getMovies = result => {
    this.setState({
      movies: result,
    });
  };
  numOfSlidesToScroll = index => {
    let numOfSlidesToScroll;
    if (index === 3) {
      numOfSlidesToScroll = 1 / 2;
    } else if (index === 4 && this.state.activeIndex <= 2) {
      numOfSlidesToScroll = 3 / 2;
    } else if (index === 5 && this.state.activeIndex <= 2) {
      numOfSlidesToScroll = 5 / 2;
    } else {
      numOfSlidesToScroll = index - this.state.activeIndex;
    }
  };
  onNext = (by, value, carouselViewport, index) => {
    var { activeIndex } = this.state;
    if (index < this.state.movies.length - 1) {
      if (index <= 2) {
        this.setState({ activeIndex: index });
      }
      if (by === "next" && index >= 3) {
        let numOfSlidesToScroll =
          index === 3
            ? 1 / 2
            : index === 4 && activeIndex <= 2
              ? 3 / 2
              : index === 5 && activeIndex <= 2
                ? 5 / 2
                : index - activeIndex;

        let widthToScroll = 162;
        let newPos =
          carouselViewport.scrollLeft + widthToScroll * numOfSlidesToScroll;
        // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
        let timeToMoveOneSlide = 300;
        let totalTimeMove = numOfSlidesToScroll * timeToMoveOneSlide;
        scrollTo(carouselViewport, newPos, totalTimeMove, "scrollLeft");
        console.log("activeIndex : " + activeIndex, "index : " + index);
        this.setState({
          activeIndex: index === 18 ? 18 : index,
        });
      }
    }
    // } else if (index === undefined) {
    //   this.setState({
    //     activeIndex: this.state.activeIndex + 1,
    //   });
    //   let numOfSlidesToScroll = 1;
    //   var widthToScroll = index === 3 ? 162 / 2 : 162;
    //   let newPos =
    //     carouselViewport.scrollLeft + widthToScroll * numOfSlidesToScroll;
    //   // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    //   let timeToMoveOneSlide = 300;
    //   let totalTimeMove = numOfSlidesToScroll * timeToMoveOneSlide;
    //   scrollTo(carouselViewport, newPos, totalTimeMove, "scrollLeft");
    // }
  };
  getTotalSlider = (totalSlider, keyCode) => {
    this.setState({
      totalSlider,
    });
  };
  render() {
    var { movies, activeIndex, totalSlider } = this.state;
    var { children } = this.props;
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
