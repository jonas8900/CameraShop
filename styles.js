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
    font-family: "Poppins", sans-serif;

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
      --font-size-sectionheadline-mobile: 2rem;
      --font-size-headline-mobile: 3.875rem;
      --font-size-smallest-text-desktop: 1rem;
      --font-size-smaller-text-desktop: 1.125rem;
      --font-size-common-text-desktop: 1.375rem;
      --font-size-greater-text-desktop: 1.625rem;
      --font-size-small-headline-desktop: 1.875rem;
      --font-size-subheadline-desktop: 2.2rem;
      --font-size-sectionheadline-desktop: 3.5rem;
      --font-size-headline-desktop: 3.875rem;
      --font-weight-light: 300;
      --font-weight-regular: 400;   
      --font-weight-medium: 500;   
      --font-weight-semibold: 600;
      --font-weight-bold: 700;
    }
`;
