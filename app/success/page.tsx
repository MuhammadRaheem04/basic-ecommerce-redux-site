"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type OrderItem = {
  image: string;
  title: string;
  qty: number;
  size?: string;
  color?: string;
  price: number;
};

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") ?? "User";

  const [orderSummary, setOrderSummary] = useState<OrderItem[]>([]);

  useEffect(() => {
    const storedSummary = sessionStorage.getItem("orderSummary");
    if (storedSummary) {
      setOrderSummary(JSON.parse(storedSummary));
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full text-center">
        <div className="text-green-600 text-4xl mb-2">✅</div>
        <h2 className="text-2xl font-bold text-myBlackHead mb-2">
          Order Successful!
        </h2>
        <p className="text-myBlackHead mb-1">
          Thank you, <strong>{name}</strong>. Your order has been placed.
        </p>
        <p className="text-green-600 font-semibold mb-6">
          Your order will be delivered within 2 days 🚚
        </p>

        <div className="bg-gray-50 p-4 rounded-md shadow-inner text-left">
          <h3 className="text-lg font-semibold text-myBlackHead mb-3">
            Order Summary
          </h3>
          <ul className="space-y-4">
            {orderSummary.length > 0 ? (
              orderSummary.map((item, i) => (
                <li key={i} className="flex gap-4 border-b pb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover rounded border"
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
              ))
            ) : (
              <li>No order details available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
