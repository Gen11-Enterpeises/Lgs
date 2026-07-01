'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const tabs = {
  primary: {
    label: 'Primary',
    items: [
      { emoji: '🔤', title: 'Language Foundations', sub: 'English & Tamil' },
      { emoji: '🔢', title: 'Numeracy Skills', sub: 'Mathematics' },
      { emoji: '🎨', title: 'Creative Arts', sub: 'Art & Craft' },
      { emoji: '🧩', title: 'Activity Learning', sub: 'Play-based EVS' },
    ],
  },
  middle: {
    label: 'Middle School',
    items: [
      { emoji: '🔬', title: 'Science Labs', sub: 'Physics, Chem, Bio' },
      { emoji: '💻', title: 'Computer Science', sub: 'Digital Literacy' },
      { emoji: '🗺️', title: 'Social Studies', sub: 'History & Geography' },
      { emoji: '⚽', title: 'Sports & PE', sub: 'Physical Education' },
    ],
  },
  senior: {
    label: 'Senior Secondary',
    items: [
      { emoji: '⚙️', title: 'Science Stream', sub: 'PCM / PCB' },
      { emoji: '📊', title: 'Commerce Stream', sub: 'Accounts & Economics' },
      { emoji: '🧮', title: 'IIT Foundation', sub: 'Competitive Prep' },
      { emoji: '🎓', title: 'CBSE Board Prep', sub: 'Class XII Mentoring' },
    ],
  },
  extra: {
    label: 'Beyond Academics',
    items: [
      { emoji: '🎭', title: 'Performing Arts', sub: 'Dance & Drama' },
      { emoji: '🏏', title: 'Sports Academy', sub: 'Athletics & Games' },
      { emoji: '🤖', title: 'STEM Clubs', sub: 'Robotics & Innovation' },
      { emoji: '🌱', title: 'Value Education', sub: 'Character Building' },
    ],
  },
}

export default function Academics() {
  const [active, setActive] = useState('primary')

  return (
    <section id="academics" className="bg-fog py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <span className="inline-block text-[12.5px] font-bold text-orange-deep bg-honey px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">Academics</span>
          <h2 className="font-display text-[30px] sm:text-[46px] font-extrabold tracking-tight leading-tight">Curriculum Built for Curiosity</h2>
          <p className="mt-4 text-ash text-[16.5px] leading-relaxed">A CBSE-aligned academic journey from early years to senior secondary.</p>
        </Reveal>

        <div className="flex justify-center gap-2.5 mb-12 flex-wrap">
          {Object.entries(tabs).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
                active === key
                  ? 'bg-grad-2 text-white border-transparent shadow-md2'
                  : 'bg-white border-line hover:bg-grad-2 hover:text-white hover:border-transparent hover:shadow-md2'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {tabs[active].items.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[20px] p-7 text-center shadow-sm2 transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-md2"
            >
              <div className="text-[30px] mb-3 inline-block transition-transform duration-400 group-hover:scale-[1.2] group-hover:-rotate-6">{item.emoji}</div>
              <h5 className="text-[14.5px] font-bold font-display">{item.title}</h5>
              <span className="text-xs text-ash">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
