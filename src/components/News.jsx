import React from 'react';

const News = () => {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600">News & Updates</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* News Article 1 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600">A Year of Transformative Collaboration with NavGurukul</h3>
            <p className="mt-4 text-gray-600">
              On behalf of the Anish Jadhav Memorial Foundation, we thank everyone on the eve of the completion of an eventful and satisfying year of collaboration with NavGurukul. Our shared vision is to bring social change by providing free residential training to 150 girl students...
            </p>
            <a href="#" className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800">
              Read More →
            </a>
          </div>
          {/* News Article 2 */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600">Empowering Youth on World Youth Skills Day</h3>
            <p className="mt-4 text-gray-600">
              On World Youth Skills Day, we recognize the immense potential of young people as agents of peace. We re-commit to providing them with the skills and opportunities they need to address challenges and contribute to a peaceful, prosperous, and sustainable future.
            </p>
            <a href="#" className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;