import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub
}from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';
const Contact = () => {
  return (
    <>
      <section className='contact section'>
        <h2 className='section__title'>
          Get in <span>Touch</span>
        </h2>
        <div className='contact__container container grid'>
          <div className='contact__data'>
            <h3 className='contact__title'>Don't be shy!</h3>
            <p className='contact__desc'>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or oppurtunites.
            </p>
            <div className='contact__info'>
              <div className='info__item'>
                <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>
                  <a href='mailto:srijal.vedansh7@gmail.com'>srijal.vedansh7@gmail.com</a>
                </h4>
              </div>
          </div>
          <div className='info__item'>
                <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>
                  <a href='tel:+918581044826'>+91-8581044826</a>
                </h4>
              </div>
          </div>
        </div>
        <div className='contact__socials'>
          <a href='https://www.linkedin.com/in/srijal-vedansh-40a50a1b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0GaM2xxzQ0arviQ4yyZH6A%3D%3D' className='contact-social-link'>
            <FaLinkedin/>
          </a>
          <a href='https://github.com/V3dansh' className='contact-social-link'>
            <FaGithub/>
          </a>
          <a href='https://twitter.com/_V3dansh' className='contact-social-link'>
            <FaTwitter/>
          </a>
        </div>
      </div>
      <form className='contact__form'>
        <div className='form__input-group'>
          <div className='form-input-div'>
            <input
              type='text'
              placeholder='Your Name'
              className='form__control'
            />
          </div>
          <div className='form-input-div'>
            <input
              type='email'
              placeholder='Your Email'
              className='form__control'
            />
          </div>
          <div className='form-input-div'>
            <input
              type='text'
              placeholder='Your Subject'
              className='form__control'
            />
          </div>
        </div>
        <div className='form__input-div'>
          <textarea
            placeholder='Your Message'
            className='form__control textarea'
          ></textarea>
        </div>
        <button type='submit' className='button' onClick={(event)=>{event.preventDefault();}}>
          Send Message
          <span className='button__icon contact__button__icon'>
            <FiSend/>
          </span>
        </button>
      </form>
    </div>
      </section>
    </>
  )
}
export default Contact