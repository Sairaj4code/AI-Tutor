import { useNavigate } from 'react-router-dom'
import './pages.css'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="page-container" style={{ background: 'var(--bg-dark)' }}>
      <div style={{ width: '100%', padding: '4rem 2rem', textAlign: 'center' }}>
        <section className="hero">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Master Your Exams with AI
          </h1>
          <p className="muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Adaptive study plans, instant doubt solving, and smart analytics to help you learn faster and better.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }} onClick={() => navigate('/dashboard')}>
              Get Started for Free
            </button>
          </div>
        </section>

        <section className="stats-grid" style={{ marginTop: '5rem' }}>
          <div className="stat-card">
            <h3>AI Doubt Solving</h3>
            <p className="muted">Instant answers to your complex questions.</p>
          </div>
          <div className="stat-card">
            <h3>Smart Plans</h3>
            <p className="muted">Schedules that adapt to your pace.</p>
          </div>
          <div className="stat-card">
            <h3>Analytics</h3>
            <p className="muted">Visualize your growth over time.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
