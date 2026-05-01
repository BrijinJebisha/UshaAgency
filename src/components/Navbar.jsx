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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Usha Agency Logo" className="w-10 h-10" />
          <span className="text-white font-bold text-xl tracking-wide">Usha <span className="text-orange-400">Agency</span></span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === l.to ? 'text-orange-400 bg-white/10' : 'text-gray-200 hover:text-orange-400 hover:bg-white/10'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(o => !o)} className="lg:hidden text-white text-2xl p-1">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur border-t border-white/10 px-4 pb-4">
            {links.map(l => (
              <Link key={l.to} to={l.to} className={`block py-3 text-sm font-medium border-b border-white/5 ${pathname === l.to ? 'text-orange-400' : 'text-gray-200'}`}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
