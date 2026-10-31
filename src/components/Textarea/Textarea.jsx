import { useState } from 'react'

export const Textarea = () => {
  // Controlled textarea component with Event handling and state management
  const [text, setText] = useState('')
  return (
    <textarea
      value={text}
      onChange={(e) => {
        const newText = e.target.value
        setText(newText)
        console.log('Textarea value changed:', newText)
      }}
      className="textarea"
      placeholder="Enter your text here..."
      spellCheck={false}
    />
  )
}
