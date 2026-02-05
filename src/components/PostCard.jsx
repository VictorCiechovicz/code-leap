import deleteIcon from '../assets/ic_baseline-delete-forever.svg'
import editIcon from '../assets/bx_bx-edit.svg'
import { getTimeAgo } from '../utils/formatTime'

export const PostCard = ({
  post,
  currentUsername,
  onDelete,
  onEdit,
  likeCount,
  hasLiked,
  onToggleLike,
}) => {
  const isOwner = post.username === currentUsername

  return (
    <div className="card post-card animate-fade-in">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        {isOwner && (
          <div className="post-actions">
            <button
              className="action-button delete-button"
              onClick={() => onDelete(post)}
              title="Delete post"
            >
              <img src={deleteIcon} alt="Delete" />
            </button>
            <button
              className="action-button edit-button"
              onClick={() => onEdit(post)}
              title="Edit post"
            >
              <img src={editIcon} alt="Edit" />
            </button>
          </div>
        )}
      </div>
      <div className="post-body">
        <div className="post-meta">
          <span className="post-author">@{post.username}</span>
          <span className="post-time">{getTimeAgo(post.created_datetime)}</span>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="post-footer">
          <button
            className={`like-button ${hasLiked ? 'liked' : ''}`}
            onClick={() => onToggleLike(post.id)}
            title={hasLiked ? 'Unlike' : 'Like'}
          >
            <span className="like-icon">{hasLiked ? '❤️' : '🤍'}</span>
            <span className="like-count">{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
