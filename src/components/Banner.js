import React from "react";
import Image from "../assets/avatar.svg";
import Img from "../assets/imgg.jpeg";
import { FaGithub, FaTwitch, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants = {fadeIn('up' ,0.30)}initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className="text-[55px] font-bold leading-[0.8] lg:text">
              SANSKRITI <span> GUPTA </span>
            </motion.h1>

            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>

              <TypeAnimation
                sequence={[
                  "Data Science Aspirant",
                  2000,
                  "Web Developer",
                  2000,
                  
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
            Building Tomorrow's Digital Future: Unleashing the Power of Data Science and Web Development through Passion, Expertise, and Innovation."
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-6 max-auto lg:mx-0">           
          <div className = 'flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
            <a href="https://github.com/Sansgupta25">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Sans_gupta25?t=vd5KCSphhbcGSVXEV4yYDw&s=09">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sanskriti-gupta-40b45b249">
              <FaLinkedin />
            </a>
          </div>
          </div>
            <div className="flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx-0">
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className="text-gradient btn-link">
              My Portfolio
            </a>
            </div>
          </div>
{/* 
          <div className = 'flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
            <a href="https://github.com/Sansgupta25">
              <FaGithub />
            </a>
            <a href="https://twitter.com/Sans_gupta25?t=vd5KCSphhbcGSVXEV4yYDw&s=09">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sanskriti-gupta-40b45b249">
              <FaLinkedin />
            </a>
          </div> */}

<div className="hidden lg:flex flex-1 maxx-w-[320px] lg-max-w-[482px] ">
  <img src={Img} alt=''/>
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
