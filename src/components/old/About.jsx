import {
  GraduationCap,
  Heart,
  Sparkles,
  Users,
  Brain,
  Compass,
} from "lucide-react";
import portrait from "../assets/portrait.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-brown-700 mb-4">
            A Space for Growth & Healing
          </h2>
          <div className="w-24 h-1 bg-brown-300 mx-auto mb-8"></div>
        </div>

        {/* Portrait and Welcome */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[600px]">
            <img
              src={portrait}
              alt="Welcoming therapy office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brown-600 mb-4">
                Welcome
              </h3>
              <p className="text-lg text-brown-500 leading-relaxed mb-6">
                What is keeping you from the life you want? Do you feel
                overwhelmed by emotions? Do you feel like anxiety and depression
                are taking over? Does it seem like your relationship is not
                where you want it to be? Does your family conflict seem too
                complicated to manage?
              </p>
              <p className="text-lg text-brown-500 leading-relaxed">
                Finding the right therapist is a crucial step in your journey.
                I'm here to provide a safe, supportive environment where you can
                explore these challenges and work towards meaningful change.
              </p>
            </div>

            <div className="bg-beige-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-brown-400 mr-2" />
                <h4 className="text-lg font-medium text-brown-600">
                  Getting Started
                </h4>
              </div>
              <p className="text-brown-500">
                Take the first step with a complimentary 15-minute consultation.
                This is your opportunity to ask questions and see if we're a
                good fit for your journey.
              </p>
            </div>
          </div>
        </div>

        {/* Approach & Philosophy */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center mb-6">
            <Brain className="w-6 h-6 text-brown-400 mr-3" />
            <h3 className="text-2xl font-light text-brown-600">My Approach</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-brown-500 leading-relaxed mb-6">
                I believe that therapy is the joining of two minds in a
                nonjudgmental accepting space, working towards the values and
                goals of one to reach their life best lived. Using radical
                genuineness, humor, and empathy, we'll work together to find
                patterns that may no longer serve you and develop skills that
                align with your needs and values.
              </p>
              <p className="text-lg text-brown-500 leading-relaxed">
                My approach combines evidence-based practices with genuine human
                connection. I utilize various therapeutic methods including DBT,
                CBT, CBSST, ERP, and ACT, tailoring our work to your specific
                needs and goals.
              </p>
            </div>
            <div className="bg-beige-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-brown-600 mb-4">
                Treatment Methods
              </h4>
              <ul className="grid grid-cols-2 gap-4 text-brown-500">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>DBT</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>CBT</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>CBSST</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>ERP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>ACT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 md:col-span-2">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-brown-400 mr-3" />
              <h3 className="text-2xl font-light text-brown-600">
                Experience & Expertise
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="font-medium text-brown-600 mb-3">
                    Education & Training
                  </p>
                  <ul className="space-y-2 text-brown-500">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                      <span>
                        Licensed Marriage and Family Therapist (CA #127577)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                      <span>
                        Masters in Marriage and Family Therapy, Alliant
                        International University
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                      <span>Bachelor's in Psychology, Reichman University</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-brown-600 mb-3">
                    Clinical Experience
                  </p>
                  <ul className="space-y-2 text-brown-500">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                      <span>Treatment centers and schools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                      <span>Private practice</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="font-medium text-brown-600 mb-3">
                  Areas of Focus
                </p>
                <ul className="space-y-2 text-brown-500">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Anxiety & OCD</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Relationship Dynamics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Cultural Transitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Life Changes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Stress Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Family Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                    <span>Sex Positivity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-beige-100 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Sparkles className="w-5 h-5 text-brown-400 mr-2" />
                <h4 className="text-lg font-medium text-brown-600">
                  Beyond Practice
                </h4>
              </div>
              <p className="text-brown-500 mb-4">Life outside the office:</p>
              <ul className="space-y-2 text-brown-500">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Trail hiking with my dog</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Gaming adventures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>World exploration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-brown-400">
                Services provided in English and Hebrew
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-lg text-brown-500 mb-6">
            Ready to begin your journey? Let's take the first step together.
          </p>
          <button className="px-8 py-3 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
