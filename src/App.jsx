export default function UltimateKoolingWebsite() {
  const services = [
    {
      title: "A/C Installation",
      description:
        "Professional installation for residential and light commercial systems with attention to efficiency, comfort, and long-term performance.",
    },
    {
      title: "A/C Repair",
      description:
        "Fast diagnostics and dependable repairs for systems that are blowing warm air, leaking, making noise, or not turning on.",
    },
    {
      title: "Routine Service",
      description:
        "Preventive maintenance and tune-ups to help extend system life, improve airflow, and reduce the chance of breakdowns.",
    },
  ];

  const highlights = [
    "Reliable scheduling and responsive service",
    "Residential and light commercial support",
    "Honest recommendations and quality workmanship",
    "Focused on comfort, efficiency, and clean installs",
  ];

  const galleryItems = [
    {
      title: "New A/C Installation",
      description: "Complete residential system installation with clean ductwork and upgraded airflow.",
    },
    {
      title: "Commercial Rooftop Unit",
      description: "Light commercial rooftop HVAC setup for reliable cooling and performance.",
    },
    {
      title: "Routine Maintenance",
      description: "Preventive maintenance service including filter changes and system cleaning.",
    },
    {
      title: "Emergency Repair",
      description: "Fast response for no-cool issues, frozen coils, and system breakdowns.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              Heating & Cooling Professionals
            </div>
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Ultimate Kooling
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
              Trusted air-conditioning installation, repair, and service for homes and businesses. We help keep your space cool, comfortable, and running efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                Request Service
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-cyan-300">Install</div>
                <div className="mt-1 text-sm text-slate-300">New system setup</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-cyan-300">Repair</div>
                <div className="mt-1 text-sm text-slate-300">Quick diagnostics</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-bold text-cyan-300">Service</div>
                <div className="mt-1 text-sm text-slate-300">Maintenance plans</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Ultimate Kooling</p>
                    <h2 className="mt-2 text-2xl font-semibold">Cooling You Can Count On</h2>
                  </div>
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-200">
                    HVAC
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm text-slate-300">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="font-semibold text-white">Need help with your A/C?</p>
                    <p className="mt-1">From full replacements to urgent repairs and seasonal tune-ups, we’re here to keep your system performing at its best.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold text-white">Residential</p>
                      <p className="mt-1">Homes, condos, apartments, and property units.</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="font-semibold text-white">Commercial</p>
                      <p className="mt-1">Small businesses and light commercial locations.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-100">
                    Dependable service. Clear communication. Comfort-first solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Professional cooling solutions for every season</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Whether you need a new unit, a quick repair, or dependable maintenance, Ultimate Kooling is ready to help.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-cyan-400/15" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Comfort, quality, and dependable service</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Ultimate Kooling is built to serve customers who want honest service and dependable results. Our goal is simple: provide quality cooling solutions that keep your home or business comfortable year-round.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              We take pride in clean work, clear communication, and helping customers make smart decisions for their air-conditioning systems.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8">
            <h3 className="text-2xl font-semibold">Why choose Ultimate Kooling?</h3>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Gallery of recent projects</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Take a look at some of the installation, repair, and maintenance work completed by Ultimate Kooling across South Florida.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-lg shadow-black/20"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-950">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-2xl font-bold text-cyan-300">
                  ❄
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Request service today</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Need installation, repair, or routine service? Reach out to Ultimate Kooling to schedule your appointment and get your system checked by a trusted professional.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="space-y-5 text-sm text-slate-200">
              <div>
                <p className="text-slate-400">Phone</p>
                <p className="mt-1 text-lg font-semibold">954-708-8192</p>
              </div>
              <div>
                <p className="text-slate-400">Email</p>
                <p className="mt-1 text-lg font-semibold">ULTIMATEKOOLING@GMAIL.COM</p>
              </div>
              <div>
                <p className="text-slate-400">Service Area</p>
                <p className="mt-1 text-lg font-semibold">South Florida</p>
              </div>
              <a
                href="mailto:ULTIMATEKOOLING@GMAIL.COM"
                className="inline-flex rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Email Ultimate Kooling
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Ultimate Kooling. All rights reserved.
      </footer>
    </div>
  );
}
