import JobCard from './JobCard'
import './styles/JobList.css'

function JobList() {
  const dummyJobs = [
    {
      id: 1,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Shopify',
      title: 'Backend Java Developer',
      company: 'Shopify',
      location: 'Lagos',
      jobType: 'Full Time',
      salary: '₦2M - ₦3M',
      skills: ['Java', 'Spring', 'PostgreSQL', 'MongoDB']
    },
    {
      id: 2,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Google',
      title: 'Frontend React Developer',
      company: 'Google',
      location: 'Remote',
      jobType: 'Full Time',
      salary: '₦3M - ₦4.5M',
      skills: ['React', 'JavaScript', 'CSS', 'TypeScript']
    },
    {
      id: 3,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Microsoft',
      title: 'Full Stack Developer',
      company: 'Microsoft',
      location: 'Abuja',
      jobType: 'Full Time',
      salary: '₦2.5M - ₦3.5M',
      skills: ['Node.js', 'React', 'MongoDB', 'AWS']
    },
    {
      id: 4,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Amazon',
      title: 'Product Manager',
      company: 'Amazon',
      location: 'Lagos',
      jobType: 'Contract',
      salary: '₦4M - ₦5.5M',
      skills: ['Product Strategy', 'Analytics', 'Leadership', 'UX']
    },
    {
      id: 5,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Netflix',
      title: 'DevOps Engineer',
      company: 'Netflix',
      location: 'Remote',
      jobType: 'Full Time',
      salary: '₦3.5M - ₦5M',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
    },
    {
      id: 6,
      logo: 'https://api.dicebear.com/7.x/initials/svg?seed=Meta',
      title: 'UI/UX Designer',
      company: 'Meta',
      location: 'Lagos',
      jobType: 'Full Time',
      salary: '₦2.2M - ₦3.2M',
      skills: ['Figma', 'UI Design', 'Prototyping', 'User Research']
    }
  ]

  return (
    <section className="job-list-section">
      <div className="job-list-container">
        <div className="section-header">
          <h2>Featured Jobs</h2>
          <p>Explore our latest job opportunities</p>
        </div>
        <div className="job-list">
          {dummyJobs.map((job) => (
            <JobCard
              key={job.id}
              logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              jobType={job.jobType}
              salary={job.salary}
              skills={job.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobList
