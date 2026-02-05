export const Header = ({ onLogout, username }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>CodeLeap Network</h1>
        <div className="header-user">
          <span className="header-username">@{username}</span>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
