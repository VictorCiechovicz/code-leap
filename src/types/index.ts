export interface Post {
  id: number
  username: string
  title: string
  content: string
  created_datetime: string
}

export interface PostsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Post[]
}

export interface CreatePostData {
  username: string
  title: string
  content: string
}

export interface UpdatePostData {
  title: string
  content: string
}

export interface LikesMap {
  [postId: number]: string[]
}

