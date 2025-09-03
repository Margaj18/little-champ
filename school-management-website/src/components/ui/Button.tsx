import styled from 'styled-components';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  outline: none;

  /* Size variants */
  ${({ size = 'md', theme }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: ${theme.fontSizes.sm};
        `;
      case 'lg':
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[6]};
          font-size: ${theme.fontSizes.lg};
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          font-size: ${theme.fontSizes.base};
        `;
    }
  }}

  /* Width */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  /* Variant styles */
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary[600]};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.secondary[700]};
          }
          
          &:active {
            background-color: ${theme.colors.secondary[800]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[600]};
          
          &:hover {
            background-color: ${theme.colors.primary[50]};
            border-color: ${theme.colors.primary[700]};
          }
          
          &:active {
            background-color: ${theme.colors.primary[100]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.secondary[600]};
          
          &:hover {
            background-color: ${theme.colors.secondary[100]};
            color: ${theme.colors.secondary[700]};
          }
          
          &:active {
            background-color: ${theme.colors.secondary[200]};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary[600]};
          color: ${theme.colors.white};
          
          &:hover {
            background-color: ${theme.colors.primary[700]};
          }
          
          &:active {
            background-color: ${theme.colors.primary[800]};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background-color: inherit;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export function Button({ children, href, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <StyledButton {...props}>{children}</StyledButton>
      </Link>
    );
  }
  
  return <StyledButton {...props}>{children}</StyledButton>;
}