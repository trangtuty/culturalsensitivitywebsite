import styled from 'styled-components';
import BreakfastImg from './assets/breakfast.jpg'
import BulgarianFlag from './assets/bgFlag.png'

const Container = styled.div`
@media (max-width: 415px) {
    width:100%;
    height:100%;
}
`
const LandingImg = styled.img`
@media (max-width: 415px) {
    width:100%;
    background-size:cover;
    height:600px;
    padding-bottom:10%;
}
`

const RecepiesRow = styled.div`
@media (max-width: 415px) {
    width:80%;
    margin-left:10%;
}
`
const RecipesCol = styled.div`
@media (max-width: 415px) {
    max-width:100%;
    border-radius:25px;
    -webkit-box-shadow: 0px 0px 11px 6px #D3D3D3; 
    box-shadow: 0px 0px 11px 6px #D3D3D3;
    margin-bottom:10%;
}
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
const CardDescUl = styled.ul`
    max-width:80%;
    min-width:10%;
    padding-bottom:5%;
    margin-left:10%;
    padding-left:0%;
`
const CardDescLi = styled.li`
    font-size:0.9em;
    font-weight:500;
    text-align:left;
`
const Hr = styled.hr`
    width:80%;
    margin-left:10%:
    background-color: #D3D3D3;
    color: #D3D3D3;
`
const LandingPageHeader = styled.h2`
    font-size:2.5em;
    color:white;
    font-weight:600;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const LandingImgTextContainer = styled.div`
    position: relative;
    text-align: center;
`
function RecipesPage() {
    return (
    <Container>
        <LandingImgTextContainer>
            <LandingImg src={BreakfastImg} />
            <LandingPageHeader>Recipes</LandingPageHeader>
       </LandingImgTextContainer>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
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
                    <CardDescUl>
                       <CardDescLi> Lorem30 dafdssdfsd sdfsdsd </CardDescLi>
                       <CardDescLi>fsdf sdf sdf sdf sdf sdf sd</CardDescLi>
                       <CardDescLi>sdfsdfdsf  sdf s</CardDescLi>
                    </CardDescUl>
                </DescriptionContainer>
           </RecipesCol>
       </RecepiesRow>
    </Container>
    );
  }
  
  export default RecipesPage;