// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import Img from "../assets/Img1.jpeg";
// import { fadeIn } from "../variants";

// const About = () => {
//   const [ref, inView] = useInView({ threshold: 0.5 });

//   return (
//     <section className="section" id="about" ref={ref}>
//       <div className="container mx-auto">

     
    
//         <div className="flex flex-wrap">
//           <div className="w-full md:w-1/2">


//          <motion.div
//          variants={fadeIn('right', 0.3)}

//          initial='hidden'
         
//          whileInView= { 'show' }
         
//          viewport={{ once: false, amount: 0.3 }}
         
         
//          >

//          <div className="py-8">
//               <h3 className="text-gradient mb-15 mt-10 text-[20px] lg:text-[60px] mt-4 leading-none mb-14">
//                 About me.
//               </h3>
//               <h2>
//                 <b>
//                   "Passionate About Tech: An Undergraduate with Expertise in
//                   Data Science and Web Development."
//                 </b>
//               </h2>
//               <p className="mt-4">
//                 "Enthusiastic undergraduate with expertise in data science,
//                 machine learning, and web development, dedicated to driving innovation
//                 and delivering cutting-edge solutions. Excellent communication skills,
//                 attention to detail, and a commitment to continuous learning.
//                 Seeking a challenging position in a reputable organization to leverage my skills,
//                 knowledge, and enthusiasm for technology."
//               </p>
            
//             </div>



//          </motion.div>
 
//             {/* Text content */}
            
//           </div>
//           <div className="w-full md:w-1/2 relative">
//             {/* Image */}
//             <motion.div
//               className="h-80 md:h-auto bg-cover bg-no-repeat bg-top md:bg-center md:bg-top-right"
//               initial={{ opacity: 0, scale: 0.8 }} // Set initial opacity and scale
//               animate={{ opacity: inView ? 1 : 0, scale: 1 }} // Animate opacity and scale based on inView value
//               transition={{ duration: 1 }} // Set transition duration
//               whileHover={{ scale: 1.1 }} // Add hover animation for scale
//               whileTap={{ scale: 0.9 }} // Add tap animation for scale
//             >
//               <motion.img
//                 src={Img}
//                 alt=""
//                 className="rounded-full w-80 h-80 mx-auto md:ml-auto md:mr-10 mt-8 md:mt-25 object-cover"
//                 style={{ objectPosition: "top right" }}
//                 whileHover={{ rotate: 10 }} // Add hover animation for rotation
//                 whileTap={{ rotate: -10 }} // Add tap animation for rotation
                
//               />
             
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


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
            <motion.h1
              variants={fadeIn('up', 0.30)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text"
            >
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
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0">
                <a
                  href="https://github.com/Sansgupta25"
                  className="hover:cursor-pointer cursor-pointer"
                >
                  <FaGithub className="hover:text-accent" />
                </a>
                <a
                  href="https://twitter.com/Sans_gupta25?t=vd5KCSphhbcGSVXEV4yYDw&s=09"
                  className="hover:cursor-pointer cursor-pointer"
                >
                  <FaTwitter className="hover:text-accent" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanskriti-gupta-40b45b249"
                  className="hover:cursor-pointer"
                >
                  <FaLinkedin className="hover:text-accent" />
                </a>
              </div>
            </div>
            <div className="cursor-pointer flex max-w-max gap-x-6 items-center mb-12 max-auto lg:mx-0">
              <a
                href="mailto:your-email@example.com"
                className="btn btn-lg"
              >
                Contact me
              </a>
              <a
                href="https://your-portfolio-link.com"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </div>
          </div>


          <div className="hidden lg:flex flex-1 maxx-w-[320px] lg-max-w-[482px] ">
            <img src={Img} alt='' />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

