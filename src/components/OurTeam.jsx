import { Link } from 'react-router-dom';
import portrait from "../assets/portrait.png";
import woman from "../assets/woman.jpg";
import therapistsData from '../data/therapists.json';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 'elinor',
      name: 'Elinor Bawnik',
      title: 'Lead Therapist, LMFT',
      image: portrait,
      specialties: ['Individual Therapy', 'Couples Counseling', 'Anxiety & OCD', 'Cultural Transitions'],
      languages: ['English', 'Hebrew'],
      featured: true,
      shortBio: 'With years of experience in individual and couples therapy, I create a safe space for growth and healing through evidence-based practices and genuine human connection.'
    },
    {
      id: 'michael',
      name: 'Dr. Michael Chen',
      title: 'Therapist, LMFT',
      image: woman,
      specialties: ['Family Therapy', 'Trauma Recovery', 'ADHD', 'Depression'],
      languages: ['English', 'Mandarin'],
      featured: false,
      shortBio: 'Specializing in family dynamics and trauma recovery, helping clients find strength through challenging life transitions.'
    }
  ];

  return (
    <div className="pt-16 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-brown-700 mb-4">Our Team</h1>
          <p className="text-lg text-brown-500 max-w-2xl mx-auto">
            Meet our dedicated team of experienced therapists, each bringing unique expertise 
            to support your journey to wellness.
          </p>
        </div>

        {/* Featured Therapist */}
        {teamMembers.filter(member => member.featured).map(therapist => (
          <div key={therapist.id} className="mb-20">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-[550px] overflow-hidden">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-light text-brown-700 mb-4">{therapist.name}</h2>
                  <p className="text-xl text-brown-500 mb-6">{therapist.title}</p>
                  <p className="text-brown-500 mb-6">{therapist.shortBio}</p>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-brown-600 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {therapist.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-beige-100 text-brown-500 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-brown-600 mb-2">Languages</h3>
                    <p className="text-brown-500">{therapist.languages.join(' • ')}</p>
                  </div>
                  <Link
                    to={`/therapists/${therapist.id}`}
                    className="inline-block px-6 py-3 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300 text-center"
                  >
                    View Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.filter(member => !member.featured).map(therapist => (
            <div key={therapist.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-[300px] overflow-hidden">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-medium text-brown-700 mb-2">{therapist.name}</h2>
                <p className="text-brown-500 mb-4">{therapist.title}</p>
                <p className="text-brown-500 mb-4 line-clamp-3">{therapist.shortBio}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.slice(0, 3).map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-beige-50 text-brown-500 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/therapists/${therapist.id}`}
                  className="inline-block w-full px-4 py-2 bg-brown-500 text-white rounded-full hover:bg-brown-600 transition-colors duration-300 text-center"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;