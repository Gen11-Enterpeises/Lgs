'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  { q: 'What is the school uniform policy?', a: 'All pupils must come in the prescribed neat uniform every day during school hours and for all school functions.' },
  { q: 'What is the minimum attendance requirement?', a: 'Pupils are eligible to sit for examinations only if they maintain at least 80% attendance through the academic year.' },
  { q: 'How should parents communicate with the school?', a: 'Any communication, request, or complaint from parents/guardians should be addressed only to the Principal, not directly to the class teacher.' },
  { q: 'Is Linga Global School CBSE affiliated?', a: 'Yes — LGS is a CBSE-affiliated institution located in Krishnankoil, Virudhunagar District, Tamil Nadu, academically associated with Maharishi Vidya Mandir, Chennai.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">FAQs</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">Good to Know</h2>
        </Reveal>

        <div className="max-w-[760px] mx-auto grid gap-3.5">
          {faqs.map((f, i) => (
            <div key={f.q} className={`bg-mist rounded-2xl overflow-hidden border transition-colors duration-300 ${open === i ? 'border-orange' : 'border-line'}`}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-[15px]"
              >
                {f.q}
                <span
                  className={`w-[26px] h-[26px] rounded-full bg-grad-2 text-white flex items-center justify-center text-base flex-shrink-0 transition-transform duration-400 ${
                    open === i ? 'rotate-[135deg]' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-500"
                style={{ maxHeight: open === i ? '200px' : '0px' }}
              >
                <p className="px-6 pb-[22px] text-ash text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
