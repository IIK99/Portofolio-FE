"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const scrollToCards = () => {
    const element = document.getElementById("cards-view");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center justify-center pt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/bg.mp4"
        autoPlay
        loop
        // muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-0" />

      <motion.div
        className="relative z-20 text-white px-4 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 10 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 10, delay: 5 }}
        >
          <span className="font-light">Wonderful</span>
          <br />
          <span className="font-extrabold">
            <Typewriter
              words={["INDONESIA", "NUSANTARA", "HEAVEN IS HERE"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 mb-8 text-balance text-sm md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10, delay: 0.6 }}
        >
          <span className="text-3xl block mb-2">
            Hello travelers, welcome to wonderful Indonesia!
          </span>
          Indonesia has a vast archipelago, in addition to the island there is a
          diversity of tribes and cultures and food that has rich aka spices and
          very delicious.
          <br />
          <b>
            We are the best place to be, we are the best place to have fun, we
            are the best place to be happy.
          </b>
          <br />
          So what are you waiting for? Let's visit this beautiful Indonesia.
          <br />
          Come, explore, and fall in love with the warmth, wonder, and beauty of
          Indonesia.
          <br />
          This is not just a vacation. This is Indonesia — the ultimate
          experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5, delay: 3 }}
        >
          <Link
            href="#cards-view"
            onClick={scrollToCards}
            className="border border-white text-white py-3 px-6 text-lg md:text-xl underline rounded-md font-bold transition duration-300 ease-in-out hover:bg-white hover:text-black"
          >
            EXPLORE NOW
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
