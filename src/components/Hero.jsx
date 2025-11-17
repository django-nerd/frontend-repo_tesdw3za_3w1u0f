import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-gradient-to-b from-sky-200/50 via-indigo-200/30 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Harbor — The Ecommerce Dashboard that feels like a harbor
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-slate-600">
              Monitor payments, shipments, inventory and customers in one calm, glass‑morphic workspace. Real‑time insights, delightful interactions, and zero clutter.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 transition-all">Start free</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium hover:shadow-sm hover:border-slate-300 transition-all">See features</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 text-sm text-slate-500">
              No credit card required • 14‑day trial • Cancel anytime
            </motion.div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_60px_-15px_rgba(30,41,59,0.3)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}
