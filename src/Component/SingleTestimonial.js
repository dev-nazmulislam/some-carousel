import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar } from "@mui/material";
import { TestimonialImg } from "./CarouselData";
import "./TestimonialCarousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const SingleTestimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 className="text-2xl my-5">Single Testimonial Carousel</h1>
        <Slider
          autoplay
          autoplaySpeed={2000}
          dots
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          {TestimonialImg.map((item) => {
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
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: "gray",
      }}
    >
      <Avatar
        src={item}
        imgProps={{ style: { borderRadius: "50%" } }}
        style={{
          width: "120px",
          height: "120px",
          border: "1px solid lightGray",
          padding: "7px",
          marginBottom: "15px",
        }}
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
        adipisci eos quibusdam ipsum mollitia cum fugit in fugiat earum. Atque
        reprehenderit sunt quibusdam quas. Culpa atque voluptatem voluptatum
        commodi molestiae!
      </p>
      <p style={{ fontStyle: "italic", marginTop: "25px" }}>
        <span style={{ fontWeight: "500", color: "green" }}>Puja thakur</span>{" "}
        Media Analyst
      </p>
    </div>
  );
};

export default SingleTestimonial;
