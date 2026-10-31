import { useState } from 'react'

export const Textarea = () => {
  // Controlled textarea component with Event handling and state management
  const [text, setText] = useState('')

  const handleChange = (e) => {
    let newText = e.target.value
    // Example of textarea validation: Prevent script tags from being entered
    if (newText.includes('<script>')) {
      alert('No script tags allowed!')
      newText = newText.replace('<script>', '')
    }

    setText(newText)
  }

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="textarea"
      placeholder="Enter your text here..."
      spellCheck={false}
    />
  )
}
