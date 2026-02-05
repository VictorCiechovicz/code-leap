export const FilterBar = ({
  sortBy,
  onSortChange,
  filterBy,
  onFilterChange,
  totalCount,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-info">
        <span className="post-count">{totalCount} posts</span>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            value={filterBy}
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="all">All posts</option>
            <option value="mine">My posts</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort">Sort:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="filter-select"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>
    </div>
  )
}

