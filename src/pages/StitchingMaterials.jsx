import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { stitchingItems } from '../data/products';

const categories = ['All', 'Threads', 'Beads', 'Lining Clothes', 'Needles', 'Embroidery', 'Accessories'];
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const colorPalette = [
  { color: 'bg-red-400', label: 'Red' }, { color: 'bg-blue-400', label: 'Blue' },
  { color: 'bg-green-400', label: 'Green' }, { color: 'bg-yellow-400', label: 'Yellow' },
  { color: 'bg-purple-400', label: 'Purple' }, { color: 'bg-pink-400', label: 'Pink' },
  { color: 'bg-orange-400', label: 'Orange' }, { color: 'bg-teal-400', label: 'Teal' },
];

export default function StitchingMaterials() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? stitchingItems : stitchingItems.filter(s => s.category === active);

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

      {/* Filter */}
      <section className="bg-amber-800 py-4 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? 'bg-white text-amber-800' : 'bg-white/10 text-amber-100 hover:bg-white/20'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 gradient-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <ProductCard product={p} accentColor="maroon" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-14 bg-white">
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
          <a href="https://wa.me/918675108599" className="inline-block bg-white text-amber-800 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">
            WhatsApp for Bulk Enquiry
          </a>
        </motion.div>
      </section>
    </>
  );
}
