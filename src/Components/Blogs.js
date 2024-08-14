import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">News/Blogs</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Get a varitey of food and continentals as your choice 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          Felling to get snack with your favorite choice in your table as your wish
          .Get offers for your snack and meal. I done it and you!!!??
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Derick</h2>
      </div>
    </div>
  );
};

export default Testimonial;