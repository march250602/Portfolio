import {  useState } from 'react'
import My_Image from '../../assets/images/Arc.png'
import GCP from '../../assets/images/google_cloud-icon.svg'
import Model from '../../assets/images/Data Moel.png'
import Dashborad from '../../assets/images/Dashboard.png'
import dataset from '../../assets/images/dataset.png'
import ETL from '../../assets/images/ETL.png'
import ETL2 from '../../assets/images/ETL2.png'
import {
  faPython,
  faGoogle
 
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const Porject1 = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    
    return (
      <>
    
        <div className="container about-page">
          <div className="text-zone" style={{ width: '800px'}} >
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['T', 'a', 'x', 'i', '', 'A', 'n', 'l','y','t','i','c','s']}
                idx={15}
              />
            </h1>
            <p>
            The goal of this project is to enhance my ETL data pipeline skills and conduct data analytics on Yellow Taxi data<br/> using various tools and technologies, including GCP Storage, Python, Compute Instance, Data Pipeline Tool,<br/> BigQuery, and Looker Studio.<br/>
           <br/> **FYI: Dataset om My Github <a href="https://github.com/march250602/Yellow-Taxi-Data-Analytics" style={{ color: '#daec19 '}} > => Source code</a> **
            </p>
            <p align="LEFT">
            <br/><br/><br/><br/>
            <img  src={My_Image} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '800px'}} />
            </p>
            <br/><br/>
            <p>
              <h2>Dataset</h2> <br/>
              As you can see  in the image below, 
              The dataset is large and complex, making it challenging to analyze effectively.<br/>
          To address  this, I need to create a data model and extract the essential information.
              <img  src={dataset} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '800px'}} />
              <br/><br/> 
                 <div className="tex-describe" style={{ left: '10%',top: '50%',width: '70%',maxheight: '90%'}}>
                  <h2>Data Model</h2>
              <h3> Fact Table </h3> 
<p >This table serves as the central repository for all relevant information about taxi trips.
It includes foreign keys that link to the various dimension tables to provide additional context and details about each trip.<br/>
</p>
<h3> Datetime_Dim Table</h3>

Stores date and time-related information for each taxi trip, such as pick-up and drop-off times.<br/>
It includes attributes like date, day, month, year, hour and weekday.<br/>
<h3>Pickup_Location_Dim Table</h3>

Contains details about the pick-up locations, such as zones and location IDs.<br/>
<h3>Dropoff_Location_Dim Table</h3>

Similar to the pickup location dimension but for drop-off locations.<br/>
<h3>Passenger_Count_Dim Table</h3>

Stores information about the number of passengers for each trip.<br/>
It includes attributes like passenger count ranges or special passenger types.<br/>
<h3>Rate_Code_Dim Table</h3>

Stores details about the rate codes applied to each taxi trip.<br/>

<h3>Payment_Type_Dim Table</h3>

Contains information about the payment types used for taxi trips.<br/>
This include cash, credit card, vouchers, etc.<br/>
<h3>Trip_Distance_Dime Table</h3>

Stores data related to the distance traveled for each trip.<br/>
</div>

                  <br/><img  src={Model} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '800px'}} />
              
    
            </p>
            <p> I utilize the Pandas library in Python along with Mage to preprocess the data, removing duplicate entries, before transferring it to BigQuery for further analysis. <br/>
            <div style={{  display: "flex",justifycontent: "center",margin: "5px"}}>
            <br/>
            <img   src={ETL} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '550px'}} />
            <img  src={ETL2} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '550px'}} />
           
            </div>
             </p>
            <p>
              <h2>Dashboard</h2>
              In the last part of the project, I use the transformed data to create a detailed data analytics dashboard with Looker. This dashboard shows clear visualizations and analysis, making it easy to understand the processed data.
            <img  src={Dashborad} alt="JavaScript Developer Name, Web Developer Name" style={{ width: '550px'}} />
              
            </p>
          </div>
  
          <div className="stage-cube-cont" align="RIGHT">
            <div className="cubespinner">
              <div className="face1">
             <FontAwesomeIcon icon={faPython} color="#1176ce" />
              </div>
              <div className="face2">
              <img src={GCP} style={{  width: "200px"}} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faGoogle} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faPython} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGoogle} color="#EC4D28" />
              </div>
            </div> 
            

          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Porject1
