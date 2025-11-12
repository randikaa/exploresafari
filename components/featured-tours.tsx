"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Tour {
  id: string
  name: string
  location: string
  duration: string
  price: number
  image: string
  description: string
}

const featured_tours: Tour[] = [
  {
    id: "1",
    name: "Serengeti Migration Safari",
    location: "Tanzania",
    duration: "7 Days",
    price: 4500,
    image: "/serengeti-wildebeest-migration.jpg",
    description: "Witness the great migration across the Serengeti plains with expert guides.",
  },
  {
    id: "2",
    name: "Kenya Wildlife Adventure",
    location: "Kenya",
    duration: "5 Days",
    price: 3200,
    image: "/kenyan-savanna-lions-wildlife.jpg",
    description: "Explore Masai Mara and encounter Africa's iconic wildlife in their natural habitat.",
  },
  {
    id: "3",
    name: "Kruger National Park Experience",
    location: "South Africa",
    duration: "6 Days",
    price: 3800,
    image: "/kruger-park-big-five-safari.jpg",
    description: "An immersive journey through South Africa's most renowned wildlife reserve.",
  },
]

export function FeaturedTours() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">Featured Safari Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated experiences across Africa's most spectacular destinations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured_tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  ${tour.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wide">{tour.location}</p>
                  <h3 className="font-serif text-2xl font-bold mt-1">{tour.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group/link"
                  >
                    Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-block px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold transition-all transform hover:scale-105"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  )
}
