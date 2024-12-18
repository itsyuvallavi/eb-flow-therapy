import { useState, useNa } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Heart,
  Users,
  Sparkles,
  Shield,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import background from "../assets/background.jpg";
import OurTeam from "./OurTeam";

const Home = () => {
  const navigate = useNavigate();
  // Add this state declaration
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  const scrollToWelcome = () => {
    document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}

      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
        </div>

        {/* Content - Centered both vertically and horizontally */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Your Journey to Wellness Begins Here
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light mb-8">
            A collective of experienced therapists dedicated to your growth and
            healing
          </p>
          <button
            onClick={() => navigate("/our-team")}
            className="px-8 py-3 bg-white text-brown-600 rounded-full hover:bg-beige-100 transition-colors duration-300"
          >
            Meet Our Therapists
          </button>
        </div>

        <button
          onClick={scrollToWelcome}
          className="absolute bottom-8 -translate-x-1/2 text-brown-300 cursor-pointer animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown
            size={54}
            className="text-beige-500 hover:text-white transition-colors duration-300 stroke-2"
          />
        </button>
      </section>

      {/* Welcome Section */}
      <section
        className="py-20 bg-beige-50"
        id="welcome"
        style={{ scrollMarginTop: "100px" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-brown-700">
                Welcome to EB & Flow Marriage Therapy, Inc.
              </h2>
              <p className="text-lg text-brown-500 leading-relaxed">
                We understand that finding the right therapeutic support can
                feel overwhelming. Our practice brings together a diverse team
                of skilled therapists, each bringing their unique expertise and
                approach to support your individual needs.
              </p>
              <p className="text-lg text-brown-500 leading-relaxed">
                Whether you're seeking individual counseling, couples therapy,
                or family support, our collaborative approach ensures you find
                the right match for your journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-brown-400" />,
                  title: "Compassionate Care",
                  text: "Empathetic support in a safe space",
                },
                {
                  icon: <Users className="w-8 h-8 text-brown-400" />,
                  title: "Diverse Expertise",
                  text: "Specialized therapists for your needs",
                },
                {
                  icon: <Shield className="w-8 h-8 text-brown-400" />,
                  title: "Safe Space",
                  text: "Confidential and judgment-free environment",
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-brown-400" />,
                  title: "Personal Growth",
                  text: "Tools for lasting positive change",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-brown-600 font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brown-500 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-brown-700 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-brown-500 max-w-2xl mx-auto">
              Comprehensive therapeutic support for individuals, couples, and
              families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Therapy",
                description:
                  "Personalized support for personal growth, anxiety, depression, and life transitions.",
              },
              {
                title: "Couples Counseling",
                description:
                  "Strengthen your relationship through improved communication and understanding.",
              },
              {
                title: "Family Therapy",
                description:
                  "Build stronger family bonds and navigate challenges together.",
              },
              {
                title: "Anxiety Treatment",
                description:
                  "Evidence-based approaches to managing anxiety and building resilience.",
              },
              {
                title: "Cultural Transition",
                description:
                  "Support for navigating cultural identity and adjustment challenges.",
              },
              {
                title: "Trauma Recovery",
                description:
                  "Gentle, trauma-informed care for healing and growth.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-beige-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium text-brown-600 mb-3">
                  {service.title}
                </h3>
                <p className="text-brown-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update your CTA section */}
      <section className="py-12 bg-beige-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-brown-700 mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-brown-500 mb-8">
            Schedule a complimentary 15-minute consultation to find the right
            therapist for you.
          </p>
        </div>
      </section>
      <section id="contact" className="py-24 bg-beige-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-brown-700 mb-4">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-brown-300 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="mb-8">
                <p className="text-brown-500 text-lg mb-2">
                  I welcome you to reach out to schedule a free 15 min
                  consultation to see if I am the right person to support you on
                  your journey.
                </p>
                <p className="text-brown-500">
                  *Waitlist open and currently accepting new clients!
                </p>
                <p className="text-brown-400 text-sm mt-2">
                  Please do not add confidential information to this form.
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg bg-beige-100 border border-beige-200 focus:outline-none focus:border-brown-300 text-brown-600 placeholder-brown-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-beige-100 border border-beige-200 focus:outline-none focus:border-brown-300 text-brown-600 placeholder-brown-400"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg bg-beige-100 border border-beige-200 focus:outline-none focus:border-brown-300 text-brown-600 placeholder-brown-400"
                />
                <textarea
                  placeholder="Type your message here..."
                  rows={6}
                  className="w-full p-3 rounded-lg bg-beige-100 border border-beige-200 focus:outline-none focus:border-brown-300 text-brown-600 placeholder-brown-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-brown-500 text-white rounded-lg hover:bg-brown-600 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-brown-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-brown-600 mb-1">
                        PHONE
                      </h3>
                      <p className="text-brown-500">(424) 431-1122</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brown-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-brown-600 mb-1">
                        ADDRESS
                      </h3>
                      <p className="text-brown-500">Los Angeles, CA 90016</p>
                      <p className="text-brown-400 text-sm mt-1">
                        *Telehealth only at this time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brown-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-brown-600 mb-1">
                        E-MAIL
                      </h3>
                      <p className="text-brown-500">elinorlmft@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-brown-400 hover:text-brown-600 transition-colors duration-300"
                >
                  <img
                    src="/path-to-instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="text-brown-400 hover:text-brown-600 transition-colors duration-300"
                >
                  <img
                    src="/path-to-linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="text-brown-400 hover:text-brown-600 transition-colors duration-300"
                >
                  <img
                    src="/path-to-facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="text-brown-400 hover:text-brown-600 transition-colors duration-300"
                >
                  <img
                    src="/path-to-twitter.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
