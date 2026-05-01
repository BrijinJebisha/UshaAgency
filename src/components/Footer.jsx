import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Usha Agency Logo" className="w-10 h-10" />
            <span className="text-white font-bold text-xl">Usha <span className="text-orange-400">Agency</span></span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">Your trusted destination for cycles, sewing machines, and all stitching essentials since 1995.</p>
          <div className="flex gap-3 mt-5">
            {[FaFacebook, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors text-sm">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/cycles', 'Cycles'], ['/sewing-machines', 'Sewing Machines'], ['/stitching-materials', 'Stitching Materials'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-orange-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Products</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Mountain Cycles', 'Kids & Ladies Cycles', 'Gear Cycles', 'Manual Sewing Machines', 'Electric Machines', 'Threads & Beads', 'Lining Clothes', 'Tailoring Accessories'].map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start"><FaMapMarkerAlt className="text-orange-400 mt-0.5 shrink-0" /><span>123 Main Bazaar Road, Town Center, City – 600001</span></li>
            <li className="flex gap-3 items-center"><FaPhone className="text-orange-400 shrink-0" /><a href="tel:+919876543210" className="hover:text-orange-400">+91 98765 43210</a></li>
            <li className="flex gap-3 items-center"><FaEnvelope className="text-orange-400 shrink-0" /><a href="mailto:info@ushaagency.com" className="hover:text-orange-400">info@ushaagency.com</a></li>
            <li className="flex gap-3 items-center"><FaWhatsapp className="text-green-400 shrink-0" /><a href="https://wa.me/918675108599" className="hover:text-green-400">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Usha Agency. All rights reserved.
      </div>
    </footer>
  );
}
