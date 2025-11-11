"use client"

import { Minus, Plus, X } from "lucide-react"
import type { CartItem } from "@/hooks/use-cart"

interface CartItemsProps {
  items: CartItem[]
  onRemove: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}

export default function CartItems({ items, onRemove, onUpdateQuantity }: CartItemsProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-border rounded-lg p-4 bg-card flex gap-4">
          {/* Image */}
          <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              <p className="text-sm text-foreground/70">{item.seller}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-primary">₹{item.price}</span>
              <button
                onClick={() => onRemove(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition"
            >
              <Plus className="h-4 w-4" />
            </button>
            <span className="text-lg font-semibold text-foreground w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>

          {/* Subtotal */}
          <div className="flex flex-col items-end justify-center min-w-fit">
            <p className="text-xs text-foreground/70 mb-1">Subtotal</p>
            <p className="text-xl font-bold text-primary">₹{item.price * item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
