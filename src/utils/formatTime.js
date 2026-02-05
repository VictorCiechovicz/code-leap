
export const getTimeAgo = (datetime) => {
  const now = new Date()
  const postDate = new Date(datetime)
  const diffInSeconds = Math.floor((now - postDate) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  }
  
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }
  
  const days = Math.floor(diffInSeconds / 86400)
  return `${days} day${days > 1 ? 's' : ''} ago`
}

