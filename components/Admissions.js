import Reveal from './Reveal'
import RippleButton from './RippleButton'

const steps = [
  'Submit enquiry form',
  'Campus visit & interaction',
  'Document verification',
  'Confirm admission',
]

export default function Admissions() {
  return (
    <section id="admissions" className="bg-fog py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal variant="reveal-scale" className="bg-white rounded-[32px] p-9 sm:p-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center shadow-lg2 relative overflow-hidden">
          <div className="absolute w-[380px] h-[380px] bg-grad-soft -top-36 -right-24 rounded-full" />
          <div className="relative z-[1]">
            <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Admissions Open</span>
            <h3 className="font-display text-[26px] sm:text-[38px] font-extrabold tracking-tight mb-4">Begin Your Child&apos;s Journey at LGS</h3>
            <p className="text-ash text-[15.5px] leading-relaxed mb-6">
              Academic Calendar 2026–2027 is now live. Limited seats available across all grades — secure your child&apos;s place at Linga Global School today.
            </p>
            <RippleButton className="bg-grad-2 text-white px-[30px] py-[15px] rounded-full font-semibold text-[15px] shadow-md2 transition-all duration-400 hover:-translate-y-1">
              Apply for Admission
            </RippleButton>
          </div>
          <div className="relative z-[1] grid gap-4">
            {steps.map((s, i) => (
              <div key={s} className="flex gap-3.5 items-center bg-mist px-4.5 px-[18px] py-4 rounded-2xl transition-all duration-400 hover:translate-x-2 hover:bg-honey">
                <div className="w-8 h-8 rounded-full bg-grad-2 text-white flex items-center justify-center font-bold text-[13px] flex-shrink-0">{i + 1}</div>
                <span className="text-sm font-semibold">{s}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
