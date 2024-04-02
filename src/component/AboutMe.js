import * as React from "react";

function AboutMe() {
  return (
    <>
      <main className="main-container">
        <header className="header">
          <h1 className="title">
            Ayhan Tan Acar <br />This is my web design testing area. <br />
          </h1>
          <p className="subtitle">
            You can access my CV with the button below.
          </p>
          <button className="cv-button">
          <a href="https://www.linkedin.com/in/ayhan-tan-a%C3%A7ar-0a50b91b3/" target="_blank" rel="noopener noreferrer">Access CV</a>
          </button>
        </header>
        <section className="about-section">
          <div className="about-content">
            <div className="about-image-container">
              <img
                src={require("C:/Users/Tan/Desktop/Folder/test/src/component/ben.png")}
                alt="Profile picture of Ayhan Tan Acar"
                className="about-image"
              />
            </div>
            <div className="about-text-container">
              <div className="about-text-content">
                <h2 className="about-title">About me</h2>
                <p className="about-description">
                  Hello! I'm Tan, I love clean software architecture work, I'm a
                  junior developer. I am good at problem solving and can turn
                  ideas into reality through programming with ChatGPT. Let's
                  build something amazing together.
                  <br /> Even though I like to use high level languages as a
                  programming language, I am trying to improve myself in low
                  level languages in the future. I also love software
                  architectures and software development processes.
                </p>
                <div className="about-detail-button">
                <span className="about-detail-text">
                <a href="https://www.instagram.com/ayhan_tann/" target="_blank" rel="noopener noreferrer">Detail About me</a>
                </span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa808dbc8e6a8d054a3f62225d723707f4097f011c418e4c3d5bce5e1a946c24?apiKey=68d7576007ce4742832ee64fbb4339b6&"
                    alt=""
                    aria-hidden="true"
                    className="about-detail-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .main-container {
          display: flex;
          max-width: 967px;
          flex-direction: column;
          align-items: center;
          margin: auto;
          margin: 50px auto 0;
          padding: 0 40px;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
        }
        .title {
          color: #fafafa;
          font: 700 60px/40px DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: 0;
        }
        @media (max-width: 991px) {
          .title {
            font-size: 40px;
            line-height: 53px;
          }
        }
        .subtitle {
          color: #fff;
          font: 500 20px/120% DM Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin: 0;
        }
        .cv-button {
          margin-top: 10px;
          background-color: #47d16e; /* Background color */
          color: #fff; /* Text color */
          padding: 10px 20px; /* Padding */
          font-size: 16px; /* Font size */
          border: none; /* Remove border */
          border-radius: 8px; /* Rounded corners */
          cursor: pointer; /* Cursor style */
        }
        
        .cv-button:hover {
          background-color: #3ca858; /* Change background color on hover */
        }
        @media (max-width: 991px) {
          .subtitle {
            max-width: 100%;
          }
        }
        .about-section {
          border-radius: 8px;
          border: 2px solid rgba(61, 61, 61, 1);
          background-color: #1f1f21;
          width: 100%;
          padding: 24px;
          box-sizing: border-box;
        }
        .about-content {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        @media (max-width: 991px) {
          .about-content {
            flex-direction: column;
          }
        }
        .about-image-container {
          width: 37%;
        }
        @media (max-width: 991px) {
          .about-image-container {
            width: 100%;
          }
        }
        .about-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }
        .about-text-container {
          width: 63%;
        }
        @media (max-width: 991px) {
          .about-text-container {
            width: 100%;
          }
        }
        .about-text-content {
          font-size: 16px;
          font-weight: 500;
        }
        .about-title {
          color: #47d16e;
          font: 700 48px DM Sans, sans-serif;
          margin: 0;
        }
        @media (max-width: 991px) {
          .about-title {
            font-size: 40px;
          }
        }
        .about-description {
          color: #fff;
          font-family: DM Sans, sans-serif;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.44px;
          margin-top: 16px;
          margin-bottom: 24px;
        }
        .about-detail-button {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .about-detail-text {
          color: #fff;
          font-family: DM Sans, sans-serif;
          font-weight: 500;
          margin: 0;
        }
        .about-detail-icon {
          width: 14px;
          height: 14px;
          fill: #fff;
        }
      `}</style>
    </>
  );
}

export default AboutMe;