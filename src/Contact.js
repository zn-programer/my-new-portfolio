import React, { useState } from 'react';
import { Modal, Button, Stack } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Share2, X } from 'lucide-react';

const ContactDialog = ({show, handleClose}) => {
  // بيانات التواصل الخاصة بك
  const socialLinks = [
    { 
      name: 'فيسبوك', 
      icon: <Facebook size={28} />, 
      color: '#1877F2', 
      link: 'https://www.facebook.com/zaid.altai.150912?rdid=QVHRdZyvyoUQyhav&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cxf95fEtq%2F#' 
    },
    { 
      name: 'انستغرام', 
      icon: <Instagram size={28} />, 
      color: '#E4405F', 
      link: 'https://www.instagram.com/zaidaltai5?igsh=ZGoxZ3ExY3hkY3Z0' 
    },
    { 
      name: 'واتساب', 
      icon: <MessageCircle size={28} />, 
      color: '#25D366', 
      link: 'https://wa.me/07870020515' 
    },
  ];

  return (
    <div className="text-center mt-5">

      {/* الديالوج المصمم بأسلوب النيون والزجاج */}
      <Modal 
        show={show} 
        onHide={handleClose} 
        centered
        contentClassName="border-0 bg-transparent"
      >
        <div style={{
          background: 'rgba(15, 15, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '30px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* تأثير توهج خلفي */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(112, 0, 255, 0.2) 0%, transparent 70%)',
            zIndex: 0
          }} />

          <div className="flex-row-reverse direction-rtl text-end mb-4 d-flex justify-content-between align-items-center">
             <h3 style={{ color: '#00f2ff', fontWeight: '900', margin: 0 }}>لنفتح قنوات الاتصال</h3>
             <Button 
               style={{ cursor: 'pointer', color: '#fff', zIndex:"1000" }} 
               onClick={handleClose}
             ><X size={24}/></Button>
          </div>

          <p className="text-white opacity-75 mb-5 text-end">
            اختر المنصة المفضلة لديك للدردشة حول مشروعك القادم.
          </p>

          <Stack gap={3}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: -10 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 25px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  color: '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <span className="fw-bold fs-5">{social.name}</span>
                </div>
                <div style={{ 
                  width: '10px', 
                  height: '10px', 
                  borderRadius: '50%', 
                  backgroundColor: social.color,
                  boxShadow: `0 0 10px ${social.color}`
                }} />
              </motion.a>
            ))}
          </Stack>

          <div className="mt-5 text-center">
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactDialog;