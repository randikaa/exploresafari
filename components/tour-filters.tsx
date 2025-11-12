"use client"

interface Filters {
  destination: string
  duration: string
  priceRange: [number, number]
}

interface TourFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
}

export function TourFilters({ filters, onFiltersChange }: TourFiltersProps) {
  const destinations = ["all", "Tanzania", "Kenya", "South Africa", "Botswana", "Zimbabwe"]
  const durations = [
    { value: "all", label: "All Durations" },
    { value: "short", label: "Short (1-3 days)" },
    { value: "medium", label: "Medium (4-6 days)" },
    { value: "long", label: "Long (7+ days)" },
  ]

  return (
    <div className="sticky top-24 space-y-6 bg-card p-6 rounded-lg shadow-lg">
      <div>
        <h3 className="font-semibold text-lg mb-3">Destination</h3>
        <div className="space-y-2">
          {destinations.map((dest) => (
            <label key={dest} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="destination"
                value={dest}
                checked={filters.destination === dest}
                onChange={(e) => onFiltersChange({ ...filters, destination: e.target.value })}
                className="w-4 h-4 text-primary"
              />
              <span className="ml-3 text-sm capitalize">{dest === "all" ? "All Destinations" : dest}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-lg mb-3">Duration</h3>
        <div className="space-y-2">
          {durations.map((duration) => (
            <label key={duration.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="duration"
                value={duration.value}
                checked={filters.duration === duration.value}
                onChange={(e) => onFiltersChange({ ...filters, duration: e.target.value })}
                className="w-4 h-4 text-primary"
              />
              <span className="ml-3 text-sm">{duration.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-lg mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Min: ${filters.priceRange[0]}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={filters.priceRange[0]}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  priceRange: [Number.parseInt(e.target.value), filters.priceRange[1]],
                })
              }
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Max: ${filters.priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="100"
              value={filters.priceRange[1]}
              onChange={(e) =>
                onFiltersChange({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number.parseInt(e.target.value)],
                })
              }
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => onFiltersChange({ destination: "all", duration: "all", priceRange: [0, 10000] })}
        className="w-full py-2 px-4 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors"
      >
        Reset Filters
      </button>
    </div>
  )
}
