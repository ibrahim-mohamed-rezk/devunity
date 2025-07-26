"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Code,
  Users,
  Zap,
  Clock,
} from "lucide-react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const requestBody = {
        full_name: formData.name,
        email: formData.email,
        project_type: formData.project,
        message: formData.message,
      };
  
      console.log("Submitting form data:", requestBody);
  
      const response = await axios.post(
        "https://test-domain-devunity.com/api/v1/contact",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          withCredentials: false, // بدل credentials: 'include'
        }
      );
  
      console.log("Success response:", response.data);
      setSubmitted(true);
  
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          project: "",
          message: "",
        });
      }, 3000);
  
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
  
      const errorMessage =
         "Unknown error";
  
      if (errorMessage.includes("CSRF token expired")) {
        alert(
          "Session expired. Please refresh the page and try submitting the form again."
        );
      } else {
        alert(
          "Failed to submit form. Please try again or contact us directly at info@devunity.co"
        );
      }
  
      return { error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-blue-50"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Ready to collaborate
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Let&apos;s Build Something</span>
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into powerful digital solutions? Our
            team of expert developers is here to bring your vision to life with
            cutting-edge technology and innovative approaches.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-3 px-6 py-3 bg-white shadow-lg rounded-full border border-gray-100">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <span className="font-medium text-gray-700">
                24h Response Time
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white shadow-lg rounded-full border border-gray-100">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-700">
                100+ Projects Delivered
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white shadow-lg rounded-full border border-gray-100">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium text-gray-700">
                Agile Development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Form */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Get Started
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Start Your Project
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tell us about your project and we&apos;ll get back to you within 24
                  hours with a detailed proposal tailored to your needs.
                </p>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-12 text-center shadow-xl">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-600 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We&apos;ll get back to you within 24 hours with a detailed
                    proposal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300 text-gray-900 shadow-sm hover:shadow-md"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300 text-gray-900 shadow-sm hover:shadow-md"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300 text-gray-900 shadow-sm hover:shadow-md"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-700">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-500 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all duration-300 resize-none text-gray-900 shadow-sm hover:shadow-md"
                      placeholder="Tell us about your project goals, requirements, timeline, and any specific technologies you have in mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="pt-6">
                {/* Why Choose Us Section */}
                <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-10 rounded-3xl shadow-xl mt-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Why Choose Us
                    </h3>
                  </div>
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Client-Centric Approach",
                        desc: "We listen, understand, and tailor solutions that align with your vision.",
                      },
                      {
                        title: "Transparent Process",
                        desc: "We keep you in the loop at every stage to ensure trust and clarity.",
                      },
                      {
                        title: "Experienced Team",
                        desc: "Skilled professionals with a proven track record in delivering scalable tech.",
                      },
                      {
                        title: "Ongoing Support",
                        desc: "We're here post-launch to help you scale and grow with confidence.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold rounded-full shadow-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-10 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Get In Touch
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                      <p className="text-gray-600 text-lg">info@devunity.co</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                      <p className="text-gray-600 text-lg">+201031377515</p>
                      <p className="text-sm text-gray-500">
                        Mon-Fri 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
                      <p className="text-gray-600 text-lg">New Damietta</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-10 rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Services
                  </h3>
                </div>
                <div className="grid gap-6">
                  {[
                    {
                      icon: Code,
                      title: "Web Development",
                      desc: "Full-stack web applications",
                      color: "green",
                    },
                    {
                      icon: Phone,
                      title: "Mobile Apps",
                      desc: "iOS & Android development",
                      color: "blue",
                    },
                    {
                      icon: Zap,
                      title: "API Integration",
                      desc: "Third-party integrations",
                      color: "purple",
                    },
                    {
                      icon: Users,
                      title: "Team Augmentation",
                      desc: "Dedicated developers",
                      color: "orange",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                      <div
                        className={`w-12 h-12 bg-${service.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <service.icon
                          className={`w-6 h-6 text-${service.color}-600`}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white border border-emerald-200 p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Our Process
                  </h3>
                </div>

                <div className="space-y-8 relative">
                  {[
                    "Discovery & Planning",
                    "Design & Prototyping",
                    "Development & Testing",
                    "Deployment & Support",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 relative group"
                    >
                      {/* Line Connector */}
                      {index < 3 && (
                        <div className="absolute left-5 top-12 h-full w-0.5 bg-emerald-200 z-0" />
                      )}

                      {/* Step Circle */}
                      <div className="z-10 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Step Title */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">
                          {step}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1 max-w-md">
                          {/* Optional: Add descriptions here for each step if needed */}
                          {
                            [
                              "Understanding your needs and defining project scope.",
                              "Crafting user-centric designs and interactive prototypes.",
                              "Bringing ideas to life through clean, efficient code.",
                              "Launching your product and providing ongoing support.",
                            ][index]
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
