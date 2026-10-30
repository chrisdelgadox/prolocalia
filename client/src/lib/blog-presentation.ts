import { categories } from "@/lib/data"
import type { BlogPost } from "@/lib/blog-posts"

export function blogPostLabel(post: BlogPost) {
  const trade = categories.find(category => category.id === post.tradeId)
  return trade ? `${post.topic} · ${trade.name}` : post.topic
}

export function blogPostColor(post: BlogPost) {
  return post.color
}
