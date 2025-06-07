import React from 'react';
import { education } from '../src/data';
import { experience } from '../src/data';
import  { resume } from "../src/data";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline two-column">

        {/* Education Column */}
        <div className="timeline-column">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            {education.map((edu, index) => (
              <li className="timeline-item" key={`edu-${index}`}>
                <h4 className="h4 timeline-item-title">{edu.title}</h4>
                <span>{edu.duration}</span>
                <p className="timeline-text">{edu.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Experience Column */}
        <div className="timeline-column">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            {experience.map((exp, index) => (
              <li className="timeline-item" key={`exp-${index}`}>
                <h4 className="h4 timeline-item-title">{exp.title}</h4>
                <span>{exp.duration}</span>
                <p className="timeline-text">{exp.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    
      <header>
        <h4 className="h4 article-title">My Journey So Far</h4>  
      </header>
      <section className="download-resume-section">
        <div className="card">
          <div className="action">
            <a href="./shreyas_resume.pdf" download className="button">
              <span className="button__text">Download</span>
              <span className="button__icon">
                <svg className="svg" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>


    </article>
  );
};

export default Resume;
