
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
          <h2>Data Engineer / Python / SQL / ETL / Linux / AWS / GCP</h2>
          <h2>
          <FontAwesomeIcon icon={faEnvelope} />: Elsa.Pawanja@georgebrown.ca
          </h2>
        </div>

                <Logo/>
                
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
