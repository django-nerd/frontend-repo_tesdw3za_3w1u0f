import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For trying Harbor with small stores',
    features: ['1 store', 'Up to 1K orders/mo', 'Basic dashboards', 'Email support']
  },
  {
    name: 'Growth',
    price: '$29/mo',
    popular: true,
    desc: 'For growing ecommerce brands',
    features: ['3 stores', 'Up to 20K orders/mo', 'All analytics', 'Priority support']
  },
  {
    name: 'Scale',
    price: 'Custom',
    desc: 'For teams that need governance',
    features: ['Unlimited stores', 'SAML/SSO', 'Audit logs', 'Dedicated manager']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.4, delay: i * 0.05 }} className={`relative rounded-2xl border ${tier.popular ? 'border-indigo-400/50' : 'border-slate-200/70'} bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all`}> 
              {tier.popular && (
                <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 shadow">Popular</span>
              )}
              <div className="text-sm text-slate-500">{tier.name}</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900">{tier.price}</div>
              <p className="mt-2 text-sm text-slate-600">{tier.desc}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="h-5 w-5 grid place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${tier.popular ? 'bg-slate-900 text-white hover:-translate-y-0.5 hover:shadow-lg' : 'border border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>Choose {tier.name}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
