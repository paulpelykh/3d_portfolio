import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "I'm an experienced web developer with a passion for crafting
        cutting-edge digital solutions. Whether you need a stunning website, a
        dynamic web application, or a powerful web parser, I've got you covered!
        Skills: - Proficient in HTML, CSS, JavaScript, React.js, and Node.js -
        Experienced in building responsive and user-friendly websites - Skilled
        in developing web applications with robust functionality - Capable of
        creating web parsers and automation bots for data processing - Familiar
        with various web development frameworks and libraries - Committed to
        delivering projects on time and within budget - Strong attention to
        detail and quality assurance - Continuously updating my knowledge to
        stay ahead in the ever-evolving tech landscape Projects I Excel At: 1.
        Custom Websites: I design and develop bespoke websites tailored to your
        brand's identity and audience, ensuring a captivating online presence
        that leaves a lasting impression. 2. Web Applications: Transform your
        ideas into interactive web applications that engage users and streamline
        complex processes, improving overall efficiency. 3. Web Parsers: Extract
        valuable data from websites efficiently and accurately, automating data
        collection and analysis for your business needs. 4. Automation Bots:
        Increase productivity by automating repetitive tasks, saving time and
        resources while maintaining consistency. 5. E-commerce Solutions: Build
        feature-rich online stores with secure payment gateways, intuitive
        navigation, and smooth checkout experiences to boost sales. 6.
        Responsive Design: Ensure your website looks and functions flawlessly
        across all devices, enhancing user experience and search engine
        visibility. 7. Performance Optimization: Implement strategies to
        optimize website speed, ensuring swift loading times and better search
        engine rankings. 8. Ongoing Support: I believe in lasting relationships
        with my clients. Count on me for reliable ongoing support and
        maintenance to keep your digital assets running smoothly. Let's
        collaborate to bring your vision to life and create a powerful online
        presence together!"
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
