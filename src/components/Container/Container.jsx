import { useState } from 'react'
import { Stats } from '../Stats/Stats'
import { Textarea } from '../Textarea/Textarea'
import {
  TWITTER_CHARACTER_LIMIT,
  META_CHARACTER_LIMIT,
} from '../../lib/constants'

export const Container = () => {
  const [text, setText] = useState('')
  const stats = {
    numberOfWords: text.split(/\s+/).filter(Boolean).length,
    numberOfCharacters: text.length,
    twitterCharactersLeft: TWITTER_CHARACTER_LIMIT - text.length,
    metaCharactersLeft: META_CHARACTER_LIMIT - text.length,
  }
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats {...stats} />
    </main>
  )
}
