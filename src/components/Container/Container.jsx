import { useState } from 'react'
import { Stats } from '../Stats/Stats'
import { Textarea } from '../Textarea/Textarea'

export const Container = () => {
  const [text, setText] = useState('')
  const stats = {
    numberOfWords: text.split(/\s+/).filter(Boolean).length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: 280 - text.length,
    facebookCharactersLeft: 2200 - text.length,
  }
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats {...stats} />
    </main>
  )
}
