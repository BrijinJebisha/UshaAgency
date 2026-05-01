import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdPeople, MdTrendingUp, MdVisibility } from 'react-icons/md';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const BASE = 'https://api.counterapi.dev/v1/usha-agency';

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n?.toString() ?? '—';
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function SiteTraffic() {
  const [totalVisits, setTotalVisits] = useState(null);
  const [todayVisits, setTodayVisits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todayKey = getTodayKey();
    const storageKey = `usha-visited-${todayKey}`;
    const alreadyVisited = sessionStorage.getItem(storageKey);

    const totalUrl = alreadyVisited
      ? `${BASE}/total-visits/get`
      : `${BASE}/total-visits/up`;

    const todayUrl = alreadyVisited
      ? `${BASE}/visits-${todayKey}/get`
      : `${BASE}/visits-${todayKey}/up`;

    Promise.all([
      fetch(totalUrl).then(r => r.json()),
      fetch(todayUrl).then(r => r.json()),
    ])
      .then(([total, today]) => {
        setTotalVisits(total.count);
        setTodayVisits(today.count);
        sessionStorage.setItem(storageKey, '1');
      })
      .catch(() => {
        setTotalVisits('—');
        setTodayVisits('—');
      })
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { icon: <MdPeople className="text-3xl text-orange-400" />, label: 'Total Visitors', value: loading ? '...' : formatNumber(totalVisits) },
    { icon: <MdVisibility className="text-3xl text-orange-400" />, label: "Today's Visitors", value: loading ? '...' : formatNumber(todayVisits) },
    { icon: <MdTrendingUp className="text-3xl text-orange-400" />, label: 'You are Visitor #', value: loading ? '...' : formatNumber(totalVisits) },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Site Traffic</h2>
          <p className="text-gray-400 text-sm">Real-time visitor statistics for Usha Agency</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ icon, label, value }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-3">{icon}</div>
              <div className="text-4xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-6">Powered by CounterAPI · Updates on every unique visit</p>
      </div>
    </section>
  );
}
