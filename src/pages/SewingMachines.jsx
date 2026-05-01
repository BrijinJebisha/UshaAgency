import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { sewingMachines } from '../data/products';

const categories = ['All', 'Manual Machines', 'Electric Machines', 'Industrial Machines'];
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const brands = ['Usha', 'Singer', 'Brother', 'Janome', 'Juki'];

export default function SewingMachines() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? sewingMachines : sewingMachines.filter(m => m.category === active);

  return (
    <>
      {/* Banner */}
      <section className="gradient-maroon pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-red-300 text-sm font-semibold uppercase tracking-widest">Premium Collection</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">Sewing <span className="text-red-300">Machines</span></h1>
            <p className="text-red-100 max-w-xl text-lg">From home stitching to industrial production — we have the perfect machine for every need.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-red-900 py-4 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? 'bg-white text-red-800' : 'bg-white/10 text-red-100 hover:bg-white/20'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
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

      {/* Brands */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Brands We Carry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map(b => (
              <div key={b} className="bg-red-50 border border-red-100 text-red-800 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-red-100 transition-colors">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 gradient-maroon text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Machine Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'High Speed Stitching', desc: 'Up to 1500 stitches per minute for efficient work.' },
              { icon: '🔩', title: 'Durable Build', desc: 'Heavy-duty metal frames built to last decades.' },
              { icon: '📦', title: 'Spare Parts Available', desc: 'Full range of spare parts and accessories in stock.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-red-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
