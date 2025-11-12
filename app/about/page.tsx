"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamMember } from "@/components/team-member"
import { Award, Leaf, Users, Globe } from "lucide-react"

export default function AboutPage() {
  const team_members = [
    {
      name: "James Kariuki",
      role: "Founder & CEO",
      bio: "Expert safari guide with 20+ years of experience leading unforgettable African adventures.",
      image: "/placeholder.svg?key=abc123",
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      bio: "Operations specialist ensuring every safari is perfectly executed with attention to detail.",
      image: "/placeholder.svg?key=def456",
    },
    {
      name: "Michael Okonkwo",
      role: "Lead Guide",
      bio: "Award-winning naturalist and wildlife expert passionate about conservation.",
      image: "/placeholder.svg?key=ghi789",
    },
    {
      name: "Emma Thompson",
      role: "Client Experience Manager",
      bio: "Dedicated to creating memorable experiences and ensuring guest satisfaction.",
      image: "/placeholder.svg?key=jkl012",
    },
  ]

  const values = [
    {
      icon: Leaf,
      title: "Conservation",
      description:
        "We protect Africa's ecosystems and wildlife through sustainable tourism practices and community partnerships.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We empower local communities by creating sustainable employment and supporting cultural preservation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver exceptional service and unforgettable experiences through expert guides and quality accommodations.",
    },
    {
      icon: Globe,
      title: "Responsibility",
      description: "We operate ethically, minimizing environmental impact while maximizing positive social outcomes.",
    },
  ]

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">About Safari Adventures</h1>
            <p className="text-lg opacity-90">Inspiring connections between people and the wild heart of Africa</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  At Safari Adventures, we believe that transformative travel experiences create lifelong conservation
                  advocates. Since our founding in 2010, we've been committed to providing luxurious, immersive safari
                  experiences that inspire deep connections with Africa's incredible wildlife and ecosystems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every safari we conduct generates resources for conservation efforts, supports local communities, and
                  educates travelers about the urgent need to protect our planet's greatest natural treasures.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg?key=mission" alt="Safari mission" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every experience we create
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Safari Adventures was founded by James Kariuki, a lifelong safari enthusiast who spent decades exploring
                Africa's most pristine wilderness areas. His passion for wildlife and commitment to sustainable tourism
                inspired him to create a company that could share these incredible experiences responsibly.
              </p>
              <p>
                What started as small group expeditions has grown into a leading safari operator serving thousands of
                guests annually. Yet our commitment remains unchanged: provide transformative experiences while
                protecting the environments we explore.
              </p>
              <p>
                Today, we partner with conservation organizations across East, Central, and Southern Africa to fund
                anti-poaching efforts, habitat restoration, and community development projects. Our success is measured
                not just by guest satisfaction, but by the positive impact we create for wildlife and communities.
              </p>
              <p>
                From humble beginnings to becoming an award-winning safari company, our journey reflects a simple
                belief: that authentic connection with nature inspires people to become stewards of our planet.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to creating unforgettable safari experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team_members.map((member, index) => (
                <TeamMember key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">$2M+</div>
                <p className="text-muted-foreground">Invested in Conservation</p>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-primary mb-2">6</div>
                <p className="text-muted-foreground">African Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Our Conservation Impact</h2>
            <p className="text-lg leading-relaxed mb-8">
              Since 2010, Safari Adventures has contributed over $2 million to conservation initiatives across Africa.
              We partner with organizations protecting endangered species, restoring critical habitats, and supporting
              local communities in wildlife management.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-sm">Poachers Arrested</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <p className="text-sm">Acres Protected</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">200+</div>
                <p className="text-sm">Jobs Created</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the wild heart of Africa while supporting conservation and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tours"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Explore Safaris
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
