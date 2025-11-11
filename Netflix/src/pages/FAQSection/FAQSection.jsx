import React, { useState } from "react";
import "./FAQSection.css";

export default function FAQSection() {
 
  const faqs = [
    {
      q: "What is Netflix?",
      a: "Netflix is a streaming service with movies, TV shows, and more on many devices.",
    },
    {
      q: "How much does Netflix cost?",
      a: "Plans start at affordable prices. You can change or cancel anytime.",
    },
    {
      q: "Where can I watch?",
      a: "You can watch on TV, phone, tablet, or laptop — anywhere with internet.",
    },
    {
      q: "How do I cancel?",
      a: "You can cancel anytime from your account settings. No extra fees.",
    },
  ];

  
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <span>{faq.q}</span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
