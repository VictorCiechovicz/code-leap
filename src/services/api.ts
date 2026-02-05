import type { Post, PostsResponse, CreatePostData, UpdatePostData } from '../types'

const API_URL = 'https://dev.codeleap.co.uk/careers/'

export const fetchPosts = async (limit = 10, offset = 0): Promise<PostsResponse> => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`)
  if (!response.ok) throw new Error('Failed to fetch posts')

  const data: PostsResponse = await response.json()

  return {
    results: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
  }
}

export const createPost = async (postData: CreatePostData): Promise<Post> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  if (!response.ok) throw new Error('Failed to create post')
  return response.json()
}

export const deletePost = async (postId: number): Promise<void> => {
  const response = await fetch(`${API_URL}${postId}/`, {
    method: 'DELETE',
  })

  if (!response.ok) throw new Error('Failed to delete post')
}

export const updatePost = async (postId: number, postData: UpdatePostData): Promise<Post> => {
  const response = await fetch(`${API_URL}${postId}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  if (!response.ok) throw new Error('Failed to update post')
  return response.json()
}

