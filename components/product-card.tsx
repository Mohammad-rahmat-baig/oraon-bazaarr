import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"

interface ProductProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice: number
    image: string
    rating: number
    reviews: number
    seller: string
    description: string
    inStock: boolean
  }
}

export default function ProductCard({ product }: ProductProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary hover:shadow-lg card-shadow flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition group-hover:scale-110"
        />

        {/* Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">Out of Stock</span>
          </div>
        )}

        {/* Actions on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full transition group-hover:translate-y-0">
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2 text-sm">
              <ShoppingCart className="h-4 w-4" />
              {product.inStock ? "Add to Cart" : "Notify Me"}
            </button>
            <button className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition">
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs font-medium text-primary mb-2">{product.seller}</p>

        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>

        <p className="text-xs text-foreground/60 mb-3 line-clamp-2">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-foreground/70">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price}</span>
          <span className="text-sm text-foreground/50 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}
