import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/cric.jpeg";
import img1_1 from "../assets/crics.jpeg";
import img2 from "../assets/spotify.jpeg";
import img3 from "../assets/bookshop.jpeg";
import purple from '../assets/purple.mov';
const Projects = () => {
  return (
    <section className="section" id="projects"style={{paddingTop: 10}}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* intro */}
            <div>
              <h2 className="h2 leading-tight text-accent mt-4">
                My latest <br />
                Project
              </h2>
              <p className="max-w-sm-mb-16">
                CricViz - A web-based system called that can predict the outcome
                of cricket matches using machine learning models and visualize
                cricket data to provide useful insights.
              </p>
              <button className="btn btn-sm mt-2">View all Projects</button>
            </div>

            {/* project1 */}
            <motion.div
            variants= {fadeIn('right', 0.5)}
            initial='hidden'
            whileInView ={'show'}
            viewport={{ once: false, amount: 0.3 }} 
            
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              <img
                className="cursor-pointergroup-hover:scale-125 transition-all duration-500 "
                src={img1_1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">
                  Data Visualization Project
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50 ">
                <span className="text-3xl text-white ">CricViz</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants= {fadeIn('left', 0.5)}
          initial='hidden'
          whileInView ={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-5">
            {/* project2 */}
            <div className="group relative overflow-hidden border-2 mt-2 border-white/50 rounded-xl">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">
                  Web Development Project using Reactjs
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50 ">
                <span className="text-3xl text-white ">BookShop - An Ecommerce Website</span>
              </div>
            </div>

            {/* 3rd project */}
            <div>
              <div className="flex-1 flex flex-col gap-y-6">
                <div className="group relative overflow-hidden border-2 mb-5 border-white/50 rounded-xl">
                  <div
                    className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
                  ></div>
                  <img
                    className="group-hover:scale-125 transition-all duration-500 "
                    src={img2}
                    alt=""
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                    <span className="text-gradient">
                    Data Analysis using Tableau 
                    </span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-800 z-50 ">
                    <span className="text-3xl text-white ">Spotify Data Analysis</span>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        
        </div>

      </div>
      <video className='absolute z-0 top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={purple} type='video/mp4' />
        {/* Add additional source tags for other video formats if needed */}
      </video>
      
    </section>
  );


  
};

export default Projects;
