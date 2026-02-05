import { useState, KeyboardEvent } from 'react'
import googleIcon from '../assets/google-icon.svg'

interface SignupModalProps {
  onLogin: (username: string) => void
  onGoogleLogin: () => Promise<void>
}

export const SignupModal = ({ onLogin, onGoogleLogin }: SignupModalProps) => {
  const [username, setUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await onGoogleLogin()
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.')
      console.error('Google login error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <h1 className="signup-title">Welcome to CodeLeap network!</h1>

        {/* Google Login Button */}
        <button
          className="google-login-button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="button-spinner"></span>
              Signing in...
            </>
          ) : (
            <>
              <img src={googleIcon} alt="Google" width={20} height={20} />
              Continue with Google
            </>
          )}
        </button>

        {error && <p className="auth-error">{error}</p>}

        <div className="auth-divider">
          <span>or</span>
        </div>

        {/* Username Login */}
        <label className="signup-label">Enter your username</label>
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
