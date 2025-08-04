"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { toast, ToastContainer } from "react-toastify";

const BestSellingCardAddToCart = ({ slug }: { slug: string }) => {
  // calling the product from redux store
  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug.toLowerCase() === slug.toLowerCase()
  );
  // cart item
  const dispatch = useAppDispatch();
  // setting cart item
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: Array.isArray(product?.image) ? product?.image[0] : product?.image,
    slug: product?.slug,
    price: product?.price,
    catagory: product?.catagory,
    size: product?.size?.[0],
    qty: 1,
    discount: product?.discount,
    uuid: Math.floor(1000 + Math.random() * 9000),
    color: product?.color?.[0],
  });
  // toast notification
  const notify = () =>
    toast.success("Product added Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-white">
          {/* size  */}
          <div className="flex items-center">
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
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          {/* color  */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
              Color
            </span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart  */}
          <div onClick={notify} className="w-fit">
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="group mt-5 w-full bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
            >
              <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </div>
  );
};

export default BestSellingCardAddToCart;
