import { useState } from 'react'
import { Warning } from '../Warning/Warning'

const RULES = [
  { pattern: /<\/?script[^>]*>/gi, message: 'No script tags allowed!' },
  { pattern: /<\/?[a-z][^>]*>/gi, message: 'No HTML tags allowed!' },
  { pattern: /@/g, message: 'No @ symbols allowed!' },
  { pattern: /https?:\/\/\S+/gi, message: 'No links allowed!' },
]

export const Textarea = () => {
  // Controlled textarea component with Event handling and state management
  const [text, setText] = useState('')
  const [warning, setWarning] = useState('')

  const handleChange = (e) => {
    let newText = e.target.value
    const messages = []
    for (const { pattern, message } of RULES) {
      if (pattern.test(newText)) {
        messages.push(message)
        newText = newText.replace(pattern, '')
      }
      pattern.lastIndex = 0
    }
    setWarning(messages.join(' '))
    setText(newText)
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        spellCheck={false}
      />
      {warning && <Warning err={warning} />}
    </div>
  )
}
