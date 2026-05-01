import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };

  if (sent) return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
      <div className="text-4xl mb-3">✅</div>
      <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
      <p className="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
    </div>
  );

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required className={inputCls} />
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required className={inputCls} />
      </div>
      <input name="phone" value={form.phone} onChange={handle} placeholder="Phone Number" className={inputCls} />
      <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message" rows={4} required className={inputCls + ' resize-none'} />
      <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors">
        Send Message
      </button>
    </form>
  );
}
