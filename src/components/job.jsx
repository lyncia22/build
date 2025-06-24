import React from 'react';
import './job.css';
import img1 from '../assets/Group 7.png'; // update with your actual image path
import { ArrowRight } from 'lucide-react';

const Job = () => {
  return (

    <section className="job container">
         {/* Right - Text */}
         <div className="row align-items-center">
        <div className="col-md-5">
          <div className="job-text">
            <h2 className="job-title">You Have A Job For Us?</h2>
            <p className="job-description">
             If you have a job opportunity in the construction industry, we want to hear from you! Use the form below to share the details of your project, and let us help you connect with the right professionals. Your submission can make a difference in finding the perfect candidates to get the job done!
            </p>
           
          </div>
        </div>
      
        {/* Left - Image */}
        <div className="col-md-7">
          <div className="job-image-wrapper">
            <img src={img1} alt="Our Team" className="img-fluid team-image" />
          </div>
        </div>
        <button className="learnmore-btn">
  <span className="learnmore-text">Post job</span>
  <span className="learnmore-arrow-box">
    <ArrowRight size={16} color="black" strokeWidth={2} className="arrow-icon" />
  </span>
</button>
      </div>
    </section>
  );
};

export default Job;
