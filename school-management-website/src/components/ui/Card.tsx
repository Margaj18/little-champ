import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.secondary[200]};
  transition: all 0.2s ease;

  /* Padding variants */
  ${({ padding = 'md', theme }) => {
    switch (padding) {
      case 'sm':
        return `padding: ${theme.spacing[4]};`;
      case 'lg':
        return `padding: ${theme.spacing[8]};`;
      default:
        return `padding: ${theme.spacing[6]};`;
    }
  }}

  /* Shadow variants */
  ${({ shadow = 'sm', theme }) => {
    switch (shadow) {
      case 'md':
        return `box-shadow: ${theme.shadows.md};`;
      case 'lg':
        return `box-shadow: ${theme.shadows.lg};`;
      default:
        return `box-shadow: ${theme.shadows.sm};`;
    }
  }}

  /* Hover effect */
  ${({ hover, theme }) =>
    hover &&
    `
    &:hover {
      box-shadow: ${theme.shadows.lg};
      transform: translateY(-2px);
    }
  `}
`;

export function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}