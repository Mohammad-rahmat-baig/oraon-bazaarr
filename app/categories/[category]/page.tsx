import { notFound } from "next/navigation"
import Breadcrumb from "@/components/breadcrumb"
import ProductGrid from "@/components/product-grid"
import Sidebar from "@/components/sidebar"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

const categoryData = {
  food: {
    name: "Food & Organic Products",
    description: "Fresh, certified organic produce and traditional foods directly from tribal farms",
    icon: "leaf",
  },
  art: {
    name: "Art & Handicraft",
    description: "Authentic tribal art and handcrafted items created by talented artisans",
    icon: "palette",
  },
  soil: {
    name: "Soil & Fertilizer",
    description: "Natural soil amendments and organic fertilizers for sustainable farming",
    icon: "sprout",
  },
  learning: {
    name: "Learning & Skill Center",
    description: "Learn traditional crafts, farming techniques, and sustainable practices",
    icon: "book-open",
  },
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryInfo = categoryData[category as keyof typeof categoryData]

  if (!categoryInfo) {
    notFound()
  }

  return (
    <div>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: categoryInfo.name }]} />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-8 sm:py-12 tribal-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary sm:text-4xl mb-3">{categoryInfo.name}</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">{categoryInfo.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <Sidebar category={category} />
          <div className="lg:col-span-3">
            <ProductGrid category={category} />
          </div>
        </div>
      </div>
    </div>
  )
}
