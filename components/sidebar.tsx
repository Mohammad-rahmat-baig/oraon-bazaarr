"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SidebarProps {
  category: string
}

const filters = {
  price: {
    label: "Price Range",
    options: [
      { value: "0-500", label: "Under ₹500" },
      { value: "500-1000", label: "₹500 - ₹1000" },
      { value: "1000-5000", label: "₹1000 - ₹5000" },
      { value: "5000+", label: "₹5000+" },
    ],
  },
  rating: {
    label: "Rating",
    options: [
      { value: "4", label: "4 & Up" },
      { value: "3", label: "3 & Up" },
      { value: "2", label: "2 & Up" },
    ],
  },
  inStock: {
    label: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "pre-order", label: "Pre-Order" },
    ],
  },
}

export default function Sidebar({ category }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    rating: true,
    inStock: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-20 space-y-6">
        {Object.entries(filters).map(([key, filter]) => (
          <div key={key} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(key)}
              className="w-full px-4 py-3 flex items-center justify-between bg-secondary/5 hover:bg-secondary/10 transition font-semibold text-foreground text-left"
            >
              {filter.label}
              <ChevronDown className={`h-5 w-5 transition-transform ${expandedSections[key] ? "rotate-180" : ""}`} />
            </button>

            {expandedSections[key] && (
              <div className="p-4 space-y-3">
                {filter.options.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      className="w-4 h-4 rounded border-border text-primary accent-primary"
                    />
                    <span className="text-sm text-foreground/80">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
