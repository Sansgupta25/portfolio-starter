import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import icon1 from '../assets/icons/Alteryx.png';
import icon2 from '../assets/icons/spark.png';

const Work = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false); // Reset visibility to false whenever the component is rendered
    const timer = setTimeout(() => {
      setVisible(true); // Set visibility to true after a brief delay
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className='section' id='work'style={{ paddingTop: '150px', height: '460px' }}>
      <div className='mt-128'></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'linear-gradient(to right, #8A2BE2, #FF69B4)',
            color: '#fff',
            opacity: visible ? 1 : 0, // set opacity based on visibility state
            transition: 'opacity 0.5s ease-in-out', // define transition properties
          }}
          contentArrowStyle={{ borderRight: '7px solid #8A2BE2' }}
          date='Dec-2022 to Feb-2023'
          iconStyle={{ background: '#8A2BE2', color: '#fff', borderRadius: '8px' }}
          icon={<img src={icon1} alt='Logo' style={{ width: '100%', height: '100%' }} />}
        >
          <h3 className='vertical-timeline-element-title'>Alteryx Sparked</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            AICTE Eduskills Virtual Internship-Data Analytic and Process Automation
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'linear-gradient(to right, #FF69B4, #800080)',
            color: '#fff',
            opacity: visible ? 1 : 0, // set opacity based on visibility state
            transition: 'opacity 0.8s ease-in-out', // define transition properties
          }}
          contentArrowStyle={{ borderRight: '7px solid #FF69B4' }}
          date='Jan-2023'
          iconStyle={{ background: '#8A2BE2', color: '#fff', borderRadius: '8px' }}
          icon={<img src={icon2} alt='Logo' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        >
          <h3 className='vertical-timeline-element-title'>The Sparks Foundation</h3>
          <h4 className='vertical-timeline-element-subtitle'>The Data Science Intern</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Work;
