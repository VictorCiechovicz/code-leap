import { useState, useEffect, useCallback } from 'react'
import * as api from '../services/api'

const POSTS_PER_PAGE = 10

export const usePosts = (isLoggedIn) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [totalCount, setTotalCount] = useState(0)

  const loadPosts = useCallback(async (showLoader = true) => {
    if (showLoader) setLoading(true)
    setError(null)
    
    try {
      const data = await api.fetchPosts(POSTS_PER_PAGE, 0)
      const sortedPosts = data.results.sort((a, b) =>
        new Date(b.created_datetime) - new Date(a.created_datetime)
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
      const sortedPosts = newPosts.sort((a, b) =>
        new Date(b.created_datetime) - new Date(a.created_datetime)
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

  const createPost = async (postData) => {
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

  const deletePost = async (postId) => {
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

  const updatePost = async (postId, postData) => {
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
