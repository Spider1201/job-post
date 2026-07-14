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
        setAllJobs([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [searchText, refreshTrigger])

  const visibleJobs = allJobs.slice(0, visibleCount)
  const canLoadMore = visibleCount < allJobs.length
  const isSearching = Boolean(searchText?.trim())

  const emptyMessage = isSearching
    ? `No jobs matched "${searchText.trim()}". Try another keyword.`
    : 'No jobs found. Check back soon for new opportunities!'

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
          <EmptyState message={emptyMessage} />
        )}

        {!isLoading && allJobs.length > 0 && (
          <>
            <div className="job-list">
              {visibleJobs.map((job) => (
                <JobCard
                  key={job.id || job._id}
                  job={job}
                />
              ))}
            </div>

            <div className="job-list-actions">
              {isSearching && (
                <button
                  className="view-all-btn"
                  type="button"
                  onClick={onClearSearch}
                >
                  Clear Search
                </button>
              )}

              {canLoadMore && (
                <button
                  className="view-all-btn"
                  type="button"
                  onClick={loadMore}
                >
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