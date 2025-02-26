
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-[#F1F0FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a team of passionate individuals dedicated to creating
            meaningful digital experiences that inspire and innovate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Innovation",
              description:
                "Pushing boundaries and exploring new possibilities in digital design and development.",
            },
            {
              title: "Excellence",
              description:
                "Committed to delivering the highest quality solutions that exceed expectations.",
            },
            {
              title: "Collaboration",
              description:
                "Working together to bring ideas to life through effective partnership.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              <h3 className="font-display text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
