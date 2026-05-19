export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">

      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 uppercase tracking-widest">
          For Developer Tool Companies
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track GitHub README to{' '}
          <span className="text-[#58a6ff]">Signup Conversions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 leading-relaxed">
          Embed invisible tracking pixels in your GitHub READMEs. See exactly which repositories drive the most signups for your developer tool — and double down on what works.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Tracking — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[['Pixel Generator', 'Unique URLs per repo'],['Visitor Analytics', 'Real-time dashboard'],['Signup Attribution', 'Webhook integration']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited tracking pixels',
              'Real-time visitor analytics',
              'Signup attribution via webhooks',
              'Top converting repos dashboard',
              'CSV export',
              'Email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the tracking pixel work?',
              a: 'You embed a tiny 1×1 transparent image URL in your README markdown. When GitHub renders the README and a visitor loads the page, their browser fetches the pixel — logging the visit, referrer, and timestamp against your repository.'
            },
            {
              q: 'How are signups attributed to a repository?',
              a: 'When a tracked visitor signs up for your tool, your signup flow fires a webhook to our API with the user identifier. We match it to the pixel visit session and record the conversion, showing you exactly which README drove the signup.'
            },
            {
              q: 'Does this violate GitHub\'s terms of service?',
              a: 'No. Embedding external images in READMEs is standard practice and explicitly supported by GitHub Flavored Markdown. Many analytics and badge services work the same way.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-[#8b949e] text-xs text-center">
        © {new Date().getFullYear()} README Conversion Tracker. All rights reserved.
      </footer>
    </main>
  )
}
