import { useState } from 'react'
import type { Post } from '../types'

interface DeleteModalProps {
  post: Post
  onConfirm: (postId: number) => Promise<boolean>
  onCancel: () => void
}

export const DeleteModal = ({ post, onConfirm, onCancel }: DeleteModalProps) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await onConfirm(post.id)
    setLoading(false)
  }

  return (
    <div className="modal-overlay">
      <div className="modal delete-modal">
        <h2>Are you sure you want to delete this item?</h2>
        <div className="modal-actions">
          <button
            className="modal-button cancel-button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="modal-button confirm-delete-button"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}

