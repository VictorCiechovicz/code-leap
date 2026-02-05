interface HeaderProps {
  onLogout: () => void
  username: string
  photoURL?: string | null
}

export const Header = ({ onLogout, username, photoURL }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>CodeLeap Network</h1>
        <div className="header-user">
          {photoURL && (
            <img src={photoURL} alt="Profile" className="header-avatar" />
          )}
          <span className="header-username">@{username}</span>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
