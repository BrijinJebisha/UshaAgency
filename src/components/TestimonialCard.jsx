import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-premium rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(212,160,23,0.12)] transition-all">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => <FaStar key={i} className="text-yellow-500 text-sm" />)}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-black font-bold text-sm">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
