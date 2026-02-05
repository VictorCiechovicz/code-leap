import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import type { AuthUser, AuthContextType } from '../types/auth'
import { mapFirebaseUser } from '../types/auth'
import {
  getStoredUsername,
  setStoredUsername,
  removeStoredUsername,
} from '../utils/storage'

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored username (fallback auth)
    const storedUsername = getStoredUsername()
    if (storedUsername) {
      setUser({
        uid: 'local-' + storedUsername,
        email: null,
        displayName: storedUsername,
        photoURL: null,
      })
    }

    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(mapFirebaseUser(firebaseUser))
        // Store display name for posts
        if (firebaseUser.displayName) {
          setStoredUsername(firebaseUser.displayName)
        }
      } else if (!getStoredUsername()) {
        setUser(null)
      }
      setLoading(false)
    })

    // If no Firebase listener fired and we have stored username, stop loading
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      unsubscribe()
      clearTimeout(timeout)
    }
  }, [])

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      if (result.user.displayName) {
        setStoredUsername(result.user.displayName)
      }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      throw error
    }
  }

  const signInWithUsername = (username: string) => {
    setStoredUsername(username)
    setUser({
      uid: 'local-' + username,
      email: null,
      displayName: username,
      photoURL: null,
    })
  }

  const logout = async () => {
    try {
      await signOut(auth)
      removeStoredUsername()
      setUser(null)
    } catch (error) {
      console.error('Error signing out:', error)
      // Even if Firebase signout fails, clear local state
      removeStoredUsername()
      setUser(null)
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signInWithUsername,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

