import Reveal from './Reveal'

const features = [
  { num: '01', icon: '📘', title: 'Holistic Education', text: 'A balanced focus on academics, character development, and extracurricular excellence.' },
  { num: '02', icon: '💻', title: 'Smart Classrooms', text: 'Technology-driven teaching methods for an interactive, modern learning experience.' },
  { num: '03', icon: '👩‍🏫', title: 'Qualified Faculty', text: 'Dedicated, highly-qualified educators committed to personalized student attention.' },
  { num: '04', icon: '🏛️', title: 'State-of-the-Art Facilities', text: 'Well-equipped labs, libraries, and sports infrastructure built for growth.' },
  { num: '05', icon: '🌾', title: 'Rural Empowerment', text: 'Special programs designed to enhance opportunities for students from rural backgrounds.' },
  { num: '06', icon: '🎯', title: 'IIT Foundation', text: 'Specialised training programs that prepare students for competitive careers ahead.' },
]

export default function Features() {
  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Why LGS</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">Why Choose Linga Global School</h2>
          <p className="mt-4 text-ash text-[16.5px] leading-relaxed">A community that fosters excellence, innovation, and lifelong success.</p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-mist border border-line rounded-[24px] p-9 transition-all duration-500 hover:bg-white hover:shadow-lg2 hover:-translate-y-2 hover:-rotate-[0.3deg] hover:border-transparent"
            >
              <div className="text-[13px] font-bold text-orange-deep mb-4">{f.num}</div>
              <div className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center text-[22px] bg-honey mb-4 transition-all duration-500 group-hover:bg-grad-2 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:text-white">
                {f.icon}
              </div>
              <h4 className="text-[17.5px] font-bold mb-2.5 tracking-tight font-display">{f.title}</h4>
              <p className="text-[14px] text-ash leading-relaxed">{f.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
