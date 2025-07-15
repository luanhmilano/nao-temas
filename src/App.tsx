import VerseDisplay from "./components/VerseDisplay/VerseDisplay"
import Footer from "./components/Footer/Footer"
import LiturgyDisplay from "./components/LiturgyDisplay/LiturgyDisplay"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <NavBar />
      <div className="pt-20 flex flex-col items-center p-4 space-y-16">
        <main id="verses" className="w-full max-w-3xl">
          <VerseDisplay />
        </main>
        <section id="liturgy">
          <LiturgyDisplay />
        </section>
        <About />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
