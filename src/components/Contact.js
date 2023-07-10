import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";
import backgroundVideo from '../assets/background-video.mp4'; // Import the background video
import purple from '../assets/purple.mov';

const Contact = () => {
  return (
    <section className='relative section py-50 lg:section section-with-video-background pt-10' id='contactus'style={{paddingTop: 5}}>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 z-10'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'><b>Get in touch</b></h4>
              <h2 className='text-[40px] lg:text-[90px] leading-none mb-12'>Let's Work<br />
                together!</h2>
            </div>
          </motion.div>
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-10 items-start z-10'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder text-white focus:border-accent transition-all' type='text' placeholder='Your Name'></input>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder text-white focus:border-accent transition-all' type='text' placeholder='Your email'></input>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'></textarea>
            <button className='btn btn-lg'>Send message</button>
          </form>
        </div>
        <h2 className="text-white">Made with ❤ by Sanskriti!</h2> {/* Added mt-4 for margin top */}
      </div>
      <video className='absolute z-0 top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={purple} type='video/mp4' />
      </video>
    </section>
  );
};

export default Contact;
