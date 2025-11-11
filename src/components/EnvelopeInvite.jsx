import { useEffect, useCallback } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// Gold brand color
const gold = '#C8A548'

export default function EnvelopeInvite({ title = 'You are invited', subtitle = 'A night to remember', details = [] }) {
  const flapControls = useAnimationControls()
  const letterControls = useAnimationControls()

  const runSequence = useCallback(async () => {
    await flapControls.set({ rotateX: 0 })
    await letterControls.set({ y: '0%' })
    await flapControls.start({ rotateX: -180, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 } })
    await letterControls.start({ y: '-52%', transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.05 } })
  }, [flapControls, letterControls])

  useEffect(() => {
    runSequence()
  }, [runSequence])

  return (
    <div className="w-full flex items-center justify-center py-10 select-none">
      <div
        className="relative cursor-pointer active:scale-[0.995] transition"
        onClick={runSequence}
        style={{ width: 360, height: 260, perspective: 1200 }}
      >
        {/* Envelope shadow glow */}
        <div className="absolute inset-0 rounded-[22px]" style={{ boxShadow: `0 0 0 2px ${gold} inset, 0 20px 50px rgba(0,0,0,0.5)` }} />

        {/* Envelope body (back) */}
        <div className="absolute inset-0 rounded-[22px] bg-black/95 border-2" style={{ borderColor: gold }} />

        {/* Flap (top triangle) */}
        <motion.div
          className="absolute left-0 right-0 top-0 h-[58%] origin-top"
          style={{
            transformStyle: 'preserve-3d',
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            background: '#000',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            border: `2px solid ${gold}`,
            borderBottom: 'none',
            backfaceVisibility: 'hidden',
          }}
          initial={{ rotateX: 0 }}
          animate={flapControls}
        >
          {/* gold line detail */}
          <div className="absolute left-3 right-3" style={{ bottom: 8, height: 1, background: gold, opacity: 0.7 }} />
        </motion.div>

        {/* Inner pocket mask (front) to hide letter origin */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[64%] overflow-hidden rounded-b-[20px]"
          style={{ background: '#000', borderBottomLeftRadius: 22, borderBottomRightRadius: 22, borderLeft: `2px solid ${gold}`, borderRight: `2px solid ${gold}`, borderBottom: `2px solid ${gold}` }}
        >
          {/* Decorative diagonal accents */}
          <div className="absolute left-0 right-0 top-0 h-10" style={{
            background: `linear-gradient(135deg, transparent 48%, ${gold} 49%, ${gold} 51%, transparent 52%)`,
            opacity: 0.3
          }} />
        </div>

        {/* Letter */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[84%] rounded-xl"
          style={{ bottom: 12, background: '#050505', border: `2px solid ${gold}`, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          initial={{ y: '0%' }}
          animate={letterControls}
        >
          <div className="p-5">
            {/* Letter header seal line */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-10" style={{ background: gold, opacity: 0.7 }} />
              <div className="mx-2 text-xs tracking-[0.35em]" style={{ color: gold, textTransform: 'uppercase', letterSpacing: '0.4em' }}>Invite</div>
              <div className="h-px w-10" style={{ background: gold, opacity: 0.7 }} />
            </div>
            <h1 className="text-center font-semibold" style={{ color: gold, fontSize: 22, letterSpacing: '0.05em' }}>{title}</h1>
            <p className="text-center mt-1" style={{ color: gold, opacity: 0.85 }}>{subtitle}</p>
            {details?.length > 0 && (
              <div className="mt-4 space-y-1">
                {details.map((line, i) => (
                  <p key={i} className="text-center" style={{ color: gold, opacity: 0.9 }}>{line}</p>
                ))}
              </div>
            )}
            {/* Footer flourish */}
            <div className="mt-5 flex items-center justify-center">
              <div className="h-px w-16" style={{ background: gold, opacity: 0.6 }} />
              <div className="mx-2" style={{ color: gold, opacity: 0.9 }}>✦</div>
              <div className="h-px w-16" style={{ background: gold, opacity: 0.6 }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
