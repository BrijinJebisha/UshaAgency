import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = [
  { icon: '🧵', title: 'Manual Machines', desc: 'Classic hand-operated sewing machines — reliable, portable and perfect for basic stitching at home.' },
  { icon: '⚡', title: 'Electric Machines', desc: 'Motorized machines with multiple stitch patterns, ideal for home tailors and boutique owners.' },
  { icon: '🏭', title: 'Industrial Machines', desc: 'Heavy-duty high-speed machines built for continuous production in garment factories.' },
  { icon: '🔗', title: 'Overlock Machines', desc: 'Finish fabric edges cleanly with professional 3-thread and 5-thread overlock machines.' },
  { icon: '🪡', title: 'Embroidery Machines', desc: 'Computerized embroidery machines for intricate designs and decorative stitching.' },
  { icon: '🔩', title: 'Machine Spare Parts', desc: 'Needles, bobbins, presser feet, belts and all spare parts for major brands.' },
];

const brands = ['Usha', 'Singer', 'Brother', 'Janome', 'Juki'];

export default function SewingMachines() {
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

      {/* Category Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A complete range of sewing machines for home users, tailors and industrial units.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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

      {/* CTA */}
      <section className="py-14 bg-red-900 text-white text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Looking for a Sewing Machine?</h2>
          <p className="text-red-200 mb-6">Visit our store or contact us to find the right machine for your needs and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-red-800 font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors">Contact Us</Link>
            <a href="https://wa.me/918675108599" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">WhatsApp Us</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
