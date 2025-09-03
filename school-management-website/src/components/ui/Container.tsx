import styled from 'styled-components';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'sm' | 'md' | 'lg';
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;

  /* Max width variants */
  ${({ maxWidth = 'xl', theme }) => {
    switch (maxWidth) {
      case 'sm':
        return `max-width: ${theme.breakpoints.sm};`;
      case 'md':
        return `max-width: ${theme.breakpoints.md};`;
      case 'lg':
        return `max-width: ${theme.breakpoints.lg};`;
      case 'xl':
        return `max-width: ${theme.breakpoints.xl};`;
      case '2xl':
        return `max-width: ${theme.breakpoints['2xl']};`;
      case 'full':
        return `max-width: 100%;`;
      default:
        return `max-width: ${theme.breakpoints.xl};`;
    }
  }}

  /* Padding variants */
  ${({ padding = 'md', theme }) => {
    switch (padding) {
      case 'sm':
        return `
          padding-left: ${theme.spacing[4]};
          padding-right: ${theme.spacing[4]};
        `;
      case 'lg':
        return `
          padding-left: ${theme.spacing[8]};
          padding-right: ${theme.spacing[8]};
        `;
      default:
        return `
          padding-left: ${theme.spacing[6]};
          padding-right: ${theme.spacing[6]};
        `;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: ${({ theme }) => theme.spacing[4]};
    padding-right: ${({ theme }) => theme.spacing[4]};
  }
`;

export function Container({ children, ...props }: ContainerProps) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}