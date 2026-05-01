import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages } from '../data/products';

export default function Gallery() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Visual Showcase</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">Our <span className="text-orange-400">Gallery</span></h1>
            <p className="text-gray-300 max-w-xl text-lg">A glimpse into our product range and showroom.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section className="py-14 bg-slate-900 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
          <p className="text-gray-400 mb-6">See our full collection in person at our store. We'd love to help you find the perfect product.</p>
          <a href="https://wa.me/918675108599" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Book a Visit
          </a>
        </motion.div>
      </section>
    </>
  );
}
