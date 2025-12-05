import Hero from './Hero'
import Gallery from './Gallery'
import Philosophy from './Philosophy'
import About from './About'
import Exhibitions from './Exhibitions'
import Atelier from './Atelier'
import Contact from './Contact'

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
      <div className="flex h-full grow flex-col">
        <Hero />
        <Gallery />
        <Philosophy />
        <About />
        <Exhibitions />
        <Atelier />
        <Contact />
      </div>
    </div>
  )
}

export default App
