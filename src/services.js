import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Layout, Database, Monitor, Globe, FileCode, Zap } from 'lucide-react';

const services = [
  {
    title: "تطوير تطبيقات الويب Full-Stack",
    desc: "بناء مواقع وتطبيقات تفاعلية متكاملة باستخدام MERN Stack (React, Node.js, Express, MongoDB) لضمان أداء عالٍ وقابلية للتوسع.",
    icon: <Layout size={40} color="#00f2ff" />,
    shadow: "rgba(0, 242, 255, 0.2)"
  },
  {
    title: "تطوير تطبيقات سطح المكتب (Cross-Platform)",
    desc: "تحويل أفكارك إلى برامج تعمل على Windows و macOS باستخدام Electron.js، مع دمج ميزات النظام المحلية بسلاسة.",
    icon: <Monitor size={40} color="#7000ff" />,
    shadow: "rgba(112, 0, 255, 0.2)"
  },
  {
    title: "أنظمة الإدارة واللوحات البرمجية (Dashboards)",
    desc: "تصميم وبرمجة لوحات تحكم مخصصة لإدارة المطاعم، المخابز، أو الأعمال التجارية مع تقارير PDF وتحليلات بيانات دقيقة.",
    icon: <Database size={40} color="#25D366" />,
    shadow: "rgba(37, 211, 102, 0.2)"
  },
  {
    title: "رقمنة المحتوى والبيانات",
    desc: "تحويل الملفات الورقية والمخططات اليدوية إلى قواعد بيانات رقمية منظمة وتنسيقات احترافية (مثل ملفات Word أو أنظمة تخزين Firebase).",
    icon: <FileCode size={40} color="#E4405F" />,
    shadow: "rgba(228, 64, 95, 0.2)"
  },
  {
    title: "واجهات المستخدم (UI/UX) بأسلوب النيون",
    desc: "تصميم واجهات عصرية تعتمد على Glassmorphism وتأثيرات النيون مع تجربة مستخدم (UX) تركز على الأجهزة المحمولة.",
    icon: <Globe size={40} color="#ffaa00" />,
    shadow: "rgba(255, 170, 0, 0.2)"
  },
  {
    title: "تكامل الأنظمة البرمجية و APIs",
    desc: "ربط تطبيقاتك مع خدمات خارجية مثل Firebase للتخزين السحابي أو بناء APIs مخصصة لربط أجزاء النظام ببعضها.",
    icon: <Zap size={40} color="#00d4ff" />,
    shadow: "rgba(0, 212, 255, 0.2)"
  }
];

const ServicesSection = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 style={{ color: '#00f2ff', fontWeight: '900', fontSize: '2.5rem' }}>الخدمات التي أقدمها</h2>
        <p className="text-white opacity-50">حلول رقمية ذكية مصممة خصيصاً لتطوير أعمالك</p>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} lg={4} md={6}>
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ height: '100%' }}
            >
              <Card style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                height: '100%',
                padding: '20px',
                textAlign: 'right'
              }}>
                <Card.Body>
                  <div className="mb-4" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    width: '70px',
                    height: '70px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 20px ${service.shadow}`
                  }}>
                    {service.icon}
                  </div>
                  <Card.Title className="text-white mb-3 fw-bold fs-4">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-white opacity-75 leading-relaxed">
                    {service.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;