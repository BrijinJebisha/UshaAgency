import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cycles } from '../data/products';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = [
  { img: cycles[0].img, title: 'Mountain Cycles', desc: 'Rugged builds with multi-gear systems, designed for off-road trails and rough terrain.' },
  { img: cycles[1].img, title: 'Gear Cycles', desc: 'Smooth 21-speed gear cycles for long-distance rides and city commuting.' },
  { img: cycles[2].img, title: 'Kids Cycles', desc: 'Safe, colorful and sturdy cycles for children aged 3 to 12 years.' },
  { img: cycles[3].img, title: 'Ladies Cycles', desc: 'Elegant step-through frame cycles built for comfort and style.' },
  { img: cycles[4].img, title: 'Road Bikes', desc: 'Lightweight frames and thin tyres for speed on paved roads.' },
  { img: cycles[5].img, title: 'Spare Parts', desc: 'Tyres, tubes, chains, brakes and all cycle accessories in stock.' },
];

export default function Cycles() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Our Collection</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Cycles & <span className="gold-text">Spare Parts</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">From mountain trails to city streets — find the perfect ride for every age and purpose.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl font-bold text-white mb-3">Our Cycle Range</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We stock a wide range of cycles for every rider — from kids to professionals.</p>
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

      <section className="py-16 section-dark border-y border-yellow-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Why Buy Cycles From Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[['In-Store Servicing', 'We repair and service all types of cycles on-site.'],
              ['Warranty Assured', 'All cycles come with manufacturer warranty.'],
              ['Home Delivery', 'Quick delivery within the city for all orders.'],
              ['Best Prices', 'Competitive pricing with no hidden charges.']
            ].map(([label, desc]) => (
              <div key={label} className="card-premium rounded-2xl p-6">
                <p className="font-semibold text-yellow-500 mb-2">{label}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in a Cycle?</h2>
          <p className="text-gray-400 mb-8">Visit our store or reach out to us for availability, pricing and test rides.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gradient-gold text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.3)]">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-all">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
