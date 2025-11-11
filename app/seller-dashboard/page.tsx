"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SellerSidebar from "@/components/dashboards/seller-sidebar"
import { ShoppingCart, DollarSign, TrendingUp, Package } from "lucide-react"

export default function SellerDashboard() {
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
        <SellerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 p-6 sm:p-8 max-w-6xl w-full">
          {activeTab === "overview" && <SellerOverview user={user} />}
          {activeTab === "products" && <SellerProducts />}
          {activeTab === "orders" && <SellerOrders />}
          {activeTab === "analytics" && <SellerAnalytics />}
          {activeTab === "settings" && <SellerSettings user={user} />}
        </main>
      </div>

      <Footer />
    </div>
  )
}

function SellerOverview({ user }: { user: any }) {
  const stats = [
    { label: "Total Sales", value: "₹45,230", icon: DollarSign, color: "text-green-600" },
    { label: "Total Orders", value: "89", icon: ShoppingCart, color: "text-blue-600" },
    { label: "Active Products", value: "24", icon: Package, color: "text-amber-600" },
    { label: "Monthly Growth", value: "+12.5%", icon: TrendingUp, color: "text-emerald-600" },
  ]

  const recentOrders = [
    { id: 1, buyer: "Rajesh Kumar", product: "Organic Turmeric", status: "Pending", amount: 450 },
    { id: 2, buyer: "Priya Singh", product: "Hand-Painted Plate", status: "Shipped", amount: 1200 },
    { id: 3, buyer: "Amit Patel", product: "Wild Honey", status: "Delivered", amount: 750 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary">Welcome, {user?.storeName || "Store"}</h1>
        <p className="text-foreground/70 mt-1">Here's your sales overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="p-6 border border-border rounded-lg bg-card card-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/70 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
                <Icon className={`h-10 w-10 ${stat.color} opacity-60`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Orders */}
      <div className="border border-border rounded-lg bg-card overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">Recent Orders</h2>
          <button className="text-primary hover:underline text-sm font-medium">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Buyer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary/5 transition">
                  <td className="px-6 py-4 text-sm text-foreground">{order.buyer}</td>
                  <td className="px-6 py-4 text-sm text-foreground/70">{order.product}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">₹{order.amount}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline text-sm font-medium">Process</button>
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

function SellerProducts() {
  const products = [
    { id: 1, name: "Organic Turmeric Powder", price: 450, stock: 45, sales: 128 },
    { id: 2, name: "Hand-Painted Ceramic Plate", price: 1200, stock: 12, sales: 34 },
    { id: 3, name: "Wild Honey", price: 750, stock: 28, sales: 89 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Products</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
          Add Product
        </button>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sales</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-secondary/5 transition">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-primary font-semibold">₹{product.price}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{product.stock} units</td>
                  <td className="px-6 py-4 text-sm text-foreground">{product.sales}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-primary hover:underline text-sm font-medium">Edit</button>
                    <button className="text-red-600 hover:underline text-sm font-medium">Delete</button>
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

function SellerOrders() {
  const orders = [
    { id: "ORD001", buyer: "Rajesh Kumar", status: "Pending", total: 450, date: "2025-01-10" },
    { id: "ORD002", buyer: "Priya Singh", status: "Shipped", total: 1200, date: "2025-01-09" },
    { id: "ORD003", buyer: "Amit Patel", status: "Delivered", total: 750, date: "2025-01-08" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Orders</h1>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/5">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Buyer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-secondary/5 transition">
                  <td className="px-6 py-4 text-sm font-medium text-primary">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{order.buyer}</td>
                  <td className="px-6 py-4 text-sm text-foreground/70">{order.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary">₹{order.total}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline text-sm font-medium">Process</button>
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

function SellerAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Analytics</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border border-border rounded-lg bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Monthly Sales</h3>
          <div className="h-40 bg-secondary/10 rounded-lg flex items-center justify-center text-foreground/50">
            Sales chart placeholder
          </div>
        </div>

        <div className="border border-border rounded-lg bg-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Products</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-foreground">Organic Turmeric</span>
              <span className="font-semibold text-primary">128 sales</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }} />
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-foreground">Wild Honey</span>
              <span className="font-semibold text-primary">89 sales</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SellerSettings({ user }: { user: any }) {
  const [formData, setFormData] = useState({
    storeName: user?.storeName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    bank: "",
  })

  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-primary">Store Settings</h1>

      <div className="border border-border rounded-lg bg-card p-6">
        <h2 className="text-xl font-bold text-primary mb-6">Store Information</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Store Name</label>
            <input
              type="text"
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
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
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Bank Account</label>
            <input
              type="text"
              value={formData.bank}
              onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
              placeholder="Bank account for payouts"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
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
