
import { useTranslation } from 'react-i18next';
import { BarChart3, Zap, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: t('about.innovation.title'),
      description: t('about.innovation.description'),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: t('about.excellence.title'),
      description: t('about.excellence.description'),
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('about.collaboration.title'),
      description: t('about.collaboration.description'),
    },
  ];
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">{t('about.header')}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="p-3 rounded-xl bg-primary/10 inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4 text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
