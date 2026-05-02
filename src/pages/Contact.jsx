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
                { icon: <FaMapMarkerAlt className="text-orange-500 text-xl mt-0.5 shrink-0" />, label: 'Address', value: 'Usha Agency, Choozhal, KK dist, Tamil Nadu – 629153' },
                { icon: <FaPhone className="text-orange-500 text-xl shrink-0" />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <FaEnvelope className="text-orange-500 text-xl shrink-0" />, label: 'Email', value: 'info@ushaagency.com', href: 'mailto:info@ushaagency.com' },
                { icon: <FaClock className="text-orange-500 text-xl shrink-0" />, label: 'Hours', value: 'Mon–Sat: 9:30 AM – 8:00 PM' },
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

            {/* Google Maps */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Usha Agency Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820!2d77.1286366!3d8.3134713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05aa4bb52c22b3%3A0x1be0bfcd7a7301a7!2sUsha+Agency+Choozhal!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/PwD7Vbrk3U7b5XtF9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
              <FaMapMarkerAlt /> Open in Google Maps
            </a>
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
