import About from "./components/About"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Skill from "./components/Skill"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <Header />
        <About />
        <Skill />
        <Projects />
      </div>
    </main>
  )
}
