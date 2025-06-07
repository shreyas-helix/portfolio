import React from 'react';
// import { contactInfo } from '../src/data';

const Contact = () => {
  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96873.57748573994!2d-74.02723632853201!3d40.64533241953413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1749172090529!5m2!1sen!2sus"
              width="400" height="300" loading="lazy"></iframe>
            
          </figure>
        </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Me</h3>

        <form className="form">
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required />
            <input type="email" name="email" className="form-input" placeholder="Email address" required />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required></textarea>
          <button className="form-btn" type="submit">
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;