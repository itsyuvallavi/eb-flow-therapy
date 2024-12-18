import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-beige-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-brown-700 mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-brown-300 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-brown-500 text-lg mb-2">
                I welcome you to reach out to schedule a free 15 min consultation
                to see if I am the right person to support you on your journey.
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
                    <h3 className="text-lg font-medium text-brown-600 mb-1">PHONE</h3>
                    <p className="text-brown-500">(424) 431-1122</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-brown-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-brown-600 mb-1">ADDRESS</h3>
                    <p className="text-brown-500">Los Angeles, CA 90016</p>
                    <p className="text-brown-400 text-sm mt-1">*Telehealth only at this time</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-brown-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-brown-600 mb-1">E-MAIL</h3>
                    <p className="text-brown-500">elinorlmft@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-brown-400 hover:text-brown-600 transition-colors duration-300">
                <img src="/path-to-instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-brown-400 hover:text-brown-600 transition-colors duration-300">
                <img src="/path-to-linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="text-brown-400 hover:text-brown-600 transition-colors duration-300">
                <img src="/path-to-facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="text-brown-400 hover:text-brown-600 transition-colors duration-300">
                <img src="/path-to-twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;