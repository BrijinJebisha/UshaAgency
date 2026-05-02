import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sewingMachines } from '../data/products';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = [
  { img: sewingMachines[0].img, title: 'Manual Machines', desc: 'Classic hand-operated sewing machines — reliable, portable and perfect for basic stitching at home.' },
  { img: sewingMachines[1].img, title: 'Electric Machines', desc: 'Motorized machines with multiple stitch patterns, ideal for home tailors and boutique owners.' },
  { img: sewingMachines[2].img, title: 'Industrial Machines', desc: 'Heavy-duty high-speed machines built for continuous production in garment factories.' },
  { img: sewingMachines[3].img, title: 'Overlock Machines', desc: 'Finish fabric edges cleanly with professional 3-thread and 5-thread overlock machines.' },
  { img: sewingMachines[4].img, title: 'Embroidery Machines', desc: 'Computerized embroidery machines for intricate designs and decorative stitching.' },
  { img: sewingMachines[5].img, title: 'Machine Spare Parts', desc: 'Needles, bobbins, presser feet, belts and all spare parts for major brands.' },
];

const brands = ['Usha', 'Singer', 'Brother', 'Janome', 'Juki'];

export default function SewingMachines() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Premium Collection</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">Sewing <span className="gold-text">Machines</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">From home stitching to industrial production — we have the perfect machine for every need.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl font-bold text-white mb-3">Our Machine Range</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A complete range of sewing machines for home users, tailors and industrial units.</p>
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
          <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Trusted Names</p>
          <h2 className="text-3xl font-bold text-white mb-10">Brands We Carry</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map(b => (
              <div key={b} className="card-premium border border-yellow-900/30 hover:border-yellow-600 text-yellow-400 font-bold px-10 py-4 rounded-2xl text-lg transition-all">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.06)_0%,transparent_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Looking for a Sewing Machine?</h2>
          <p className="text-gray-400 mb-8">Visit our store or contact us to find the right machine for your needs and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gradient-gold text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.3)]">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-8 py-3 rounded-xl transition-all">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
