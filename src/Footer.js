import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '40px 0',
      marginTop: '60px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      textAlign: 'center'
    }}>
      <Container>
        {/* اسمك بلمسة نيون خافتة */}
        <h4 style={{ 
          color: '#00f2ff', 
          fontWeight: '900', 
          fontSize: '1.5rem',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(0, 242, 255, 0.3)'
        }}>
          زيد
        </h4>
        
        {/* وصف بسيط جداً */}
        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', marginBottom: '20px' }}>
          مطور حلول رقمية ذكية
        </p>

        {/* سطر الحقوق */}
        <div style={{ 
          fontSize: '0.8rem', 
          color: 'rgba(255, 255, 255, 0.2)',
          letterSpacing: '1px'
        }}>
          © {currentYear} 
        </div>
      </Container>
    </footer>
  );
};

export default Footer;