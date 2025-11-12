"use client"

import Link from "next/link"
import { Calendar, User, BookOpen, ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  category: string
  image: string
  excerpt: string
  author: string
  date: string
  readTime: number
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

        {/* Meta Info */}
        <div className="space-y-3 mb-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {post.readTime} min read
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group/link mt-auto"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
