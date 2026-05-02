import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-900/30 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Usha Agency Logo" className="w-11 h-11" />
            <span className="text-white font-bold text-xl tracking-widest">USHA <span className="gold-text">AGENCY</span></span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">Your trusted destination for cycles, sewing machines, and all stitching essentials since 1995.</p>
          <div className="flex gap-3 mt-6">
            {[FaFacebook, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-yellow-900/40 flex items-center justify-center hover:border-yellow-500 hover:text-yellow-400 transition-all text-sm">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[['/', 'Home'], ['/cycles', 'Cycles'], ['/sewing-machines', 'Sewing Machines'], ['/stitching-materials', 'Stitching Materials'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-yellow-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Products</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            {['Mountain Cycles', 'Kids & Ladies Cycles', 'Gear Cycles', 'Manual Sewing Machines', 'Electric Machines', 'Threads & Beads', 'Lining Clothes', 'Tailoring Accessories'].map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start"><FaMapMarkerAlt className="text-yellow-600 mt-0.5 shrink-0" /><span>Usha Agency, Choozhal, KK dist, Tamil Nadu – 629153</span></li>
            <li className="flex gap-3 items-center"><FaPhone className="text-yellow-600 shrink-0" /><a href="tel:+919876543210" className="hover:text-yellow-400 transition-colors">+91 98765 43210</a></li>
            <li className="flex gap-3 items-center"><FaEnvelope className="text-yellow-600 shrink-0" /><a href="mailto:info@ushaagency.com" className="hover:text-yellow-400 transition-colors">info@ushaagency.com</a></li>
            <li className="flex gap-3 items-center"><FaWhatsapp className="text-green-500 shrink-0" /><a href="https://wa.me/918675108599" className="hover:text-green-400 transition-colors">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-yellow-900/20 text-center py-5 text-xs text-gray-600">
        © {new Date().getFullYear()} Usha Agency. All rights reserved.
      </div>
    </footer>
  );
}
