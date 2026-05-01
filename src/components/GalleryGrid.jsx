import { motion } from 'framer-motion';

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }} viewport={{ once: true }}
          className="relative group overflow-hidden rounded-2xl aspect-square">
          <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-white font-semibold text-sm">{img.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
