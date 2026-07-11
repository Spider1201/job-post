import './styles/EmptyState.css'
import { MdSearchOff } from 'react-icons/md'

function EmptyState({ message = 'No jobs found.' }) {
  return (
    <div className="empty-state">
      <MdSearchOff className="empty-icon" />
      <h3>{message}</h3>
      <p>Try adjusting your search or check back later for new opportunities.</p>
    </div>
  )
}

export default EmptyState
