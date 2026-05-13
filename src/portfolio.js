/** @format */

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Card,
  Button,
  Badge,
  ProgressBar,
  Accordion,
  Form,
} from "react-bootstrap";
import { motion, useScroll, useSpring } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactDialog from "./Contact";
import SkillsSection from "./Skills";
import ServicesSection from "./services";
import AboutMe from "./Story";
import ResumeSection from "./Cv";
import ContactSection from "./WorkToGether";
import Footer from "./Footer";

const ZaidPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showContact, setShowContact] = useState(false);
  const handleShow = () => setShowContact(true);
  const handleClose = () => setShowContact(false);

  const projects = [
    {
      title: "منيو الكتروني مع نظام ادارة لمقهى و مطعم اربيل",
      description: " نظام ويب متكامل مع قائمة QR Code تفاعلية.",
      img: "/restaurant.jpg",
      skills: ["react.js", "supabase"],
    },
    {
      title: "متجر الكتروني لمكتبة الكرم",
      description: "ويبسايت متكامل مع امكانية القدرة على الشراء من داخل الموقع",
      img: "/library.jpg",
      skills: ["react.js", "firebase"],
    },
    {
      title: "نظام الكتروني لاشتراكات المخابر",
      description:
        "نظام متكامل لادارة  اشتراكات المخابر يهدف الى تنظيم البيانات و تسريع العمل مع خزن محلي للبيانات",
      img: "/mkh.jpg",
      skills: ["react.js", "node js", "mongoodb", "electron.js"],
    },
    {
      title: "نظام حجز الكتروني لعيادة طبية",
      description:
        "نظام يهدف الى تسهيل عملية ادارة المواعيد بشكل الكتروني منظم",
      img: "/midcal.jpg",
      skills: ["react.js", "firebase"],
    },
  ];
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const theme = {
    bg: "#050505",
    neonPrimary: "#00f2ff", // Cyan
    neonSecondary: "#7000ff", // Purple
    glass: "rgba(255, 255, 255, 0.03)",
    border: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: "#fff",
        direction: "rtl",
        fontFamily: "'Tajawal', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}>
      {/* Contact dialog */}
      <ContactDialog show={showContact} handleClose={handleClose} />
      {/* Dynamic Background Glow */}
      <div
        style={{
          position: "fixed",
          top: mousePos.y - 150,
          left: mousePos.x - 150,
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${theme.neonSecondary}33 0%, transparent 70%)`,
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none",
          transition: "all 0.1s ease-out",
        }}
      />

      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: theme.neonPrimary,
          transformOrigin: "0%",
          zIndex: 1000,
        }}
      />

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&family=Inter:wght@400;700&display=swap');
          .glass-card {
            background: ${theme.glass};
            backdrop-filter: blur(15px);
            border: 1px solid ${theme.border};
            border-radius: 30px;
            transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .glass-card:hover {
            border-color: ${theme.neonPrimary};
            transform: scale(1.02);
            box-shadow: 0 10px 40px -10px ${theme.neonPrimary}44;
          }
          .neon-btn {
            background: linear-gradient(45deg, ${theme.neonSecondary}, ${theme.neonPrimary});
            border: none;
            border-radius: 12px;
            padding: 12px 35px;
            font-weight: 700;
            color: #fff;
          }
          .form-control {
            background: ${theme.glass} !important;
            border: 1px solid ${theme.border} !important;
            color: #fff !important;
            padding: 15px !important;
          }
          .form-control:focus {
            border-color: ${theme.neonPrimary} !important;
            box-shadow: 0 0 15px ${theme.neonPrimary}33 !important;
          }
          .nav-link { color: #fff !important; margin: 0 15px; }
          .accordion-item { background: transparent !important; border: 1px solid ${theme.border} !important; color: #fff !important; }
          .accordion-button { background: ${theme.glass} !important; color: #fff !important; }
        `}
      </style>

      {/* 1. Navbar */}
      <Navbar
        variant='dark'
        expand='lg'
        sticky='top'
        className='py-3'
        style={{ background: "rgba(5,5,5,0.8)", backdropFilter: "blur(12px)" }}>
        <Container>
          <Navbar.Brand
            className='fw-black fs-2'
            style={{ color: theme.neonPrimary }}>
            ZAID
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto fw-bold'>
              <Nav.Link href='#home'>الرئيسية</Nav.Link>
              <Nav.Link href='#projects'>المشاريع</Nav.Link>
              <Nav.Link href='#skills'>المهارات</Nav.Link>
              <Nav.Link href='#contact'>تواصل</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. Hero Section */}
      <Container
        id='home'
        className='py-1 position-relative'
        style={{ zIndex: 1 }}>
        <Row className='align-items-center min-vh-100'>
          <Col lg={7} className='text-center text-lg-end'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <Badge
                bg='dark'
                className='border border-info text-info mb-4 px-3 py-2'>
                متاح للعمل الحر
              </Badge>
              <h1 className='display-1 fw-black mb-3'>
                مرحباً، أنا{" "}
                <span style={{ color: theme.neonPrimary }}>زيد</span>
              </h1>
              <h2 className='display-5 fw-bold mb-4 opacity-90'>
                مطور مواقع وتطبيقات ويب
              </h2>
              <p className='fs-5 mb-5 opacity-70' style={{ maxWidth: "600px" }}>
                خبرة في بناء الأنظمة الإدارية وحلول الويب المبتكرة. متخصص في
                بيئة العمل React و Node.js.
              </p>
              <Button
                onClick={() => {
                  handleShow();
                }}
                className='neon-btn fs-5 shadow-lg'>
                ابدأ مشروعك الآن
              </Button>
            </motion.div>
          </Col>
          <Col lg={5} className='text-center mt-5 mt-lg-0'>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "110%",
                  height: "110%",
                  background: `linear-gradient(45deg, ${theme.neonPrimary}, ${theme.neonSecondary})`,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  filter: "blur(40px)",
                  opacity: 0.3,
                }}
              />
              <img
                src='/me.jpg'
                className='img-fluid rounded-4 position-relative'
                style={{
                  width: "350px",
                  height: "450px",
                  objectFit: "cover",
                  border: `1px solid ${theme.border}`,
                }}
                alt='Zaid'
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* 3. Projects Section */}
      <Container id='projects' className='py-5'>
        <h2
          className='display-4 fw-black mb-5 text-center'
          style={{ color: theme.neonPrimary }}>
          أعمالي المختارة
        </h2>
        <Row className='g-4'>
          {projects.map((element) => {
            return (
              <Col lg={6}>
                <Card
                  style={{ color: "white" }}
                  className='glass-card h-100 overflow-hidden border-0'>
                  <Card.Img src={element.img} />
                  <Card.Body className='p-4'>
                    <h3 className='fw-bold'>{element.title}</h3>
                    <p className='opacity-75'>{element.description}</p>
                    <div className='d-flex gap-2 mb-3'>
                      {element.skills.map((s) => {
                        return <Badge bg='info'>{s}</Badge>;
                      })}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* 4. Skills Section */}
      <Container id="skills"> 
      <SkillsSection />
      </Container>
{/* Services section */}
<ServicesSection />
{/* My Story */}
<AboutMe />
{/* Cv */}
<ResumeSection />
{/* Contact */}
<Container id="contact">
<ContactSection />
</Container>
{/* Footer */}
<Footer />
    </div>
  );
};

export default ZaidPortfolio;
