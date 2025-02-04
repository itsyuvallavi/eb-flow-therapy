// components/sections/WelcomeSection.jsx
import { Heart, Users, Shield, Sparkles, Leaf, Stars } from "lucide-react";
import { useIntersectionObserver, FloatingIcon } from "../modal/useIntersectionObserver";

const FeatureCard = ({ icon, title, text, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl 
        transition-all duration-300 hover:-translate-y-1 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-4 transform transition-transform group-hover:scale-110 text-mountain-terra">
        {icon}
      </div>
      <h3 className="text-mountain-shadow font-medium mb-2 group-hover:text-mountain-terra transition-colors text-center">
        {title}
      </h3>
      <p className="text-mountain-shadow/80 text-sm text-center">{text}</p>
    </div>
  );
};

const WelcomeSection = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [textRef, isTextVisible] = useIntersectionObserver();

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      text: "Empathetic support from caring professionals",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Expertise",
      text: "Specialized therapists for your needs",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe Space",
      text: "Confidential and judgment-free environment",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Personal Growth",
      text: "Tools for lasting positive change",
    },
  ];

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-b from-mountain-forest/20 to-mountain-peak/20"
      id="welcome"
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0" />
      
      {/* Floating background elements */}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              ref={titleRef}
              className={`transform transition-all duration-700
                ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h2 className="text-4xl text-light text-mountain-shadow">
                Welcome to{" "}
                <span className="text-mountain-terra font-medium">EB & Flow</span>{" "}
                Marriage Therapy, Inc.
              </h2>
              <div className="w-20 h-1 bg-mountain-shadow/30 mt-4" />
            </div>
            
            <div
              ref={textRef}
              className={`transform transition-all duration-700 delay-200
                ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <p className="text-lg text-mountain-shadow/90 leading-relaxed">
                We understand that finding the right therapeutic support can feel
                overwhelming. Our practice brings together a diverse team of
                skilled therapists, each bringing their unique expertise and
                approach to support your individual needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                delay={index * 100 + 400} // Staggered animation delay
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;