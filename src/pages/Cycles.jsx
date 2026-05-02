import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { cycles } from '../data/products';

const categories = ['All', 'Mountain Cycles', 'Gear Cycles', 'Kids Cycles', 'Ladies Cycles', 'Spare Parts'];
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Cycles() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? cycles : cycles.filter(c => c.category === active);

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Our Collection</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">Cycles & <span className="text-orange-400">Spare Parts</span></h1>
            <p className="text-gray-300 max-w-xl text-lg">From mountain trails to city streets — find the perfect ride for every age and purpose.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-blue-950 py-4 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
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
                <ProductCard product={p} accentColor="orange" />
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-gray-400 py-20">No products in this category.</p>}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Buy Cycles From Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[['🔧', 'In-Store Servicing'], ['🛡️', 'Warranty Assured'], ['🚚', 'Home Delivery'], ['💰', 'Best Prices']].map(([icon, label]) => (
              <div key={label} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{icon}</div>
                <p className="font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
