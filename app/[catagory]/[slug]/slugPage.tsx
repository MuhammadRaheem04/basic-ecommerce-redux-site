"use client";
import { useAppSelector } from "@/app/store/hooks";
import AddTocartToast from "@/components/addTocartToast";
import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SlugPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const handleBuyNow = () => {
    sessionStorage.setItem("buyNowProduct", JSON.stringify([cartItem]));
    router.push("/checkout?buyNow=true");
  };
  const decodedSlug = decodeURIComponent(
    Array.isArray(slug) ? slug[0] : slug || ""
  ); // Decode spaces & special characters

  const product = useAppSelector((state) => state.product); // Get product data from Redux
  const slugProduct = product.find(
    (val) => val.slug.toLowerCase() === decodedSlug.toLowerCase()
  );

  const [cartItem, setCartItem] = useState({
    id: slugProduct?.id ?? 0,
    title: slugProduct?.title ?? "",
    image: Array.isArray(slugProduct?.image)
      ? slugProduct?.image[0]
      : slugProduct?.image,
    slug: slugProduct?.slug ?? "",
    price: slugProduct?.price ?? 0,
    catagory: slugProduct?.catagory ?? "",
    size: slugProduct?.size?.[0] ?? "",
    qty: 1,
    discount: slugProduct?.discount ?? 0,
    uuid: Math.floor(1000 + Math.random() * 9000),
    color: slugProduct?.color?.[0] ?? "",
  });

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image  */}
            <SlugComponent
              image={
                slugProduct?.image
                  ? Array.isArray(slugProduct.image)
                    ? slugProduct.image
                    : [slugProduct.image] // wrap single image in an array
                  : []
              }
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm leading-relaxed scroll-m-20 font-semibold text-myBlackPara tracking-widest">
                {slugProduct ? slugProduct.catagory : "No Category"}
              </h2>
              <h1 className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight mb-1 text-myBlackHead">
                {slugProduct ? slugProduct.title : "No Title"}
              </h1>

              {/* Ratings  */}
              <div className="mt-2 rating rating-sm flex items-center">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-myOrange"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-myOrange"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-myOrange"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-myOrange"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-myOrange"
                />
                <span className="scroll-m-20 text-base font-medium tracking-tight text-myBlackHead ml-3">
                  4 Reviews
                </span>
              </div>
              {/* description  */}
              <p className="mt-3 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
                {slugProduct ? slugProduct.description : "No Description"}
              </p>

              {/* colours  */}
              <div className="flex mt-6 items-center pb-5 mb-5">
                <div className="flex">
                  <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                    Color
                  </span>
                  {slugProduct?.color.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setCartItem({ ...cartItem, color: item })}
                      className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                      style={{ backgroundColor: item }}
                    />
                  ))}
                </div>

                {/* sizes  */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                    Size
                  </span>

                  <label className="form-control w-full max-w-xs">
                    <select
                      className="select select-bordered"
                      onChange={(e) =>
                        setCartItem({ ...cartItem, size: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Size
                      </option>
                      {slugProduct?.size.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              {/* quntity  */}
              <div className="flex items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                  Quantity
                </span>
                <Button
                  onClick={() =>
                    setCartItem({
                      ...cartItem,
                      qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                    })
                  }
                  className="group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
                >
                  <FaMinus className="mr-2 h-2 w-2 group-hover:text-myOrange duration-300 " />
                  less
                </Button>
                <div className="mx-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  {cartItem.qty}
                </div>
                <Button
                  onClick={() =>
                    setCartItem({ ...cartItem, qty: ++cartItem.qty })
                  }
                  className="group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
                >
                  <FaPlus className="mr-2 h-2 w-2 group-hover:text-myOrange duration-300 " />
                  Add
                </Button>
              </div>

              {/* divider  */}
              <div className="divider"></div>
              <div className="flex items-center justify-between">
                {/* price  */}
                <div className="flex items-center gap-3">
                  <span
                    className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${(cartItem.discount ?? 0) > 0 && "line-through decoration-2 decoration-myOrange/70"}`}
                  >
                    ${(cartItem.price ?? 0) * cartItem.qty}
                  </span>

                  {/* discounted value  */}
                  {(cartItem.discount ?? 0) > 0 && (
                    <p className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                      $
                      {(
                        (cartItem.price ?? 0) *
                        (1 - (cartItem.discount ?? 0) / 100) *
                        cartItem.qty
                      ).toFixed(2)}
                    </p>
                  )}
                </div>
                {/* buttons  */}
                <AddTocartToast cartItem={cartItem} />
              </div>
              <Button
                onClick={handleBuyNow}
                className="mt-5 w-full group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
              >
                <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlugPage;
