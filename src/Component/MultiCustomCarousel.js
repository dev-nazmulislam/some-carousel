import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MultiImages } from "./CarouselData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const carouselPropertise = {
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,

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

const MultiCustomCarousel = () => {
  const sliderRef = useRef(null);
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <h1 className="text-2xl my-5">
          Multi Item Carousel With Custom Controler
        </h1>
        <Slider ref={sliderRef} {...carouselPropertise}>
          {MultiImages.map((item) => {
            return (
              <div style={{ margin: "10px" }}>
                <Card item={item} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "7px" }}>
        <div
          style={{
            width: "60px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "7px",
            boxShadow: "0 1px 3px rgb(0 0 0/10%)",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIos />
        </div>
        <div
          style={{
            width: "60px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "7px",
            boxShadow: "0 1px 3px rgb(0 0 0/10%)",
            cursor: "pointer",
          }}
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default MultiCustomCarousel;

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi-images"
        src={item}
        alt=""
        style={{ width: "100%", height: "170px", objectFit: "contain" }}
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
