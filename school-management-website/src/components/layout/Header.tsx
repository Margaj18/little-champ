'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[200]};
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[4]} 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary[900]};
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary[500]}, ${({ theme }) => theme.colors.accent[500]});
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const LogoText = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary[900]};
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.secondary[600]};
    margin: 0;
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.secondary[200]};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing[6]};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    width: 100%;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary[700]};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  padding: ${({ theme }) => theme.spacing[2]} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[600]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => theme.spacing[3]} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary[100]};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.secondary[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: currentColor;
    transition: all 0.3s ease;
    position: absolute;
    left: 0;

    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? '50%' : '20%')};
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(45deg)' : 'none')};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      top: ${({ isOpen }) => (isOpen ? '50%' : '80%')};
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(-45deg)' : 'none')};
    }
  }
`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/who-we-are', label: 'Who We Are' },
    { href: '/curriculum', label: 'Curriculum' },
    { href: '/parents-corner', label: 'Parents Corner' },
    { href: '/public-holidays', label: 'Public Holidays' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo>
            <LogoIcon>LC</LogoIcon>
            <LogoText>
              <h1>Little Champ</h1>
              <p>Nurturing Young Minds</p>
            </LogoText>
          </Logo>

          <Navigation isOpen={isMenuOpen}>
            <NavLinks>
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
          </Navigation>

          <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
            <MenuIcon isOpen={isMenuOpen}>
              <span />
              <span />
              <span />
            </MenuIcon>
          </MobileMenuButton>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}