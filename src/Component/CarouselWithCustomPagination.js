import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import { CarouselImages } from "./CarouselData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue" }} />
    </div>
  );
};

const CarouselWithCustomPagination = () => {
  return (
    <div className="carousel" style={{ margin: "30px 30px 80px 30px" }}>
      <h1 className="text-2xl my-5">Carousel with Custom pagination</h1>
      <Slider
        dots
        autoplay
        autoplaySpeed={2000}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={CarouselImages[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {CarouselImages.map((item) => {
          return (
            <div>
              <img
                src={item}
                alt=""
                style={{ width: "100%", height: "40vh", borderRadius: "10px" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselWithCustomPagination;
