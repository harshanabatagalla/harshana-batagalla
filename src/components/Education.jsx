import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { educations } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const EducationCard = ({ education }) => (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#1d1836', color: '#fff' }}

        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={education.date}
        iconStyle={{ background: education.iconBg, color: '#f7fafc' }}
        icon={
            <div className='flex justify-center w-full h-full items-center'>
                <img
                    src={education.icon}
                    alt={education.company_name}
                    className='w-[80%] h-[80%] object-contain'
                />
            </div>
        }
    >
        <div>
            <h3 className='text-white text-[18px] font-bold'>{education.title}</h3>
            <p className='text-secondary font-semi-bold' style={{ margin: 0, fontSize: "16px" }}>{education.company_name}</p>
            <div className='flex items-center gap-2 mt-2'>
                <p className='text-white pl-1 mt-2 text' style={{ margin: 0, fontSize: "14px" }}>{education.description}</p>
            </div>
        </div>
        {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.points.map((point, index) => (
          <li key={`point-${index}`} 
          className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
)
const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have learned so far</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>
            <div className='mt-14 flex flex-col'>
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard
                            key={`education-${index}`}
                            education={education}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Education, "education")