import { trustedLogos } from '@/data/content';

export default function TrustedBy() {
  const doubled = [...trustedLogos, ...trustedLogos];

  return (
    <section className="relative border-y border-white/5 bg-ink-950/50 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
          Trusted by fast-moving teams at
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16">
            {doubled.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-2xl font-bold text-gray-600/80 transition-colors duration-300 hover:text-gray-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
