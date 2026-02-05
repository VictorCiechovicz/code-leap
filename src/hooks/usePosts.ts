import { useState, useEffect, useCallback } from 'react'
import * as api from '../services/api'
import type { Post, CreatePostData, UpdatePostData } from '../types'

const POSTS_PER_PAGE = 10

interface UsePostsReturn {
  posts: Post[]
  loading: boolean
  loadingMore: boolean
  error: string | null
  hasMore: boolean
  totalCount: number
  loadPosts: (showLoader?: boolean) => Promise<void>
  loadMorePosts: () => Promise<void>
  createPost: (postData: CreatePostData) => Promise<boolean>
  deletePost: (postId: number) => Promise<boolean>
  updatePost: (postId: number, postData: UpdatePostData) => Promise<boolean>
  clearError: () => void
}

export const usePosts = (isLoggedIn: boolean): UsePostsReturn => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [totalCount, setTotalCount] = useState(0)

  const loadPosts = useCallback(async (showLoader = true) => {
    if (showLoader) setLoading(true)
    setError(null)

    try {
      const data = await api.fetchPosts(POSTS_PER_PAGE, 0)
      const sortedPosts = data.results.sort(
        (a, b) => new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime()
      )
      setPosts(sortedPosts)
      setTotalCount(data.count)
      setHasMore(data.next !== null)
    } catch (err) {
      setError('Failed to load posts. Please try again.')
      console.error('Error fetching posts:', err)
    } finally {
      if (showLoader) setLoading(false)
    }
  }, [])

  const loadMorePosts = useCallback(async () => {
    if (loadingMore || !hasMore) return

    setLoadingMore(true)
    try {
      const data = await api.fetchPosts(POSTS_PER_PAGE, posts.length)
      const newPosts = [...posts, ...data.results]
      const sortedPosts = newPosts.sort(
        (a, b) => new Date(b.created_datetime).getTime() - new Date(a.created_datetime).getTime()
      )
      setPosts(sortedPosts)
      setHasMore(data.next !== null)
    } catch (err) {
      setError('Failed to load more posts.')
      console.error('Error loading more posts:', err)
    } finally {
      setLoadingMore(false)
    }
  }, [posts, loadingMore, hasMore])

  const createPost = async (postData: CreatePostData): Promise<boolean> => {
    setError(null)
    try {
      await api.createPost(postData)
      await loadPosts(false)
      return true
    } catch (err) {
      setError('Failed to create post. Please try again.')
      console.error('Error creating post:', err)
      return false
    }
  }

  const deletePost = async (postId: number): Promise<boolean> => {
    setError(null)
    try {
      await api.deletePost(postId)
      await loadPosts(false)
      return true
    } catch (err) {
      setError('Failed to delete post. Please try again.')
      console.error('Error deleting post:', err)
      return false
    }
  }

  const updatePost = async (postId: number, postData: UpdatePostData): Promise<boolean> => {
    setError(null)
    try {
      await api.updatePost(postId, postData)
      await loadPosts(false)
      return true
    } catch (err) {
      setError('Failed to update post. Please try again.')
      console.error('Error updating post:', err)
      return false
    }
  }

  const clearError = () => setError(null)

  useEffect(() => {
    if (isLoggedIn) {
      loadPosts()
    }
  }, [isLoggedIn, loadPosts])

  return {
    posts,
    loading,
    loadingMore,
    error,
    hasMore,
    totalCount,
    loadPosts,
    loadMorePosts,
    createPost,
    deletePost,
    updatePost,
    clearError,
  }
}

