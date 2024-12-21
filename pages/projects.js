export default function Projects() {
    return (
      <div>
        <h2>My Projects</h2>
        <p>Here are some of my projects...</p>
      </div>
    )
  }
  export async function getServerSideProps() {
    // Fetch your projects data from an API or a database
    const res = await fetch('https://api.example.com/projects')
    const projects = await res.json()
  
    return {
      props: {
        projects,
      },
    }
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h2>My Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  