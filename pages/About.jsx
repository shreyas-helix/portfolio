import React from 'react';
import ServiceItem from '../components/ServiceItem';
import Skills from '../components/Skills';
import { aboutText, services } from '../src/data';

const About = () => {
    return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        {aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    
      <Skills />
    </article>
  );
};

export default About;
