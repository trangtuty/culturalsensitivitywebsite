import styled from 'styled-components';
import ReligionLandingPage from './assets/religionLandingPage.jpg';
import Christianity from './assets/christianity.jpg';
import Select from 'react-select'


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
const Hr = styled.hr`
    width:100%;
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
const ReligionContainer = styled.div`
    width:80%;
    margin-left:10%;
`
const ReligionMainHeader = styled.h1`
    font-size:1.6em;
    text-align:center;
`
const ReligionDescHeader =styled.h1`
    font-size:1.2em;
    font-weight:500;
    text-align:center;
`
const SpecificReligionImg = styled.img`
    width:100%;
    border-radius:15px 15px 0px 0px;
`
function ReligionPage() {
    return (
    <Container>
       
        <LandingImgTextContainer>
            <LandingImg src={ReligionLandingPage} />
            <LandingPageHeader>Religions</LandingPageHeader>
        </LandingImgTextContainer>

        <ReligionContainer>
            <ReligionMainHeader>Christianity</ReligionMainHeader>
            <SpecificReligionImg  src={Christianity}/>
            <ReligionMainHeader>Description</ReligionMainHeader>
           <ReligionDescHeader>
                ashdsfsjsdhfsdkjfhdsjkf dsjhfdskjfhsdkjfhsdkjfh dskjfh dskjfdsh 'sdkjhf
                shdfhdskjfsh sjdlhfd sdjfhsd jsdkhf dskjhf'
            </ReligionDescHeader>
            <Hr/>
            <ReligionMainHeader>Traditions</ReligionMainHeader>
            <ReligionDescHeader>
                ashdsfsjsdhfsdkjfhdsjkf dsjhfdskjfhsdkjfhsdkjfh dskjfh dskjfdsh 'sdkjhf
                shdfhdskjfsh sjdlhfd sdjfhsd jsdkhf dskjhf'
            </ReligionDescHeader>
            <Hr/>
            <ReligionMainHeader>Specifics</ReligionMainHeader>
            <ReligionDescHeader>
                ashdsfsjsdhfsdkjfhdsjkf dsjhfdskjfhsdkjfhsdkjfh dskjfh dskjfdsh 'sdkjhf
                shdfhdskjfsh sjdlhfd sdjfhsd jsdkhf dskjhf'
            </ReligionDescHeader>
        </ReligionContainer>
    </Container>
    );
  }
  
  export default ReligionPage;