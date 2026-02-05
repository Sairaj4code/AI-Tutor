import { useNavigate } from 'react-router-dom'
import './pages.css'
import Card from '../components/Card'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <section className="hero">
        <h1>Your Personalized AI Study Companion</h1>
        <p className="muted">
          AI-powered learning, adaptive study plans, and smart revision to help
          you prepare efficiently.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => navigate('/dashboard')}>
            Get Started
          </button>
        </div>
      </section>

      <section className="features">
        <Card title="AI Doubt Solving">Get instant help with concepts and problems.</Card>
        <Card title="Personalized Study Plans">Tailored schedules based on your strengths.</Card>
        <Card title="Performance Analytics">Track progress and focus areas.</Card>
      </section>
    </div>
  )
}
