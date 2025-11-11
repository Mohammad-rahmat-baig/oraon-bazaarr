import Link from "next/link"
import SignupForm from "@/components/auth/signup-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Join Oraon Bazaar</h1>
            <p className="text-foreground/70">Create your account to start shopping or selling</p>
          </div>

          <SignupForm />

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Already have an account?{" "}
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
