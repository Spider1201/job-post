import './styles/App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Search from './components/Search'
import JobList from './components/JobList'

function App(){
  return (
      <>
        <NavBar/>
        <HeroSection/>
        <Search />
        <JobList />
      </>
  )
}
  export default App
