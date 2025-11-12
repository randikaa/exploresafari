"use client"

interface BlogFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogFilter({ selectedCategory, onCategoryChange }: BlogFilterProps) {
  const categories = [
    { value: "all", label: "All Articles" },
    { value: "packing", label: "Packing" },
    { value: "tips", label: "Travel Tips" },
    { value: "photography", label: "Photography" },
    { value: "conservation", label: "Conservation" },
    { value: "culture", label: "Culture" },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category.value
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-background hover:bg-muted text-foreground border border-border"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
