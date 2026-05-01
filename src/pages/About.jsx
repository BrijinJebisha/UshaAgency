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
      <section className="gradient-hero pt-28 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl font-bold mt-2 mb-4">About <span className="text-orange-400">Usha Agency</span></h1>
            <p className="text-gray-300 max-w-2xl text-lg">Three decades of trust, quality, and service to our community.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">A Legacy Built on <span className="text-orange-500">Trust</span></h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1995, Usha Agency started as a humble cycle shop with a vision to provide quality products at honest prices. Over three decades, we have grown into a comprehensive retail destination serving thousands of families.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today, we offer an extensive range of cycles, sewing machines, threads, beads, lining clothes, and all tailoring accessories — making us the one-stop shop for both sports enthusiasts and creative professionals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to genuine products, fair pricing, and exceptional customer service has earned us the trust of over 5,000 loyal customers across the region.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              { n: '30+', label: 'Years Experience', color: 'bg-orange-500' },
              { n: '5000+', label: 'Happy Customers', color: 'bg-blue-600' },
              { n: '500+', label: 'Products', color: 'bg-red-700' },
              { n: '50+', label: 'Brands', color: 'bg-amber-600' },
            ].map(({ n, label, color }) => (
              <div key={label} className={`${color} text-white rounded-2xl p-6 text-center`}>
                <div className="text-3xl font-bold mb-1">{n}</div>
                <div className="text-sm opacity-90">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {[
            { title: '🎯 Our Mission', text: 'To provide high-quality cycles, sewing machines, and stitching materials at affordable prices, backed by expert guidance and reliable after-sales service.' },
            { title: '🌟 Our Vision', text: 'To be the most trusted retail destination in the region, empowering every household with the best products for mobility, creativity, and craftsmanship.' },
          ].map(({ title, text }) => (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <motion.div key={year} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 z-10">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1">
                    <span className="text-orange-500 font-bold text-sm">{year}</span>
                    <p className="text-gray-700 mt-1 text-sm">{event}</p>
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
