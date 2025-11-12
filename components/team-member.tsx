"use client"

interface TeamMemberProps {
  member: {
    name: string
    role: string
    bio: string
    image: string
  }
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}
