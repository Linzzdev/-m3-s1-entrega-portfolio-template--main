import { Header } from "./components/Header/header"
import { BannerSection } from "./components/BannerSection/BannerSection"
import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection"
import { TechSection } from "./components/TechSection/TechSection"
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection"
import { Footer } from "./components/Footer/Footer"

function App() {

const handleLinkClick = (event, targetId) => {
    event.preventDefault(); // Prevent default link behavior

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({ 
            behavior: 'smooth', // Smooth scrolling
            block: 'start',    // Align to top of the block
            inline: 'nearest'  // Align to nearest edge
        });

        let start = null;  
        const duration = 800; // Animation duration in milliseconds

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easing = (t) => t * t * t; // Cubic easing function
            
            // Calculate new scroll position with easing
            window.scrollTo(0, easing(progress / duration) * (targetSection.offsetTop - window.pageYOffset) + window.pageYOffset);

            // Continue animation if not finished
            if (progress < duration) window.requestAnimationFrame(step); 
        }

        // Start the animation
        window.requestAnimationFrame(step); 
    }
};


  return (
    <div>
      <Header handleLinkClick = {handleLinkClick} />
      <BannerSection/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectsSection/>
      <Footer/>
    </div>
  )
}

export default App
