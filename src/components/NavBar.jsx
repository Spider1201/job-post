import './styles/NavBar.css'
import { HiBriefcase } from "react-icons/hi2";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function NavBar({ isDarkMode, onThemeToggle, onBrowseJobs }) {
    const handleBrowseClick = (event) => {
      event.preventDefault()
      if (onBrowseJobs) {
        onBrowseJobs()
      } else {
        const jobListSection = document.querySelector('.job-list-section')
        if (jobListSection) {
          jobListSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    return (
        <header className="navbar">
            <div className="nav-logo">
                <HiBriefcase size={28} className='svg' />
                <div className='nav-text'>
                    <h2>Job<span>Post</span></h2>
                </div>
            </div>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#jobs" onClick={handleBrowseClick}>Browse Jobs</a>
                <a href="#about">About Us</a>
            </div>

            <div className="nav-actions">
                <button className="theme-btn" onClick={onThemeToggle} title="Toggle Theme">
                    {isDarkMode ? (
                        <IoSunnyOutline className='svg' size={22}/>
                    ) : (
                        <IoMoonOutline className='svg' size={22}/>
                    )}
                </button>
            </div>
        </header>
    )
}

export default NavBar;


