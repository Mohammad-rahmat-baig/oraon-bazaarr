"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import CheckoutForm from "@/components/checkout/checkout-form"
import OrderSummary from "@/components/checkout/order-summary"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  const handleOrderComplete = async (formData: any) => {
    setIsProcessing(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create order
      const order = {
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        items,
        total,
        customer: formData,
        status: "Confirmed",
      }

      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem("orders") || "[]")
      orders.push(order)
      localStorage.setItem("orders", JSON.stringify(orders))

      // Clear cart
      clearCart()

      // Redirect to success page
      router.push(`/order-success/${order.id}`)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]} />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Checkout</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CheckoutForm onSubmit={handleOrderComplete} isProcessing={isProcessing} />
            </div>

            <div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
