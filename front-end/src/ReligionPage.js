import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100%;
`
const MainHeader = styled.h1`
    font-size:1.3em;
    text-align:center;
`
function ReligionPage() {
    return (
    <Container>
       <MainHeader> Religion Page Works </MainHeader>
    </Container>
    );
  }
  
  export default ReligionPage;