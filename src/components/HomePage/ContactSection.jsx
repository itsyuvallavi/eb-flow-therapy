import { useState, useRef, useEffect } from "react";
import { Phone, MapPin, Mail, Users, Leaf, Heart, Stars } from "lucide-react";
import {
  useIntersectionObserver,
  FloatingIcon,
} from "../modal/useIntersectionObserver";
import { sendContactEmails } from "../../services/emailService.js";
import Popup from "../Popup.jsx";
import lmft from "../../assets/lmft.png";

const therapists = [
  { id: "general", name: "General Inquiry", email: "elinorlmft@gmail.com" },
  { id: "elinor", name: "Elinor Bawnik, LMFT", email: "elinorlmft@gmail.com" },
  // Add more therapists here in the future if needed
];

const ContactSection = () => {
  const [selectedTherapist, setSelectedTherapist] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    console.log("Popup state changed:", popup);
  }, [popup]);

  const formRef = useRef(null);
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [formRef2, isFormVisible] = useIntersectionObserver();
  const [infoRef, isInfoVisible] = useIntersectionObserver();

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
    <section className="relative py-10 overflow-hidden bg-gradient-to-b from-mountain-peak/20 to-mountain-shadow/50">
      {/* Show popup if exists */}
      {popup && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup(null)}
        />
      )}

      {/* Decorative overlay */}
      <div className="absolute inset-0" />

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
        ></div>

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
                <p className="text-mountain-terra font-medium">
                  *Currently accepting new clients
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
                      required
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
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
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
                  disabled={isSubmitting}
                  className="w-full py-4 bg-mountain-terra text-white rounded-lg 
                    hover:bg-mountain-terra/90 transition-all duration-300 transform hover:scale-[1.02] 
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
                  { Icon: Mail, title: "Email", text: "elinorlmft@gmail.com" },
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

            {/* LMFT Logo */}
            <div className="bg-white/10 rounded-2xl p-6">
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
  );
};

export default ContactSection;
