import Hero from './Hero'
import Gallery from './Gallery'
import Philosophy from './Philosophy'
import About from './About'
import Exhibitions from './Exhibitions'
import Atelier from './Atelier'
import Contact from './Contact'
import Navigation from './Navigation'

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="w-full py-8 flex justify-center animate-fadeIn">
        <img
          src="/images/Logo_PaoloBosi2-removebg-preview.png"
          alt="Paolo Bosi Logo"
          className="h-16 w-auto"
        />
      </header>
      <Navigation />
      <div className="flex h-full grow flex-col">
        <div id="hero">
          <Hero />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="philosophy">
          <Philosophy />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="exhibitions">
          <Exhibitions />
        </div>
        <div id="atelier">
          <Atelier />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
