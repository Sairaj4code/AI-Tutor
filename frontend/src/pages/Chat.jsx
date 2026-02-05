import { useState } from 'react'
import './pages.css'

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! How can I help with your studies today?' },
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    setMessages((m) => [...m, userMsg])
    setInput('')

    setTimeout(() => {
      setMessages((m) => [...m, { from: 'ai', text: 'Based on your recent performance, you should revise Algebra today.' }])
    }, 600)
  }

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>
            <div className="bubble">{m.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask the AI..." onKeyDown={(e) => e.key === 'Enter' && send()} />
        <button className="btn primary" onClick={send}>Send</button>
      </div>
    </div>
  )
}
