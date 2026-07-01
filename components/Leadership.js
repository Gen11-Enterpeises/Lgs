import Image from 'next/image'
import Reveal from './Reveal'

const team = [
  { img: 'https://lingaschool.org/img/chairman.jpg', name: 'Dr. Arivalagi, M.B.B.S.', role: 'Chairman' },
  { img: 'https://lingaschool.org/img/t2.jpg', name: 'Shri K. Sridharan', role: 'Secretary' },
  { img: 'https://lingaschool.org/img/director.jpg', name: 'Dr. Shasi Anand, Ph.D.', role: 'Director' },
  { img: 'https://lingaschool.org/img/director-a-k.jpg', name: 'Arjun Kalasalingam, MS', role: 'Director' },
  { img: 'https://lingaschool.org/img/Principal.jpg', name: 'Mrs. Alka Sharma', role: 'Principal' },
]

export default function Leadership() {
  return (
    <section id="leadership" className="bg-fog py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Leadership</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">Guided by Visionaries</h2>
          <p className="mt-4 text-ash text-[16.5px] leading-relaxed">The leadership team shaping the future of Linga Global School.</p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {team.map((p) => (
            <div key={p.name} className="group bg-white rounded-[22px] overflow-hidden shadow-sm2 transition-all duration-500 hover:-translate-y-2.5 hover:-rotate-1 hover:shadow-lg2">
              <div className="h-[190px] overflow-hidden relative">
                <Image src={p.img} alt={p.name} fill unoptimized className="object-cover transition-transform duration-600 group-hover:scale-110" />
              </div>
              <div className="p-4.5 p-[18px] text-center">
                <h5 className="text-[14.5px] font-bold font-display">{p.name}</h5>
                <span className="text-xs text-ash">{p.role}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
