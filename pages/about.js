import Image from 'next/image'
import profilePic from '../public/profile.jpg'

export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <Image src={profilePic} alt="Profile Picture" width={200} height={200} />
      <h2>About Me</h2>
      <p>I'm a passionate web developer...</p>
    </div>
    
  )
}
