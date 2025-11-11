import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { Users, Leaf, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the well-being of tribal artisans and farmers in our community.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting organic farming and eco-friendly practices for a better future.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description: "Digital skills and market access to help tribal communities thrive.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting tribal products and crafts with buyers across India.",
    },
  ]

  const team = [
    {
      name: "Rajesh Oraon",
      role: "Founder & CEO",
      image: "/placeholder.svg?key=team1",
    },
    {
      name: "Priya Devi",
      role: "Community Manager",
      image: "/placeholder.svg?key=team2",
    },
    {
      name: "Amit Singh",
      role: "Operations Lead",
      image: "/placeholder.svg?key=team3",
    },
    {
      name: "Maya Kumari",
      role: "Product Manager",
      image: "/placeholder.svg?key=team4",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 sm:py-24 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
              A Platform Built by the Tribe, for the Tribe
            </h1>
            <p className="text-xl text-foreground/70">
              Oraon Bazaar empowers tribal artisans, farmers, and learners across India by providing a digital
              marketplace and learning platform that celebrates authentic craftsmanship and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Oraon Bazaar was founded with a simple mission: to bridge the gap between tribal artisans and the
                  modern digital economy. We saw incredible talent, authentic craftsmanship, and sustainable practices
                  being overlooked by mainstream commerce.
                </p>
                <p>
                  Today, we work with over 500 tribal artisans, farmers, and craftspeople across India. Together, we're
                  creating a movement that respects tradition while embracing innovation.
                </p>
                <p>
                  Every product sold through Oraon Bazaar directly supports tribal livelihoods, preserves traditional
                  knowledge, and promotes sustainable farming practices.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-secondary/10 card-shadow">
                <img
                  src="/placeholder.svg?key=about-story"
                  alt="Tribal artisans working"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-secondary/5 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-3">Our Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">These principles guide everything we do</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={i}
                  className="p-6 border border-border rounded-lg bg-card card-shadow hover:border-primary transition"
                >
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-3">Our Team</h2>
            <p className="text-lg text-foreground/70">Dedicated professionals working toward tribal empowerment</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-24 bg-primary/5 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-3">Our Impact</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">Artisans & Farmers Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹50 Lakh+</div>
              <p className="text-foreground/70">Direct Income Generated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-foreground/70">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
