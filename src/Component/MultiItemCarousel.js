import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import { MultiImages } from "./CarouselData";
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

const carouselPropertise = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 5,
  slidesToScroll: 2,
  customPaging: (i) => {
    return <div>{i + 1}</div>;
  },
  dotsClass: "slick-dots custom-indicator",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  return (
    <div
      className="carousel"
      style={{
        margin: "80px 30px",
        padding: "10px",
      }}
    >
      <h1 className="text-2xl my-5">
        Multi Item Carousel with number pagination.
      </h1>
      <Slider {...carouselPropertise}>
        {MultiImages.map((item) => {
          return <Card item={item} />;
        })}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi-images"
        src={item}
        alt=""
        style={{ width: "90%", height: "160px", objectFit: "contain" }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>Action Cameras</p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "green" }}>
        From $500
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        See more...
      </p>
    </div>
  );
};

export default MultiItemCarousel;
