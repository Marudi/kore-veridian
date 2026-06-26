import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogPosts, formatDate, type BlogPost } from '../data/blog'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { CTASection } from '../components/home/CTASection'

export function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      <PageHero
        badge="Blog & Insights"
        title="Cloud, AI & Voice"
        titleAccent="Perspectives"
        description="Industry insights, technical deep-dives, and strategic guidance from the Kore Veridian team."
      />

      {featured.length > 0 && (
        <section className="py-16 border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20">
                Featured
              </span>
            </AnimatedSection>
            <StaggerContainer className="grid lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all"
                  >
                    <span className="text-xs font-medium text-veridian uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold mt-3 mb-3 group-hover:text-veridian transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
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
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-bold">All Articles</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-4">
            {[...featured, ...rest].map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-veridian">{post.category}</span>
                      <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-veridian transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-1">{post.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-veridian flex-shrink-0">
                    Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <>
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link to="/blog" className="text-sm text-veridian hover:underline mb-6 inline-block">
              &larr; Back to Blog
            </Link>
            <span className="block text-xs font-semibold uppercase tracking-wider text-veridian mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-text-secondary mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-border-subtle text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-veridian" />
                {post.author}, {post.role}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="prose prose-invert max-w-none space-y-6">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-text-secondary leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border-subtle">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-bg-card border border-border-subtle text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-bg-secondary/30 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-veridian/20 transition-all"
                >
                  <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
                  <p className="text-xs text-text-muted">{r.readTime} read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
