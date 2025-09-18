import React from 'react';

const Programs = () => {
  return (
    <section id="programs" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Our Programs</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          We aim to equip youth with the capabilities that industries truly need through hands-on training and a supportive learning environment.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Program Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600">Software Engineering</h3>
            <p className="mt-4 text-gray-600">
              We provide free residential training in front-end and back-end development, including hands-on projects with modern technologies.
            </p>
          </div>
          {/* Program Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600">Digital Marketing</h3>
            <p className="mt-4 text-gray-600">
              Equipping students with the skills for aspirational jobs in the digital world, preparing them for a dynamic career.
            </p>
          </div>
          {/* Program Card 3 */}
          <div className="rounded-xl bg-white p-6 shadow-lg transition hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-600">Life Skills Training</h3>
            <p className="mt-4 text-gray-600">
              Our curriculum includes essential soft skills like English speaking, teamwork, emotional intelligence, and leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;