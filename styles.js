import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

    body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    }

    :root {
      --color-black: #000;
      --color-white: #fff;
      --color-primary-red: #B75C5C;
      --color-primary-beidge-buttonhover: #F4D9D9;
      --color-secondary-grey-backgroundsection: #D9D9D9;
      --color-secondary-grey-text: #808082;
      --color-secondary-green-available: #05FF00;
      --color-secondary-red-unavailable: #FF0000;
      --font-size-smallest-text-mobile: 0.75rem;
      --font-size-smaller-text-mobile: 0.9rem;
      --font-size-common-text-mobile: 1rem;
      --font-size-greater-text-mobile: 1.063rem;
      --font-size-small-headline-mobile: 1.125rem;
      --font-size-subheadline-mobile: 1.25rem;
      --font-size-sectionheadline-mobile: 1.75rem;
      --font-size-headline-mobile: 2rem;
      --font-size-smallest-text-desktop: 1rem;
      --font-size-smaller-text-desktop: 1.125rem;
      --font-size-common-text-desktop: 1.275rem;
      --font-size-greater-text-desktop: 1.325rem;
      --font-size-small-headline-desktop: 1.575rem;
      --font-size-subheadline-desktop: 1.9rem;
      --font-size-sectionheadline-desktop: 3.2rem;
      --font-size-headline-desktop: 3.6rem;
      --font-weight-extralight: 200;
      --font-weight-light: 300;
      --font-weight-regular: 400;   
      --font-weight-medium: 500;   
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
      --text-shadow-buttons: 0px 4px 14.4px -4px #B75C5C;
      --text-shadow-divs: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);

    }

    button, 
    input {
    font-family: inherit;
}

`;
