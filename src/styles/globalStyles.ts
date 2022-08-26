import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body{
  font-family: "Heebo", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: var(--background);
 }

:root {
  /* Colors */
  --space: #0B1E8A;
  --space-ligth: #3D68B2;
  --space-dark: #040327;
  --gray-01: #0D0E13;
  --gray-02: #2C2D3A;
  --gray-03: #60616F;
  --gray-04: #898A93;
  --gray-05: #D5D5DB;
  --mars: #E85937;
  --mars-light: #FF8C70;
  --mars-dark: #CF3F1D;
  --sun: #F5D15F;
  --uranus: #24FFE9;
  --jupiter: #E00E34;
  --earth: #0FDD86;
  --saturn: #554AD7;
  --text: #FFF;
  --background: #04032C;
  --background-section: linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
  --background-form: #0E0D40;
 }

`