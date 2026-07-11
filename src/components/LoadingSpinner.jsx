import './styles/LoadingSpinner.css'

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading jobs...</p>
    </div>
  )
}

export default LoadingSpinner
