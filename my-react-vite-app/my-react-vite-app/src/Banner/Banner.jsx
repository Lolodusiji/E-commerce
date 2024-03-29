import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
import{Link} from "react-router-dom"
import { motion } from "framer-motion";
import { opacityVariant, parentVariant } from "../utils/variants";
import Home from "../../public/images/bg/home-bg.jpg";

const Banner = () => {
  

  return (
    <header className="w-full">
      <div className="w-full min-h-[44rem] flex justify-center items-center relative overflow-hidden">
        <img
          src={Home}
          alt="header cover"
          width={1920}
          height={1000}
          className="absolute top-0 left-0 object-cover w-full h-full -z-20"
        />

        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-t from-[#131313] to-transparent"></div>

        <div className="md:max-w-[1488px] w-11/12 mx-auto">
          <div className="flex items-start text-white">
            <div className="mt-10">
              <motion.div
                variants={parentVariant}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
                className="space-y-4 text-start md:text-start"
              >
                <motion.h1
                  variants={opacityVariant}
                  className="text-4xl font-extrabold duration-200 text-shadow lg:text-6xl md:text-5xl"
                >
                  The World&apos;s Marketplace
                </motion.h1>

                <motion.p
                  variants={opacityVariant}
                  className="max-w-2xl  text-base leading-relaxed duration-200 text-white/90 md:mx-0 text-shadow lg:text-lg"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore veniam ratione deleniti vitae animi nemo libero! Iste
                  voluptates amet praesentium ipsa? Et error iure ratio.
                </motion.p>

                <motion.div variants={opacityVariant}>
                  <Link to="/shop">
                    <button className="px-6 py-2 text-orange-500 transition-colors border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-black">
                      Explore
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
