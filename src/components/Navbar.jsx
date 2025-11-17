import { useEffect, useState } from 'react'
import { Menu, X, CreditCard } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-lg">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Harbor</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToId('features')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Features</button>
            <button onClick={() => scrollToId('about')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</button>
            <button onClick={() => scrollToId('pricing')} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Pricing</button>
            <a href="#" className="text-sm font-medium px-4 py-2 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">Sign in</a>
            <button onClick={() => scrollToId('pricing')} className="text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all">Get started</button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-2">
            <button onClick={() => scrollToId('features')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-100">Features</button>
            <button onClick={() => scrollToId('about')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-100">About</button>
            <button onClick={() => scrollToId('pricing')} className="text-left px-3 py-2 rounded-lg hover:bg-slate-100">Pricing</button>
            <div className="h-px bg-slate-200 my-2" />
            <div className="flex gap-2">
              <a href="#" className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-lg border border-slate-200">Sign in</a>
              <button onClick={() => scrollToId('pricing')} className="flex-1 text-sm font-medium px-4 py-2 rounded-lg bg-slate-900 text-white">Get started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
