
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import My_Image from '../../assets/images/My_Image.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['E','l','s','a',"'s",' ',' ','P','o','r','t','f','o','l','i','o']
  const jobArray = [
    'D',
    'A',
    'T',
    'A',
    ' ',
    'E',
    'N',
    'G',
    'I',
    'N',
    'E',
    'E',
    'R',
    '.',
  ]
 

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>Hi,</span>
            <br />
            <span className={`${letterClass} _13`}>This is</span>
            
            <br />
             <img  src={My_Image} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '200px'}} />
            <br />
            

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Data Engineer / Python / SQL / ETL</h2>
          <h2>
          <FontAwesomeIcon icon={faEnvelope} />: Elsa.Pawanja@georgebrown.ca
          </h2>
        </div>

<div className="stage-cube-cont">
    <div className="container about-page">
    <div className="text-zone" style={{ width: '600px'}}>
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
                
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
