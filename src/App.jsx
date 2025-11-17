import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
