import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Features from '@/components/Features'
import StartProject from '@/components/StartProject'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <StartProject />
      </main>
      <Footer />
    </>
  )
}
