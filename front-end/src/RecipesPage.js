import styled from 'styled-components';
import BreakfastImg from './assets/breakfast.jpg'
import BulgarianFlag from './assets/bgFlag.png'
const Container = styled.div`
    width:100%;
    height:100%;
`
const MainHeader = styled.h1`
    font-size:1.3em;
    text-align:center;
`
const LandingImg = styled.img`
    width:100%;
    background-size:cover;
    height:600px;
`

const RecepiesRow = styled.div`
    width:80%;
    margin-left:10%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:3%;
    padding-bottom:3%;
`
const RecipesCol = styled.div`
    width:30%;
    border-radius:25px;
    -webkit-box-shadow: 0px 0px 11px 6px #D3D3D3; 
    box-shadow: 0px 0px 11px 6px #D3D3D3;
`
const RecepiesCardImg = styled.img`
    width:100%;
    height:200px;
    border-radius:25px 25px 0px 0px;
`
const FlagContainerImg = styled.img`
    width:40px;
    text-align:center;
`
const FlagContainer = styled.div`
    width:100%;
    text-align:center;
    padding-top:1.5%;
`
const DescriptionContainer = styled.div`
    width:80%;
    margin-left:10%;
    text-align:center;
`
const CardHeader= styled.h1`
    font-size:1.4em;
`
const CardDesc = styled.h1`
    font-size:0.9em;
    font-weight:500;
`
const Hr = styled.hr`
    width:80%;
    margin-left:10%:
    background-color: #D3D3D3;
    color: #D3D3D3;
`
function RecipesPage() {
    return (
    <Container>
       <LandingImg src={BreakfastImg} />
       <RecepiesRow>
           <RecipesCol>
                <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>

           <RecipesCol>
           <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>

           <RecipesCol>
           <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>
       </RecepiesRow>

       <RecepiesRow>
           <RecipesCol>
                <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>

           <RecipesCol>
           <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>

           <RecipesCol>
           <RecepiesCardImg src={BreakfastImg} />
                <FlagContainer>
                     <FlagContainerImg src={BulgarianFlag} />
                </FlagContainer>
                <DescriptionContainer>
                    <CardHeader>Banica</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
                <Hr/>
                <DescriptionContainer>
                    <CardHeader>Ingredients</CardHeader>
                    <CardDesc>
                        Lorem30 dafdssdfsd sdfsdsd 
                        fsdf sdf sdf sdf sdf sdf sd
                        sdfsdfdsf  sdf s
                    </CardDesc>
                </DescriptionContainer>
           </RecipesCol>
       </RecepiesRow>
    </Container>
    );
  }
  
  export default RecipesPage;