import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./BootstrapMultiCarousel.css";
import { MultiImages } from "./CarouselData";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";
import { Rating } from "@mui/material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
};

const carouselPropertise = {
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,

  //  Responsive Propertise
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
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
  ],
};

const BootstrapMultiCarousel = () => {
  return (
    <div
      className="bootstrap-multi"
      style={{ display: "flex", justifyContent: "center", margin: "80px 0px" }}
    >
      <div style={{ width: "80%" }}>
        <h1 className="text-2xl my-5">Bootstrap Multi Carousel</h1>
        <Slider {...carouselPropertise}>
          {MultiImages.map((item) => {
            return <Card item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        padding: "0 10px",
        width: 220,
        boxShadow: "0 1px 6px 0 rgb(32 33 36 /28%)",
        borderRadius: "5px",
      }}
    >
      <span style={{ float: "right", padding: "5px" }}>
        <FavoriteBorder style={{ color: "gray" }} />
      </span>
      <img
        className="multi-images"
        src={item}
        alt=""
        style={{ width: "100%", height: "120px", objectFit: "contain" }}
      />
      <p
        style={{
          fontSize: "16px",
          padding: "5px 0",
          color: "gray",
          fontWeight: "500",
        }}
      >
        Action Cameras
      </p>
      <Rating precision={0.5} size="small" />
      <p>
        <span
          style={{
            textDecoration: "line-through",
            color: "gray",
            marginRight: "7px",
            fontWeight: "300",
          }}
        >
          $500
        </span>
        <span style={{ color: "gray", fontWeight: "700" }}> $400</span>
      </p>
      <p style={{ fontSize: "14px", padding: "5px 0", color: "gray" }}>
        See more...
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default BootstrapMultiCarousel;
