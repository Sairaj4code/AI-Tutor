import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pages.css'

export default function Chat() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: 'Hello! I am your AI Study Companion. How can I help you with your preparation today?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now(), type: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        type: 'ai', 
        text: "That's a great question. Let's break it down step by step..." 
      }])
    }, 1000)
  }

  return (
    <div className="dashboard-page">
      <div className="chat-layout-container">
        <div className="chat-header">
          <h1>AI Study Companion</h1>
          <p className="muted">Ask me anything about your subjects. I'm here to help!</p>
        </div>

        <div className="chat-card">
          <div className="chat-messages-area">
            {messages.map(msg => (
              <div key={msg.id} className={`message-wrapper ${msg.type}`}>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSend} className="chat-input-container">
            <input 
              className="chat-input-field" 
              placeholder="Ask a doubt..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn primary send-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}