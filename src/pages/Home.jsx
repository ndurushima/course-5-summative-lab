import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
    <header>
      <NavBar />
    </header>
      <main>
        <h1 className="title">Coffee R Us</h1>
        <p className="description">
          The go to store for your go to coffee needs.
        </p>
      </main>
    </>
  )
}

export default Home