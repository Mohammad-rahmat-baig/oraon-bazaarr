"use client"

import { useCart } from "@/hooks/use-cart"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import CartEmpty from "@/components/cart/cart-empty"
import CartItems from "@/components/cart/cart-items"
import CartSummary from "@/components/cart/cart-summary"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, isLoading } = useCart()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-12 w-12 text-primary/50 mx-auto mb-4" />
          <p className="text-foreground/70">Loading cart...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shopping Cart" }]} />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <CartItems items={items} onRemove={removeItem} onUpdateQuantity={updateQuantity} />
              </div>

              <div>
                <CartSummary />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
