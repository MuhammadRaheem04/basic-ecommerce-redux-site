"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/app/store/hooks";
import { useRouter } from "next/navigation";
import { Cart } from "@/app/utills/types";
import Image from "next/image";

const CheckoutPage = () => {
  const router = useRouter();
  const reduxCart = useAppSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState<Cart[]>([]);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const isBuyNow = searchParams.get("buyNow") === "true";
    if (isBuyNow) {
      const stored = sessionStorage.getItem("buyNowProduct");
      if (stored) setCartItems(JSON.parse(stored));
    } else {
      setCartItems(reduxCart);
    }
  }, [reduxCart]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { sendOrderEmail } = await import("../app/utills/email");
    await sendOrderEmail({ ...form, cartItems });
    sessionStorage.setItem("orderSummary", JSON.stringify(cartItems));

    const isBuyNow =
      new URLSearchParams(window.location.search).get("buyNow") === "true";
    if (!isBuyNow) {
      const { clearCart } = await import("../app/store/features/cart");
      const { store } = await import("../app/store/store");
      store.dispatch(clearCart());
    }

    router.push("/success?name=" + form.name);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="mb-6 text-center">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
            💵 Cash on Delivery
          </span>
          <h2 className="text-3xl font-bold text-myBlackHead mt-4">Checkout</h2>
          <p className="text-sm text-gray-500">Complete your order below</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-myBlackHead font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-myOrange"
              />
            </div>

            <div>
              <label className="block mb-1 text-myBlackHead font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-myOrange"
              />
            </div>

            <div>
              <label className="block mb-1 text-myBlackHead font-medium">
                Address
              </label>
              <textarea
                name="address"
                value={form.address}
                required
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-myOrange"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-myOrange hover:bg-orange-600 text-mywhite font-bold py-3 rounded transition duration-300"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-myBlackHead mb-4">
              Order Summary
            </h3>
            <ul className="space-y-4">
              {cartItems.map((item, i) => (
                <li key={i} className="flex gap-4 items-start border-b pb-4">
                  <Image
                    src={
                      typeof item.image === "string"
                        ? item.image
                        : item.image?.src || "/images/default.jpg"
                    }
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <div className="text-sm text-myBlackHead">
                    <p className="font-bold">{item.title}</p>
                    <p>Qty: {item.qty}</p>
                    <p>Size: {item.size ?? "N/A"}</p>
                    <p>Color: {item.color ?? "N/A"}</p>
                    <p>Price: ${item.price}</p>
                    <p className="font-medium">
                      Total: ${item.price * item.qty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
