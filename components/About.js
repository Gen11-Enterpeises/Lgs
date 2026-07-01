import Image from 'next/image'
import Reveal from './Reveal'

const points = [
  'Founded by Kalvivallal Thiru T. Kalasalingam',
  'Part of Kalasalingam Anandam Ammal Charities',
  'Associated with Maharishi Vidya Mandir, Chennai',
  'Special IIT Foundation programs for rural students',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-[70px] items-center">
        <Reveal variant="reveal-left" className="relative">
          <div className="rounded-[28px] overflow-hidden shadow-lg2 group">
            <Image
              src="https://lingaschool.org/img/a1.jpg"
              alt="Students at Linga Global School"
              width={600}
              height={460}
              unoptimized
              className="h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[20px] px-6 py-5 shadow-lg2 text-center animate-bob">
            <div className="text-[32px] font-extrabold grad-text font-display">10+</div>
            <div className="text-[11.5px] text-ash mt-0.5">Years of Excellence</div>
          </div>
        </Reveal>

        <Reveal variant="reveal-right">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
            About Us
          </span>
          <h3 className="font-display text-[26px] font-extrabold tracking-tight mb-4">Welcome to Linga Global School</h3>
          <p className="text-ash text-[15.5px] leading-relaxed mb-4">
            Established in 2015, LGS is the dream project of Kalvivallal Thiru T. Kalasalingam — a visionary leader, freedom fighter, and philanthropist. Part of the esteemed Kalasalingam Anandam Ammal Charities, the school was inaugurated by Konijeti Rosaiah, former Member of the Lok Sabha.
          </p>
          <p className="text-ash text-[15.5px] leading-relaxed mb-4">
            We believe in nurturing young minds with knowledge, values, and global perspectives — providing a holistic environment that blends academics, technology, and character-building.
          </p>
          <div className="grid gap-3.5 mt-6">
            {points.map((p) => (
              <div key={p} className="group flex gap-3 items-start text-[14.5px]">
                <span className="w-6 h-6 rounded-full bg-grad-2 text-white flex items-center justify-center text-[13px] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-[360deg] group-hover:scale-110">
                  ✓
                </span>
                {p}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
