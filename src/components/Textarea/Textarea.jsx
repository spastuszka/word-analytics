import { useState } from 'react'

export const Textarea = () => {
  // Controlled textarea component with Event handling and state management
  const [text, setText] = useState('')
  return (
    <textarea
      value={text}
      onChange={(e) => {
        let newText = e.target.value
        // Example of input validation: Prevent script tags from being entered
        if (newText.includes('<script>')) {
          alert('No script tags allowed!')
          newText = newText.replace('<script>', '')
        }

        setText(newText)
        console.log('Textarea value changed:', newText)
      }}
      className="textarea"
      placeholder="Enter your text here..."
      spellCheck={false}
    />
  )
}
