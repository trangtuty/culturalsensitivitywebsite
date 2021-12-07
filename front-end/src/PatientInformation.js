import styled from 'styled-components';
import { FaGlobe } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaDrumstickBite } from "react-icons/fa";
import { FaDrum } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

const Container = styled.div`
    width:100%;
    height:100%;
`
const MainHeader = styled.h1`
    font-size:1.3em;
    text-align:center;
`
const PersonPage = styled.div`
background-color: #b5b5b5;
min-width: 350px;
max-width: 600px;
height: 800px;
border-radius: 14px;
box-shadow: 0px 10px 30px hsl(1, 100%, 90%, 1);
margin: auto;
text-align:center;
`
const PatientName = styled.h2`
background-color: #d2acac;
height: 50px;
text-align:center;
`
const PatientFeatures = styled.span`
display: flex;
flex-wrap:wrap;
width: 600px;
height: 700px;
padding: 0px;
background-color: #b5b5b5;
margin:0px; 
`
const PatientFeatures2 = styled.span`
flex:1
flex-wrap:wrap;
width: 130px;
height: 100px;
padding: 20px;
background-color: #b5b5b5;
margin-left:80px;
`

function PatientInformationPage() {
    return (
    <Container>
       <MainHeader> Patient Information Page</MainHeader>
       <PersonPage> 
           <PatientName> PatientsName</PatientName>
           <PatientFeatures> 
           <PatientFeatures2><FaGlobe color="#7f4344" size="1.3em"/>  Nationality </PatientFeatures2>
           <PatientFeatures2><FaBible color="#7f4344" size="1.3em"/> Religion</PatientFeatures2>
           <PatientFeatures2><FaPeopleArrows color="#7f4344" size="1.3em"/> Family</PatientFeatures2>
           <PatientFeatures2><FaDrumstickBite color="#7f4344" size="1.3em"/> Food</PatientFeatures2>
           <PatientFeatures2><FaDrum color="#7f4344" size="1.3em"/> Events</PatientFeatures2>
           <PatientFeatures2><FaMusic color="#7f4344" size="1.3em"/> Music</PatientFeatures2>
           </PatientFeatures>
           

       </PersonPage>
    </Container>
    
    );
  }
  
  export default PatientInformationPage;