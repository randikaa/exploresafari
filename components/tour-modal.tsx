"use client"

import { X, MapPin, Calendar, Users, AlertCircle, CheckCircle2 } from "lucide-react"
import { useState } from "react"

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
  fullDescription: string
}

interface TourModalProps {
  tourId: string
  tours: Tour[]
  onClose: () => void
}

export function TourModal({ tourId, tours, onClose }: TourModalProps) {
  const tour = tours.find((t) => t.id === tourId)
  const [isBooking, setIsBooking] = useState(false)

  if (!tour) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border flex justify-between items-center p-6 z-10">
          <h2 className="font-serif text-2xl font-bold">{tour.name}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img src={tour.image || "/placeholder.svg"} alt={tour.name} className="w-full h-full object-cover" />
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{tour.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Best Time</p>
                <p className="font-semibold">{tour.bestTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Group Size</p>
                <p className="font-semibold">{tour.groupSize}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-semibold">{tour.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">About This Tour</h3>
            <p className="text-muted-foreground leading-relaxed">{tour.fullDescription}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Highlights</h3>
            <div className="grid grid-cols-2 gap-3">
              {tour.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">${tour.price}</span>
              <span className="text-sm text-muted-foreground">per person</span>
            </div>
            <button
              onClick={() => setIsBooking(true)}
              className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
            >
              {isBooking ? "Processing..." : "Book This Tour"}
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Secure booking. Cancel anytime up to 30 days before departure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
