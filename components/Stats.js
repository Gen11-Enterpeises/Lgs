import Counter from './Counter'

const stats = [
  { target: 2015, label: 'Year Established' },
  { target: 5, label: 'Leadership Members' },
  { target: 100, label: '% CBSE Affiliated' },
  { target: 1, label: 'MVM Academic Partner' },
]

export default function Stats() {
  return (
    <section className="bg-ink py-20">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter target={s.target} className="text-[42px] font-extrabold grad-text font-display" />
            <div className="text-[#aeaeb2] text-[13.5px] mt-2 tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
