import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, icon, index }) => {
    return (
      <Tilt className = " xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max:45,
              scale: 1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-[20px] font-bold mt-4 text-white text-center'>{title}</h3>

          </div>
        </motion.div>
      </Tilt>
    )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 color-secondary text-[17px] max-w-3xl leading-[30px ]'
    >
      A self-motivated and skillful undergraduate, with a great interest in problem-solving. Skilled in JavaScript and TypeScript, with expertise in React and Node.js frameworks. Familiar with Angular and .NET
      Good team player who is always excited to face new challenges. Excited about tackling new challenges and working collaboratively in teams.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")