import React from 'react';
import { motion } from 'framer-motion';
import icon1 from '../assets/icons/html.png';
import icon2 from '../assets/icons/css.png';
import icon3 from '../assets/icons/android.png';
import icon4 from '../assets/icons/django.png';
import icon5 from '../assets/icons/firebase.png';
import icon6 from '../assets/icons/gcloud.png';
import icon7 from '../assets/icons/powerbi.png';
import icon8 from '../assets/icons/python.png';
import icon9 from '../assets/icons/react.png';
import icon10 from '../assets/icons/tableau.png';

const Skills = () => {
  const skills = [
    { id: 1, icon: icon1 },
    { id: 2, icon: icon2 },
    { id: 3, icon: icon3 },
    { id: 4, icon: icon4 },
    { id: 5, icon: icon5 },
    { id: 6, icon: icon6 },
    { id: 7, icon: icon7 },
    { id: 8, icon: icon8 },
    { id: 9, icon: icon9 },
    { id: 10, icon: icon10 }
  ];
  const transition = {
    duration: 1.0,
    ease: 'easeInOut'
  };
  return (
    <div className='mt-0 mb-8' style={{ textAlign: 'center', marginTop: '5px', marginBottom: '10px' }}>
 <h2 style={{ color: '#8A2BE2', textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>Skills</h2>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {skills.map(skill => (
          <motion.div
            key={skill.id}
            style={{ margin: '0 10px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            transition={transition}
          >
            <img src={skill.icon} alt={`Skill ${skill.id}`} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
