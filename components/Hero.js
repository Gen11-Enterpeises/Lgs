import Image from 'next/image'
import RippleButton from './RippleButton'
import Counter from './Counter'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[120px] overflow-hidden bg-fog">
      <div className="absolute w-[520px] h-[520px] rounded-full blur-[60px] opacity-55 bg-grad-1 -top-40 -right-32 animate-float1" />
      <div className="absolute w-[380px] h-[380px] rounded-full blur-[60px] opacity-55 bg-[radial-gradient(circle,#ffd98a,transparent_70%)] -bottom-24 -left-20 animate-float2" />
      <div className="absolute w-[240px] h-[240px] rounded-full blur-[60px] opacity-55 bg-[radial-gradient(circle,#ff8a3d55,transparent_70%)] top-[40%] left-[55%] animate-float3" />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-line px-4 py-1.5 rounded-full text-[12.5px] font-semibold text-orange-deep shadow-sm2 animate-rise">
            <span className="w-[7px] h-[7px] rounded-full bg-grad-2 animate-pulseDot" />
            CBSE Affiliated · Krishnankoil
          </div>

          <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.04] font-extrabold tracking-tight my-5 animate-rise [animation-delay:.25s] opacity-0">
            Empowering Minds, <span className="grad-text">Enriching Lives</span>
          </h1>

          <p className="text-lg leading-relaxed text-ash max-w-[520px] animate-rise [animation-delay:.4s] opacity-0">
            Linga Global School blends academic excellence with technology-driven learning and character building — nurturing future-ready global citizens from the heart of rural Tamil Nadu.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 animate-rise [animation-delay:.55s] opacity-0">
            <RippleButton
              as="a"
              href="#admissions"
              className="bg-grad-2 text-white px-[30px] py-[15px] rounded-full font-semibold text-[15px] shadow-md2 transition-all duration-400 hover:-translate-y-1"
            >
              Apply for Admission
            </RippleButton>
            <RippleButton
              as="a"
              href="#about"
              className="bg-white text-ink border border-line px-[30px] py-[15px] rounded-full font-semibold text-[15px] transition-all duration-400 hover:-translate-y-1 hover:bg-fog"
            >
              Discover LGS
            </RippleButton>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 animate-rise [animation-delay:.7s] opacity-0">
            <div>
              <Counter target={2015} className="text-3xl font-extrabold tracking-tight font-display" />
              <div className="text-[12.5px] text-ash mt-0.5">Founded</div>
            </div>
            <div>
              <Counter target={100} className="text-3xl font-extrabold tracking-tight font-display" />
              <div className="text-[12.5px] text-ash mt-0.5">% CBSE Focus</div>
            </div>
            <div>
              <Counter target={50} className="text-3xl font-extrabold tracking-tight font-display" />
              <div className="text-[12.5px] text-ash mt-0.5">Acres Campus</div>
            </div>
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:.45s] opacity-0">
          <div className="relative rounded-[32px] overflow-hidden shadow-lg2 rotate-2 transition-transform duration-700 hover:rotate-0 hover:scale-[1.015]">
            <Image
              src="https://lingaschool.org/img/a0.jpg"
              alt="Linga Global School campus"
              width={640}
              height={520}
              className="h-[400px] sm:h-[520px] w-full object-cover"
              unoptimized
              priority
            />
          </div>

          <div className="absolute top-6 -left-6 sm:-left-10 bg-white/85 backdrop-blur-lg rounded-[18px] px-[18px] py-3.5 shadow-md2 border border-white/60 flex items-center gap-3 animate-bob">
            <span className="w-[38px] h-[38px] rounded-xl bg-grad-2 flex items-center justify-center text-white text-[17px]">🎓</span>
            <div>
              <div className="text-[13.5px] font-bold">Smart Classrooms</div>
              <div className="text-[11.5px] text-ash">Technology-driven learning</div>
            </div>
          </div>

          <div className="absolute bottom-7 -right-4 sm:-right-8 bg-white/85 backdrop-blur-lg rounded-[18px] px-[18px] py-3.5 shadow-md2 border border-white/60 flex items-center gap-3 animate-bob [animation-delay:1s]">
            <span className="w-[38px] h-[38px] rounded-xl bg-grad-2 flex items-center justify-center text-white text-[17px]">🏆</span>
            <div>
              <div className="text-[13.5px] font-bold">MVM Associated</div>
              <div className="text-[11.5px] text-ash">Maharishi Vidya Mandir</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <div className="w-px h-9 bg-gradient-to-b from-ink to-transparent" />
      </div>
    </section>
  )
}
