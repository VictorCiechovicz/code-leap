const STORAGE_KEY = 'codeleap_username'


export const getStoredUsername = () => {
  return localStorage.getItem(STORAGE_KEY) || ''
}


export const setStoredUsername = (username) => {
  localStorage.setItem(STORAGE_KEY, username)
}


export const removeStoredUsername = () => {
  localStorage.removeItem(STORAGE_KEY)
}


export const isUserLoggedIn = () => {
  return !!localStorage.getItem(STORAGE_KEY)
}

