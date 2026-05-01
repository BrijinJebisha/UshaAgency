import { motion } from 'framer-motion';

export default function ProductCard({ product, accentColor = 'orange' }) {
  const accent = accentColor === 'maroon' ? 'bg-red-800 text-white' : 'bg-orange-500 text-white';
  const btn = accentColor === 'maroon' ? 'bg-red-800 hover:bg-red-700' : 'bg-orange-500 hover:bg-orange-600';

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative overflow-hidden h-52">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        {product.badge && <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full ${accent}`}>{product.badge}</span>}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 text-base mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <button className={`text-white text-xs px-3 py-1.5 rounded-lg transition-colors ${btn}`}>Enquire</button>
        </div>
      </div>
    </motion.div>
  );
}
