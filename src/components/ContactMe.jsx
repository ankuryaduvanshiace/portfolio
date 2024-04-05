import React from 'react'
import "../styles/contact.scss";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Button from './Button';

const ContactMe = () => {
    // change background color of email link
  return (
    <section id="contact">
      <div className="contact-section">
        <div className="heading">
          <h2 className="title-head">Contact <span className="bg-span">Me</span></h2>
        </div>
        <div className="container">
          <div className="email">
            <span className="icon"><MdEmail /></span>
            <Button className="link">
                <a href="mailto:ankurdev308@gmail.com">ankurdev308@gmail.com</a>
            </Button>
          </div>
          <div className="phone">
            <span className="icon"><FaPhone /></span>
            <Button className="num">+918279449758</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe;