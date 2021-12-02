import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CalendarPage from './CalendarPage';
import DrawerNav from './DrawerNav';
import styled from 'styled-components';
import HomePage from './HomePage';
import RecipesPage from './RecipesPage';
import PatientInformationPage from './PatientInformation';
import ReligionPage from './ReligionPage';

const Container = styled.div`
    width:100%;
`
function App() {
  return (
    <Container>
      <DrawerNav />
      <Router>
            <Routes>            
              <Route path="/home" element={<HomePage/>} /> 
              <Route path="/recepies" element={<RecipesPage/>} /> 
              <Route path="/inforamtion" element={<PatientInformationPage/>} /> 
              <Route path="/religion" element={<ReligionPage/>} /> 
              <Route path="/calendar" element={<CalendarPage/>} />             
            </Routes>                                        
      </Router> 
    </Container>
  );
}

export default App;
