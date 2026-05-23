export default function DebugPage() {
  const showDrafts = process.env.SHOW_DRAFTS
  const nodeEnv = process.env.NODE_ENV
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug Info</h1>
      <ul className="space-y-2">
        <li>SHOW_DRAFTS: {showDrafts || 'not set'}</li>
        <li>NODE_ENV: {nodeEnv}</li>
      </ul>
    </div>
  )
}
