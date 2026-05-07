import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: ''
  });

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    // رقم هاتفك بصيغة دولية (مثلاً للعراق: 964xxxxxxxxxx)
    const myNumber = "9647870020515"; // ضع رقمك هنا بدون إشارة +

    // صياغة الرسالة التي ستصلك على الواتساب
    const message = `أهلاً زيد، أنا ${formData.name}.%0A` + 
                    `رقم هاتفي: ${formData.phone}%0A` +
                    `بخصوص مشروعي: ${formData.project}`;

    // فتح رابط واتساب
    const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h2 style={{ color: '#00f2ff', fontWeight: '900', fontSize: '2.5rem' }}>لنبدأ العمل على مشروعك</h2>
          <p className="text-white opacity-50">اترك تفاصيل مشروعك وسأقوم بالرد عليك عبر الواتساب لمناقشة الخطوات القادمة</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={7}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px',
              padding: '40px'
            }}
          >
            <Form onSubmit={handleWhatsAppSend}>
              <Row>
                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="text-white mb-2 ms-2"><User size={16} /> الاسم</Form.Label>
                    <Form.Control 
                      required
                      name="name"
                      onChange={handleChange}
                      placeholder="اسمك الكريم" 
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '12px', padding: '12px' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-4">
                  <Form.Group>
                    <Form.Label className="text-white mb-2 ms-2"><Phone size={16} /> رقم الهاتف</Form.Label>
                    <Form.Control 
                      required
                      name="phone"
                      onChange={handleChange}
                      placeholder="07xxxxxxxxx" 
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '12px', padding: '12px' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="text-white mb-2 ms-2"><MessageSquare size={16} /> تفاصيل المشروع المطلوب</Form.Label>
                <Form.Control 
                  required
                  as="textarea" 
                  name="project"
                  rows={4} 
                  onChange={handleChange}
                  placeholder="تحدث قليلاً عن مشروعك"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '12px', padding: '12px' }}
                />
              </Form.Group>

              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="submit"
                    className="d-inline-flex align-items-center gap-2"
                    style={{
                      background: '#25D366', // لون الواتساب الأصلي
                      border: 'none',
                      padding: '15px 50px',
                      borderRadius: '15px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)'
                    }}
                  >
                    <Send size={20} />
                    إرسال الطلب عبر واتساب
                  </Button>
                </motion.div>
              </div>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;