"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SA</span>
              </div>
              <span className="font-serif font-bold text-lg">Safari Adventures</span>
            </div>
            <p className="text-sm opacity-80">Experience the wild heart of Africa with us.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:opacity-80 transition-opacity">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-80 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-80 transition-opacity">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Packing Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Visa Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-80">info@safariadventures.com</p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-sm text-center opacity-75">
          <p>© 2025 Safari Adventures. All rights reserved. Protecting Africa's wildlife and ecosystems.</p>
        </div>
      </div>
    </footer>
  )
}
