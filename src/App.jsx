import { useState, useEffect } from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Search from './components/Search'
import JobList from './components/JobList'
import PostJobModal from './components/PostJobModal'

function App(){
  const [isPostJobOpen, setIsPostJobOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [refreshJobsKey, setRefreshJobsKey] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isDarkMode])

  const handleJobPosted = (newJob) => {
    setRefreshJobsKey(prev => prev + 1)
    setIsPostJobOpen(false)
  }

  const handleSearch = (text) => {
    setSearchText(text || '')
    setRefreshJobsKey(prev => prev + 1)
  }

  const handleClearSearch = () => {
    setSearchText('')
    setRefreshJobsKey(prev => prev + 1)
  }

  const handleBrowseJobs = () => {
    handleClearSearch()
    const jobListSection = document.querySelector('.job-list-section')
    if (jobListSection) {
      jobListSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
      <>
        <NavBar isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode(!isDarkMode)} onBrowseJobs={handleBrowseJobs} />
        <HeroSection onPostJob={() => setIsPostJobOpen(true)} onBrowseJobs={handleBrowseJobs} />
        <Search onSearch={handleSearch} />
        <JobList searchText={searchText} refreshTrigger={refreshJobsKey} onClearSearch={handleClearSearch} />
        <PostJobModal isOpen={isPostJobOpen} onClose={() => setIsPostJobOpen(false)} onJobPosted={handleJobPosted} />
      </>
  )
}

export default App

