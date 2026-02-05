import { useState, useMemo } from 'react'
import './App.css'

// Components
import {
  SignupModal,
  Header,
  CreatePostForm,
  PostList,
  ErrorToast,
  DeleteModal,
  EditModal,
  FilterBar,
  LoadMoreButton,
} from './components'

// Hooks
import { usePosts } from './hooks/usePosts'
import { useLikes } from './hooks/useLikes'

// Utils
import {
  getStoredUsername,
  setStoredUsername,
  removeStoredUsername,
  isUserLoggedIn
} from './utils/storage'

function App() {
  // Auth state
  const [username, setUsername] = useState(getStoredUsername)
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn)

  // Filter state
  const [sortBy, setSortBy] = useState('newest')
  const [filterBy, setFilterBy] = useState('all')

  // Posts hook
  const {
    posts,
    loading,
    loadingMore,
    error,
    hasMore,
    totalCount,
    createPost,
    deletePost,
    updatePost,
    loadMorePosts,
    clearError
  } = usePosts(isLoggedIn)

  // Likes hook
  const { toggleLike, getPostLikeCount, hasUserLiked } = useLikes()

  // Modal state
  const [postToDelete, setPostToDelete] = useState(null)
  const [postToEdit, setPostToEdit] = useState(null)

  // Filtered and sorted posts
  const displayedPosts = useMemo(() => {
    let filtered = [...posts]

    // Apply filter
    if (filterBy === 'mine') {
      filtered = filtered.filter(post => post.username === username)
    }

    // Apply sort
    filtered.sort((a, b) => {
      const dateA = new Date(a.created_datetime)
      const dateB = new Date(b.created_datetime)
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB
    })

    return filtered
  }, [posts, filterBy, sortBy, username])

  // Auth handlers
  const handleLogin = (newUsername) => {
    setStoredUsername(newUsername)
    setUsername(newUsername)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    removeStoredUsername()
    setUsername('')
    setIsLoggedIn(false)
  }

  // Post handlers
  const handleCreatePost = async (postData) => {
    return await createPost(postData)
  }

  const handleDeletePost = async (postId) => {
    const success = await deletePost(postId)
    if (success) {
      setPostToDelete(null)
    }
    return success
  }

  const handleUpdatePost = async (postId, postData) => {
    const success = await updatePost(postId, postData)
    if (success) {
      setPostToEdit(null)
    }
    return success
  }

  // Like handler
  const handleToggleLike = (postId) => {
    toggleLike(postId, username)
  }

  // Modal handlers
  const openDeleteModal = (post) => setPostToDelete(post)
  const closeDeleteModal = () => setPostToDelete(null)

  const openEditModal = (post) => setPostToEdit(post)
  const closeEditModal = () => setPostToEdit(null)

  // Render signup if not logged in
  if (!isLoggedIn) {
    return <SignupModal onLogin={handleLogin} />
  }

  // Main screen
  return (
    <div className="app-container">
      <Header onLogout={handleLogout} username={username} />

      <ErrorToast message={error} onDismiss={clearError} />

      <main className="main-content">
        <CreatePostForm
          username={username}
          onCreatePost={handleCreatePost}
        />

        <FilterBar
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterBy={filterBy}
          onFilterChange={setFilterBy}
          currentUsername={username}
          totalCount={totalCount}
        />

        <PostList
          posts={displayedPosts}
          loading={loading}
          error={error}
          currentUsername={username}
          onDelete={openDeleteModal}
          onEdit={openEditModal}
          getPostLikeCount={getPostLikeCount}
          hasUserLiked={hasUserLiked}
          onToggleLike={handleToggleLike}
        />

        {!loading && displayedPosts.length > 0 && filterBy === 'all' && (
          <LoadMoreButton
            onClick={loadMorePosts}
            loading={loadingMore}
            hasMore={hasMore}
          />
        )}
      </main>

      {postToDelete && (
        <DeleteModal
          post={postToDelete}
          onConfirm={handleDeletePost}
          onCancel={closeDeleteModal}
        />
      )}

      {postToEdit && (
        <EditModal
          post={postToEdit}
          onSave={handleUpdatePost}
          onCancel={closeEditModal}
        />
      )}
    </div>
  )
}

export default App
