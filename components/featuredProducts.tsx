"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";
import { Product } from "@/app/utills/types";

const FeaturedProducts = () => {
  // my data

  const bestSell = useAppSelector((state) => state.product.slice(0, 9));
  // carousel settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="text-center mb-10">
        {/* Heading  */}
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* carousel  */}
      <Slider {...settings}>
        {bestSell.map((items: Product, i) => (
          <BestSellingCard
            key={i}
            src={
              Array.isArray(items.image)
                ? items.image[0]
                : typeof items.image === "string"
                  ? items.image
                  : items.image?.src || ""
            }
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            catagory={items.catagory}
            slug={items.slug}
            discount={items.discount ?? 0}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
