const STORAGE_KEY = 'codeleap_username'

export const getStoredUsername = (): string => {
  return localStorage.getItem(STORAGE_KEY) || ''
}

export const setStoredUsername = (username: string): void => {
  localStorage.setItem(STORAGE_KEY, username)
}

export const removeStoredUsername = (): void => {
  localStorage.removeItem(STORAGE_KEY)
}

export const isUserLoggedIn = (): boolean => {
  return !!localStorage.getItem(STORAGE_KEY)
}

