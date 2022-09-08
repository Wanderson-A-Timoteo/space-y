import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Header, Logo, Main, FirstTitle, SecondTitle } from './styles/styles';
import Button from './components/Button/index';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header>
        <Logo>
          <img src="/images/logo-space-y-svg" alt="Logo SpaceY" />
        </Logo>
      </Header>      

      <Main>
        <p>Finalmente é possível!</p>

        <FirstTitle>
          Sua jornada para Marte começa aqui<span>.</span>
        </FirstTitle>

        <SecondTitle>
          A primeira viagem para Marte estará disponível apartir de 13/03/2028. 
          Inscreava-se em nossa lista de espera.
        </SecondTitle>
        
      </Main>

          
      <Button text='Inscreva-se agora'/>     
    </>
  );
}

export default App;

v2 1h21m50s