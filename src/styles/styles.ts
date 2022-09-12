import styled from 'styled-components';

// Função para converter pixels para rem
function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem`), "")
    .trim();
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${pixelToRem(24, 112, 50)};
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
`;

export const Logo = styled.image`
  width: ${pixelToRem(201)};
  height: ${pixelToRem(41)};
  padding: ${pixelToRem(24)};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstTitle = styled.p`
  color: var(--sun);
  font-size: var(--text-3);
  text-transform: uppercase;
`;

export const SecondTitle = styled.p`
  color: var(--text);
  font: var(--fon--display);

  &&:span {
    color: var(--mars);
  }
`;

export const SubTitle = styled.p`
  color: var(--gray-05);
  font: var(--font-heading-3);
`;


