"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "serengeti",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormState({
        name: "",
        email: "",
        phone: "",
        destination: "serengeti",
        message: "",
      })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-lg p-8">
      <h2 className="font-serif text-2xl font-bold mb-6">Get Your Free Quote</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-sm font-semibold mb-2">
            Preferred Destination
          </label>
          <select
            id="destination"
            name="destination"
            value={formState.destination}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="serengeti">Serengeti, Tanzania</option>
            <option value="kenya">Masai Mara, Kenya</option>
            <option value="kruger">Kruger National Park, South Africa</option>
            <option value="okavango">Okavango Delta, Botswana</option>
            <option value="kilimanjaro">Mount Kilimanjaro, Tanzania</option>
            <option value="victoria">Victoria Falls, Zimbabwe</option>
            <option value="custom">Custom Itinerary</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your safari dreams..."
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="p-3 rounded-lg bg-green-100 text-green-800 text-sm">
            Thank you! We'll contact you within 24 hours.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-3 rounded-lg bg-red-100 text-red-800 text-sm">Something went wrong. Please try again.</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information is secure and will only be used to contact you.
        </p>
      </form>
    </div>
  )
}
