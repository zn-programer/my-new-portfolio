import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <Container className="py-5" style={{ marginTop: '80px' }}>
      <Row className="align-items-center">
        
        {/* النص السردي */}
        <Col lg={6} className="text-end order-2 order-lg-1">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4" style={{ color: '#00f2ff', fontWeight: '900', fontSize: '2.5rem' }}>
              من الميدان إلى شاشة الكود.. حكايتي باختصار
            </h2>
            
            <div className="text-white opacity-80 fs-5" style={{ lineHeight: '1.8' }}>
              <p className="mb-4">
                أهلاً بك، أنا **زيد**. قصتي بدأت بعيداً عن شاشات الكمبيوتر، وتحديداً في **معهد النفط**. هناك تعلمت معنى الانضباط، وكيف تعمل الآلات والأنظمة الحقيقية في الميدان.
              </p>
              <p className="mb-4">
                رغم دراستي في مجال النفط، كان لدي دائماً فضول غريب لكيفية جعل الأعمال أسهل باستخدام التكنولوجيا، وهذا ما دفعني لتعلم البرمجة وبناء حلول تخدم الناس في أعمالهم مثل أنظمة المخابز والمطاعم.
              </p>
              <p>
                اليوم، أستخدم تلك الدقة الميدانية وأحولها إلى تطبيقات سهلة الاستخدام تفتح الآفاق وتسهل إدارة المشاريع بكل بساطة.
              </p>
            </div>
          </motion.div>
        </Col>

        {/* عرض الصور المتجاوب */}
        <Col lg={6} className="mb-5 mb-lg-0 order-1 order-lg-2">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-lg-0 position-relative" style={{ minHeight: '400px' }}>
            
            {/* 1. صورة الجانب الفني (تظهر بوضوح في الأعلى/الخلف) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="img-wrapper shadow-lg"
              style={{
                width: '180px',
                height: '260px',
                zIndex: 1,
                transform: 'rotate(-5deg)',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Image 
                src="/oil.webp" 
                className="w-100 h-100 object-fit-cover"
                style={{ filter: 'grayscale(30%)' }}
              />
            </motion.div>

            {/* 2. صورتك الشخصية (في المنتصف دائماً) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="shadow-lg mx-lg-n4"
              style={{
                width: '220px',
                height: '300px',
                zIndex: 3,
                position: 'relative',
                borderRadius: '25px',
                border: '4px solid #7000ff',
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(112, 0, 255, 0.4)'
              }}
            >
              <Image 
                src="/prog.webp" 
                className="w-100 h-100 object-fit-cover"
              />
            </motion.div>

            {/* 3. صورة البرمجة (تظهر بوضوح في الأسفل/الأمام) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="img-wrapper shadow-lg"
              style={{
                width: '180px',
                height: '260px',
                zIndex: 2,
                transform: 'rotate(5deg)',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '2px solid #00f2ff',
                boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
              }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000" 
                className="w-100 h-100 object-fit-cover"
              />
            </motion.div>

          </div>
        </Col>

      </Row>

      {/* تنسيقات إضافية لضمان التجاوب في الهاتف */}
      <style>
        {`
          @media (max-width: 991px) {
            .img-wrapper {
              width: 140px !important;
              height: 200px !important;
              transform: none !important;
            }
            .mx-lg-n4 {
              margin: 0 !important;
              width: 180px !important;
              height: 250px !important;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default AboutMe;