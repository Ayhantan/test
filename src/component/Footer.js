import * as React from "react";

const FooterLink = ({ children, href }) => (
  <a href={href} className="footer-link">{children}</a>
);

function SocialLink({ children, icon }) {
  return (
    <div className="social-link">
      <div>{children}</div>
      <img src={icon} alt="" className="social-icon" />
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">Ayhan Tan</div>
            <div className="footer-links">
              <div className="footer-section">
                <div className="footer-section-title">Page</div>
                <FooterLink href="/">Home Page</FooterLink>
                <FooterLink href="/about">About me</FooterLink>
                <FooterLink href="/projects">Projects</FooterLink>
              </div>
              <div className="footer-section">
                <div className="footer-section-title">Contact me</div>
                <FooterLink href="/contact">Contact Me</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/ayhan-tan-a%C3%A7ar-0a50b91b3/">Linkedln</FooterLink>
              </div>
              
              <SocialLink icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4ca4f5ecb14d7d620131fc4e6b818ea5a6713acf0e65aa97e553dbede42735?apiKey=68d7576007ce4742832ee64fbb4339b6&">Social</SocialLink>
              
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-bottom">© 2024 Ayhan</div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: var(--Tema-primario, #131414);
          color: var(--Blanco, #fff);
          font-weight: 400;
          padding: 64px 60px 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-content {
          width: 100%;
          max-width: 1156px;
        }

        .footer-top {
          display: flex;
          gap: 20px;
          font-size: 14px;
          justify-content: space-between;
        }

        .footer-brand {
          font: 600 24px/133% Poppins, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-section-title {
          color: var(--Amarillo-Oro, #47d16e);
          font: 500 16px DM Sans, sans-serif;
        }

        .footer-link {
          font-family: DM Sans, sans-serif;
          line-height: 143%;
          margin-top: 24px;
          color: white;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--Amarillo-Oro, #47d16e);
        }

        .social-link {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          color: var(--Amarillo-Oro, #47d16e);
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: 0.15px;
          cursor: pointer;
        }

        .social-icon {
          width: 23px;
          fill: var(--Blanco, #fff);
          margin-top: 29px;
        }

        .footer-divider {
          background-color: var(--Bordes, #26292d);
          margin-top: 64px;
          height: 1px;
        }

        .footer-bottom {
          letter-spacing: 0.4px;
          margin-top: 16px;
          font: 12px/133% DM Sans, sans-serif;
        }
      `}</style>
    </>
  );
};

export default Footer;