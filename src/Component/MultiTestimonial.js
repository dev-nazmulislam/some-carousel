import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "./TestimonialData";
import "./TestimonialCarousel.css";
import { Avatar } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

// Remove Default slider arrow button

const PreviousBtn = () => {
  return;
};
const NextBtn = () => {
  return;
};

// Slider Propertise
const carouselPropertise = {
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
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

const MultiTestimonial = () => {
  const sliderRef = useRef(null);

  return (
    <div className="m-8">
      <h1 className="text-2xl my-5">
        Multi Item Testimonial Carousel With Custom Comtroler
      </h1>
      <div className="bg-green-100 rounded-md p-2.5">
        <Slider ref={sliderRef} {...carouselPropertise}>
          {Data.map((item) => {
            return (
              <div className="m-2.5">
                <Card item={item} />
              </div>
            );
          })}
        </Slider>
        <div className="flex justify-center gap-2">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer bg-white"
            style={{
              boxShadow: "0 1px 3px rgb(0 0 0/10%)",
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <KeyboardBackspaceIcon />
          </div>
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer bg-white"
            style={{
              boxShadow: "0 1px 3px rgb(0 0 0/10%)",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <EastIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiTestimonial;

// Slider Card
const Card = ({ item }) => {
  return (
    <div
      className="text-center m-2.5 mt-12 py-5 px-2.5 rounded-md flex flex-col items-center bg-white relative"
      style={{
        boxShadow: "0 1px 6px 0 rgb(32 33 36 /28%)",
        borderTop: "4px solid blue",
      }}
    >
      <Avatar
        src={item.profilePic}
        imgProps={{ style: { borderRadius: "50%" } }}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid lightGray",
          padding: "7px",
          marginBottom: "15px",
          position: "absolute",
          top: "-60px",
        }}
      />
      <h1 className="text-3xl mt-7">{item.name}</h1>
      <h3 className="text-lg">{item.dasignation}</h3>
      <img
        style={{ width: "20vh", height: "9vh", margin: "10px 0px" }}
        src={item.companyLogo}
        alt=""
      />
      <p className="custom-scrollbar">{item.comment}</p>
    </div>
  );
};
