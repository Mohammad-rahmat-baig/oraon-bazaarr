import Link from "next/link"
import SellerSignupForm from "@/components/auth/seller-signup-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SellerSignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Become a Seller</h1>
            <p className="text-foreground/70">Join our community of tribal artisans and farmers</p>
          </div>

          <SellerSignupForm />

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Already a seller?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
