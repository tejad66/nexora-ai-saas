import { features } from '@/data/content';

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-brand-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-400">
            Features
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything your team needs,
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient">powered by AI</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            A unified platform that automates the mundane, surfaces what matters, and keeps your
            team moving — without the overhead.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-850/60 p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-ink-800/60"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-600/0 blur-2xl transition-all duration-500 group-hover:bg-brand-600/20" />
              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600/20 to-accent-500/20 ring-1 ring-white/10 transition-all duration-300 group-hover:from-brand-600/30 group-hover:to-accent-500/30 group-hover:ring-brand-500/30">
                <feature.icon className="h-6 w-6 text-brand-300 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="relative mb-2 text-lg font-bold text-white">{feature.title}</h3>
              <p className="relative text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
