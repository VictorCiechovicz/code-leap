interface LoadMoreButtonProps {
  onClick: () => void
  loading: boolean
  hasMore: boolean
}

export const LoadMoreButton = ({ onClick, loading, hasMore }: LoadMoreButtonProps) => {
  if (!hasMore) {
    return (
      <div className="load-more-container">
        <p className="no-more-posts">You've reached the end! 🎉</p>
      </div>
    )
  }

  return (
    <div className="load-more-container">
      <button className="load-more-button" onClick={onClick} disabled={loading}>
        {loading ? (
          <>
            <span className="button-spinner"></span>
            Loading...
          </>
        ) : (
          'Load More Posts'
        )}
      </button>
    </div>
  )
}

