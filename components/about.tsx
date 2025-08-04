"use client";

import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-mywhite min-h-screen py-10 px-6 text-myBlackHead">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">About Us</h1>

        <p className="text-lg leading-relaxed">
          Welcome to <strong>EleganceWear</strong> – your ultimate fashion destination dedicated to modern, confident women. We believe that fashion is more than just clothing; it’s a celebration of identity, expression, and empowerment.
        </p>

        <p className="text-lg leading-relaxed">
          At EleganceWear, we curate the latest trends in women’s <strong>Tops</strong>, <strong>Pants</strong>, <strong>Accessories</strong>, and <strong>Shoes</strong> to help you look and feel your best. Whether you’re dressing for a casual brunch, a busy workday, or a special evening out, we have something that fits your unique style.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>🌸 Stylish collections updated seasonally</li>
            <li>👜 High-quality materials and comfort-focused designs</li>
            <li>👗 Sizes for every body type – because every woman deserves to shine</li>
            <li>🚚 Fast shipping & responsive customer support</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          We’re more than a brand — we’re a community. Join thousands of women who trust EleganceWear to elevate their wardrobe and inspire confidence every day.
        </p>

        <p className="text-lg text-center font-medium">
          Thank you for being part of our journey. 💖
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
