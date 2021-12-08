import styled from 'styled-components';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { FaDrumstickBite, FaDrum, FaPuzzlePiece } from "react-icons/fa";

const Container = styled.div`
@media (max-width: 415px) {
    width:100%;
    height:100%;
    margin-top:7%;
   
    
}
`
const MainHeader = styled.h1`
@media (max-width: 415px) {
    
   
    font-size:1.3em;
    text-align:center;
    padding:10px;
    
}
`
const styleObj = {
    fontSize: 30,
    margin: "auto"
    
}
const HomePageHeader = styled.div`
@media (max-width:415px){
background-color: #d2acac;
width:85%;
height: 20%;
border-radius: 14px;
border-style:outset;
box-shadow: 0px 10px 30px hsl(1, 100%, 90%, 1);
margin-left: 2%;
text-align:center;
padding: 20px;
}
`
const HomePageFooter = styled.span`
@media (max-width:415px){
display: flex;
flex-wrap:wrap;
width: 100%;
height: 50%;
padding: auto;
margin:auto;
} 
`
const FooterElements = styled.span`
@media (max-width:415px){
flex:1
flex-wrap:wrap;
width: 23%;
height: 20%;
padding: 20px;
margin-left:0;
text-align:center;
}
`
function HomePage() {
    return (
    <Container>
        <MainHeader></MainHeader>
       {/* <HomePageHeader><h1 style={styleObj}>Pulsed for Dementia</h1></HomePageHeader> */}
       <ImageSlider slides={SliderData} />
       <HomePageFooter>
           <FooterElements><a href="https://foodnetwork.co.uk/search/?q=global-flavors&utm_source=foodnetwork.com&utm_medium=domestic" target="_blank"><FaDrumstickBite color="#7f4344" size="2em" margin="auto"/></a><h3 fontSize="1">International Dishes</h3></FooterElements>
           <FooterElements><a href="https://stacker.com/stories/3598/20-celebrations-holiday-season-besides-christmas" target="_blank"><FaDrum color="#7f4344" size="2em" margin="auto"/></a><h3 fontSize="1">Cultural Events Scheduled</h3></FooterElements>
           <FooterElements><a href="https://www.liftedcare.com/21-ideas-for-group-activities-in-your-care-home/" target="_blank"><FaPuzzlePiece color="#7f4344" size="2em" margin="auto"/></a><h3 fontSize="1">Fun Activities</h3></FooterElements>
       </HomePageFooter>
    </Container>
    );
  }
  
  export default HomePage;