import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Us</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray-700">
          <p>
            The Anish Jadhav Memorial Foundation (AJMF) is a non-profit, non-governmental organization founded in memory of Anish, the only child of Brigadier Kishor and Mrs. Neeta Jadhav. Anish, who worked as a core technical team member at Nikon India Ltd., inspired his parents to establish a foundation dedicated to a cause close to his heart: empowering underprivileged youth with skills to earn their livelihood.
          </p>
          <p>
            Our mission is to skill underprivileged youth in various demanding job roles, supporting them to earn their livelihood and achieve financial independence. We aim to bridge the significant skills gap in India by providing relevant, high-quality training.
          </p>
          <a href="#campus" className="inline-block font-semibold text-blue-600 hover:text-blue-800">
            Read More About Our Campus & Facilities →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;