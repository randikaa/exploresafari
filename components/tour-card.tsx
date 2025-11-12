"use client"

import { MapPin, Calendar, Users, Star } from "lucide-react"

interface Tour {
  id: string
  name: string
  location: string
  duration: string
  price: number
  image: string
  description: string
  highlights: string[]
  bestTime: string
  groupSize: string
  difficulty: string
}

interface TourCardProps {
  tour: Tour
  onSelect: () => void
}

export function TourCard({ tour, onSelect }: TourCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={tour.image || "/placeholder.svg"}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
          ${tour.price}
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          <Star className="w-3 h-3 fill-primary text-primary" />
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <div className="flex items-center gap-1 text-sm text-primary font-semibold mb-1">
            <MapPin className="w-4 h-4" />
            {tour.location}
          </div>
          <h3 className="font-serif text-xl font-bold line-clamp-2">{tour.name}</h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tour.description}</p>

        {/* Highlights */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tour.highlights.slice(0, 2).map((highlight) => (
            <span key={highlight} className="text-xs bg-muted px-2 py-1 rounded">
              {highlight}
            </span>
          ))}
          {tour.highlights.length > 2 && (
            <span className="text-xs bg-muted px-2 py-1 rounded">+{tour.highlights.length - 2} more</span>
          )}
        </div>

        {/* Info Footer */}
        <div className="border-t border-border pt-3 mb-4 flex gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {tour.groupSize}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onSelect}
          className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all text-sm mt-auto"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
