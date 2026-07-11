import { useState } from 'react'
import './styles/Search.css'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('')
    const popularSearches = [
        'Software Engineer',
        'Product Manager',
        'Data Analyst',
        'UI/UX Designer',
        'DevOps Engineer'
    ]

    const handleSearch = (event) => {
      event?.preventDefault()
      onSearch?.(searchTerm.trim())
    }

    const handleTagClick = (value) => {
      setSearchTerm(value)
      onSearch?.(value)
    }

    return (
        <section className="search-section">
            <div className="search-container">
                <form className="search-inputs" onSubmit={handleSearch}>
                    <div className="search-field">
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Job title, keyword or company"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="divider"></div>

                    <div className="search-field">
                        <MdOutlineLocationOn className="location-icon" />
                        <input type="text" placeholder="Location" />
                    </div>

                    <div className="divider"></div>

                    <select className="category-select">
                        <option>All Categories</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Product</option>
                        <option>Marketing</option>
                    </select>

                    <button className="search-btn" type="submit">Search Jobs</button>
                </form>
            </div>

            <div className="popular-searches">
                <span className="popular-label">Popular searches:</span>
                <div className="search-tags">
                    {popularSearches.map((search, index) => (
                        <button
                            key={index}
                            className="search-tag"
                            type="button"
                            onClick={() => handleTagClick(search)}
                        >
                            {search}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Search;