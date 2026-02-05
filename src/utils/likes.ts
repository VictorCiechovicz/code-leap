import type { LikesMap } from '../types'

const LIKES_KEY = 'codeleap_likes'

export const getLikes = (): LikesMap => {
  const stored = localStorage.getItem(LIKES_KEY)
  return stored ? JSON.parse(stored) : {}
}

export const toggleLike = (postId: number, username: string): LikesMap => {
  const likes = getLikes()

  if (!likes[postId]) {
    likes[postId] = []
  }

  const userIndex = likes[postId].indexOf(username)

  if (userIndex > -1) {
    likes[postId].splice(userIndex, 1)
  } else {
    likes[postId].push(username)
  }

  localStorage.setItem(LIKES_KEY, JSON.stringify(likes))
  return likes
}

export const getPostLikes = (postId: number): string[] => {
  const likes = getLikes()
  return likes[postId] || []
}

export const hasUserLiked = (postId: number, username: string): boolean => {
  const likes = getPostLikes(postId)
  return likes.includes(username)
}

