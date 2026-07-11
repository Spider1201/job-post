import { useState, useEffect } from 'react'
import JobCard from './JobCard'
import LoadingSpinner from './LoadingSpinner'
import EmptyState from './EmptyState'
import './styles/JobList.css'
import { getAllJobs, searchJobs } from '../services/api'

const PAGE_SIZE = 6

function JobList({ searchText, refreshTrigger, onClearSearch }) {
  const [allJobs, setAllJobs] = useState([])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = searchText?.trim()
          ? await searchJobs(searchText.trim())
          : await getAllJobs()
        setAllJobs(Array.isArray(data) ? data : [])
        setVisibleCount(PAGE_SIZE)
      } catch (err) {
        console.error('Error fetching jobs:', err)
        setError(err.message || 'Failed to load jobs')
        // Fallback to dummy data on error for now
        setAllJobs([
          {
            id: 1,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Interswitch',
            title: 'Backend Java Developer',
            company: 'Interswitch Group',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦2.5M - ₦4M',
            experience: '3-5 Years',
            skills: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB']
          },
          {
            id: 2,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Flutterwave',
            title: 'Frontend React Developer',
            company: 'Flutterwave',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦2M - ₦3.5M',
            experience: '2-3 Years',
            skills: ['React', 'TypeScript', 'CSS', 'Redux']
          },
          {
            id: 3,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Paystack',
            title: 'Full Stack Developer',
            company: 'Paystack',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦3M - ₦4.5M',
            experience: '3-4 Years',
            skills: ['Node.js', 'React', 'MongoDB', 'AWS']
          },
          {
            id: 4,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Andela',
            title: 'Product Manager',
            company: 'Andela',
            location: 'Remote (Lagos-based)',
            jobType: 'Full Time',
            salary: '₦3.5M - ₦5M',
            experience: '5+ Years',
            skills: ['Product Strategy', 'Analytics', 'Leadership', 'UX']
          },
          {
            id: 5,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Jumia',
            title: 'DevOps Engineer',
            company: 'Jumia Tech',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦2.8M - ₦4.2M',
            experience: '4-6 Years',
            skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux']
          },
          {
            id: 6,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Remitly',
            title: 'UI/UX Designer',
            company: 'Remitly Nigeria',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦1.8M - ₦2.8M',
            experience: '2-3 Years',
            skills: ['Figma', 'UI Design', 'Prototyping', 'User Research']
          },
          {
            id: 7,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Wema',
            title: 'Senior Backend Developer',
            company: 'Wema Bank',
            location: 'Lagos',
            jobType: 'Full Time',
            salary: '₦3.5M - ₦5M',
            experience: '5+ Years',
            skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker']
          },
          {
            id: 8,
            logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Housecorp',
            title: 'Data Analyst',
            company: 'HouseCorp',
            location: 'Abuja',
            jobType: 'Full Time',
            salary: '₦1.5M - ₦2.5M',
            experience: '1-2 Years',
            skills: ['Python', 'SQL', 'Tableau', 'Excel', 'Statistics']
          }
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [searchText, refreshTrigger])

  const visibleJobs = allJobs.slice(0, visibleCount)
  const canLoadMore = visibleCount < allJobs.length
  const isSearching = Boolean(searchText?.trim())

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, allJobs.length))
  }

  return (
    <section className="job-list-section">
      <div className="job-list-container">
        <div className="section-header">
          <h2>Featured Jobs in Nigeria</h2>
          <p>Explore our latest job opportunities from top companies</p>
        </div>

        {isLoading && <LoadingSpinner />}

        {!isLoading && allJobs.length === 0 && (
          <EmptyState message="No jobs found. Check back soon for new opportunities!" />
        )}

        {!isLoading && allJobs.length > 0 && (
          <>
            <div className="job-list">
              {visibleJobs.map((job) => (
                <JobCard
                  key={job.id}
                  logo={job.logo}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  jobType={job.jobType}
                  salary={job.salary}
                  experience={job.experience}
                  skills={job.skills}
                />
              ))}
            </div>

            <div className="job-list-actions">
              {isSearching && (
                <button className="view-all-btn" type="button" onClick={onClearSearch}>
                  Clear Search
                </button>
              )}
              {canLoadMore && (
                <button className="view-all-btn" type="button" onClick={loadMore}>
                  Load More Jobs
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default JobList
