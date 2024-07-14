import { Header } from "./Components/Header";
import { Home } from  "./Components/Home";
import { Skills } from "./Components/Skills";
import { ProjectSection } from "./Components/ProjectSection";
import { Contact } from "./Components/Contact";
import { Newsletter } from "./Components/Newsletter";
import { Footer } from "./Components/Footer";


function App() {

  return (
    <div className="">
      <Header />
      <Home />
      <Skills />
      <ProjectSection />
      <Contact />
      <Newsletter />
      <Footer/>
      {/* <div className="h-[1000px]"></div> */}
    </div>
  )
}

export default App
