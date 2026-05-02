import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdVerified, MdLocalShipping, MdSupportAgent } from 'react-icons/md';
import CategoryCard from '../components/CategoryCard';
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
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(ellipse at 20% 60%, rgba(212,160,23,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(212,160,23,0.05) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block border border-yellow-700/50 text-yellow-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
              Est. 1995 · Trusted for 30 Years
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight text-shadow mb-6">
              Your Complete<br /><span className="gold-text">Retail Destination</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Cycles, sewing machines, threads, beads & tailoring accessories — everything under one roof at Usha Agency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cycles" className="gradient-gold text-black font-bold px-8 py-3.5 rounded-xl transition-all hover:opacity-90 shadow-[0_4px_20px_rgba(212,160,23,0.3)]">
                Explore Cycles
              </Link>
              <Link to="/contact" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-8 py-3.5 rounded-xl transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4">
            {[cycles[0], sewingMachines[0], stitchingItems[0], cycles[1]].map((p, i) => (
              <motion.div key={p.id + i} whileHover={{ scale: 1.04 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-900/20">
                <img src={p.img} alt={p.name} className="w-full h-44 object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-yellow-900/30 py-12 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ n: 500, s: '+', label: 'Products' }, { n: 5000, s: '+', label: 'Happy Customers' }, { n: 30, s: '+', label: 'Years Experience' }, { n: 50, s: '+', label: 'Brands' }].map(({ n, s, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold gold-text"><Counter target={n} suffix={s} /></div>
              <div className="text-sm text-gray-500 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-bold text-white mb-3">Our Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Explore our wide range of products across three major categories</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard icon="🚲" title="Cycles" desc="Mountain, kids, ladies, gear cycles & spare parts for every rider." to="/cycles" />
            <CategoryCard icon="🧵" title="Sewing Machines" desc="Manual, electric & industrial sewing machines for home and professionals." to="/sewing-machines" />
            <CategoryCard icon="🪡" title="Stitching Materials" desc="Threads, beads, lining clothes, needles & all tailoring accessories." to="/stitching-materials" />
          </div>
        </div>
      </section>

      {/* What We Stock */}
      <section className="py-24 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-4xl font-bold text-white mb-3">What We Stock</h2>
            <p className="text-gray-500">A quick overview of everything available at Usha Agency</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: cycles[0].img, title: 'Cycles', items: ['Mountain & Gear Cycles', 'Kids & Ladies Cycles', 'Road Bikes', 'Spare Parts'] },
              { img: sewingMachines[0].img, title: 'Sewing Machines', items: ['Manual Machines', 'Electric Machines', 'Industrial Machines', 'Overlock Machines'] },
              { img: stitchingItems[0].img, title: 'Stitching Materials', items: ['Threads & Beads', 'Lining Clothes', 'Needles & Pins', 'Tailoring Accessories'] },
            ].map(({ img, title, items }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-premium rounded-2xl overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img src={img} alt={title} className="w-full h-full object-cover opacity-70 hover:opacity-90 hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Promise</p>
            <h2 className="text-4xl font-bold text-white mb-3">Why Choose <span className="gold-text">Usha Agency?</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <MdVerified className="text-4xl text-yellow-500" />, title: 'Genuine Products', desc: '100% authentic products from trusted brands with warranty.' },
              { icon: <MdLocalShipping className="text-4xl text-yellow-500" />, title: 'Fast Delivery', desc: 'Quick home delivery within the city for all orders.' },
              { icon: <MdSupportAgent className="text-4xl text-yellow-500" />, title: 'Expert Support', desc: '30 years of expertise to help you choose the right product.' },
            ].map(({ icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="card-premium rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-5">{icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 section-darker">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-white mb-3">What Our Customers Say</h2>
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
      <section className="py-24 section-dark">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          </motion.div>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Site Traffic */}
      <SiteTraffic />

      {/* CTA */}
      <section className="py-24 section-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.08)_0%,transparent_70%)]" />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Visit Us?</h2>
          <p className="text-gray-400 mb-10 text-lg">Come to our store or contact us for the best deals on cycles, sewing machines & stitching materials.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="gradient-gold text-black font-bold px-10 py-3.5 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.3)]">
              Get In Touch
            </Link>
            <a href="https://wa.me/918675108599" className="border border-yellow-700/50 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-semibold px-10 py-3.5 rounded-xl transition-all">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
