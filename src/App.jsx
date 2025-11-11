import EnvelopeInvite from './components/EnvelopeInvite'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <EnvelopeInvite
          title="Birthday Celebration"
          subtitle="Join us for a golden evening"
          details={[
            'Saturday, 21 December, 7:00 PM',
            'The Grand Hall, 123 Celebration Ave',
            'Dress Code: Black & Gold',
            'RSVP by Dec 10',
          ]}
        />
        <p className="text-center text-xs text-neutral-400 mt-6">Tap anywhere to replay</p>
      </div>
    </div>
  )
}

export default App
