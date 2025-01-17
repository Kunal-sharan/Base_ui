import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import '../styles/TestimonialSlider.css';

const testimonials = [
  {
    quote: "I've never felt more at peace after following Chill Guy's tips. His content is a perfect blend of wisdom and calmness.",
    author: "Emily R.",
    title: "Product Manager"
  },
  {
    quote: "The guidance provided transformed my daily routine completely.",
    author: "Michael S.",
    title: "Creative Director"
  },
  {
    quote: "A revolutionary approach to mindfulness and productivity.",
    author: "Sarah L.",
    title: "Software Engineer"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <Quote className="quote-icon" />
            <div className="testimonial-text-container">
              <p className={`testimonial-quote ${isAnimating ? 'animating' : ''}`}>
                {testimonials[current].quote}
              </p>
              <div>
                <p className="testimonial-author">{testimonials[current].author}</p>
                <p className="testimonial-title">{testimonials[current].title}</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={prev}
          className="nav-button nav-button-prev"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="nav-button-icon" />
        </button>

        <button 
          onClick={next}
          className="nav-button nav-button-next"
          aria-label="Next testimonial"
        >
          <ChevronRight className="nav-button-icon" />
        </button>

        <div className="dot-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot-button ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;