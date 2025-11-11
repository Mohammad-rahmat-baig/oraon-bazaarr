"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import SellerJoinForm from "@/components/seller-join-form"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"support" | "seller">("support")

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "support@oraonbazaar.com",
      description: "We respond within 24 hours",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876 543 210",
      description: "Available Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Ranchi, Jharkhand, India",
      description: "Our headquarters",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9876 543 210",
      description: "Quick support available",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12 sm:py-16 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-primary sm:text-5xl mb-3">Get in Touch</h1>
          <p className="text-lg text-foreground/70">Have questions? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <div key={i} className="p-6 border border-border rounded-lg bg-card card-shadow">
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{info.value}</p>
                  <p className="text-foreground/60 text-xs">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-12 sm:py-16 bg-secondary/5 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("support")}
              className={`px-4 py-3 font-semibold border-b-2 transition ${
                activeTab === "support"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              Customer Support
            </button>
            <button
              onClick={() => setActiveTab("seller")}
              className={`px-4 py-3 font-semibold border-b-2 transition ${
                activeTab === "seller"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }`}
            >
              Join as Seller
            </button>
          </div>

          {/* Content */}
          {activeTab === "support" && (
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">We're Here to Help</h2>
                <p className="text-foreground/70 mb-6">
                  Whether you have questions about your order, need product information, or have feedback about our
                  platform, our team is ready to assist you.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-foreground/70 text-sm">Usually responds within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Available Languages</h3>
                    <p className="text-foreground/70 text-sm">English, Hindi, and tribal languages</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Support Hours</h3>
                    <p className="text-foreground/70 text-sm">Monday - Friday: 9 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          )}

          {activeTab === "seller" && (
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Join Our Seller Community</h2>
                <p className="text-foreground/70 mb-6">
                  Ready to start selling your authentic tribal products? Fill out this form and our team will review
                  your application within 3-5 business days.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What We Accept</h3>
                    <ul className="text-foreground/70 text-sm space-y-1">
                      <li>- Handcrafted tribal art and artifacts</li>
                      <li>- Organic agricultural products</li>
                      <li>- Natural fertilizers and soil amendments</li>
                      <li>- Educational workshops and courses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Zero Commission</h3>
                    <p className="text-foreground/70 text-sm">
                      We take only a small platform fee, keeping more money with you
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <SellerJoinForm />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How long does delivery take?",
                a: "Delivery times vary based on your location and the seller. Most orders are delivered within 7-14 business days.",
              },
              {
                q: "Can I return products?",
                a: "Yes, we have a 14-day return policy for most products. Check the seller's policy before purchasing.",
              },
              {
                q: "Is my payment secure?",
                a: "Absolutely. We use encrypted payment gateways and industry-standard security measures to protect your data.",
              },
              {
                q: "How can I track my order?",
                a: "After purchase, you'll receive a tracking ID via email. Use it to monitor your order status in real-time.",
              },
            ].map((faq, i) => (
              <details key={i} className="border border-border rounded-lg group">
                <summary className="px-6 py-4 font-semibold text-foreground cursor-pointer hover:bg-secondary/5 transition">
                  {faq.q}
                </summary>
                <div className="px-6 py-4 border-t border-border bg-secondary/5 text-foreground/70">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
