import Reveal from './Reveal'

export default function Motto() {
  return (
    <section className="bg-grad-2 text-center py-[90px] relative overflow-hidden">
      <div className="absolute w-[300px] h-[300px] rounded-full bg-white/15 -top-36 -left-24 animate-float1" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-white/15 -bottom-36 -right-24 animate-float2" />
      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <Reveal variant="reveal-scale" className="font-display text-[26px] sm:text-[44px] font-extrabold text-white tracking-tight">
          &ldquo;Knowledge is Power&rdquo;
        </Reveal>
        <Reveal variant="reveal-scale" className="text-white/90 mt-4 text-[15px] max-w-[620px] mx-auto leading-relaxed">
          Education is the key to unlocking potential and driving progress. At Linga Global School, we cultivate wisdom, nurture talent, and prepare every student for a bright future.
        </Reveal>
      </div>
    </section>
  )
}
