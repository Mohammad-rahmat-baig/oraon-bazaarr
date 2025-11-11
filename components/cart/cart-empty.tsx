import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CartEmpty() {
  return (
    <div className="text-center py-16">
      <ShoppingBag className="h-16 w-16 text-foreground/20 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
      <p className="text-foreground/70 mb-6">Add some items to get started</p>
      <Link
        href="/explore"
        className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
      >
        Start Shopping
      </Link>
    </div>
  )
}
