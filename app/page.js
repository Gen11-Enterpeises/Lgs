import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import VisionMission from '@/components/VisionMission'
import Motto from '@/components/Motto'
import Features from '@/components/Features'
import Academics from '@/components/Academics'
import Infrastructure from '@/components/Infrastructure'
import Leadership from '@/components/Leadership'
import Stats from '@/components/Stats'
import Voices from '@/components/Voices'
import Admissions from '@/components/Admissions'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageEffects from '@/components/PageEffects'

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Motto />
      <Features />
      <Academics />
      <Infrastructure />
      <Leadership />
      <Stats />
      <Voices />
      <Admissions />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
