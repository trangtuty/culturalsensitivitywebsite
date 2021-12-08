import styled from 'styled-components';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { FaDrumstickBite, FaDrum, FaPuzzlePiece } from "react-icons/fa";

const Container = styled.div`
    width:100%;
    height:100%;
`
const MainHeader = styled.h1`
    font-size:1.3em;
    text-align:center;
    padding:10px;
`
const styleObj = {
    fontSize: 40,
    margin: "auto"
    
}
const HomePageHeader = styled.div`
background-color: #d2acac;
min-width: 350px;
max-width: 700px;
height: 60px;
border-radius: 14px;
border-style:outset;
box-shadow: 0px 10px 30px hsl(1, 100%, 90%, 1);
margin-left: 650px;
text-align:center;
padding: 20px;
`
const HomePageFooter = styled.span`
display: flex;
flex-wrap:wrap;
width: 2000px;
height: 400px;
padding: auto;
margin:auto; 
`
const FooterElements = styled.span`
flex:1
flex-wrap:wrap;
width: 250px;
height: 300px;
padding: 20px;
margin-left:300px;
text-align:center;
`
function HomePage() {
    return (
    <Container>
        <MainHeader></MainHeader>
       <HomePageHeader><h1 style={styleObj}>Pulsed for Dementia</h1></HomePageHeader>
       <ImageSlider slides={SliderData} />
       <HomePageFooter>
           <FooterElements><a href="https://foodnetwork.co.uk/search/?q=global-flavors&utm_source=foodnetwork.com&utm_medium=domestic" target="_blank"><FaDrumstickBite color="#7f4344" size="5em" margin="auto"/></a><h2 fontSize="5">International Dishes</h2></FooterElements>
           <FooterElements><a href="https://stacker.com/stories/3598/20-celebrations-holiday-season-besides-christmas" target="_blank"><FaDrum color="#7f4344" size="5em" margin="auto"/></a><h2>Cultural Events Scheduled</h2></FooterElements>
           <FooterElements><a href="https://www.liftedcare.com/21-ideas-for-group-activities-in-your-care-home/" target="_blank"><FaPuzzlePiece color="#7f4344" size="5em" margin="auto"/></a><h2>Fun Activities</h2></FooterElements>
       </HomePageFooter>
    </Container>
    );
  }
  
  export default HomePage;