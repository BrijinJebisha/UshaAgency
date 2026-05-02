import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages } from '../data/products';

export default function Gallery() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Visual Showcase</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Our <span className="gold-text">Gallery</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">A glimpse into our product range and showroom.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section className="py-16 section-dark border-t border-yellow-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_70%)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Visit Our Showroom</h2>
          <p className="text-gray-400 mb-8">See our full collection in person at our store. We'd love to help you find the perfect product.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918675108599" className="gradient-gold text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.3)]">
              Book a Visit
            </a>
            <Link to="/contact" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-all">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
