import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'

import './index.scss'

const Logo = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

 
  return (
    <div className="stage-cube-cont">
    <div className="container about-page">
    <div className="text-zone" style={{ left: '10%',top: '50%',width: '70%',maxheight: '90%'}}>
    <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
            </h1>
      <p>
        I'm a very ambitious student from George Brown College looking for a role in an
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <p align="LEFT">
      I'm confident, naturally curious, and perpetually working on improving my programming skills.
      </p>
      <p>
      If I needed to define myself in one sentence, 
      that would be a proactive person who was tech-obsessed!!!
      </p>
    </div>
    </div>
    </div>
  )
}

export default Logo
