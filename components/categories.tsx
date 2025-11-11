import Link from "next/link"
import { Leaf, Palette, Sprout, BookOpen } from "lucide-react"

const categories = [
  {
    id: "food",
    name: "Food & Organic Products",
    icon: Leaf,
    description: "Fresh organic produce and traditional foods",
    href: "/categories/food",
    color: "from-green-50 to-green-100/50",
    iconColor: "text-green-600",
  },
  {
    id: "art",
    name: "Art & Handicraft",
    icon: Palette,
    description: "Traditional tribal art and handcrafted items",
    href: "/categories/art",
    color: "from-amber-50 to-amber-100/50",
    iconColor: "text-amber-600",
  },
  {
    id: "soil",
    name: "Soil & Fertilizer",
    icon: Sprout,
    description: "Natural soil amendments and organic fertilizers",
    href: "/categories/soil",
    color: "from-orange-50 to-orange-100/50",
    iconColor: "text-orange-600",
  },
  {
    id: "learning",
    name: "Learning & Skill Center",
    icon: BookOpen,
    description: "Learn traditional crafts and farming techniques",
    href: "/categories/learning",
    color: "from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
  },
]

export default function Categories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-3">Explore Our Categories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover authentic tribal products, learn traditional crafts, and support sustainable livelihoods
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary hover:shadow-lg card-shadow"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition group-hover:opacity-100`}
                />

                <div className="relative p-6 flex flex-col items-center text-center gap-4">
                  <div className={`p-3 rounded-lg bg-background/50 transition`}>
                    <Icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-foreground/60">{category.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
