import { useState } from 'react'

export const EditModal = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return

    setLoading(true)
    const success = await onSave(post.id, { title, content })

    if (success) {
      onCancel()
    }
    setLoading(false)
  }

  const isDisabled = !title.trim() || !content.trim() || loading

  return (
    <div className="modal-overlay">
      <div className="modal edit-modal">
        <h2>Edit item</h2>

        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="form-label">Content</label>
        <textarea
          className="form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />

        <div className="modal-actions">
          <button
            className="modal-button cancel-button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="modal-button save-button"
            disabled={isDisabled}
            onClick={handleSave}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}
