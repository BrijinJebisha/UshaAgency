import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stitchingItems } from '../data/products';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = [
  { img: stitchingItems[0].img, title: 'Threads', desc: 'Silk, cotton, polyester and zari threads in 100+ colors for all types of stitching and embroidery.' },
  { img: stitchingItems[1].img, title: 'Beads & Stones', desc: 'Crystal beads, glass stones, sequins and decorative embellishments for garment work.' },
  { img: stitchingItems[2].img, title: 'Lining Clothes', desc: 'Satin, cotton and synthetic lining fabrics in various widths and shades.' },
  { img: stitchingItems[3].img, title: 'Needles & Pins', desc: 'Hand needles, machine needles, safety pins and tailor pins for every stitching task.' },
  { img: stitchingItems[4].img, title: 'Embroidery Supplies', desc: 'Embroidery hoops, aari needles, zardozi wires and all hand embroidery essentials.' },
  { img: stitchingItems[5].img, title: 'Tailoring Accessories', desc: 'Tailor chalk, measuring tapes, scissors, elastic bands, buttons, zippers and more.' },
];

const colorPalette = [
  { color: 'bg-red-400', label: 'Red' }, { color: 'bg-blue-400', label: 'Blue' },
  { color: 'bg-green-400', label: 'Green' }, { color: 'bg-yellow-400', label: 'Yellow' },
  { color: 'bg-purple-400', label: 'Purple' }, { color: 'bg-pink-400', label: 'Pink' },
  { color: 'bg-orange-400', label: 'Orange' }, { color: 'bg-teal-400', label: 'Teal' },
];

export default function StitchingMaterials() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Craft & Create</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Stitching <span className="gold-text">Materials</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">Everything a tailor, embroiderer, or craft enthusiast needs — threads, beads, lining & more.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl font-bold text-white mb-3">Our Materials Range</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A complete range of stitching and tailoring materials for professionals and hobbyists alike.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ img, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-premium rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img src={img} alt={title} className="w-full h-full object-cover opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 section-dark border-y border-yellow-900/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Thread Colors</p>
          <h2 className="text-3xl font-bold text-white mb-3">Available Thread Colors</h2>
          <p className="text-gray-500 mb-10">We stock threads in 100+ vibrant shades</p>
          <div className="flex flex-wrap justify-center gap-5">
            {colorPalette.map(({ color, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full ${color} shadow-lg ring-2 ring-black`} />
                <span className="text-xs text-gray-500">{label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 shadow-lg ring-2 ring-black" />
              <span className="text-xs text-gray-500">+90 more</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Bulk Orders?</h2>
          <p className="text-gray-400 mb-8">We supply threads, beads and accessories in bulk for boutiques and tailoring shops.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gradient-gold text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.3)]">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-all">WhatsApp for Bulk Enquiry</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
