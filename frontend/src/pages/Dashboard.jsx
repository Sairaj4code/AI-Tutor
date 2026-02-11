import { useNavigate } from 'react-router-dom'
import './pages.css'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Welcome Section */}
        <header className="dashboard-header">
          <div className="header-content">
            <h1>Welcome back, Alex!</h1>
            <p className="muted">You're on a 3-day streak 🔥 Keep it up!</p>
          </div>
          <button className="btn primary">Start Learning</button>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon red">📉</div>
            <div className="stat-info">
              <h3>Weak Topics</h3>
              <p>Algebra, Physics</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon blue">📊</div>
            <div className="stat-info">
              <h3>Accuracy</h3>
              <p>72%</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon green">⏰</div>
            <div className="stat-info">
              <h3>Next Session</h3>
              <p>Today, 6:00 PM</p>
            </div>
          </div>
        </section>

        {/* Today's Focus */}
        <section className="focus-section">
          <div className="section-header">
            <h2>Today's Focus</h2>
            <button className="btn secondary small">View Full Plan</button>
          </div>
          
          <div className="focus-list">
            <div className="focus-item completed">
              <div className="check-circle">✓</div>
              <div className="focus-details">
                <h4>Revise Algebra</h4>
                <span className="muted">45 mins • Completed</span>
              </div>
            </div>
            <div className="focus-item">
              <div className="check-circle empty"></div>
              <div className="focus-details">
                <h4>Physics Numericals</h4>
                <span className="muted">30 mins • Pending</span>
              </div>
            </div>
            <div className="focus-item">
              <div className="check-circle empty"></div>
              <div className="focus-details">
                <h4>Quick Revision</h4>
                <span className="muted">15 mins • Scheduled</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
