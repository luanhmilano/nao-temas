import { useEffect, useState } from 'react'
import type { Verse } from '../../types/verse.type'
import versesData from '../../assets/verses.json'

function VerseDisplay() {
  const [verse, setVerse] = useState<Verse | null>(null)

  useEffect(() => {
    const totalVerses = versesData.length
    const randomIndex = Math.floor(Math.random() * totalVerses)
    const randomVerse = versesData[randomIndex]

    setTimeout(() => {
      setVerse(randomVerse);
    }, 500);
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
    </section>
  )
}

export default VerseDisplay