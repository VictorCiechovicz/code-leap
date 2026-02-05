import { PostCard } from './PostCard'
import { LoadingSpinner } from './LoadingSpinner'
import { EmptyState } from './EmptyState'

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
}) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (!loading && posts.length === 0 && !error) {
    return <EmptyState />
  }

  return (
    <>
      {posts.map((post, index) => (
        <PostCard
          key={post.id}
          post={post}
          currentUsername={currentUsername}
          onDelete={onDelete}
          onEdit={onEdit}
          likeCount={getPostLikeCount(post.id)}
          hasLiked={hasUserLiked(post.id, currentUsername)}
          onToggleLike={onToggleLike}
          style={{ animationDelay: `${index * 0.05}s` }}
        />
      ))}
    </>
  )
}
