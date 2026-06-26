import { useParams, Navigate } from 'react-router-dom'
import { getBlogPost } from '../data/blog'
import { BlogPostPage } from './BlogPage'

export function BlogPostRoute() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return <BlogPostPage post={post} />
}
