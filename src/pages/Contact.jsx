import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">Contact <span className="text-orange-400">Us</span></h1>
            <p className="text-gray-300 max-w-xl text-lg">We're here to help. Reach out for enquiries, orders, or just to say hello!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Store Information</h2>
            <div className="space-y-5">
              {[
                { icon: <FaMapMarkerAlt className="text-orange-500 text-xl mt-0.5 shrink-0" />, label: 'Address', value: '123 Main Bazaar Road, Town Center, City – 600001' },
                { icon: <FaPhone className="text-orange-500 text-xl shrink-0" />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <FaEnvelope className="text-orange-500 text-xl shrink-0" />, label: 'Email', value: 'info@ushaagency.com', href: 'mailto:info@ushaagency.com' },
                { icon: <FaClock className="text-orange-500 text-xl shrink-0" />, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 5:00 PM' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                  {icon}
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                    {href ? <a href={href} className="text-gray-800 font-medium hover:text-orange-500 transition-colors">{value}</a>
                      : <p className="text-gray-800 font-medium">{value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/918675108599"
              className="mt-6 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-colors w-fit">
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-gray-200 h-52 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <FaMapMarkerAlt className="text-4xl mx-auto mb-2 text-orange-400" />
                <p className="font-medium">Usha Agency</p>
                <p className="text-sm">123 Main Bazaar Road, City</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
