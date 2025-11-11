"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BuyerSidebar from "@/components/dashboards/buyer-sidebar"
import { Heart, Package, MapPin } from "lucide-react"

export default function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 flex">
        <BuyerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 p-6 sm:p-8 max-w-6xl w-full">
          {activeTab === "overview" && <BuyerOverview user={user} />}
          {activeTab === "orders" && <BuyerOrders />}
          {activeTab === "wishlist" && <BuyerWishlist />}
          {activeTab === "profile" && <BuyerProfile user={user} />}
        </main>
      </div>

      <Footer />
    </div>
  )
}

function BuyerOverview({ user }: { user: any }) {
  const stats = [
    { label: "Total Orders", value: "12", icon: Package },
    { label: "Wishlist Items", value: "8", icon: Heart },
    { label: "Addresses", value: "3", icon: MapPin },
  ]

  const recentOrders = [
    { id: 1, product: "Organic Turmeric Powder", status: "Delivered", date: "2025-01-08", price: 450 },
    { id: 2, product: "Hand-Painted Ceramic Plate", status: "In Transit", date: "2025-01-05", price: 1200 },
    { id: 3, product: "Wild Honey", status: "Processing", date: "2025-01-02", price: 750 },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome back, {user?.name || "Customer"}</h1>
          <p className="text-foreground/70 mt-1">Manage your purchases and preferences</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="p-6 border border-border rounded-lg bg-card card-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/70 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                </div>
                <Icon className="h-10 w-10 text-secondary opacity-50" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Orders */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-primary">Recent Orders</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary/5 transition">
                  <td className="px-6 py-4 text-sm text-foreground">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-foreground/70">{order.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">₹{order.price}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline text-sm font-medium">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function BuyerOrders() {
  const orders = [
    {
      id: 1,
      product: "Organic Turmeric Powder",
      status: "Delivered",
      date: "2025-01-08",
      price: 450,
      tracking: "ORD001",
    },
    {
      id: 2,
      product: "Hand-Painted Ceramic Plate",
      status: "In Transit",
      date: "2025-01-05",
      price: 1200,
      tracking: "ORD002",
    },
    { id: 3, product: "Wild Honey", status: "Processing", date: "2025-01-02", price: 750, tracking: "ORD003" },
    { id: 4, product: "Tribal Basket", status: "Delivered", date: "2024-12-28", price: 1450, tracking: "ORD004" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Order History</h1>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary/5 transition">
                  <td className="px-6 py-4 text-sm font-medium text-primary">{order.tracking}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-foreground/70">{order.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">₹{order.price}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline text-sm font-medium">Track</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function BuyerWishlist() {
  const wishlist = [
    { id: 1, name: "Handmade Beaded Necklace", price: 680, seller: "Bead Artisans" },
    { id: 2, name: "Organic Compost Mix", price: 400, seller: "Green Earth Supplies" },
    { id: 3, name: "Woven Wall Hanging", price: 2800, seller: "Handwoven Textiles Studio" },
    { id: 4, name: "Pottery Making Workshop", price: 1500, seller: "Mira Pottery Studio" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">My Wishlist</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary transition"
          >
            <div className="aspect-square bg-muted" />
            <div className="p-4">
              <p className="text-xs font-medium text-primary mb-1">{item.seller}</p>
              <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">₹{item.price}</span>
                <button className="px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BuyerProfile({ user }: { user: any }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
  })

  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-primary">Profile Settings</h1>

      <div className="border border-border rounded-lg bg-card p-6">
        <h2 className="text-xl font-bold text-primary mb-6">Personal Information</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Default Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Your delivery address"
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background resize-none"
            />
          </div>

          <button className="w-full py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
