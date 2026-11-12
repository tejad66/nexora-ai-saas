import { Play, ArrowRight, TrendingUp, Activity, Zap, Star } from 'lucide-react';
import { stats } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px] animate-glow" />
      <div className="pointer-events-none absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start text-center lg:text-left">
          <a
            href="#features"
            className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur transition-colors hover:border-brand-500/40 hover:text-white"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
            New: AI Workflow Builder 2.0
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Supercharge Your Team
            <br />
            with <span className="text-gradient">AI</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-gray-400 sm:text-lg lg:mx-0 mx-auto">
            Nexora AI automates the busywork, surfaces insights before they matter, and keeps your
            whole team in sync — so your startup can move at the speed of thought.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-brand-600/50 hover:brightness-110 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-4 w-4 fill-white text-white" />
              Watch Demo
            </a>
          </div>

          <div className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center lg:text-left" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-2xl font-extrabold text-white sm:text-3xl">
                  {i === 1 ? (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      {stat.value}
                    </span>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-600/30 to-accent-500/20 blur-2xl" />
          <div className="relative animate-float">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-brand-900/40">
      <div className="flex items-center gap-2 border-b border-white/5 bg-ink-900/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-gray-400">
          app.nexora.ai/dashboard
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Overview</p>
            <p className="text-xs text-gray-500">Last 30 days</p>
          </div>
          <div className="flex gap-2">
            <span className="rounded-md bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              +24.6%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: TrendingUp, label: 'Revenue', value: '$48.2K', color: 'text-brand-400' },
            { icon: Activity, label: 'Active', value: '1,284', color: 'text-accent-400' },
            { icon: Zap, label: 'AI Runs', value: '9,341', color: 'text-amber-400' },
          ].map((card) => (
            <div key={card.label} className="rounded-xl border border-white/5 bg-white/5 p-3">
              <card.icon className={`h-4 w-4 ${card.color}`} />
              <p className="mt-2 text-base font-bold text-white">{card.value}</p>
              <p className="text-[10px] text-gray-500">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/5 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-gray-300">Performance</p>
            <span className="text-[10px] text-gray-500">Weekly</span>
          </div>
          <div className="flex h-28 items-end gap-1.5">
            {[40, 65, 35, 80, 55, 95, 70, 60, 88, 72, 100, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-brand-600/40 to-accent-400"
                style={{ height: `${h}%`, animation: `fadeIn 0.6s ease-out ${i * 60}ms both` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-500">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-white">AI automation running</p>
            <p className="text-[10px] text-gray-500">3 workflows active · 0 errors</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60 animate-pulse-slow" />
        </div>
      </div>
    </div>
  );
}
