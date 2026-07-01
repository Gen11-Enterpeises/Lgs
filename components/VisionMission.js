import Reveal from './Reveal'

const cards = [
  { icon: '🌍', title: 'Our Vision', text: 'To nurture future-ready global citizens through a holistic, value-based education that fosters intellectual curiosity, creativity, and leadership — developing critical thinking and a strong moral foundation.' },
  { icon: '🚀', title: 'Our Mission', text: 'To offer world-class education blending academic excellence with character development — integrating smart classrooms, instilling discipline and ethical values, and providing IIT foundation training for rural students.' },
  { icon: '🧠', title: 'Our Founder', text: 'Kalvivallal Thiru T. Kalasalingam, a visionary educationist, established Kalasalingam University, Arts & Science College, Pharmacy College and Industrial Training Institute before founding LGS.' },
  { icon: '🤝', title: 'MVM Partnership', text: 'Academic association with Maharishi Vidya Mandir, Chetpet — an AAAAA-rated CBSE school led by National Award-winning educator Shri S. Namasivayamji.' },
]

export default function VisionMission() {
  return (
    <section id="vision" className="bg-fog relative overflow-hidden py-[120px]">
      <div className="absolute w-[600px] h-[600px] bg-grad-soft -top-52 -left-52 rounded-full" />
      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Purpose</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">Our Vision &amp; Mission</h2>
          <p className="mt-4 text-ash text-[16.5px] leading-relaxed">The principles that guide every classroom, every teacher, and every student at LGS.</p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {cards.map((c) => (
            <div key={c.title} className="bg-white rounded-[26px] p-10 shadow-sm2 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-lg2">
              <div className="w-14 h-14 rounded-2xl bg-grad-2 flex items-center justify-center text-2xl text-white mb-5 shadow-md2">{c.icon}</div>
              <h4 className="text-[21px] font-extrabold tracking-tight mb-3 font-display">{c.title}</h4>
              <p className="text-ash text-[14.5px] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
