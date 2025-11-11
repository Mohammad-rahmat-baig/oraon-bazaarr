import Link from "next/link"
import { Star } from "lucide-react"

const sellers = [
  {
    id: 1,
    name: "Traditional Pottery by Mira",
    category: "Art & Handicraft",
    rating: 4.8,
    reviews: 342,
    image: "/tribal-pottery-handmade.jpg",
    description: "Authentic tribal pottery passed through generations",
  },
  {
    id: 2,
    name: "Organic Farm Collective",
    category: "Food & Organic",
    rating: 4.9,
    reviews: 521,
    image: "/organic-farm-vegetables.jpg",
    description: "Fresh certified organic produce from tribal farms",
  },
  {
    id: 3,
    name: "Handwoven Textiles Studio",
    category: "Art & Handicraft",
    rating: 4.7,
    reviews: 298,
    image: "/handwoven-tribal-textiles.jpg",
    description: "Beautiful tribal patterns woven by master artisans",
  },
]

export default function FeaturedSellers() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/5 tribal-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-3">Featured Sellers</h2>
          <p className="text-lg text-foreground/70">Support our community of talented tribal artisans and farmers</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="group overflow-hidden rounded-xl border border-border bg-card card-shadow transition hover:shadow-xl hover:border-primary"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={seller.image || "/placeholder.svg"}
                  alt={seller.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-primary mb-2">{seller.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{seller.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{seller.description}</p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(seller.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{seller.rating}</span>
                  <span className="text-sm text-foreground/60">({seller.reviews} reviews)</span>
                </div>

                <Link
                  href={`/seller/${seller.id}`}
                  className="inline-block w-full text-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
                >
                  View Store
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/sellers"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
          >
            Browse All Sellers
          </Link>
        </div>
      </div>
    </section>
  )
}
