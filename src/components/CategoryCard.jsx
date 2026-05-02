import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CategoryCard({ icon, title, desc, to }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Link to={to} className="block rounded-2xl p-7 text-white card-premium group">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        <div className="mt-5 text-sm font-semibold text-yellow-600 group-hover:text-yellow-400 transition-colors tracking-wide">Explore →</div>
      </Link>
    </motion.div>
  );
}
