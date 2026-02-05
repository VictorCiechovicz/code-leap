import { useState, useCallback } from 'react'
import { getLikes, toggleLike as toggleLikeStorage } from '../utils/likes'

export const useLikes = () => {
  const [likes, setLikes] = useState(getLikes)

  const toggleLike = useCallback((postId, username) => {
    const updatedLikes = toggleLikeStorage(postId, username)
    setLikes({ ...updatedLikes })
  }, [])

  const getPostLikeCount = useCallback((postId) => {
    return likes[postId]?.length || 0
  }, [likes])

  const hasUserLiked = useCallback((postId, username) => {
    return likes[postId]?.includes(username) || false
  }, [likes])

  return {
    likes,
    toggleLike,
    getPostLikeCount,
    hasUserLiked,
  }
}

