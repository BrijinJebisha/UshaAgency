import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => <FaStar key={i} className="text-orange-400 text-sm" />)}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
          {testimonial.name[0]}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
