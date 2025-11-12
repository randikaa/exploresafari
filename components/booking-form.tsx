"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface BookingFormProps {
  currentStep: number
  onStepChange: (step: number) => void
  totalSteps: number
}

export function BookingForm({ currentStep, onStepChange, totalSteps }: BookingFormProps) {
  const [formData, setFormData] = useState({
    // Step 1: Tour Selection
    selectedTour: "",

    // Step 2: Dates
    startDate: "",
    endDate: "",

    // Step 3: Travelers
    travelers: [{ firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "" }],

    // Step 4: Accommodation
    accommodation: "luxury",
    roomPreference: "single",

    // Step 5: Payment
    agreeToTerms: false,
  })

  const tours = [
    { id: "serengeti", name: "Serengeti Migration Safari", price: "$4,500", duration: "7 Days" },
    { id: "kenya", name: "Kenya Wildlife Adventure", price: "$3,200", duration: "5 Days" },
    { id: "kruger", name: "Kruger National Park Experience", price: "$3,800", duration: "6 Days" },
    { id: "kilimanjaro", name: "Mount Kilimanjaro Trek", price: "$2,800", duration: "8 Days" },
    { id: "okavango", name: "Okavango Delta Safari", price: "$3,500", duration: "4 Days" },
    { id: "victoria", name: "Victoria Falls Adventure", price: "$2,500", duration: "3 Days" },
  ]

  const accommodationOptions = [
    { id: "luxury", name: "Luxury Lodge", price: "+$200/night", description: "5-star amenities and premium service" },
    { id: "standard", name: "Standard Lodge", price: "+$100/night", description: "Comfortable accommodations" },
    { id: "budget", name: "Budget Camp", price: "+$50/night", description: "Basic but comfortable" },
  ]

  // Render Step 1: Tour Selection
  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-6">Which safari adventure interests you?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tours.map((tour) => (
          <div
            key={tour.id}
            onClick={() => setFormData({ ...formData, selectedTour: tour.id })}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.selectedTour === tour.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{tour.name}</h4>
              <div className="w-6 h-6 rounded-full border-2 border-border flex items-center justify-center">
                {formData.selectedTour === tour.id && <div className="w-4 h-4 bg-primary rounded-full"></div>}
              </div>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{tour.duration}</span>
              <span className="font-semibold text-primary">{tour.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Render Step 2: Dates
  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">When do you want to travel?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Best Time to Visit:</span> June - October for optimal wildlife viewing
        </p>
      </div>
    </div>
  )

  // Render Step 3: Travelers
  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Traveler Information</h3>
      <div className="space-y-6">
        {formData.travelers.map((traveler, index) => (
          <div key={index} className="p-4 border border-border rounded-lg space-y-4">
            <h4 className="font-semibold">Traveler {index + 1}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={traveler.firstName}
                  onChange={(e) => {
                    const newTravelers = [...formData.travelers]
                    newTravelers[index].firstName = e.target.value
                    setFormData({ ...formData, travelers: newTravelers })
                  }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={traveler.lastName}
                  onChange={(e) => {
                    const newTravelers = [...formData.travelers]
                    newTravelers[index].lastName = e.target.value
                    setFormData({ ...formData, travelers: newTravelers })
                  }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={traveler.email}
                  onChange={(e) => {
                    const newTravelers = [...formData.travelers]
                    newTravelers[index].email = e.target.value
                    setFormData({ ...formData, travelers: newTravelers })
                  }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={traveler.phone}
                  onChange={(e) => {
                    const newTravelers = [...formData.travelers]
                    newTravelers[index].phone = e.target.value
                    setFormData({ ...formData, travelers: newTravelers })
                  }}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                value={traveler.dateOfBirth}
                onChange={(e) => {
                  const newTravelers = [...formData.travelers]
                  newTravelers[index].dateOfBirth = e.target.value
                  setFormData({ ...formData, travelers: newTravelers })
                }}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        ))}

        <button
          onClick={() => {
            setFormData({
              ...formData,
              travelers: [
                ...formData.travelers,
                { firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "" },
              ],
            })
          }}
          className="w-full px-4 py-3 border-2 border-dashed border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
        >
          + Add Another Traveler
        </button>
      </div>
    </div>
  )

  // Render Step 4: Accommodations
  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Choose Your Accommodation</h3>
      <div className="space-y-3">
        {accommodationOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setFormData({ ...formData, accommodation: option.id })}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.accommodation === option.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold">{option.name}</h4>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">{option.price}</p>
                <div className="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center ml-auto mt-2">
                  {formData.accommodation === option.id && <div className="w-3 h-3 bg-primary rounded-full"></div>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 mt-6">
        <h4 className="font-semibold">Room Preference</h4>
        <div className="grid grid-cols-3 gap-3">
          {["single", "double", "family"].map((preference) => (
            <button
              key={preference}
              onClick={() => setFormData({ ...formData, roomPreference: preference })}
              className={`px-4 py-3 rounded-lg border-2 font-medium transition-all capitalize ${
                formData.roomPreference === preference
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {preference}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  // Render Step 5: Review
  const renderStep5 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Review & Confirm Your Booking</h3>

      {/* Booking Summary */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-muted-foreground">Selected Tour:</span>
          <span className="font-semibold">{tours.find((t) => t.id === formData.selectedTour)?.name}</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-muted-foreground">Travel Dates:</span>
          <span className="font-semibold">
            {formData.startDate} to {formData.endDate}
          </span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-muted-foreground">Number of Travelers:</span>
          <span className="font-semibold">{formData.travelers.length}</span>
        </div>
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-muted-foreground">Accommodation:</span>
          <span className="font-semibold">
            {accommodationOptions.find((a) => a.id === formData.accommodation)?.name}
          </span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span className="font-semibold">Estimated Total:</span>
          <span className="text-2xl font-bold text-primary">$15,200</span>
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
          className="w-5 h-5 rounded border-border mt-1 cursor-pointer"
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
          I agree to the{" "}
          <a href="#" className="text-primary font-semibold hover:underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary font-semibold hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Payment Methods */}
      <div className="space-y-3">
        <h4 className="font-semibold">Select Payment Method</h4>
        <div className="grid grid-cols-2 gap-3">
          {["credit_card", "paypal", "bank_transfer", "apple_pay"].map((method) => (
            <button
              key={method}
              className="p-3 border border-border rounded-lg hover:border-primary transition-colors capitalize font-medium"
            >
              {method.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Form Content */}
      <div className="bg-card border border-border rounded-lg p-8 min-h-96">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        {currentStep === 5 && renderStep5()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4">
        <button
          onClick={() => onStepChange(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={() => onStepChange(Math.min(totalSteps, currentStep + 1))}
            disabled={!isStepValid()}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ml-auto"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            disabled={!formData.agreeToTerms}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ml-auto"
          >
            <Check className="w-5 h-5" />
            Complete Booking
          </button>
        )}
      </div>
    </div>
  )

  function isStepValid(): boolean {
    switch (currentStep) {
      case 1:
        return !!formData.selectedTour
      case 2:
        return !!formData.startDate && !!formData.endDate
      case 3:
        return formData.travelers.every((t) => t.firstName && t.lastName && t.email && t.phone && t.dateOfBirth)
      case 4:
        return !!formData.accommodation
      case 5:
        return formData.agreeToTerms
      default:
        return false
    }
  }
}
