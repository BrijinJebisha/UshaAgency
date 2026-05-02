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
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Our Collection</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">Cycles & <span className="text-orange-400">Spare Parts</span></h1>
            <p className="text-gray-300 max-w-xl text-lg">From mountain trails to city streets — find the perfect ride for every age and purpose.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We stock a wide range of cycles for every rider — from kids to professionals.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ img, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <img src={img} alt={title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Buy Cycles From Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[['In-Store Servicing', 'We repair and service all types of cycles on-site.'],
              ['Warranty Assured', 'All cycles come with manufacturer warranty.'],
              ['Home Delivery', 'Quick delivery within the city for all orders.'],
              ['Best Prices', 'Competitive pricing with no hidden charges.']
            ].map(([label, desc]) => (
              <div key={label} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <p className="font-semibold text-orange-400 mb-2">{label}</p>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-orange-500 text-white text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Interested in a Cycle?</h2>
          <p className="text-orange-100 mb-6">Visit our store or reach out to us for availability, pricing and test rides.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
