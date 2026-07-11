import './styles/JobDetailsModal.css'
import { MdClose } from 'react-icons/md'
import { FiMapPin, FiBriefcase, FiDollarSign } from 'react-icons/fi'

function JobDetailsModal({ job, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <MdClose />
        </button>

        <div className="modal-header">
          <div className="modal-company-logo">
            {job.logo ? (
              <img src={job.logo} alt={job.company} />
            ) : (
              <div className="logo-placeholder">{job.company.charAt(0)}</div>
            )}
          </div>
          <h1 className="modal-title">{job.title}</h1>
          <p className="modal-company">{job.company}</p>
        </div>

        <div className="modal-meta">
          <div className="meta-item">
            <FiMapPin />
            <span>{job.location}</span>
          </div>
          <div className="meta-item">
            <FiDollarSign />
            <span>{job.salary}</span>
          </div>
          <div className="meta-item">
            <FiBriefcase />
            <span>{job.jobType}</span>
          </div>
        </div>

        <div className="modal-section">
          <h3>Employment Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <label>Employment Type</label>
              <p>{job.jobType}</p>
            </div>
            <div className="detail-item">
              <label>Experience Required</label>
              <p>{job.experience || '2-3 Years'}</p>
            </div>
            <div className="detail-item">
              <label>Location</label>
              <p>{job.location}</p>
            </div>
            <div className="detail-item">
              <label>Salary Range</label>
              <p>{job.salary}</p>
            </div>
          </div>
        </div>

        <div className="modal-section">
          <h3>Required Skills</h3>
          <div className="skills-grid">
            {job.skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h3>Job Description</h3>
          <div className="job-description">
            <h4>Responsibilities</h4>
            <ul>
              <li>Develop and maintain scalable backend solutions</li>
              <li>Collaborate with cross-functional teams</li>
              <li>Write clean, efficient, and well-documented code</li>
              <li>Participate in code reviews and knowledge sharing</li>
              <li>Optimize application performance and security</li>
            </ul>

            <h4>Requirements</h4>
            <ul>
              <li>{job.experience || '2-3 years'} of professional experience</li>
              <li>Strong proficiency in {job.skills[0] || 'primary technology'}</li>
              <li>Experience with databases and APIs</li>
              <li>Problem-solving mindset and attention to detail</li>
              <li>Excellent communication skills</li>
            </ul>
          </div>
        </div>

        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  )
}

export default JobDetailsModal
