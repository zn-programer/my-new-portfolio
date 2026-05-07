import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

// استيراد أيقونات برمجية جاهزة أو استخدام روابط CDN للصور
const skills = [
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C', shadow: '#00599C' },
  { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB', shadow: '#61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933', shadow: '#339933' },
  { name: 'Electron.js', icon: 'https://cdn.simpleicons.org/electron/47848F', shadow: '#47848F' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', shadow: '#47A248' },
  { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/ffffff', shadow: '#ffffff' },
];

const SkillsSection = () => {
  return (
    <Container className="py-5 mt-5">
      <div className="text-center mb-5">
        <h2 style={{ color: '#00f2ff', fontWeight: '900', fontSize: '2.5rem' }}>تقنياتي الأساسية</h2>
        <p className="text-white opacity-50">الأدوات التي أستخدمها لبناء الحلول الرقمية الذكية</p>
      </div>

      <Row className="justify-content-center g-4">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} md={4} lg={2} className="text-center">
            <motion.div
              whileHover={{ 
                y: -10,
                filter: `drop-shadow(0 0 15px ${skill.shadow})` 
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                padding: '30px 20px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
              />
              <span className="text-white fw-bold" style={{ fontSize: '0.9rem' }}>
                {skill.name}
              </span>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsSection;