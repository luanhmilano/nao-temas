import { useEffect, useState } from 'react'
import type { Verse } from '../../types/verse.type'
import versesData from '../../assets/verses.json'

function VerseDisplay() {
  const [verse, setVerse] = useState<Verse | null>(null)

  const getRandomVerse = () => {
    const totalVerses = versesData.length
    const randomIndex = Math.floor(Math.random() * totalVerses)
    setVerse(versesData[randomIndex])
  }

  const copyVerse = () => {
    if (verse) {
      navigator.clipboard.writeText(`"${verse.text}" — ${verse.reference}`)
    }
  }

  useEffect(() => {
    getRandomVerse()
  }, [])

  if (!verse) {
    return <div>Carregando versículo...</div>;
  }

  return (
    <section>
        <blockquote className='text-center'>
            <p className="text-2xl italic">"{verse.text}"</p>
            <footer className="mt-4 text-lg">— {verse.reference}</footer>
        </blockquote>
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={getRandomVerse}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
          >
            Gerar Novo Versículo
          </button>
          <button 
            onClick={copyVerse}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors"
          >
            Copiar Texto
          </button>
        </div>
    </section>
  )
}

export default VerseDisplay