import {  useState } from 'react'
import AWS from '../../assets/images/aws.svg';
import My_Image from '../../assets/images/Bitkub.png'
import Airflow from '../../assets/images/wordmark_1.svg'
import Dashborad from '../../assets/images/Dashboard.png'
import dataset from '../../assets/images/dataset.png'
import ETL from '../../assets/images/ETL3.png'
import ETL2 from '../../assets/images/ETL4.png'
import AmazonEC2 from '../../assets/images/aws-ec2.svg';
import AmazonS3 from '../../assets/images/amazon-s3-svgrepo-com.svg';
import {
  faPython
 
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const Porject2 = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    
    return (
      <>
    <div className='content'>
        <div className="container about-page">
          <div className="text-zone" style={{ width: '800px'}} >
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['B', 'i', 't', 'K', 'u', 'b', ' ', 'E','T','L']}
                idx={15}
              />
            </h1>
            <p>
            The goal of this project is to enhance my ETL data pipeline skills and improve knowledge of <br/>
           1) Programming Language -> Python<br/>
            2)Data pipeline tool -> Apache Airflow<br/>
            3) API -> BitKub API<br/>
            4) AWS Platform<br/>

-AWS EC2<br/>
-AWS S3
<br/>
           <br/> **FYI: source code om My Github <a href="https://github.com/march250602/Bitkub-Crypto-currency-enchange-ETL" style={{ color: '#daec19 '}} > => Source code</a> **
            </p>
            <p align="LEFT">
            <br/>
            <img  src={My_Image} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '800px'}} />
            </p>
            <br/>
  
            <p> For this project, I use the Pandas and Json library in Python to get data from API and trandsform data to dataframe, then store in to AWS S3 <br/>
            <div style={{  display: "flex",justifycontent: "center",margin: "5px"}}>
            <br/>
            <img   src={ETL} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '550px'}} />
            <img  src={ETL2} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '550px'}} />
           
            </div>
             </p>
            
          </div>
  
          <div className="stage-cube-cont" align="RIGHT">
            <div className="cubespinner">
              <div className="face1">
             <FontAwesomeIcon icon={faPython} color="#1176ce" />
              </div>
              <div className="face2">
              <img src={AmazonEC2} alt="Architecture Amazon EC2" />
              </div>
              <div className="face3">
              <img src={AmazonS3} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
              </div>
              <div className="face5">
              <img src={AWS} style={{  width: "200px"}} />
              </div>
              <div className="face6">
              <img src={Airflow} style={{  width: "200px"}} />
              </div>
            </div> 
            

          </div>
        </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Porject2