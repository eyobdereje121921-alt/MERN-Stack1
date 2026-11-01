const API_BASE_URL = process.env.REACT_APP_API_URL || (
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://mern-stack1-backend1-vn36.onrender.com'
)

export const apiUrl = (path) => `${API_BASE_URL}${path}`