"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TourFilters } from "@/components/tour-filters"
import { TourCard } from "@/components/tour-card"
import { TourModal } from "@/components/tour-modal"

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    destination: "all",
    duration: "all",
    priceRange: [0, 10000],
  })

  const all_tours = [
    {
      id: "1",
      name: "Serengeti Migration Safari",
      location: "Tanzania",
      duration: "7 Days",
      durationDays: 7,
      price: 4500,
      image: "/serengeti-wildebeest-migration.jpg",
      description: "Witness the great migration across the Serengeti plains with expert guides.",
      highlights: ["Great Migration", "Wildebeest Herds", "Expert Guides", "Luxury Camps"],
      bestTime: "June - September",
      groupSize: "4-12 guests",
      difficulty: "Moderate",
      fullDescription:
        "Experience the world's most spectacular wildlife migration. Our 7-day Serengeti expedition takes you into the heart of one of Africa's most pristine ecosystems, where you'll witness millions of wildebeest and zebras in their annual journey.",
    },
    {
      id: "2",
      name: "Kenya Wildlife Adventure",
      location: "Kenya",
      duration: "5 Days",
      durationDays: 5,
      price: 3200,
      image: "/kenyan-savanna-lions-wildlife.jpg",
      description: "Explore Masai Mara and encounter Africa's iconic wildlife in their natural habitat.",
      highlights: ["Big Five", "Masai Mara", "Game Drives", "Traditional Villages"],
      bestTime: "July - October",
      groupSize: "2-10 guests",
      difficulty: "Easy",
      fullDescription:
        "Discover the legendary Masai Mara where lions, elephants, and countless other species roam freely. This 5-day adventure combines thrilling game drives with cultural immersion in Masai villages.",
    },
    {
      id: "3",
      name: "Kruger National Park Experience",
      location: "South Africa",
      duration: "6 Days",
      durationDays: 6,
      price: 3800,
      image: "/kruger-park-big-five-safari.jpg",
      description: "An immersive journey through South Africa's most renowned wildlife reserve.",
      highlights: ["Big Five", "Scenic Drives", "Expert Naturalists", "Luxury Lodges"],
      bestTime: "May - September",
      groupSize: "2-8 guests",
      difficulty: "Easy",
      fullDescription:
        "Explore one of the world's largest game reserves with experienced naturalists. The 6-day Kruger experience offers exceptional wildlife viewing opportunities and comfortable accommodations.",
    },
    {
      id: "4",
      name: "Mount Kilimanjaro Trek",
      location: "Tanzania",
      duration: "8 Days",
      durationDays: 8,
      price: 2800,
      image: "/mount-kilimanjaro-snow-peak.jpg",
      description: "Climb Africa's highest peak with experienced mountaineers.",
      highlights: ["Peak Summit", "Alpine Meadows", "Expert Guides", "All Equipment"],
      bestTime: "June - October",
      groupSize: "2-15 guests",
      difficulty: "Hard",
      fullDescription:
        "Challenge yourself with an ascent of Mount Kilimanjaro. Our 8-day guided trek includes acclimatization days and expert support to maximize your summit success rate.",
    },
    {
      id: "5",
      name: "Okavango Delta Safari",
      location: "Botswana",
      duration: "4 Days",
      durationDays: 4,
      price: 3500,
      image: "/okavango-delta-waterways-wildlife.jpg",
      description: "Navigate the waterways of Africa's largest inland delta.",
      highlights: ["Boat Safaris", "Birdwatching", "Unique Ecosystems", "Luxury Camps"],
      bestTime: "April - October",
      groupSize: "4-10 guests",
      difficulty: "Easy",
      fullDescription:
        "Discover the pristine waters and diverse wildlife of the Okavango Delta. This 4-day safari combines traditional game drives with scenic boat excursions through papyrus channels.",
    },
    {
      id: "6",
      name: "Victoria Falls Adventure",
      location: "Zimbabwe",
      duration: "3 Days",
      durationDays: 3,
      price: 2500,
      image: "/victoria-falls-mist-spray.jpg",
      description: "Experience the awe-inspiring power of one of the world's greatest waterfalls.",
      highlights: ["Waterfall Tours", "Adventure Sports", "Local Markets", "Sunset Cruises"],
      bestTime: "April - June",
      groupSize: "2-20 guests",
      difficulty: "Easy",
      fullDescription:
        "Stand in awe of Victoria Falls' massive spray and thunderous roar. This 3-day package includes guided tours, adventure activities, and scenic cruises along the Zambezi River.",
    },
  ]

  const filtered_tours = all_tours.filter((tour) => {
    const matchDestination =
      filters.destination === "all" || tour.location.toLowerCase().includes(filters.destination.toLowerCase())
    const matchDuration =
      filters.duration === "all" ||
      (filters.duration === "short" && tour.durationDays <= 3) ||
      (filters.duration === "medium" && tour.durationDays > 3 && tour.durationDays <= 6) ||
      (filters.duration === "long" && tour.durationDays > 6)
    const matchPrice = tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1]

    return matchDestination && matchDuration && matchPrice
  })

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Safari Packages</h1>
            <p className="text-lg opacity-90">Handpicked adventures across Africa</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Filters */}
              <div className="lg:col-span-1">
                <TourFilters filters={filters} onFiltersChange={setFilters} />
              </div>

              {/* Tours Grid */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {filtered_tours.length} Package{filtered_tours.length !== 1 ? "s" : ""} Found
                  </h2>
                </div>

                {filtered_tours.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filtered_tours.map((tour) => (
                      <TourCard key={tour.id} tour={tour} onSelect={() => setSelectedTour(tour.id)} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No tours match your filters. Please adjust your search.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && <TourModal tourId={selectedTour} tours={all_tours} onClose={() => setSelectedTour(null)} />}

      <Footer />
    </main>
  )
}
