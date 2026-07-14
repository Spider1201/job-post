import { useState } from 'react'
import './styles/PostJobModal.css'
import { MdClose } from 'react-icons/md'
import { postJob } from '../services/api'

function PostJobModal({ isOpen, onClose, onJobPosted }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    experience: '',
    employmentType: 'Full Time',
    workMode: 'Remote',
    description: '',
    profile: '',
    applicationLink: '',
    skills: []
  })

  const [skillInput, setSkillInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addSkill = () => {
    if (skillInput.trim() && formData.skills.length < 8) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }))
      setSkillInput('')
    }
  }

  const removeSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.title ||
      !formData.company ||
      !formData.location ||
      !formData.salary ||
      !formData.experience ||
      !formData.description ||
      !formData.profile ||
      !formData.applicationLink
    ) {
      setError('Please fill in all required fields.')
      return
    }

    if (formData.skills.length === 0) {
      setError('Please add at least one skill.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const newJob = await postJob({
        ...formData,
        experience: Number(formData.experience),
        skills: formData.skills
      })

      // Reset form
      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        experience: '',
        employmentType: 'Full Time',
        workMode: 'Remote',
        description: '',
        profile: '',
        applicationLink: '',
        skills: []
      })

      // Call parent callback to refresh jobs list
      if (onJobPosted) {
        onJobPosted(newJob)
      }

      onClose()
    } catch (err) {
      setError(err.message || 'Failed to post job. Please try again.')
      console.error('Error posting job:', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content post-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <MdClose />
        </button>

        <h2 className="modal-title">Post a New Job</h2>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Backend Java Developer"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                name="company"
                placeholder="e.g., Shopify"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Lagos"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Salary Range *</label>
              <input
                type="text"
                name="salary"
                placeholder="e.g., ₦2M - ₦3M"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Experience Required *</label>
              <input
                type="number"
                name="experience"
                placeholder="e.g., 2"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Employment Type *</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
          </div>

          <div className="form-group">
            <label>Job Description *</label>
            <textarea
              name="description"
              placeholder="Describe the job, responsibilities, and requirements..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <div className="form-group">
            <label>Work Mode *</label>

            <select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
            >
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ideal Candidate *</label>

            <textarea
              name="profile"
              placeholder="Describe the ideal candidate..."
              value={formData.profile}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Application Link *</label>

            <input
              type="text"
              name="applicationLink"
              placeholder="https://company.com/careers/job-id or hr@company.com"
              value={formData.applicationLink}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Required Skills</label>
            <div className="skills-input-group">
              <input
                type="text"
                placeholder="Add a skill and press Enter"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addSkill()
                  }
                }}
              />
              <button type="button" onClick={addSkill}>
                Add
              </button>
            </div>
            <div className="skills-list">
              {formData.skills.map((skill, index) => (
                <span key={index} className="skill-item">
                  {skill}
                  <button type="button" onClick={() => removeSkill(index)}>
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostJobModal
