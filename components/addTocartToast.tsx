"use client";

import { ToastContainer, toast } from "react-toastify";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "@/app/utills/types";

const AddTocartToast = ({ cartItem }: { cartItem: Cart }) => {
  const dispatch = useAppDispatch();
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
    <>
    <div onClick={() => dispatch(addToCart(cartItem))} className="w-fit">
      <Button
        onClick={notify}
        className="group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
      >
        <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 " />
        Add to Cart
      </Button>
    </div>
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
    </>
  );
};

export default AddTocartToast;
