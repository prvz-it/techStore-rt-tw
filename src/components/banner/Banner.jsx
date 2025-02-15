import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../../layer/Container";
import banner01 from "../../assets/banner01.png";
import banner02 from "../../assets/banner02.jpg";
import banner03 from "../../assets/banner03.jpg";
import Image from "../../layer/Image";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 -translate-y-1/2 text-white cursor-pointer w-8 h-10 rounded-tl-3xl rounded-bl-3xl flex items-center justify-center bg-[#517DD4]/50"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 -translate-y-1/2 text-white z-50 cursor-pointer w-8 h-10 rounded-tr-3xl rounded-br-3xl flex items-center justify-center bg-[#517DD4]/50"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

const Banner = () => {
  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "16px",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="active w-5 h-5 text-[0px] rounded-full border-3 border-[#517DD4] bg-transparent">
        {i + 1}
      </div>
    ),
  };

  let sliderImage = [
    { id: 1, title: "MSI-Gaming Pc", src: banner01, href: "/msi" },
    { id: 2, title: "A-315 Desktop", src: banner02, href: "/apple" },
    { id: 3, title: "hp-440 Laptop", src: banner03, href: "/hp" },
  ];
  return (
    <>
      <Container>
        <Slider {...settings}>
          {sliderImage.map((item) => (
            <Link className="block h-96 relative customAfter -z-10" key={item.id} href={item.href}>
              <Image className="w-full h-full" src={item.src} />
              <h3 className="font-poppins font-bold text-2xl text-white absolute bottom-4 left-56 z-20">
                {item.title}
              </h3>
            </Link>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Banner;
