"use client";
import React from "react";
import { useAppSelector } from "../store/hooks";
import BestSellingCard from "@/components/bestSellingCard";
import { Product } from "../utills/types";

const CatagoryPage = ({
  params,
}: {
  params: Promise<{ catagory: string }>;
}) => {
  // Unwrap the asynchronous params using React.use()
  const { catagory } = React.use(params);

  const product = useAppSelector((state) => state.product);
  const bestSell = product.filter(
    (val) => val.catagory.toLowerCase() === catagory.toLowerCase()
  );

  return (
    <div className="mt-[50px] mb-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl capitalize">
          {catagory || "Unknown Category"}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Category page starts here */}
      <div className="flex justify-center flex-wrap gap-5">
        {bestSell.length > 0 ? (
          bestSell.map((items: Product, i: number) => (
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
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CatagoryPage;
