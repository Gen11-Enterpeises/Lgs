import Image from 'next/image'
import Reveal from './Reveal'

const items = [
  { src: 'https://lingaschool.org/img/bg.jpg', label: 'Main Campus', span: 'col-span-2 row-span-2' },
  { src: 'https://lingaschool.org/img/a0.jpg', label: 'Smart Classrooms', span: '' },
  { src: 'https://lingaschool.org/img/a1.jpg', label: 'Library & Labs', span: '' },
  { src: 'https://lingaschool.org/img/15.jpg', label: 'Sports Grounds', span: 'row-span-2' },
  { src: 'https://lingaschool.org/img/111.png', label: 'Student Activities', span: '' },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Infrastructure</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">A Campus Built for Tomorrow</h2>
          <p className="mt-4 text-ash text-[16.5px] leading-relaxed">State-of-the-art facilities crafted to support every dimension of student growth.</p>
        </Reveal>

        <Reveal variant="stagger" className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] gap-4">
          {items.map((it) => (
            <div key={it.label} className={`group relative rounded-[20px] overflow-hidden ${it.span}`}>
              <Image
                src={it.src}
                alt={it.label}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-[1.13]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-white font-bold text-sm">{it.label}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
