import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const timeline = [
  { year: '1995', event: 'Usha Agency founded with a small cycle shop in the heart of the city.' },
  { year: '2002', event: 'Expanded to include sewing machines and tailoring accessories.' },
  { year: '2010', event: 'Opened a larger showroom with 500+ products across all categories.' },
  { year: '2018', event: 'Introduced online enquiry and home delivery services.' },
  { year: '2024', event: 'Serving 5000+ happy customers with 30 years of trusted retail experience.' },
];

export default function About() {
  return (
    <>
      <section className="gradient-hero pt-28 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,160,23,0.07)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-yellow-600 text-xs font-semibold uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl font-bold mt-3 mb-4">About <span className="gold-text">Usha Agency</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg">Three decades of trust, quality, and service to our community.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-4xl font-bold text-white mb-6">A Legacy Built on <span className="gold-text">Trust</span></h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Founded in 1995, Usha Agency started as a humble cycle shop with a vision to provide quality products at honest prices. Over three decades, we have grown into a comprehensive retail destination serving thousands of families.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Today, we offer an extensive range of cycles, sewing machines, threads, beads, lining clothes, and all tailoring accessories — making us the one-stop shop for both sports enthusiasts and creative professionals.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our commitment to genuine products, fair pricing, and exceptional customer service has earned us the trust of over 5,000 loyal customers across the region.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { n: '30+', label: 'Years Experience' },
              { n: '5000+', label: 'Happy Customers' },
              { n: '500+', label: 'Products' },
              { n: '50+', label: 'Brands' },
            ].map(({ n, label }) => (
              <div key={label} className="card-premium rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gold-text mb-1">{n}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 section-dark border-y border-yellow-900/20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            { title: 'Our Mission', text: 'To provide high-quality cycles, sewing machines, and stitching materials at affordable prices, backed by expert guidance and reliable after-sales service.' },
            { title: 'Our Vision', text: 'To be the most trusted retail destination in the region, empowering every household with the best products for mobility, creativity, and craftsmanship.' },
          ].map(({ title, text }) => (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="card-premium rounded-2xl p-8">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 section-darker">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-yellow-600 text-xs font-semibold uppercase tracking-widest mb-3">Milestones</p>
            <h2 className="text-4xl font-bold text-white">Our Journey</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-yellow-900/40" />
            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <motion.div key={year} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full gradient-gold text-black flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-[0_0_15px_rgba(212,160,23,0.3)]">
                    {year.slice(2)}
                  </div>
                  <div className="card-premium rounded-xl p-4 flex-1">
                    <span className="text-yellow-500 font-bold text-sm">{year}</span>
                    <p className="text-gray-400 mt-1 text-sm">{event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
