import styled from 'styled-components';
import { FaGlobe } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaDrumstickBite } from "react-icons/fa";
import { FaDrum } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

const Container = styled.div`
@media (max-width: 415px) {
    width:100%;
    height:100%;
    margin-top:25%;
}
`
const MainHeader = styled.h1`
    font-size:1.3em;
    text-align:center;
`
const PersonPage = styled.div`
    @media (max-width: 415px) {
    background-color: #b5b5b5;
    width: 90%;
    min-height:80vh;
    border-radius: 14px;
    box-shadow: 0px 10px 30px hsl(1, 100%, 90%, 1);
    margin: auto;
    text-align:center;
    }
`
const PatientName = styled.h2`
    @media (max-width: 415px) {
    background-color: #d2acac;
    height: 80px;
    text-align:center;
    border-radius:15px 15px 0px 0px;
    }
`
const PatientRow = styled.span`
    @media (max-width: 415px) {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    width: 90%;
    margin-left:5%;
    min-height: 20vh;
    background-color:#b5b5b5;
    margin: 20px;
    } 
`
const PatientCol = styled.span`
    @media (max-width: 415px) {
    width: 49%;
    min-height: 50%;
    background-color: #b5b5b5;
    }
`
const PatientHeader = styled.h1`
    font-size:2em;
`
function PatientInformationPage() {
    return (
    <Container>
       <PersonPage> 
           <PatientName> <PatientHeader> Patient Name</PatientHeader></PatientName>
           <PatientRow> 
            <PatientCol><FaGlobe color="#7f4344" size="1.3em"/>  Nationality </PatientCol>
            <PatientCol><FaBible color="#7f4344" size="1.3em"/> Religion</PatientCol>
           </PatientRow>
           <PatientRow>
                <PatientCol><FaPeopleArrows color="#7f4344" size="1.3em"/> Family</PatientCol>
                <PatientCol><FaDrumstickBite color="#7f4344" size="1.3em"/> Food</PatientCol>
           </PatientRow>
           <PatientRow>
            <PatientCol><FaDrum color="#7f4344" size="1.3em"/> Events</PatientCol>
            <PatientCol><FaMusic color="#7f4344" size="1.3em"/> Music</PatientCol>
           </PatientRow>
           

       </PersonPage>
    </Container>
    
    );
  }
  
  export default PatientInformationPage;