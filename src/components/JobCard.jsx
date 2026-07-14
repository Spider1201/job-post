import { useState } from 'react'
import './styles/JobCard.css'
import { FiMapPin, FiBriefcase, FiDollarSign } from 'react-icons/fi'
import { MdArrowOutward } from 'react-icons/md'
import JobDetailsModal from './JobDetailsModal'

function JobCard({ job }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="job-card">
        <div className="card-header">
          <div className="company-logo">
            {job.logo ? (
              <img src={job.logo} alt={job.company} />
            ) : (
              <div className="logo-placeholder">
                {job.company.charAt(0)}
              </div>
            )}
          </div>
        </div>

        <div className="card-content">
          <h3 className="job-title">{job.title}</h3>

          <p className="company-name">{job.company}</p>

          <div className="job-meta">
            <div className="meta-item">
              <FiMapPin className="meta-icon" />
              <span>{job.location}</span>
            </div>

            <div className="meta-item">
              <FiBriefcase className="meta-icon" />
              <span>{job.employmentType}</span>
            </div>

            <div className="meta-item">
              <FiDollarSign className="meta-icon" />
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="skills">
            {job.skills?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <button
            className="view-details-btn"
            onClick={() => setIsModalOpen(true)}
          >
            View Details
            <MdArrowOutward />
          </button>
        </div>
      </div>

      <JobDetailsModal
        job={job}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default JobCard