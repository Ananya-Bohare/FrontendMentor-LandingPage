import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Work from "./Components/Work"
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      </div>
      <Work/>
    </div>
  )
}

export default App
