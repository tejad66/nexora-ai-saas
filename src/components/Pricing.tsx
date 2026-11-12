import { Check } from 'lucide-react';
import { plans } from '@/data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-400">
            Pricing
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Start free, upgrade when you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'border-brand-500/40 bg-gradient-to-b from-ink-800/80 to-ink-850/80 shadow-2xl shadow-brand-600/20 lg:scale-[1.04]'
                  : 'border-white/5 bg-ink-850/50 hover:border-white/10'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-600/30">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="mt-2 min-h-[40px] text-sm text-gray-400">{plan.description}</p>

              <div className="mt-6 flex items-end gap-1.5">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-gray-500">/ {plan.period}</span>
              </div>

              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:brightness-110'
                    : 'border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                        plan.highlighted ? 'bg-brand-600/30' : 'bg-white/5'
                      }`}
                    >
                      <Check className="h-3 w-3 text-brand-300" />
                    </span>
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
