import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

function Support() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const faqs = [
    { question: "How do I contact support?", answer: "You can contact support through email or the contact form below." },
    { question: "What services do you provide?", answer: "We provide 24/7 customer support and technical assistance." },
    { question: "Where are you located?", answer: "Our main office is located in San Francisco, CA." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter your query before submitting.");
    } else {
      setError("");
      alert("Query submitted successfully!");
      setQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      {/* Navbar */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Homato
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/details_available" className="hover:text-yellow-300">Search</a>
            <a href="/get_parcel" className="hover:text-yellow-300">Take parcel</a>
            <a href="#" className="hover:text-yellow-300">Support</a>
            <a href="#" className="hover:text-yellow-300">Sign in</a>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md transition">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="support-container container mx-auto px-4 py-12">
        <h1 className="text-center text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
          Need any help? 👋
        </h1>
        <p className="text-center text-gray-400 mb-10">
          We're here to support you. Check out the FAQs below or reach out directly.
        </p>

        {/* FAQ Section */}
        <div className="faq-section space-y-4 mb-10">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-xl p-4 cursor-pointer hover:bg-purple-500/10 transition transform"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question font-medium text-purple-300">{faq.question}</div>
              {activeIndex === index && <div className="faq-answer text-gray-300 mt-2">{faq.answer}</div>}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-xl p-6 mb-10">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <textarea
              rows={4}
              placeholder="Enter your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
            {error && <div className="text-pink-500 text-sm">{error}</div>}
            <button type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white font-semibold shadow-lg transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 p-8 rounded-xl mt-12">
        <div className="footer-container container mx-auto flex flex-wrap justify-between gap-6">
          <div className="footer-section">
            <h4 className="text-purple-300 font-semibold mb-2">About Us</h4>
            <p className="text-gray-300">We are here to assist you 24/7 with all your queries.</p>
          </div>
          <div className="footer-section">
            <h4 className="text-purple-300 font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-purple-300 font-semibold mb-2">Contact</h4>
            <ul className="text-gray-400 space-y-1">
              <li>support@kaamat-kam.com</li>
              <li>+91 9322046379</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="text-purple-300 font-semibold mb-2">Subscribe</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="p-2 rounded-lg bg-gray-800 text-white border-none focus:ring-2 focus:ring-cyan-400"/>
              <button className="btn-invert border border-purple-300 px-4 rounded-lg hover:bg-purple-300 hover:text-black transition">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center text-gray-500 mt-6 text-sm">
          © 2025 | Kaamat-kam - All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default Support;
