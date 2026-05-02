import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBicycle, FaCut } from 'react-icons/fa';
import { GiSewingMachine } from 'react-icons/gi';
import { MdVerified, MdLocalShipping, MdSupportAgent } from 'react-icons/md';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import SiteTraffic from '../components/SiteTraffic';
import { cycles, sewingMachines, stitchingItems, testimonials, faqs } from '../data/products';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 25);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const featured = [...cycles.slice(0, 2), ...sewingMachines.slice(0, 2), ...stitchingItems.slice(0, 2)];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Est. 1995 · Trusted for 30 Years
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow mb-5">
              Your Complete<br /><span className="text-orange-400">Retail Destination</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Cycles, sewing machines, threads, beads & tailoring accessories — everything under one roof at Usha Agency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cycles" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-xl transition-colors shadow-lg">
                Shop Cycles
              </Link>
              <Link to="/contact" className="border border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-semibold px-7 py-3 rounded-xl transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4">
            {[cycles[0], sewingMachines[0], stitchingItems[0], cycles[1]].map((p, i) => (
              <motion.div key={p.id + i} whileHover={{ scale: 1.04 }} className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[{ n: 500, s: '+', label: 'Products' }, { n: 5000, s: '+', label: 'Happy Customers' }, { n: 30, s: '+', label: 'Years Experience' }, { n: 50, s: '+', label: 'Brands' }].map(({ n, s, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold"><Counter target={n} suffix={s} /></div>
              <div className="text-sm opacity-80 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Explore our wide range of products across three major categories</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard icon="🚲" title="Cycles" desc="Mountain, kids, ladies, gear cycles & spare parts for every rider." to="/cycles" color="bg-gradient-to-br from-blue-800 to-blue-600" />
            <CategoryCard icon="🧵" title="Sewing Machines" desc="Manual, electric & industrial sewing machines for home and professionals." to="/sewing-machines" color="gradient-maroon" />
            <CategoryCard icon="🪡" title="Stitching Materials" desc="Threads, beads, lining clothes, needles & all tailoring accessories." to="/stitching-materials" color="bg-gradient-to-br from-amber-700 to-amber-500" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Products</h2>
            <p className="text-gray-500">Handpicked bestsellers from our collection</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <motion.div key={p.id + i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">Why Choose <span className="text-orange-400">Usha Agency?</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MdVerified className="text-4xl text-orange-400" />, title: 'Genuine Products', desc: '100% authentic products from trusted brands with warranty.' },
              { icon: <MdLocalShipping className="text-4xl text-orange-400" />, title: 'Fast Delivery', desc: 'Quick home delivery within the city for all orders.' },
              { icon: <MdSupportAgent className="text-4xl text-orange-400" />, title: 'Expert Support', desc: '30 years of expertise to help you choose the right product.' },
            ].map(({ icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          </motion.div>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Site Traffic */}
      <SiteTraffic />

      {/* CTA */}
      <section className="py-20 bg-orange-500">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-orange-100 mb-8 text-lg">Visit us in-store or contact us for the best deals on cycles, sewing machines & stitching materials.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
              Get In Touch
            </Link>
            <a href="https://wa.me/918675108599" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
