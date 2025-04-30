"use client";
import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../components/filter";
import HeroSection from "../../components/hero";
import NavbarHome from "../../components/navbarhome";
import Footer from "../../components/footer";

export default function App() {
  type Cards = {
    singer: string;
    date: string;
    image: string;
    price: number;
    rating: number;
    stock: number;
  };

  const cards = [
    {
      singer: "Tailor Swift",
      date: "19 May",
      image: "/images/ts.jpg",
      price: 900,
      rating: 4,
      stock: 68,
    },
    {
      singer: "Yoasobi",
      date: "08 July",
      image: "/images/ys.jpeg",
      price: 11000,
      rating: 5,
      stock: 23,
    },
    {
      singer: "Joji",
      date: "20 September",
      image: "/images/kk.jpg",
      price: 750,
      rating: 4,
      stock: 43,
    },
    {
      singer: "The Weekend",
      date: "15 December",
      image: "/images/st.jpg",
      price: 550,
      rating: 3,
      stock: 78,
    },
    {
      singer: "Tailor Swift",
      date: "19 May",
      image: "/images/ts.jpg",
      price: 900,
      rating: 4,
      stock: 68,
    },
    {
      singer: "Yoasobi",
      date: "08 July",
      image: "/images/ys.jpeg",
      price: 11000,
      rating: 5,
      stock: 23,
    },
    {
      singer: "Joji",
      date: "20 September",
      image: "/images/kk.jpg",
      price: 750,
      rating: 4,
      stock: 43,
    },
    {
      singer: "The Weekend",
      date: "15 December",
      image: "/images/st.jpg",
      price: 550,
      rating: 4,
      stock: 43,
    },

    {
      singer: "Tailor Swift",
      date: "19 May",
      image: "/images/ts.jpg",
      price: 900,
      rating: 4,
      stock: 68,
    },
    {
      singer: "Yoasobi",
      date: "08 July",
      image: "/images/ys.jpeg",
      price: 11000,
      rating: 5,
      stock: 23,
    },
    {
      singer: "Joji",
      date: "20 September",
      image: "/images/kk.jpg",
      price: 750,
      rating: 4,
      stock: 43,
    },
    {
      singer: "The Weekend",
      date: "15 December",
      image: "/images/st.jpg",
      price: 550,
      rating: 4,
      stock: 43,
    },

    {
      singer: "Tailor Swift",
      date: "19 May",
      image: "/images/ts.jpg",
      price: 900,
      rating: 4,
      stock: 68,
    },
    {
      singer: "Yoasobi",
      date: "08 July",
      image: "/images/ys.jpeg",
      price: 11000,
      rating: 5,
      stock: 23,
    },
    {
      singer: "Joji",
      date: "20 September",
      image: "/images/kk.jpg",
      price: 750,
      rating: 4,
      stock: 43,
    },
    {
      singer: "The Weekend",
      date: "15 December",
      image: "/images/st.jpg",
      price: 550,
      rating: 4,
      stock: 43,
    },

    {
      singer: "Tailor Swift",
      date: "19 May",
      image: "/images/ts.jpg",
      price: 900,
      rating: 4,
      stock: 68,
    },
    {
      singer: "Yoasobi",
      date: "08 July",
      image: "/images/ys.jpeg",
      price: 11000,
      rating: 5,
      stock: 23,
    },
    {
      singer: "Joji",
      date: "20 September",
      image: "/images/kk.jpg",
      price: 750,
      rating: 4,
      stock: 43,
    },
    {
      singer: "The Weekend",
      date: "15 December",
      image: "/images/st.jpg",
      price: 550,
      rating: 4,
      stock: 43,
    },
  ];
  const [showFilter, setShowFilter] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);

  return (
    <>
      <NavbarHome />
      {/* <AdminNavbar/> */}
      <HeroSection />
      <div id="cards-view" className="py-10 bg-gradient-to-tl from-[#c31432] to-[#240b36]">
        <div className="  flex w-full justify-center gap-2 relative">
          {/* ini sidebar */}
          <Filter show={showFilter} setShow={setShowFilter} />
          {/* ini cards */}
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredCards.map((member, index) => (
              <div
                key={index}
                className="w-64 h-96 relative bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative h-2/3">
                  <Image
                    src={member.image}
                    alt={member.singer}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FF0000] text-white py-1 px-3 text-sm font-bold rounded">
                    IDR {member.price.toFixed(2)}
                  </div>
                </div>
                <div className="h-1/2 bg-white p-4">
                  <div className="text-lg font-bold">{member.singer}</div>
                  <div className="text-gray-400 text-sm">
                    Coming soon {member.date} 2024
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < member.rating ? "text-[#f57f17]" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 6.217L6.18 12.294l-6.63.964 4.796 4.674-1.132 6.605 5.934-3.117 5.934 3.117-1.132-6.605 4.796-4.674-6.63-.964-2.867-6.077z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    {member.stock} remaining ticket stocks
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
