
const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our company extraordinary.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Ahmad Akbar",
              role: "Founder & CEO",
              image: "https://source.unsplash.com/200x200/?ceo,business",
            },
            {
              name: "Fathul Ilham",
              role: "Technical Director",
              image: "https://source.unsplash.com/200x200/?developer,technology",
            },
            {
              name: "Hidayat",
              role: "Creative Director",
              image: "https://source.unsplash.com/200x200/?designer,creative",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#9003fc]/10 transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-[#9003fc]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
