"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const steps = [
    { number: 1, title: "Select Tour", description: "Choose your safari adventure" },
    { number: 2, title: "Pick Dates", description: "Select your travel dates" },
    { number: 3, title: "Travelers", description: "Add traveler information" },
    { number: 4, title: "Accommodations", description: "Choose your lodging" },
    { number: 5, title: "Review & Pay", description: "Complete your booking" },
  ]

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Book Your Safari</h1>
            <p className="text-lg opacity-90">Complete these steps to reserve your African adventure</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Step Indicator */}
            <div className="mb-12">
              <div className="flex items-start justify-between">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center flex-1 relative">
                    {/* Step Circle */}
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg transition-all z-10 ${
                        currentStep >= step.number
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.number ? <span>✓</span> : step.number}
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-6 left-1/2 w-full h-1">
                        <div
                          className={`h-full transition-all ${currentStep > step.number ? "bg-primary" : "bg-muted"}`}
                        ></div>
                      </div>
                    )}

                    {/* Step Labels */}
                    <div
                      className={`text-center text-sm mt-4 ${
                        currentStep === step.number
                          ? "font-bold text-primary"
                          : currentStep > step.number
                            ? "text-primary font-semibold"
                            : "text-muted-foreground"
                      }`}
                    >
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-xs opacity-75">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <BookingForm currentStep={currentStep} onStepChange={setCurrentStep} totalSteps={totalSteps} />
          </div>
        </section>

        {/* Progress Bar Footer */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-sm">
              <p className="text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </p>
              <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
