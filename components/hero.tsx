import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 sm:py-24 lg:py-32 tribal-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Empowering Tribal Hands
              </h1>
              <p className="text-xl text-foreground/80 font-medium">Enriching Every Home</p>
            </div>

            <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
              Welcome to Oraon Bazaar — a digital marketplace connecting tribal artisans, farmers, and learners with
              buyers across India. Supporting sustainable livelihoods and authentic craftsmanship.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary/10 card-shadow">
              <img
                src="/tribal-artisan-crafting-handmade-goods.jpg"
                alt="Tribal artisan crafting handmade goods"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
