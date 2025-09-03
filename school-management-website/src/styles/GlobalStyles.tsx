import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.secondary[800]};
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.secondary[900]};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary[600]};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary[700]};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.2s ease;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    padding-left: ${({ theme }) => theme.spacing[6]};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary[500]};
    padding-left: ${({ theme }) => theme.spacing[4]};
    margin: ${({ theme }) => theme.spacing[6]} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary[600]};
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    background-color: ${({ theme }) => theme.colors.secondary[100]};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  pre {
    background-color: ${({ theme }) => theme.colors.secondary[100]};
    padding: ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    overflow-x: auto;
    margin: ${({ theme }) => theme.spacing[4]} 0;

    code {
      background: none;
      padding: 0;
    }
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 0 ${({ theme }) => theme.spacing[6]};
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;