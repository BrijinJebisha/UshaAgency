import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = [
  { icon: '🧶', title: 'Threads', desc: 'Silk, cotton, polyester and zari threads in 100+ colors for all types of stitching and embroidery.' },
  { icon: '💎', title: 'Beads & Stones', desc: 'Crystal beads, glass stones, sequins and decorative embellishments for garment work.' },
  { icon: '🪡', title: 'Lining Clothes', desc: 'Satin, cotton and synthetic lining fabrics in various widths and shades.' },
  { icon: '📌', title: 'Needles & Pins', desc: 'Hand needles, machine needles, safety pins and tailor pins for every stitching task.' },
  { icon: '✂️', title: 'Embroidery Supplies', desc: 'Embroidery hoops, aari needles, zardozi wires and all hand embroidery essentials.' },
  { icon: '🧰', title: 'Tailoring Accessories', desc: 'Tailor chalk, measuring tapes, scissors, elastic bands, buttons, zippers and more.' },
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
      {/* Banner */}
      <section className="gradient-cream pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-amber-700 text-sm font-semibold uppercase tracking-widest">Craft & Create</span>
            <h1 className="text-5xl font-bold mt-2 mb-4 text-gray-900">Stitching <span className="text-amber-700">Materials</span></h1>
            <p className="text-gray-600 max-w-xl text-lg">Everything a tailor, embroiderer, or craft enthusiast needs — threads, beads, lining & more.</p>
          </motion.div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A complete range of stitching and tailoring materials for professionals and hobbyists alike.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-amber-50 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-14 gradient-cream">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Available Thread Colors</h2>
          <p className="text-gray-500 mb-8">We stock threads in 100+ vibrant shades</p>
          <div className="flex flex-wrap justify-center gap-4">
            {colorPalette.map(({ color, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full ${color} shadow-md`} />
                <span className="text-xs text-gray-500">{label}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 shadow-md" />
              <span className="text-xs text-gray-500">+90 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-amber-800 text-white text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Custom Bulk Orders?</h2>
          <p className="text-amber-100 mb-6">We supply threads, beads and accessories in bulk for boutiques and tailoring shops.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-amber-800 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">WhatsApp for Bulk Enquiry</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
