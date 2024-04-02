
import React, { useState } from 'react';

function Input({ label, placeholder, type = 'text', value, onChange, name }) {
  return (
    <>
      <label className="label">{label}</label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />

      <style jsx>{`
        .label {
          font-family: DM Sans, sans-serif;
          letter-spacing: 0.44px;
          margin-top: 24px;
        }

        .input {
          font-family: DM Sans, sans-serif;
          align-items: start;
          border-radius: 8px;
          border: 1px solid rgba(160, 160, 161, 1);
          background-color: var(--Rellenos, #1f1f21);
          margin-top: 8px;
          color: var(--Gris, #a0a0a1);
          letter-spacing: 0.44px;
          padding: 16px 20px;
          width: 100%; /* Ekledim */
          box-sizing: border-box; /* Ekledim */
        }

        @media (max-width: 991px) {
          .input {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form submit işlemi gerçekleştirilecek
    console.log('Form submitted with data:', formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Input
        label="Name & Surname"
        placeholder="Name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <Input
        label="e-mail"
        placeholder="example@gmail.com"
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
      />

      <label className="message-label">Message</label>
      <textarea
        className="message-input"
        placeholder="Hey hey hey"
        value={formData.message}
        onChange={handleChange}
        name="message"
      ></textarea>

      <button type="submit" className="submit-button">
        Send
      </button>

      <style jsx>{`
        .contact-form {
          justify-content: center;
          border-radius: 8px;
          background-color: var(--Rellenos, #1f1f21);
          align-self: stretch;
          display: flex;
          margin-top: 44px;
          flex-direction: column;
          font-weight: 400;
          line-height: 28px;
          padding: 24px;
        }

        @media (max-width: 991px) {
          .contact-form {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .message-label {
          font-family: DM Sans, sans-serif;
          letter-spacing: 0.44px;
          margin-top: 24px;
        }

        .message-input {
          font-family: DM Sans, sans-serif;
          align-items: start;
          border-radius: 8px;
          border: 1px solid rgba(160, 160, 161, 1);
          background-color: var(--Rellenos, #1f1f21);
          margin-top: 8px;
          color: var(--Gris, #a0a0a1);
          letter-spacing: 0.44px;
          padding: 16px 20px 21px;
          width: 100%; /* Ekledim */
          box-sizing: border-box; /* Ekledim */
        }

        .submit-button {
          font-family: DM Sans, sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: var(--Amarillo-Oro, #47d16e);
          margin-top: 24px;
          font-weight: 500;
          line-height: 100%;
          padding: 16px 8px;
          border: none;
          color: var(--Blanco, #fff);
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .submit-button {
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </form>
  );
}

export default function ContactMe() {
  return (
    <>
      <section className="contact-section">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">ContactMe</h1>
            <p className="description">
              If you are interested in my work, contact me
            </p>
            <ContactForm />
          </header>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          color: var(--Blanco, #fff);
        }

        .content-wrapper {
          justify-content: center;
          align-items: center;
          display: flex;
          width: 100%;
          padding: 64px 60px 40px;
        }

        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .header {
          display: flex;
          margin-bottom: 22px;
          width: 447px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }

        .title {
          color: var(--Amarillo-Oro, #47d16e);
          letter-spacing: -0.5px;
          font: 700 60px/118% DM Sans, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0;
        }

        @media (max-width: 991px) {
          .title {
            font-size: 40px;
          }
        }

        .description {
          font-family: DM Sans, sans-serif;
          font-weight: 500;
          letter-spacing: 0.15px;
          margin-top: 16px;
        }

        .divider {
          background-color: var(--Bordes, #26292d);
          align-self: center;
          width: 1156px;
          max-width: 100%;
          height: 1px;
        }
      `}</style>
    </>
  );
}


