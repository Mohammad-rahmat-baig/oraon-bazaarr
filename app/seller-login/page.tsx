import Link from "next/link"
import SellerLoginForm from "@/components/auth/seller-login-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SellerLoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Seller Login</h1>
            <p className="text-foreground/70">Manage your store and reach more customers</p>
          </div>

          <SellerLoginForm />

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Not a seller yet?{" "}
              <Link href="/seller-signup" className="text-primary font-semibold hover:underline">
                Apply here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
