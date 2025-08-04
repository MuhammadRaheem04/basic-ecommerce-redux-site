"use client";

import { addCart, delItem, subtractCart } from "@/app/store/features/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            {typeof item.image === "string" && item.image.trim() !== "" ? (
              <Image
                src={item.image}
                alt={item.title || "product image"}
                width={100}
                height={100}
              />
            ) : (
              <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                No Image
              </div>
            )}

            {/* Some Info  */}
            <div className="flex justify-between items-center px-5 w-full">
              <div>
                {/* tittle  */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                  {item.title}
                </h2>
                {/* size  */}
                <p className="mt-2 text-sm leading-none font-semibold line-clamp-1 text-myBlackPara/80 ">
                  Size:&nbsp;<span>{item.size}</span>
                </p>
                {/* color  */}
                <p className="mt-2 text-sm leading-none font-semibold line-clamp-1 text-myBlackPara/80 ">
                  color:&nbsp;
                  <span>
                    <button
                      className="border-2 border-gray-300 mr-1 rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>
                {/* quantity  */}
                <div className="mt-2 flex items-center">
                  <button onClick={()=> dispatch(subtractCart(item))} className="bg-myBlackHead text-mywhite hover:bg-mywhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                    <FaMinus className="h-4 w-4 hover:text-myBlackHead" />
                  </button>
                  <div className="mx-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara/80">
                    {item.qty}
                  </div>
                  <button onClick={()=> dispatch(addCart(item))} className="bg-myBlackHead text-mywhite hover:bg-mywhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                    <FaPlus className="h-4 w-4 hover:text-myBlackHead" />
                  </button>
                </div>
                {/* price and delete */}
                <div className=" lg:hidden flex flex-col gap-2">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                    <span>Price:&nbsp;</span>
                    &#36;
                    {(item.discount ?? 0) > 0
                      ? (item.price -
                          (item.price * (item.discount ?? 0)) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* price and delete */}
            <div className="hidden lg:flex flex-col items-end gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                <span>Price:&nbsp;</span>
                &#36;
                {(item.discount ?? 0) > 0
                  ? (item.price - (item.price * (item.discount ?? 0)) / 100) *
                    item.qty
                  : item.price * item.qty}
              </h3>
              <FaTrash
                onClick={() => dispatch(delItem(item.uuid))}
                className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
