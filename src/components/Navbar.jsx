import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/cycles', label: 'Cycles' },
  { to: '/sewing-machines', label: 'Sewing Machines' },
  { to: '/stitching-materials', label: 'Stitching Materials' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(212,160,23,0.1)] border-b border-yellow-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Usha Agency Logo" className="w-11 h-11" />
          <span className="font-bold text-xl tracking-widest text-white">USHA <span className="gold-text">AGENCY</span></span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${pathname === l.to ? 'gold-text border-b border-yellow-600' : 'text-gray-400 hover:text-yellow-400'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(o => !o)} className="lg:hidden text-yellow-500 text-2xl p-1">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-black/98 backdrop-blur border-t border-yellow-900/30 px-6 pb-4">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`block py-3 text-sm font-medium tracking-wide border-b border-yellow-900/20 ${pathname === l.to ? 'text-yellow-400' : 'text-gray-400'}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
