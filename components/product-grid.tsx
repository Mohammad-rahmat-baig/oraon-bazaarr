"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import { LayoutGrid, List } from "lucide-react"

interface ProductGridProps {
  category: string
}

// Mock product data for different categories
const productsByCategory = {
  food: [
    {
      id: 1,
      name: "Organic Turmeric Powder",
      price: 450,
      originalPrice: 600,
      image: "/placeholder.svg?key=food1",
      rating: 4.8,
      reviews: 234,
      seller: "Organic Farm Collective",
      description: "Pure organic turmeric from tribal farms",
      inStock: true,
    },
    {
      id: 2,
      name: "Wild Honey",
      price: 750,
      originalPrice: 900,
      image: "/placeholder.svg?key=food2",
      rating: 4.9,
      reviews: 189,
      seller: "Forest Beekeepers",
      description: "Raw forest honey harvested traditionally",
      inStock: true,
    },
    {
      id: 3,
      name: "Millet Mix Pack",
      price: 320,
      originalPrice: 400,
      image: "/placeholder.svg?key=food3",
      rating: 4.6,
      reviews: 156,
      seller: "Tribal Farmers Co-op",
      description: "Mix of ancient millets - nutritious and organic",
      inStock: true,
    },
    {
      id: 4,
      name: "Bamboo Shoots",
      price: 280,
      originalPrice: 350,
      image: "/placeholder.svg?key=food4",
      rating: 4.7,
      reviews: 98,
      seller: "Forest Harvest",
      description: "Fresh bamboo shoots from sustainable forests",
      inStock: true,
    },
    {
      id: 5,
      name: "Tribal Rice Blend",
      price: 550,
      originalPrice: 700,
      image: "/placeholder.svg?key=food5",
      rating: 4.8,
      reviews: 267,
      seller: "Heritage Rice Farmers",
      description: "Ancient variety rice blend from tribal fields",
      inStock: true,
    },
    {
      id: 6,
      name: "Spice Masala Mix",
      price: 420,
      originalPrice: 550,
      image: "/placeholder.svg?key=food6",
      rating: 4.5,
      reviews: 143,
      seller: "Spice Artisans",
      description: "Traditional spice blend for authentic tribal cuisine",
      inStock: true,
    },
  ],
  art: [
    {
      id: 7,
      name: "Hand-Painted Ceramic Plate",
      price: 1200,
      originalPrice: 1500,
      image: "/placeholder.svg?key=art1",
      rating: 4.9,
      reviews: 312,
      seller: "Traditional Pottery by Mira",
      description: "Tribal patterns hand-painted on ceramic",
      inStock: true,
    },
    {
      id: 8,
      name: "Woven Wall Hanging",
      price: 2800,
      originalPrice: 3500,
      image: "/placeholder.svg?key=art2",
      rating: 4.8,
      reviews: 245,
      seller: "Handwoven Textiles Studio",
      description: "Large decorative wall hanging with tribal motifs",
      inStock: true,
    },
    {
      id: 9,
      name: "Tribal Mask Art Piece",
      price: 950,
      originalPrice: 1200,
      image: "/placeholder.svg?key=art3",
      rating: 4.7,
      reviews: 189,
      seller: "Artisan Collective",
      description: "Wooden tribal mask with authentic designs",
      inStock: false,
    },
    {
      id: 10,
      name: "Handmade Beaded Necklace",
      price: 680,
      originalPrice: 850,
      image: "/placeholder.svg?key=art4",
      rating: 4.9,
      reviews: 421,
      seller: "Bead Artisans",
      description: "Traditional beadwork jewelry piece",
      inStock: true,
    },
    {
      id: 11,
      name: "Tribal Basket",
      price: 1450,
      originalPrice: 1800,
      image: "/placeholder.svg?key=art5",
      rating: 4.6,
      reviews: 167,
      seller: "Basket Weavers",
      description: "Large decorative storage basket",
      inStock: true,
    },
    {
      id: 12,
      name: "Painted Fabric Tapestry",
      price: 1800,
      originalPrice: 2200,
      image: "/placeholder.svg?key=art6",
      rating: 4.8,
      reviews: 198,
      seller: "Fabric Artists",
      description: "Hand-painted tribal scenes on fabric",
      inStock: true,
    },
  ],
  soil: [
    {
      id: 13,
      name: "Organic Compost Mix",
      price: 400,
      originalPrice: 500,
      image: "/placeholder.svg?key=soil1",
      rating: 4.7,
      reviews: 289,
      seller: "Green Earth Supplies",
      description: "10kg organic compost for gardens",
      inStock: true,
    },
    {
      id: 14,
      name: "Neem Powder Fertilizer",
      price: 350,
      originalPrice: 450,
      image: "/placeholder.svg?key=soil2",
      rating: 4.8,
      reviews: 176,
      seller: "Organic Supplies Co",
      description: "Pure neem powder for pest control and nutrition",
      inStock: true,
    },
    {
      id: 15,
      name: "Vermicompost (5kg)",
      price: 520,
      originalPrice: 650,
      image: "/placeholder.svg?key=soil3",
      rating: 4.9,
      reviews: 334,
      seller: "Earthworm Farms",
      description: "Rich vermicompost for nutrient-rich soil",
      inStock: true,
    },
    {
      id: 16,
      name: "Biochar Soil Amendment",
      price: 480,
      originalPrice: 600,
      image: "/placeholder.svg?key=soil4",
      rating: 4.6,
      reviews: 145,
      seller: "Carbon Farming",
      description: "Biochar to improve soil structure and water retention",
      inStock: true,
    },
    {
      id: 17,
      name: "Organic Seaweed Fertilizer",
      price: 380,
      originalPrice: 480,
      image: "/placeholder.svg?key=soil5",
      rating: 4.8,
      reviews: 267,
      seller: "Ocean Harvest",
      description: "Liquid seaweed fertilizer for balanced nutrition",
      inStock: true,
    },
    {
      id: 18,
      name: "Rock Phosphate (10kg)",
      price: 550,
      originalPrice: 700,
      image: "/placeholder.svg?key=soil6",
      rating: 4.7,
      reviews: 198,
      seller: "Mineral Supplies",
      description: "Natural phosphate for plant growth",
      inStock: false,
    },
  ],
  learning: [
    {
      id: 19,
      name: "Pottery Making Workshop",
      price: 1500,
      originalPrice: 2000,
      image: "/placeholder.svg?key=learn1",
      rating: 4.9,
      reviews: 87,
      seller: "Mira Pottery Studio",
      description: "5-week online pottery fundamentals course",
      inStock: true,
    },
    {
      id: 20,
      name: "Traditional Weaving Course",
      price: 2000,
      originalPrice: 2500,
      image: "/placeholder.svg?key=learn2",
      rating: 4.8,
      reviews: 64,
      seller: "Weaving Heritage",
      description: "8-week comprehensive weaving techniques course",
      inStock: true,
    },
    {
      id: 21,
      name: "Organic Farming Guide (Video Series)",
      price: 800,
      originalPrice: 1200,
      image: "/placeholder.svg?key=learn3",
      rating: 4.7,
      reviews: 156,
      seller: "Farm Academy",
      description: "12 video lessons on organic farming practices",
      inStock: true,
    },
    {
      id: 22,
      name: "Natural Dye Making Workshop",
      price: 1200,
      originalPrice: 1600,
      image: "/placeholder.svg?key=learn4",
      rating: 4.9,
      reviews: 102,
      seller: "Color Lab",
      description: "4-week workshop on creating natural dyes",
      inStock: true,
    },
    {
      id: 23,
      name: "Bamboo Craft Mastery",
      price: 1800,
      originalPrice: 2200,
      image: "/placeholder.svg?key=learn5",
      rating: 4.6,
      reviews: 73,
      seller: "Bamboo Artisans",
      description: "Complete guide to bamboo craft techniques",
      inStock: true,
    },
    {
      id: 24,
      name: "Tribal Art & Design Fundamentals",
      price: 950,
      originalPrice: 1300,
      image: "/placeholder.svg?key=learn6",
      rating: 4.8,
      reviews: 141,
      seller: "Art Heritage Institute",
      description: "Learn tribal art patterns and design principles",
      inStock: true,
    },
  ],
}

export default function ProductGrid({ category }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const products = productsByCategory[category as keyof typeof productsByCategory] || []

  return (
    <div>
      {/* View Toggle & Results Count */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
        <p className="text-sm text-foreground/70">Showing {products.length} results</p>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition ${
              viewMode === "grid"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/10 text-foreground hover:bg-secondary/20"
            }`}
          >
            <LayoutGrid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${
              viewMode === "list"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/10 text-foreground hover:bg-secondary/20"
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

function ProductListItem({ product }: { product: any }) {
  return (
    <div className="flex gap-4 p-4 border border-border rounded-lg hover:border-primary hover:shadow-md transition card-shadow bg-card">
      <div className="h-24 w-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-medium text-primary mb-1">{product.seller}</p>
          <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
          <p className="text-sm text-foreground/60">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{product.price}</span>
            <span className="text-sm text-foreground/50 line-through">₹{product.originalPrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${i < Math.floor(product.rating) ? "bg-amber-400" : "bg-muted"}`}
                />
              ))}
            </div>
            <span className="text-sm text-foreground/70">({product.reviews})</span>
          </div>
        </div>
      </div>

      <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition whitespace-nowrap">
        {product.inStock ? "Add to Cart" : "Notify"}
      </button>
    </div>
  )
}
