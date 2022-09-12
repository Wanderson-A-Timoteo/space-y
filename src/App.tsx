import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Header, Logo, Main, FirstTitle, SecondTitle, SubTitle, Container } from './styles/styles';
import Button from './components/Button/index';

function App() {
  return (
    
    <Container>
      <>
        <GlobalStyles />
        
        <Header>
          <Logo>
            <img src="/images/logo-space-y.svg" alt="Logo SpaceY" />
          </Logo>
        </Header>      

        <Main>
          <FirstTitle>Finalmente é possível!</FirstTitle>

          <SecondTitle>
            Sua jornada para Marte começa aqui<span>.</span>
          </SecondTitle>

          <SubTitle>
            A primeira viagem para Marte estará disponível apartir de 13/03/2028. 
            Inscreava-se em nossa lista de espera.
          </SubTitle>
          
        </Main>

            
        <Button text='Inscreva-se agora'/>   
      </>
    </Container>  
  );
}

export default App;
