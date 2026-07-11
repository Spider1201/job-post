// API configuration for backend integration
const API_BASE_URL = 'http://localhost:8080'

export const getAllJobs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching jobs:', error)
    throw error
  }
}

export const searchJobs = async (searchText) => {
  try {
    const encoded = encodeURIComponent(searchText)
    const response = await fetch(`${API_BASE_URL}/posts/${encoded}`)
    return await response.json()
  } catch (error) {
    console.error('Error searching jobs:', error)
    throw error
  }
}

export const getJobById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`)
    return await response.json()
  } catch (error) {
    console.error('Error fetching job:', error)
    throw error
  }
}

export const postJob = async (jobData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    })
    return await response.json()
  } catch (error) {
    console.error('Error posting job:', error)
    throw error
  }
}

export const updateJob = async (id, jobData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    })
    return await response.json()
  } catch (error) {
    console.error('Error updating job:', error)
    throw error
  }
}

export const deleteJob = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: 'DELETE',
    })
    return await response.json()
  } catch (error) {
    console.error('Error deleting job:', error)
    throw error
  }
}

const api = {
  getAllJobs,
  searchJobs,
  getJobById,
  postJob,
  updateJob,
  deleteJob,
}

export default api
