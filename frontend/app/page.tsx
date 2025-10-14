
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding:40,fontFamily:'Arial, sans-serif'}}>
      <h1>Victor — MVP (Frontend)</h1>
      <p>This is a minimal Next.js starter page for the Victor platform.</p>
      <ul>
        <li><Link href="/onboarding">Onboarding (placeholder)</Link></li>
        <li><Link href="/dashboard">Unified Dashboard (placeholder)</Link></li>
      </ul>
      <p>Start the backend too and the frontend will call /api/health for a sanity check.</p>
    </main>
  )
}
