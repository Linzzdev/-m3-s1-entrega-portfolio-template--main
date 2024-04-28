import { Header } from "./components/Header/header"
import { BannerSection } from "./components/BannerSection/BannerSection"
import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection"
import { TechSection } from "./components/TechSection/TechSection"
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection"
import { Footer } from "./components/Footer/Footer"

function App() {

  return (
    <div>
      <Header/>
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}

export default App
