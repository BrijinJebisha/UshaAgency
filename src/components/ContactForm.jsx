import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };

  if (sent) return (
    <div className="card-premium border border-yellow-900/30 rounded-2xl p-10 text-center">
      <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center text-black text-2xl font-bold mx-auto mb-4">✓</div>
      <h3 className="text-lg font-semibold text-white mb-1">Message Sent!</h3>
      <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
    </div>
  );

  const inputCls = "w-full bg-black/40 border border-yellow-900/30 focus:border-yellow-600 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none transition-colors";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required className={inputCls} />
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required className={inputCls} />
      </div>
      <input name="phone" value={form.phone} onChange={handle} placeholder="Phone Number" className={inputCls} />
      <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message" rows={5} required className={inputCls + ' resize-none'} />
      <button type="submit" className="w-full gradient-gold text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(212,160,23,0.25)]">
        Send Message
      </button>
    </form>
  );
}
