import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getFeaturedPosts, formatDate } from '../../data/blog'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimatedSection'

export function LatestInsights() {
  const posts = getFeaturedPosts(3)

  return (
    <section className="py-24 lg:py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 mb-4">
              Blog & Resources
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-veridian hover:gap-2 transition-all"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all"
              >
                <span className="text-xs font-medium text-veridian uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-veridian transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-10 text-center" delay={0.2}>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-veridian transition-colors"
          >
            Explore guides, whitepapers, and case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
