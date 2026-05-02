import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Contact <span className="gold-text">Us</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">We're here to help. Reach out for enquiries, orders, or just to say hello!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Find Us</p>
            <h2 className="text-3xl font-bold text-white mb-8">Store Information</h2>
            <div className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt className="text-yellow-600 text-lg mt-0.5 shrink-0" />, label: 'Address', value: 'Usha Agency, Choozhal, KK dist, Tamil Nadu – 629153' },
                { icon: <FaPhone className="text-yellow-600 text-lg shrink-0" />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <FaEnvelope className="text-yellow-600 text-lg shrink-0" />, label: 'Email', value: 'info@ushaagency.com', href: 'mailto:info@ushaagency.com' },
                { icon: <FaClock className="text-yellow-600 text-lg shrink-0" />, label: 'Hours', value: 'Mon–Sat: 9:30 AM – 8:00 PM' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="card-premium flex gap-4 items-start rounded-xl p-4">
                  {icon}
                  <div>
                    <p className="text-xs text-gray-600 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-gray-300 font-medium hover:text-yellow-400 transition-colors text-sm">{value}</a>
                      : <p className="text-gray-300 font-medium text-sm">{value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/918675108599"
              className="mt-6 flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-4 rounded-xl transition-colors w-fit">
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden border border-yellow-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
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
            <a href="https://maps.app.goo.gl/PwD7Vbrk3U7b5XtF9" target="_blank" rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-400 text-sm font-medium transition-colors">
              <FaMapMarkerAlt /> Open in Google Maps
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Reach Out</p>
            <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
