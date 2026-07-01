const exploreLinks = ['About Us', 'Academics', 'Infrastructure', 'Leadership']
const schoolLinks = ['Admissions', 'Transport', 'Achievements', 'Mandatory Disclosure']
const contactLines = ['Anand Nagar, Krishnankoil', 'info@lingaschool.org', '+91 7373727290']
const socials = ['f', 'in', 'ig', 'yt']

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-[70px] pb-8">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-display font-extrabold text-lg">
              <span className="w-[38px] h-[38px] rounded-[11px] bg-grad-2 flex items-center justify-center text-white font-extrabold text-sm">LGS</span>
              Linga Global School
            </a>
            <p className="text-[#a1a1a6] text-[13.5px] leading-relaxed mt-3.5 max-w-[280px]">
              Founded by Kalvivallal Thiru T. Kalasalingam, part of Kalasalingam Anandam Ammal Charities — empowering minds and enriching lives since 2015.
            </p>
            <div className="flex gap-2.5 mt-4.5 mt-[18px]">
              {socials.map((s) => (
                <div key={s} className="w-9 h-9 rounded-full bg-[#2c2c2e] flex items-center justify-center text-[13px] transition-all duration-400 hover:bg-grad-2 hover:-translate-y-1 hover:rotate-[8deg]">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-[13px] font-bold uppercase tracking-wide mb-4.5 mb-[18px]">Explore</h6>
            {exploreLinks.map((l) => (
              <a key={l} href="#about" className="block text-[#a1a1a6] text-[13.5px] mb-3 transition-all hover:text-amber hover:translate-x-1">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h6 className="text-[13px] font-bold uppercase tracking-wide mb-4.5 mb-[18px]">School</h6>
            {schoolLinks.map((l) => (
              <a key={l} href="#admissions" className="block text-[#a1a1a6] text-[13.5px] mb-3 transition-all hover:text-amber hover:translate-x-1">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h6 className="text-[13px] font-bold uppercase tracking-wide mb-4.5 mb-[18px]">Contact</h6>
            {contactLines.map((l) => (
              <a key={l} href="#contact" className="block text-[#a1a1a6] text-[13.5px] mb-3 transition-all hover:text-amber hover:translate-x-1">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#2c2c2e] pt-6 flex justify-between flex-wrap gap-2.5 text-[#86868b] text-[12.5px]">
          <span>© 2026 Linga Global School. All rights reserved.</span>
          <span>Knowledge is Power</span>
        </div>
      </div>
    </footer>
  )
}
