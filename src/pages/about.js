// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>And i love my dear wife Heverlin hehehe</p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage