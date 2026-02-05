import { useState, KeyboardEvent } from 'react'

interface SignupModalProps {
  onLogin: (username: string) => void
}

export const SignupModal = ({ onLogin }: SignupModalProps) => {
  const [username, setUsername] = useState('')

  const handleEnter = () => {
    if (username.trim()) {
      onLogin(username.trim())
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && username.trim()) {
      handleEnter()
    }
  }

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <h1 className="signup-title">Welcome to CodeLeap network!</h1>
        <label className="signup-label">Please enter your username</label>
        <input
          type="text"
          className="signup-input"
          placeholder="John doe"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="signup-button-container">
          <button
            className={`signup-button ${!username.trim() ? 'disabled' : ''}`}
            disabled={!username.trim()}
            onClick={handleEnter}
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
  )
}

