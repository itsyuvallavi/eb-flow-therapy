import { GraduationCap, Heart, Users, Sparkles } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-brown-700 mb-4">Hello, I'm Dr. Sarah</h2>
          <div className="w-24 h-1 bg-brown-300 mx-auto mb-8"></div>
          <p className="text-xl text-brown-600 leading-relaxed max-w-3xl mx-auto">
            As a Licensed Marriage and Family Therapist in Los Angeles, I create a space where 
            transformation isn't just possible — it's inevitable.
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16 hover:shadow-lg transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-brown-500 leading-relaxed">
                With a passion for human connection and years of experience, I guide individuals and couples 
                through their unique journeys of growth and healing.
              </p>
              <p className="text-lg text-brown-500 leading-relaxed italic">
                "I believe therapy is a dance of two minds meeting in a space of acceptance and possibility. 
                Together, we'll uncover patterns that no longer serve you and craft new pathways toward your 
                best life — using methods I not only teach but live by."
              </p>
            </div>
            <div className="bg-beige-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Sparkles className="w-5 h-5 text-brown-400 mr-2" />
                <h4 className="text-lg font-medium text-brown-600">Beyond the Office</h4>
              </div>
              <p className="text-brown-500 mb-4">When I'm not in session, you'll find me:</p>
              <ul className="space-y-2 text-brown-500">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Hiking trails with my dog</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Lost in a good book</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Playing video games</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>Exploring new places</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience and Focus Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-102 duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-brown-400 mr-3" />
              <h3 className="text-2xl font-light text-brown-600">Experience</h3>
            </div>
            <ul className="space-y-4 text-brown-500">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                <span>Masters in Marriage and Family Therapy, Alliant International University</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                <span>Extensive experience in treatment centers, schools, and private practice</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2"></span>
                <span>Specialized training in DBT, CBT, CBSST, ERP, and ACT</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-102 duration-300">
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-brown-400 mr-3" />
              <h3 className="text-2xl font-light text-brown-600">Areas of Focus</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Anxiety & OCD",
                "Relationship Dynamics",
                "Cultural Transition",
                "Life Changes",
                "Stress Management",
                "Personal Growth",
                "Sex Positivity",
                "Family Systems"
              ].map((specialty, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-brown-500"
                >
                  <span className="w-1.5 h-1.5 bg-brown-400 rounded-full"></span>
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* License Info */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-brown-500">Licensed Marriage and Family Therapist</p>
          <p className="text-brown-400">CA License #127577</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;