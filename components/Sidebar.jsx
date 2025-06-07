import React, { useState } from 'react';
import { IoChevronDown, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import avatar from '../src/assets/images/avatar.png';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  const toggleSidebar = () => {
    setShowContacts(prev => !prev);
  };

  return (
    <aside className={`sidebar ${showContacts ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Shreyas KV" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Shreyas KV">Shreyas KV</h1>
          <p className="title">Software Developer</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className={`sidebar-info_more ${showContacts ? 'active' : ''}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box"><IoMailOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:sk12200@nyu.edu" className="contact-link">sk12200@nyu.edu</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><IoPhonePortraitOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+19297380957" className="contact-link">+1 (929) 738-0957</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><IoCalendarOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">February 20, 2001</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box"><IoLocationOutline /></div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Brooklyn, New York, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.github.com/shreyas-helix" className="social-link"><IoLogoGithub /></a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/shreyaskv" className="social-link"><IoLogoLinkedin /></a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/shrey_0220" className="social-link"><IoLogoInstagram /></a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
