const user = JSON.parse(localStorage.getItem('user'))
export default function () {
  return {
    user: user || {},
    isAuthenticated: false
  }
}
