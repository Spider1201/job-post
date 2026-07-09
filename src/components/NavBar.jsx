import './styles/NavBar.css'
import { HiBriefcase } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
function NavBar() {
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
                <a href="#jobs">Browse Jobs</a>
                <a href="#about">About Us</a>
            </div>

            <div className="nav-actions">
                <button className="theme-btn">
                    <IoMoonOutline className='svg' size={22}/>
                </button>

                <button className="post-btn">
                    <CgAdd className='svg'  size={20}/>
                    <span>Post a Job</span>
                </button>

            </div>
        </header>
    )
}

export default NavBar;


