"use client"

import { useCart } from "@/hooks/use-cart"

export default function OrderSummary() {
  const { items, subtotal, shipping, tax, total } = useCart()

  return (
    <div className="sticky top-20 border border-border rounded-lg bg-card p-6 card-shadow">
      <h2 className="text-lg font-bold text-primary mb-4">Order Summary</h2>

      {/* Items */}
      <div className="space-y-3 mb-4 pb-4 border-b border-border max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <div>
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="text-foreground/70">Qty: {item.quantity}</p>
            </div>
            <p className="font-semibold text-primary">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2 mb-4 pb-4 border-b border-border text-sm">
        <div className="flex justify-between text-foreground">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-foreground">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
        </div>
        <div className="flex justify-between text-foreground">
          <span>Tax (5%)</span>
          <span>₹{tax}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">₹{total}</span>
      </div>
    </div>
  )
}
