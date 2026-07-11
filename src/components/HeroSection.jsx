import './styles/HeroSection.css';
import heroImage from '../assets/images/hero-image.png';

export default function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-content">

        <h1 className="hero-title">
          Find the right job.
          <br />
          Build <span>your future.</span>
        </h1>

        <p className="hero-description">
          Discover thousands of job opportunities from companies looking for talented professionals across different industries.
        </p>

        <div className="hero-buttons">
          <button className="browse-btn">
            Browse Jobs
          </button>

          <button className="post-btn">
            Post a Job
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img
          src={heroImage}
          alt="Hero Illustration"
        />

      </div>

    </section>
  );
}