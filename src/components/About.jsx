import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-semibold text-slate-900">2.1M+</div>
                  <div className="text-xs text-slate-500">Orders tracked</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900">$740M</div>
                  <div className="text-xs text-slate-500">Payments reconciled</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900">99.99%</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">Built for calm commerce</h3>
            <p className="mt-4 text-slate-600">Harbor is a modern commerce command center that blends fintech‑grade security with a minimalist, glass‑morphic design. It eliminates noisy charts and replaces them with focused, actionable insights.</p>
            <p className="mt-4 text-slate-600">From real‑time revenue to shipping health, every surface is optimized for clarity. No copy‑pasting CSVs. No tab‑hopping. Just the signal you need.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
