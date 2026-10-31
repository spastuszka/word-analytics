export const Footer = () => {
  return (
    <footer className="footer">
      <small>&copy; 2026 Word Analytics. All rights reserved.</small>
      <small>Last updated: {new Date().toLocaleDateString()}</small>
    </footer>
  )
}
