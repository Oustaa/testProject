import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #402554;
    --primary-color-100: #faf6fa;
    --secondary-color: #ff7f00;
    --dark-text: #2d2c2d;
    --gray: #5f5f60;
    --white:#fff;

    --rounded-radius-sl: 0.25rem; 
    --rounded-radius-lg: 0.5rem; 

    --spacing-sl: 0.25rem;
    --spacing-lg: 0.5rem;
    --spacing-xl: 1rem;
    --spacing-xxl: 3rem;
  }

 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color:var(--dark-color);
 }

  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button{
    outline-color: transparent;
    border:none;
    padding: 0.5rem 1rem;
    border-radius: var(--rounded-radius-sl);
    cursor: pointer;
  }
`;

export default GlobalStyle;
