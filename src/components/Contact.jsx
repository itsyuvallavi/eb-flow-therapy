import { Mail, Phone, MapPin, Users } from "lucide-react";
import { useState, useRef } from "react";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import background from "../assets/tree.png";

const therapists = [
  { id: "general", name: "General Inquiry" },
  { id: "elinor", name: "Elinor Bawnik, LMFT", email: "elinorlmft@gmail.com" },
  { id: "sarah", name: "Dr. Sarah Chen", email: "sarah.chen@example.com" },
  {
    id: "michael",
    name: "Michael Rodriguez, LMFT",
    email: "michael.r@example.com",
  },
  { id: "emma", name: "Emma Wilson, PhD", email: "emma.w@example.com" },
];

const Contact = () => {
  const [selectedTherapist, setSelectedTherapist] = useState("general");
  const formRef = useRef(null);
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [formRef2, isFormVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", selectedTherapist);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-mountain-peak/20 to-mountain-shadow/50">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1200px",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div
        className="relative"
        style={{ paddingTop: "14rem", paddingBottom: "7rem" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div
            ref={titleRef}
            className={`text-center mb-16 transform transition-all duration-700
            ${
              isTitleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <h1 className="relative text-5xl font-light text-mountain-shadow">
                <span className="block text-sm uppercase tracking-wider text-mountain-terra/80 mb-2">
                  Welcome to Our Practice
                </span>
                Get in Touch
              </h1>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-0 right-0 h-[1px] top-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
              <p className="text-lg text-mountain-shadow/80 py-6">
                Ready to take the first step? Reach out for a free consultation
                and let's explore how we can support your journey together.
              </p>
              <div className="absolute left-0 right-0 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-mountain-shadow/20 to-transparent" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={formRef2}
              className={`transform transition-all duration-700 delay-200
              ${
                isFormVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="mb-8">
                  <p className="text-mountain-shadow/90 text-lg mb-2">
                    Schedule a free 15-minute consultation to see if we're the
                    right fit for your journey.
                  </p>
                  <p className="text-mountain-terra font-medium">
                    *Currently accepting new clients
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Therapist Selection Dropdown */}
                  <div className="group">
                    <label
                      htmlFor="therapist"
                      className="block text-mountain-shadow/90 mb-2 text-sm"
                    >
                      Select Recipient
                    </label>
                    <div className="relative">
                      <select
                        id="therapist"
                        value={selectedTherapist}
                        onChange={(e) => setSelectedTherapist(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-mountain-shadow/20 
                        text-mountain-shadow placeholder-mountain-shadow/40
                        focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                        transition-all group-hover:border-mountain-shadow/40 appearance-none"
                      >
                        {therapists.map((therapist) => (
                          <option
                            key={therapist.id}
                            value={therapist.id}
                            className="bg-white text-mountain-shadow"
                          >
                            {therapist.name}
                          </option>
                        ))}
                      </select>
                      <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-mountain-shadow/50 pointer-events-none" />
                    </div>
                  </div>

                  {/* Input Fields */}
                  {["name", "email", "phone"].map((field) => (
                    <div key={field} className="group">
                      <label
                        htmlFor={field}
                        className="block text-mountain-shadow/90 mb-2 text-sm capitalize"
                      >
                        {field === "phone" ? "Phone Number" : `Your ${field}`}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        placeholder={field === "phone" ? "(123) 456-7890" : ""}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-mountain-shadow/20 
                        text-mountain-shadow placeholder-mountain-shadow/40
                        focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                        transition-all group-hover:border-mountain-shadow/40"
                      />
                    </div>
                  ))}

                  {/* Message Input */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-mountain-shadow/90 mb-2 text-sm"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us a bit about what brings you here..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-mountain-shadow/20 
                      text-mountain-shadow placeholder-mountain-shadow/40
                      focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                      transition-all group-hover:border-mountain-shadow/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-mountain-terra text-white rounded-lg 
                    hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-[1.02] 
                    hover:shadow-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              ref={infoRef}
              className={`space-y-6 transform transition-all duration-700 delay-400
              ${
                isInfoVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="space-y-8">
                  {[
                    { Icon: Phone, title: "Phone", text: "(424) 431-1122" },
                    {
                      Icon: MapPin,
                      title: "Location",
                      text: "Los Angeles, CA 90016",
                      subtext: "*Telehealth only at this time",
                    },
                    {
                      Icon: Mail,
                      title: "Email",
                      text: "elinorlmft@gmail.com",
                    },
                  ].map(({ Icon, title, text, subtext }) => (
                    <div
                      key={title}
                      className="group flex items-start space-x-4 p-2 rounded-lg hover:bg-white/5 transition-all"
                    >
                      <Icon className="w-6 h-6 text-mountain-terra mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h3 className="text-lg font-medium text-mountain-shadow mb-1">
                          {title}
                        </h3>
                        <p className="text-mountain-shadow/80">{text}</p>
                        {subtext && (
                          <p className="text-mountain-shadow/60 text-sm mt-1">
                            {subtext}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-medium text-mountain-shadow mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-mountain-shadow/80">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
