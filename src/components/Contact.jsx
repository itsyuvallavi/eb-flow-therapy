import { Mail, Phone, MapPin, Users, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import SEOHead from "./SEO/SEOHead";
import { generateBreadcrumbSchema } from "./SEO/StructuredData.jsx";
import { getSEOData } from "../data/seoData";
import { useIntersectionObserver } from "../components/modal/useIntersectionObserver";
import { sendContactEmails } from "../services/emailService";
import Popup from "./Popup";
import { useEffect } from "react";
import lmft from "../assets/lmft.png";
import floralPattern from "../assets/floral-pattern.jpg";

const therapists = [
  { id: "general", name: "General Inquiry", email: "elinorlmft@gmail.com" },
  { id: "elinor", name: "Elinor Bawnik, LMFT", email: "elinorlmft@gmail.com" },
  { id: "megan", name: "Megan Adamson, AMFT", email: "elinorlmft@gmail.com" },
];

const Contact = () => {
  const [selectedTherapist, setSelectedTherapist] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);

  // Add useEffect here, outside of handleSubmit
  useEffect(() => {
    console.log("Popup state changed:", popup);
  }, [popup]);

  const formRef = useRef(null);
  const [formRef2, isFormVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();

  const seoData = getSEOData('contact');
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ];
  const structuredData = generateBreadcrumbSchema(breadcrumbs);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setSelectedTherapist("general");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submission started:", {
      selectedTherapist,
      formData,
    });

    try {
      const selectedTherapistData = therapists.find(
        (t) => t.id === selectedTherapist
      );
      const result = await sendContactEmails({
        ...formData,
        selectedTherapist: selectedTherapistData?.name || "General Inquiry",
      });

      console.log("Email service response:", result);

      if (result.success) {
        setPopup({
          type: "success",
          message:
            "Thank you for reaching out! Your message has been sent successfully. We will get back to you within 24 hours.",
        });
        resetForm();
      } else {
        setPopup({
          type: "error",
          message:
            result.message ||
            "There was an error sending your message. Please try again or contact us directly at (424) 431-1122.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setPopup({
        type: "error",
        message:
          "There was an error sending your message. Please try again or contact us directly at (424) 431-1122.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        structuredData={structuredData}
      />
      {/* Show popup if exists */}
      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}
      
      <div className="min-h-screen">
        {/* Hero Section - matching other pages */}
        <section className="relative px-6 py-16 overflow-hidden" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          {/* Background Pattern with fade effect - same as other pages */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${floralPattern})`,
              backgroundPosition: 'center top',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6" style={{ paddingTop: '8rem' }}>
            <h1 className="text-4xl md:text-5xl font-light text-text-primary">
              Contact Us
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to take the first step? Reach out for a free consultation
              and let&apos;s explore how we can support your journey together.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="relative px-6 pt-24 pb-16" style={{ backgroundColor: 'rgba(244, 194, 161, 0.1)' }}>
          <div className="max-w-7xl mx-auto">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="mb-8">
                  <p className="text-text-primary/90 text-lg mb-2">
                    Schedule a free 15-minute consultation to see if we&apos;re the
                    right fit for your journey.
                  </p>
                  <p className="text-primary-sage font-medium">
                    *Currently accepting new clients
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Therapist Selection */}
                  <div className="group">
                    <label
                      htmlFor="therapist"
                      className="block text-text-primary/90 mb-2 text-sm"
                    >
                      Select Recipient
                    </label>
                    <div className="relative">
                      <select
                        id="therapist"
                        value={selectedTherapist}
                        onChange={(e) => setSelectedTherapist(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-primary-sage/20 
                          text-text-primary placeholder-mountain-shadow/40
                          focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                          transition-all group-hover:border-mountain-shadow/40 appearance-none pr-10"
                      >
                        {therapists.map((therapist) => (
                          <option
                            key={therapist.id}
                            value={therapist.id}
                            className="bg-white text-text-primary"
                          >
                            {therapist.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-primary/50 pointer-events-none flex items-center">
                        <Users className="w-5 h-5 mr-1" />
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Input Fields */}
                  {["name", "email", "phone"].map((field) => (
                    <div key={field} className="group">
                      <label
                        htmlFor={field}
                        className="block text-text-primary/90 mb-2 text-sm capitalize"
                      >
                        {field === "phone" ? "Phone Number" : `Your ${field}`}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        required
                        placeholder={field === "phone" ? "(123) 456-7890" : ""}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-primary-sage/20 
                          text-text-primary placeholder-mountain-shadow/40
                          focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                          transition-all group-hover:border-mountain-shadow/40"
                      />
                    </div>
                  ))}

                  {/* Message Input */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-text-primary/90 mb-2 text-sm"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us a bit about what brings you here..."
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-mountain-shadow/20 
                        text-text-primary placeholder-mountain-shadow/40
                        focus:outline-none focus:ring-2 focus:ring-mountain-terra/30 focus:border-mountain-terra/50 
                        transition-all group-hover:border-mountain-shadow/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary-sage text-white rounded-lg 
                      hover:bg-primary-sage/90 transition-all duration-300 transform hover:scale-[1.02] 
                      hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="space-y-8">
                  {[
                    { Icon: Phone, title: "Phone", text: "(424) 431-1122" },
                    {
                      Icon: MapPin,
                      title: "Location",
                      text: "Los Angeles, CA",
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
                      className="group flex items-start space-x-4 p-2 rounded-lg hover:bg-primary-sage/10 transition-all"
                    >
                      <Icon className="w-6 h-6 text-primary-sage mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h3 className="text-lg font-medium text-text-primary mb-1">
                          {title}
                        </h3>
                        <p className="text-text-primary/80">{text}</p>
                        {subtext && (
                          <p className="text-text-primary/60 text-sm mt-1">
                            {subtext}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LMFT Logo */}
              <div className="bg-white/90 rounded-2xl p-4">
                <img
                  src={lmft}
                  alt="Decorative left image"
                  className="w-80  mx-auto rounded-lg object-contain"
                />
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;