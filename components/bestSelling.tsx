"use client";
import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";
import { Product } from "@/app/utills/types";

const BestSelling = () => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.slice(0, 3);
  
  return (
    <div className="mb-[100px] mt-[100px]">
      <div className="text-center mb-10">
        {/* Heading  */}
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Best Selling Products starts from here */}
      <div className="flex justify-center flex-wrap gap-5">
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
      </div>
    </div>
  );
};

export default BestSelling;
