
import { useTranslation } from 'react-i18next';
import { BarChart3, Zap, Users } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: t('about.innovation.title'),
      description: t('about.innovation.description'),
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-secondary" />,
      title: t('about.excellence.title'),
      description: t('about.excellence.description'),
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: t('about.collaboration.title'),
      description: t('about.collaboration.description'),
    },
  ];
  
  return (
    <section className="h-screen flex items-center bg-gradient-to-b from-white to-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">{t('about.header')}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-secondary/20 transition-all duration-300 shadow-card hover:shadow-xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="p-4 rounded-2xl bg-secondary/5 inline-block mb-6 group-hover:bg-secondary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4 text-gray-900 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
