// src/pages/Community.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Join the AJMF Family" subTitle="Community, Alumni, & Events" alignment="center" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-ajmf-blue mb-4">Success Stories & Alumni</h2>
          <p className="text-gray-600">
            Our alumni network is a testament to the transformative power of skills. We regularly feature success stories, testimonials, and career progression updates from our graduates.
          </p>
          <button className="mt-4 px-6 py-3 bg-ajmf-saffron text-white rounded-lg hover:bg-opacity-90 transition shadow-md">
            View Success Stories &rarr;
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-ajmf-blue mb-4">Events & Workshops</h2>
          <p className="text-gray-600">
            From technical workshops to motivational talks and annual graduation ceremonies, our community calendar is always active.
          </p>
          <button className="mt-4 px-6 py-3 bg-ajmf-blue text-white rounded-lg hover:bg-opacity-90 transition shadow-md">
            See Upcoming Events &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;