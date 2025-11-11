"use client"

import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { ArrowRight } from "lucide-react"

export default function CartSummary() {
  const { subtotal, shipping, tax, total } = useCart()

  return (
    <div className="sticky top-20 border border-border rounded-lg bg-card p-6 card-shadow">
      <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between text-sm text-foreground">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-sm text-foreground">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
        </div>
        <div className="flex justify-between text-sm text-foreground">
          <span>Tax (5%)</span>
          <span>₹{tax}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">₹{total}</span>
      </div>

      <Link
        href="/checkout"
        className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
      >
        Proceed to Checkout
        <ArrowRight className="h-4 w-4" />
      </Link>

      <div className="mt-4 space-y-2 text-xs text-foreground/60">
        <p>✓ Secure checkout</p>
        <p>✓ Free returns</p>
        <p>✓ Money-back guarantee</p>
      </div>
    </div>
  )
}
