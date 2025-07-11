import VerseDisplay from "./components/VerseDisplay/VerseDisplay"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-center items-center p-4">
      <main className="w-full max-w-3xl">
        <VerseDisplay />
      </main>

      <Footer />
    </div>
  )
}

export default App
