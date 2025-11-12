"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { BlogFilter } from "@/components/blog-filter"

interface BlogPost {
  id: string
  title: string
  category: string
  image: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: number
}

const blog_posts: BlogPost[] = [
  {
    id: "1",
    title: "Essential Packing Guide for Your African Safari",
    category: "packing",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80",
    excerpt:
      "Learn what to pack for an unforgettable safari adventure. From clothing to photography gear, we cover everything you need.",
    content: `Preparing for an African safari requires careful planning. Start with lightweight, neutral-colored clothing in earth tones like khaki, tan, and olive green. These colors help you blend into the landscape and reduce insect attraction. Pack layers, as African mornings can be cool while afternoons are warm.

Essential items include a wide-brimmed hat, high-SPF sunscreen, insect repellent with DEET, and binoculars for wildlife viewing. Don't forget a good camera with extra batteries and memory cards—you'll want to capture those unforgettable moments.

For footwear, bring sturdy hiking boots and comfortable walking shoes. A quality day pack is essential for carrying water, snacks, and photography equipment during game drives.`,
    author: "Sarah Johnson",
    date: "2025-03-15",
    readTime: 8,
  },
  {
    id: "2",
    title: "Wildlife Conservation: How Your Safari Helps",
    category: "conservation",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    excerpt:
      "Discover how responsible safari tourism contributes to wildlife protection and ecosystem preservation across Africa.",
    content: `Safari tourism generates crucial funding for wildlife conservation efforts. When you book with ethical operators, a significant portion of your fees goes directly to national parks and wildlife reserves.

These funds support anti-poaching initiatives, ranger training programs, and habitat restoration projects. Local communities benefit through employment opportunities, which incentivizes wildlife protection over exploitation.

Many operators partner with conservation organizations to monitor animal populations and track ecosystem health. By choosing responsible safari companies, you directly contribute to protecting Africa's incredible biodiversity for future generations.`,
    author: "Dr. Michael Chen",
    date: "2025-03-10",
    readTime: 6,
  },
  {
    id: "3",
    title: "Best Time to Visit African Safari Destinations",
    category: "tips",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    excerpt:
      "Timing is everything for the perfect safari. Learn when to visit each destination for optimal wildlife viewing.",
    content: `Different African regions have distinct seasonal patterns that affect wildlife viewing. The Serengeti is best during the dry season (June-September) when animals migrate to river crossings.

Kenya's Masai Mara peaks July-October, while the Okavango Delta in Botswana offers excellent game viewing April-September. Shoulder seasons (April-May and November) provide pleasant weather with fewer tourists and lower prices.

Understanding rainfall patterns is crucial—wet seasons reduce visibility but bring lush landscapes and bird-watching opportunities. Consider your priorities: budget, wildlife concentration, or solitude when choosing your travel dates.`,
    author: "Emma Williams",
    date: "2025-03-05",
    readTime: 7,
  },
  {
    id: "4",
    title: "Photography Tips for Capturing African Wildlife",
    category: "photography",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    excerpt: "Master wildlife photography with our expert tips and techniques for stunning African safari photos.",
    content: `Professional wildlife photography requires patience, technique, and the right equipment. Start with a good quality telephoto lens (at least 200mm) to capture distant subjects without disturbing animals.

Master your camera settings: use faster shutter speeds (1/1000s or faster) to freeze action, and keep ISO flexible for varying light conditions. The golden hours—early morning and late afternoon—provide the best natural lighting for dramatic wildlife shots.

Respect wildlife and maintain safe distances. The best photos often come from patience and observation rather than chasing subjects. Practice composition techniques like rule of thirds and leading lines to create compelling images.`,
    author: "James Rivera",
    date: "2025-02-28",
    readTime: 9,
  },
  {
    id: "5",
    title: "Health Precautions for Safari Travel",
    category: "tips",
    image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80",
    excerpt: "Stay healthy during your safari adventure with these essential health and safety recommendations.",
    content: `Before traveling to Africa, consult with a travel health clinic about necessary vaccinations and malaria prophylaxis. Yellow fever, hepatitis A and B, and typhoid are commonly recommended.

Pack a comprehensive first-aid kit including blister treatments, anti-diarrheal medication, and pain relievers. Drink purified water exclusively and eat only well-cooked foods from reputable establishments.

Protect yourself from mosquitoes by wearing long sleeves during dawn and dusk, using insect repellent, and sleeping under mosquito nets. Sun protection is crucial—reapply sunscreen frequently and stay hydrated throughout the day.`,
    author: "Dr. Lisa Anderson",
    date: "2025-02-20",
    readTime: 6,
  },
  {
    id: "6",
    title: "Meeting Local Communities: Cultural Immersion Guide",
    category: "culture",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    excerpt: "Respectfully engage with local cultures and communities during your African safari experience.",
    content: `Cultural interaction enriches your safari experience. Many communities welcome visitors who approach with respect and genuine interest. Learn basic greetings and phrases in local languages—it's greatly appreciated.

Always ask permission before photographing people, especially children. Show respect for local customs and dress modestly, particularly in villages. Buying directly from local artisans supports the economy and ensures fair compensation.

Consider supporting community-based tourism initiatives that give locals direct control over tourism development. These experiences offer authentic insights while providing sustainable income for communities protecting their ancestral lands.`,
    author: "Maria Santos",
    date: "2025-02-15",
    readTime: 7,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered_posts = blog_posts.filter((post) => {
    const matchCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Travel Tips & Blog</h1>
            <p className="text-lg opacity-90">Expert guides and stories from the African wilderness</p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <BlogFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filtered_posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered_posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No articles found matching your search.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSearchQuery("")
                  }}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary text-secondary-foreground">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-6">
              Subscribe to our newsletter for exclusive travel tips and early access to new safari packages.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-secondary-foreground placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
