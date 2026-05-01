import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CategoryCard({ icon, title, desc, to, color }) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Link to={to} className={`block rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow ${color}`}>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
        <div className="mt-4 text-sm font-semibold underline underline-offset-2 opacity-90">Explore →</div>
      </Link>
    </motion.div>
  );
}
