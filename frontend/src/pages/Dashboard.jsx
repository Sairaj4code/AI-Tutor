import { useNavigate } from 'react-router-dom'
import './pages.css'
import Card from '../components/Card'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">
      <h2>Welcome back, Student 👋</h2>

      <section className="summary">
        <Card title={<><span className="icon">📉</span> Weak Topics</>}>
          Algebra, Physics
        </Card>
        <Card title={<><span className="icon">📊</span> Accuracy</>}>
          72%
        </Card>
        <Card title={<><span className="icon">⏰</span> Next Study Session</>}>
          Today, 6:00 PM
        </Card>
      </section>

      <div className="dashboard-actions">
        <button className="btn primary" onClick={() => navigate('/chat')}>Ask AI</button>
        <button className="btn secondary" onClick={() => window.scrollTo({ top: 9999, behavior: 'smooth' })}>View Study Plan</button>
      </div>

      <section className="study-plan">
        <h3>Today's Study Plan</h3>
        <div className="plan-card">
          <div className="plan-row"><div className="plan-checkbox">✓</div><div className="plan-text">Revise Algebra – 45 mins</div></div>
          <div className="plan-row"><div className="plan-checkbox">⧗</div><div className="plan-text">Practice Physics numericals – 30 mins</div></div>
          <div className="plan-row"><div className="plan-checkbox">⚡</div><div className="plan-text">Quick revision – 15 mins</div></div>
        </div>
      </section>
    </div>
  )
}
