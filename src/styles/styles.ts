import styled from 'styled-components';

// Função para converter pixels para rem
function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem`), "")
    .trim();
}

export const Header = styled.div`
  display: flex;
  width: 100%;
  background: var(--space);
  
`;

export const Logo = styled.image`
  width: pixelToRem(201);
  height: pixelToRem(41);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstTitle = styled.p`
  color: var(--sun);
  font-size: var(--text-3);
`;

export const SecondTitle = styled.image`
  
`;