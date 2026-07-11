import './styles/JobCard.css'
import { FiMapPin, FiBriefcase, FiDollarSign } from 'react-icons/fi'
import { MdArrowOutward } from 'react-icons/md'

function JobCard({ logo, title, company, location, jobType, salary, skills }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <div className="company-logo">
          {logo ? (
            <img src={logo} alt={company} />
          ) : (
            <div className="logo-placeholder">{company.charAt(0)}</div>
          )}
        </div>
      </div>

      <div className="card-content">
        <h3 className="job-title">{title}</h3>
        <p className="company-name">{company}</p>

        <div className="job-meta">
          <div className="meta-item">
            <FiMapPin className="meta-icon" />
            <span>{location}</span>
          </div>
          <div className="meta-item">
            <FiBriefcase className="meta-icon" />
            <span>{jobType}</span>
          </div>
          <div className="meta-item">
            <FiDollarSign className="meta-icon" />
            <span>{salary}</span>
          </div>
        </div>

        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <button className="view-details-btn">
          View Details
          <MdArrowOutward />
        </button>
      </div>
    </div>
  )
}

export default JobCard
