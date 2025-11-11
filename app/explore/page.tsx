import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import { LinkIcon } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Food & Organic Products",
    slug: "food",
    description: "Fresh organic produce and traditional foods",
    count: 128,
  },
  {
    name: "Art & Handicraft",
    slug: "art",
    description: "Traditional tribal art and handcrafted items",
    count: 256,
  },
  {
    name: "Soil & Fertilizer",
    slug: "soil",
    description: "Natural soil amendments and organic fertilizers",
    count: 94,
  },
  {
    name: "Learning & Skill Center",
    slug: "learning",
    description: "Learn traditional crafts and farming techniques",
    count: 42,
  },
]

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Explore" }]} />

      <main>
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 sm:py-16 tribal-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl mb-3">Explore Categories</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Discover authentic tribal products, crafts, and learning opportunities
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-xl card-shadow"
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition">
                          {cat.name}
                        </h2>
                        <p className="text-foreground/70">{cat.description}</p>
                      </div>
                      <LinkIcon className="h-6 w-6 text-primary opacity-50 group-hover:opacity-100 transition" />
                    </div>

                    <p className="text-sm font-medium text-foreground/60">{cat.count} products available</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
