"use client";

import Image from "next/image";
import React, { useState } from "react";
import Filter from "../../components/filter";
import HeroSection from "../../components/hero";
import NavbarHome from "../../components/navbarhome";
import Footer from "../../components/footer";
import { motion } from "framer-motion";

export default function App() {
  type Cards = {
    singer: string;
    des: string;
    image: string;
    price: string | number;
    rating: number;
    type: string;
  };

  const cards = [
    {
      singer: "Aceh",
      des: "Islamic City",
      image: "/images/aceh.jpg",
      price: "Free",
      rating: 4,
      type: "Tempat Bersejarah",
    },
    {
      singer: "Jakarta",
      des: "Metropolitan",
      image: "/images/jk.jpg",
      price: "IDR" + 50,
      rating: 4,
      type: "Tempat Bersejarah",
    },
    {
      singer: "Bromo",
      des: "Love Sunset/Sunlight",
      image: "/images/br.jpg",
      price: "IDR" + 1000,
      rating: 4,
      type: "Pantai/Gunung",
    },

    {
      singer: "Forest Kalimantan",
      des: "The lungs of the world",
      image: "/images/hkt.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Floating Market Kalimantan",
      des: "Traditional market",
      image: "/images/kt.jpg",
      price: "IDR" + 100,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Suku Dayak",
      des: "Don't be afraid they are good ",
      image: "/images/kt1.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },

    {
      singer: "Bekantan",
      des: "Monkey with big noise",
      image: "/images/ktm1.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Spring Water",
      des: "Brrrzzz",
      image: "/images/lomb.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Children of Papua",
      des: "They are so cute",
      image: "/images/ap.jpg",
      price: "Not for sale",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Gamelan",
      des: "Relaxation",
      image: "/images/gjw.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Traditional Music",
      des: "Make you clam",
      image: "/images/gm.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "NTB",
      des: "Beatiful place",
      image: "/images/lombok.jpg",
      price: "IDR" + 2500,
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Traditional Bali Dance",
      des: "It's so good and uniqe",
      image: "/images/mbl.jpg",
      price: "IDR" + 5000,
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Undersea Beauty",
      des: "I love it",
      image: "/images/ntb.jpg",
      price: "IDR" + 1500,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Sea of NTT",
      des: "Make you happy",
      image: "/images/ntb1.jpg",
      price: "IDR" + 2000,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Traditional House of NTT",
      des: "Curious about living there?",
      image: "/images/ntt.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Beautiful Sea",
      des: "A lot of fish",
      image: "/images/nttl.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Komodo",
      des: "Make you scared",
      image: "/images/ntttt.jpg",
      price: "IDR" + 1500,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Orang Utan",
      des: "They are almost extinct ",
      image: "/images/okt.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Beautiful Girl of Papua",
      des: "Cute",
      image: "/images/pap.jpg",
      price: "Not for sale",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Komodo Land",
      des: "🤫 Sttt",
      image: "/images/pk.jpg",
      price: "IDR" + 1500,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Man of Papua",
      des: "Uniqe",
      image: "/images/pp.jpg",
      price: "Not for sale",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Traditional House",
      des: "😍",
      image: "/images/rnt.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "NTT",
      des: "Want to live there?",
      image: "/images/rntt.jpg",
      price: "IDR" + 200,
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Reog Ponorogo",
      des: "My tooth hurts",
      image: "/images/rp.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Traditional House of Sulawesi",
      des: "Amaizing",
      image: "/images/rtora.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Suku Baduy",
      des: "I like hooney",
      image: "/images/sb.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Surabaya",
      des: "Fight",
      image: "/images/sby1.jpg",
      price: "IDR" + 1500,
      rating: 4,
      type: "Tempat Bersejarah",
    },
    {
      singer: "Sulawesi",
      des: "Beatiful Place",
      image: "/images/sula.jpg",
      price: "IDR" + 23000,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Children of Sulawesi",
      des: "Cute",
      image: "/images/sulawe.jpg",
      price: "Not for sale",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Beatiful beach",
      des: "⭐",
      image: "/images/sulawesi.jpg",
      price: "IDR" + 2000,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Beatiful Lake",
      des: "Cool",
      image: "/images/sumat.jpg",
      price: "Free",
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Traditional Sumsel Dance",
      des: "Nice dance",
      image: "/images/sumsel.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Rice Field",
      des: "Source of life",
      image: "/images/sw.jpg",
      price: "Free",
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Kecak Dance",
      des: "😍 I love it",
      image: "/images/tbl.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Suku Toraja",
      des: "Nice place",
      image: "/images/tor.jpg",
      price: "Free",
      rating: 4,
      type: "Suku & Budaya",
    },
    {
      singer: "Merak",
      des: "Beatiful",
      image: "/images/mrk.jpg",
      price: "IDR" + 25,
      rating: 4,
      type: "Pantai/Gunung",
    },
    {
      singer: "Borobudur",
      des: "Archa",
      image: "/images/cd1.jpg",
      price: "IDR" + 2000,
      rating: 4,
      type: "Tempat Bersejarah",
    },
    {
      singer: "Prambanan",
      des: "Archa",
      image: "/images/cka.jpg",
      price: "IDR" + 2000,
      rating: 4,
      type: "Tempat Bersejarah",
    },
    {
      singer: "Martabak Mini",
      des: "Love it 😍",
      image: "/images/cu.jpg",
      price: "IDR" + 10,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Gudeg",
      des: "Too sweet",
      image: "/images/gud.jpg",
      price: "IDR" + 25,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Indomie",
      des: "Everyone like this 🤭",
      image: "/images/in.jpg",
      price: "IDR" + 5,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Rendang",
      des: "Top 1 in the world",
      image: "/images/dar.jpg",
      price: "IDR" + 45,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Salad Indonesia",
      des: "Spicy 🔥🔥🔥",
      image: "/images/la.jpg",
      price: "IDR" + 30,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Bacang",
      des: "Lontong cone",
      image: "/images/lon.jpg",
      price: "IDR" + 15,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Tumpeng",
      des: "Rice cone",
      image: "/images/na.jpg",
      price: "IDR" + 250,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Pempek",
      des: "From palembang sumsel",
      image: "/images/pem.jpg",
      price: "IDR" + 20,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Satai Marangi",
      des: "Like it",
      image: "/images/sa.jpg",
      price: "IDR" + 50,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Satai Padang",
      des: "Beef",
      image: "/images/sate.jpg",
      price: "IDR" + 45,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Soto",
      des: "Love it",
      image: "/images/so.jpg",
      price: "IDR" + 20,
      rating: 4,
      type: "Makanan Khas",
    },
    {
      singer: "Gulai Fish",
      des: "Like fish",
      image: "/images/soi.jpg",
      price: "IDR" + 45,
      rating: 4,
      type: 43,
    },
    {
      singer: "Desert Traditional",
      des: "I love it 😍😍😍",
      image: "/images/tra.jpg",
      price: "IDR" + 10,
      rating: 4,
      type: "Makanan Khas",
    },
  ];
  const [showFilter, setShowFilter] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);

  return (
    <>
      <NavbarHome />
      {/* <AdminNavbar/> */}
      <HeroSection />
      <div
        id="cards-view"
        className="py-10 bg-gradient-to-tl from-[#c31432] to-[#240b36]"
      >
        <h2 className="text-4xl font-bold pt-7 text-white text-center mb-10 tracking-wide">
          OUR GALLERY
        </h2>
        <div className="  flex w-full justify-center gap-2 relative">
          {/* ini sidebar */}
          <Filter show={showFilter} setShow={setShowFilter} />
          {/* ini cards */}
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredCards.map((member, index) => (
              <motion.div
                key={index}
                className="w-64 h-96 relative bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-2/3">
                  <Image
                    src={member.image}
                    alt={member.singer}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#FF0000] text-white py-1 px-3 text-sm font-bold rounded">
                    {member.price}
                  </div>
                </div>
                <div className="h-1/2 bg-white p-4">
                  <div className="text-lg font-bold">{member.singer}</div>
                  <div className="text-gray-400 text-sm">{member.des}</div>
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
                  <div className="text-sm text-gray-500">{member.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
