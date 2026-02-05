import { useState } from 'react'
import type { CreatePostData } from '../types'

const MAX_TITLE_LENGTH = 100
const MAX_CONTENT_LENGTH = 500

interface CreatePostFormProps {
  username: string
  onCreatePost: (postData: CreatePostData) => Promise<boolean>
}

export const CreatePostForm = ({ username, onCreatePost }: CreatePostFormProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return

    setLoading(true)
    const success = await onCreatePost({ username, title, content })

    if (success) {
      setTitle('')
      setContent('')
    }
    setLoading(false)
  }

  const isDisabled = !title.trim() || !content.trim() || loading

  return (
    <div className="card create-post-card">
      <h2>What's on your mind?</h2>

      <label className="form-label">Title</label>
      <div className="input-wrapper">
        <input
          type="text"
          className="form-input"
          placeholder="Hello world"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, MAX_TITLE_LENGTH))}
          maxLength={MAX_TITLE_LENGTH}
        />
        <span className={`char-counter ${title.length >= MAX_TITLE_LENGTH ? 'limit' : ''}`}>
          {title.length}/{MAX_TITLE_LENGTH}
        </span>
      </div>

      <label className="form-label">Content</label>
      <div className="input-wrapper">
        <textarea
          className="form-textarea"
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, MAX_CONTENT_LENGTH))}
          rows={4}
          maxLength={MAX_CONTENT_LENGTH}
        />
        <span className={`char-counter ${content.length >= MAX_CONTENT_LENGTH ? 'limit' : ''}`}>
          {content.length}/{MAX_CONTENT_LENGTH}
        </span>
      </div>

      <div className="create-button-container">
        <button
          className={`create-button ${isDisabled ? 'disabled' : ''}`}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          {loading ? (
            <>
              <span className="button-spinner"></span>
              Creating...
            </>
          ) : (
            'Create'
          )}
        </button>
      </div>
    </div>
  )
}

