import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-[200px] w-[300px] rounded-full bg-accent-500/15 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 sm:text-lg">
              Join 10,000+ teams already supercharging their workflows with Nexora AI. Start your
              free trial today — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110 sm:w-auto"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
