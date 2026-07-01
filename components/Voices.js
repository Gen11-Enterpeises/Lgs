import Reveal from './Reveal'

const base = [
  { initials: 'RP', name: 'Ramesh P.', role: 'Parent', text: 'The smart classrooms and attentive faculty have transformed how my daughter learns. LGS truly blends technology with tradition.' },
  { initials: 'SK', name: 'Saranya K.', role: 'Parent', text: 'From IIT foundation classes to value education, every aspect of LGS is designed for a child’s complete growth.' },
  { initials: 'MV', name: 'Murugan V.', role: 'Alumni Parent', text: 'The MVM partnership brings a level of academic rigor that is rare to find in a rural campus setting.' },
  { initials: 'AT', name: 'Anitha T.', role: 'Parent', text: 'Our teachers genuinely care — the personalized attention each student receives here is exceptional.' },
]
const voices = [...base, ...base]

export default function Voices() {
  return (
    <section className="bg-white overflow-hidden py-[120px]">
      <Reveal className="max-w-[680px] mx-auto text-center mb-12 px-8">
        <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Voices</span>
        <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">What Our Community Says</h2>
      </Reveal>

      <div className="group flex gap-6 w-max animate-scrollLeft hover:[animation-play-state:paused]">
        {voices.map((v, i) => (
          <div key={i} className="w-[340px] flex-shrink-0 bg-mist border border-line rounded-[22px] p-7 transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-md2">
            <div className="text-orange text-sm mb-3">★★★★★</div>
            <p className="text-[14.5px] leading-relaxed mb-4.5 mb-[18px]">{v.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-grad-2 text-white flex items-center justify-center font-bold text-[13px]">{v.initials}</div>
              <div>
                <div className="text-[13.5px] font-bold">{v.name}</div>
                <div className="text-[11.5px] text-ash">{v.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
