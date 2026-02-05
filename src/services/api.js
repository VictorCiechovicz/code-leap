const API_URL = 'https://dev.codeleap.co.uk/careers/'

export const fetchPosts = async (limit = 10, offset = 0) => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
  if (!response.ok) throw new Error('Failed to fetch posts')
  
  const data = await response.json()
  
  return {
    results: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
  }
}

export const createPost = async ({ username, title, content }) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, title, content }),
  })
  
  if (!response.ok) throw new Error('Failed to create post')
  return response.json()
}

export const deletePost = async (postId) => {
  const response = await fetch(`${API_URL}${postId}/`, {
    method: 'DELETE',
  })
  
  if (!response.ok) throw new Error('Failed to delete post')
}

export const updatePost = async (postId, { title, content }) => {
  const response = await fetch(`${API_URL}${postId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })
  
  if (!response.ok) throw new Error('Failed to update post')
  return response.json()
}
