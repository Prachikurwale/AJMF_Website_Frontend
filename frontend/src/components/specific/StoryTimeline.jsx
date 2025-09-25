// src/components/specific/StoryTimeline.jsx

import React from 'react';
import SectionHeader from '../reusable/SectionHeader';

const timelineData = [
  {
    year: 2015,
    title: "The Foundation is Established",
    description: "The Anish Jadhav Memorial Foundation (AJMF) is founded in Pune to honor Anish's legacy and commitment to empowering youth through education.",
    icon: '💡'
  },
  {
    year: 2017,
    title: "Skilling Institute Inaugurated",
    description: "The state-of-the-art Skilling Institute in Lohegaon, Pune, opens its doors, offering the first cohorts of vocational training.",
    icon: '🏫'
  },
  {
    year: 2019,
    title: "Partnership with NavGurukul Begins",
    description: "AJMF forms a strategic collaboration with NavGurukul to launch the fully residential, zero-fee software programming course for underprivileged girls.",
    icon: '🤝'
  },
  {
    year: 2021,
    title: "Launch of School of Business (SOB)",
    description: "Recognizing the need for diverse skills, the School of Business is established to train students in digital marketing and entrepreneurial finance.",
    icon: '📈'
  },
  {
    year: 2023,
    title: "150th Student Placed",
    description: "AJMF celebrates a major milestone: placing over 150 graduates in secure, high-dignity jobs across the technology and business sectors.",
    icon: '🎓'
  },
];

const StoryTimeline = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <SectionHeader 
        title="Our Milestones of Impact" 
        subTitle="The Journey of the Foundation" 
        alignment="center" 
      />

      <div className="relative mt-12">
        
        {/* Central Vertical Line (The Spine of the Timeline) */}
        <div className="hidden md:block absolute left-1/2 w-0.5 bg-ajmf-blue h-full -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`mb-8 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
            >
              
              {/* Content Block (Left or Right) */}
              <div className={`w-full md:w-1/2 p-4 ${isEven ? 'text-left md:pl-20' : 'text-left md:pr-20'}`}>
                <div className={`bg-white p-6 rounded-lg shadow-xl border-t-4 border-ajmf-saffron transition-all duration-300 hover:shadow-2xl animate-slide-in`}>
                  <h3 className="text-2xl font-bold text-ajmf-red mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-2">{item.year}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>

              {/* Year Marker (Only visible on mobile/small screens) */}
              <div className="md:hidden w-1/4 text-center text-ajmf-red font-bold">{item.year}</div>

              {/* Timeline Indicator (The Dot on the Spine) */}
              <div className="hidden md:flex w-12 h-12 absolute left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white bg-ajmf-blue items-center justify-center text-xl text-white shadow-lg">
                {item.icon}
              </div>

              {/* Spacer (To push content to the opposite side) */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTimeline;