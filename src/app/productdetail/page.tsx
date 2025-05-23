"use client"
import Image from "next/image";
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function ProductDetail() {
  const product = {
    name: "Visit rural papua and participate in their daily lives",
    price: 11000.0,
    description:
      "Papua is the eastern part of Indonesia. wonder what their lives are like? Then participate in their life and feel the sensation. You'll feel what they've been feeling all along.",
    imageUrl: "/images/pp.jpg",
    inStock: true,
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8 p-8 bg-gradient-to-l from-[#6f0000] to-[#200122] min-h-screen">
        <div className="w-full lg:w-1/2 h-96 relative">
          <Image
            className="rounded-md"
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col text-white">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <div className="mb-3">
            <h2 className="text-2xl font-semibold underline">
              Price: ${product.price.toFixed(2)}
            </h2>
          </div>
          <p className="mb-6">{product.description}</p>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Price:</span>
              <span className=" font-semibold">
                ${product.price.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Status:</span>
              <span
                className={`font-semibold ${
                  product.inStock ? "text-[#24FE41]" : "text-red-600"
                }`}
              >
                {product.inStock ? "Available" : "Not Available"}
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <label htmlFor="qty" className="font-semibold">
                Amount
              </label>
              <input
                type="number"
                id="qty"
                name="qty"
                min="1"
                defaultValue="1"
                className="border border-gray-300 rounded text-gray-700 p-2 focus:outline-none"
              />
            </div>
            <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors">
              Paid
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
