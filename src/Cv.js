import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ResumeSection = () => {
  return (
    <Container className="py-5 my-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '40px',
          padding: '60px 20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="mb-4 d-flex justify-content-center">
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(112, 0, 255, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(112, 0, 255, 0.3)'
          }}>
            <FileText size={40} color="#7000ff" />
          </div>
        </div>

        <h2 className="mb-3" style={{ color: '#00f2ff', fontWeight: '900' }}>
          هل تريد معرفة المزيد عن مساري المهني؟
        </h2>
        <p className="text-white opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          يمكنك تحميل نسختك من سيرتي الذاتية للاطلاع على تفاصيل خبراتي في تطوير الويب، الأنظمة الإدارية، ورحلتي في عالم البرمجة.
        </p>

        {/* زر التحميل الاحترافي */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
     <Button 
  // تأكد أن اسم الملف مطابق تماماً لما هو موجود في مجلد public
  href={`${process.env.PUBLIC_URL}/Zaid hazzim altai.pdf`} 
  download="Zaid hazzim altai.pdf" // هذا الاسم هو ما سيظهر للمستخدم عند التحميل
  className="d-inline-flex align-items-center gap-2"
  style={{
    background: 'linear-gradient(45deg, #7000ff, #00f2ff)',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '15px',
    color: '#fff',
    fontWeight: 'bold'
  }}
>
  <Download size={20} />
  تحميل السيرة الذاتية PDF
</Button>
        </motion.div>

        <div className="mt-4">
          <small className="text-white opacity-50">Zaid • Developer of Smart Digital Solutions</small>
        </div>
      </motion.div>
    </Container>
  );
};

export default ResumeSection;