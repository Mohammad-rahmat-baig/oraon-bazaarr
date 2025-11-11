import { Mail, Check, Package, MapPin } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface OrderSuccessPageProps {
  params: Promise<{
    orderId: string
  }>
}

export default async function OrderSuccessPage({ params }: OrderSuccessPageProps) {
  const { orderId } = await params

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-primary mb-2">Order Confirmed</h1>
          <p className="text-foreground/70 mb-2">Thank you for your purchase!</p>

          {/* Order ID */}
          <div className="bg-secondary/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground/70 mb-1">Order Number</p>
            <p className="text-lg font-bold text-primary">{orderId}</p>
          </div>

          {/* Info Cards */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/70">Confirmation sent to</p>
                <p className="text-sm font-medium text-foreground">your@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
              <Package className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/70">Expected delivery</p>
                <p className="text-sm font-medium text-foreground">7-14 business days</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/70">Shipping to</p>
                <p className="text-sm font-medium text-foreground">Your delivery address</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-primary/5 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-foreground mb-2">What's Next?</h3>
            <ul className="text-sm text-foreground/70 space-y-1 text-left">
              <li>• You'll receive a tracking number via email</li>
              <li>• Monitor your order in the buyer dashboard</li>
              <li>• Contact support for any questions</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/buyer-dashboard?tab=orders"
              className="w-full inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              View Your Orders
            </Link>
            <Link
              href="/"
              className="w-full inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
