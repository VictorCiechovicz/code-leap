import { PostCard } from './PostCard'
import { LoadingSpinner } from './LoadingSpinner'
import { EmptyState } from './EmptyState'
import type { Post } from '../types'

interface PostListProps {
  posts: Post[]
  loading: boolean
  error: string | null
  currentUsername: string
  onDelete: (post: Post) => void
  onEdit: (post: Post) => void
  getPostLikeCount: (postId: number) => number
  hasUserLiked: (postId: number, username: string) => boolean
  onToggleLike: (postId: number) => void
}

export const PostList = ({
  posts,
  loading,
  error,
  currentUsername,
  onDelete,
  onEdit,
  getPostLikeCount,
  hasUserLiked,
  onToggleLike,
}: PostListProps) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (!loading && posts.length === 0 && !error) {
    return <EmptyState />
  }

  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          currentUsername={currentUsername}
          onDelete={onDelete}
          onEdit={onEdit}
          likeCount={getPostLikeCount(post.id)}
          hasLiked={hasUserLiked(post.id, currentUsername)}
          onToggleLike={onToggleLike}
        />
      ))}
    </>
  )
}

