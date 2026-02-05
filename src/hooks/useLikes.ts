import { useState, useCallback } from 'react'
import { getLikes, toggleLike as toggleLikeStorage } from '../utils/likes'
import type { LikesMap } from '../types'

interface UseLikesReturn {
  likes: LikesMap
  toggleLike: (postId: number, username: string) => void
  getPostLikeCount: (postId: number) => number
  hasUserLiked: (postId: number, username: string) => boolean
}

export const useLikes = (): UseLikesReturn => {
  const [likes, setLikes] = useState<LikesMap>(getLikes)

  const toggleLike = useCallback((postId: number, username: string) => {
    const updatedLikes = toggleLikeStorage(postId, username)
    setLikes({ ...updatedLikes })
  }, [])

  const getPostLikeCount = useCallback(
    (postId: number): number => {
      return likes[postId]?.length || 0
    },
    [likes]
  )

  const hasUserLiked = useCallback(
    (postId: number, username: string): boolean => {
      return likes[postId]?.includes(username) || false
    },
    [likes]
  )

  return {
    likes,
    toggleLike,
    getPostLikeCount,
    hasUserLiked,
  }
}

