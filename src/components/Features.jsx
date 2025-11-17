import { motion } from 'framer-motion'
import { Shield, BarChart3, Truck, Sparkles, Activity, Wallet } from 'lucide-react'

const items = [
  {
    icon: BarChart3,
    title: 'Real‑time Analytics',
    desc: 'Stay on top of revenue, AOV, and conversion with live, streaming dashboards.'
  },
  {
    icon: Truck,
    title: 'Logistics Overview',
    desc: 'Track shipments end‑to‑end with delay alerts and courier performance.'
  },
  {
    icon: Wallet,
    title: 'Unified Payments',
    desc: 'Connect Stripe, PayPal and more — reconcile payouts automatically.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Role‑based access, SSO, audit logs and encryption everywhere.'
  },
  {
    icon: Activity,
    title: 'Health checks',
    desc: 'Uptime monitors and anomaly detection keep your store sailing smooth.'
  },
  {
    icon: Sparkles,
    title: 'Polished UX',
    desc: 'Glassmorphism, buttery hovers and motion that never gets in the way.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to run ecommerce at scale</h2>
          <p className="mt-4 text-slate-600">Insights, automation and governance in one calm interface.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur hover:bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white grid place-items-center shadow-md group-hover:shadow-lg transition-shadow">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
