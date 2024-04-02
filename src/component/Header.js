import React, { useState, useEffect } from 'react';

const navItems = [
  { label: "Home", active: true },
  { label: "About me", active: false },
  { label: "My Abilites", active: false },
  { label: "Projects", active: false },
];

const NavItem = ({ label, active, onClick }) => (
  <div className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
    <span>{label}</span>
    {active && <div className="active-indicator" />}
  </div>
);

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active index state'i
  const [isSticky, setIsSticky] = useState(false); // Sticky durumu

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      // Sayfa scroll edildiğinde, nav çubuğunun scroll pozisyonuna göre sticky olup olmadığını kontrol et
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Scroll dinleyicisini ekle

    return () => {
      window.removeEventListener('scroll', handleScroll); // Scroll dinleyicisini kaldır
    };
  }, []);

  // Nav item'a tıklama işlevi
  const handleNavItemClick = (index, label) => {
    setActiveIndex(index); // Tıklanan öğenin index'ini ayarla

    // "Home" öğesine tıklanırsa sayfanın başına dön
    if (label === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (label === "About me") {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
    if (label === "My Abilites") {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
    if (label === "Projects") {
      window.scrollTo({ top: 1600, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // Contact form bölümüne scroll yap
    const contactSection = document.querySelector('.contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className={`test ${isSticky ? "sticky" : ""}`}>
      <div className="test">
      <div className="container">
        <div className="logo">A.Tan</div>
        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <NavItem
                  label={item.label}
                  active={index === activeIndex} // Aktif index'e göre durumu belirle
                  onClick={() => handleNavItemClick(index, item.label)} // Tıklama işlevini iletle
                />
              </li>
            ))}
          </ul>
        </nav>
        <button className="contact-button" onClick={scrollToContact}>Contact me</button>
      </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          backdrop-filter: blur(5px);
          background-color: rgba(23, 23, 24, 0.9);
          color: #fff;
          padding: 30px; 
          align-items: center;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          transition: top 0.3s; // Animasyon eklendi
        }
        
        .test{
          width: 100;
          background-color: rgba(23, 23, 24, 0.9);
          padding: 8px; 
          backdrop-filter: blur(5px);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          transition: top 0.3s; // Animasyon eklendi
          padding-bottom: 20px;
        }

        .sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Gölgelendirme eklendi
        }
        
        .container {
          width: 100%; 
          //iç yaziler
          max-width: 1140px;
          margin: 0 auto;
          padding: 20 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 600;
          font-family: Poppins, sans-serif;
          padding: 10px;
        }
        
        .navigation {
          flex: 1;
          
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0 250px;
          
        }
        
        .nav-item {
          font-size: 16px;
          font-weight: 500;
          font-family: DM Sans, sans-serif;
          padding: 0 10px;
          position: relative;
          cursor: pointer; // Eklendi: Fare imleci değiştirme
          
        }
        
        .active-indicator {
          background-color: #47d16e;
          height: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
        
        .contact-button {
          border-radius: 8px;
          background-color: #47d16e;
          color: #fff;
          padding: 12px 20px;
          border: none;
          cursor: pointer;
        }
        
        @media (max-width: 991px) {
          .container {
            flex-direction: column;
            align-items: stretch;
          }
        
          .nav-list {
            justify-content: center;
          }
        
          .nav-item {
            padding: 10px;
          }
        
          .active-indicator {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
